import { motion } from 'motion/react';
import { Target, Users, Shield, Zap, ChevronDown } from 'lucide-react';
import React from 'react';

export const About = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const faqs = [
    {
      q: "What happens after I submit my idea?",
      a: "Our team reviews your submission within 48 hours. If selected, we'll reach out to schedule a validation call and begin the execution process."
    },
    {
      q: "Is RadicalEra free to use?",
      a: "We offer free community access and resources. For intensive 1-on-1 execution support and MVP development, we have specialized programs."
    },
    {
      q: "Can beginners submit ideas?",
      a: "Absolutely! RadicalEra is built for students and first-time founders. We provide the guidance you need regardless of your experience level."
    },
    {
      q: "Do I need a team to start?",
      a: "No, you can start as a solo founder. We often help solo builders find co-founders within our community."
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Mission */}
        <section className="mb-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-8">Our Mission</h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              Helping the next generation of builders turn ideas into real startups. We bridge the gap between "having an idea" and "running a business."
            </p>
          </motion.div>
        </section>

        {/* Values */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, title: 'Execution First', desc: 'We value action over theory. We build, test, and iterate fast.' },
              { icon: Users, title: 'Community Driven', desc: 'Building a startup is hard. We do it together as a collective.' },
              { icon: Shield, title: 'Real Validation', desc: 'No fluff. We use data and real user feedback to validate ideas.' },
              { icon: Zap, title: 'Rapid Growth', desc: 'We help you scale from zero to one in record time.' }
            ].map((value, i) => (
              <div key={i} className="glass-card p-8">
                <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-brand-accent" />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-card overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-bold">{faq.q}</span>
                  <ChevronDown className={cn("w-5 h-5 transition-transform", openFaq === i && "rotate-180")} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-white/60 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

// Helper for About page
import { cn } from '../lib/utils';
