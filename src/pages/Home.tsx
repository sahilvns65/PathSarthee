import { motion } from 'motion/react';
import { ArrowRight, Lightbulb, Search, Code, Rocket as RocketIcon, TrendingUp, DollarSign, Instagram, MessageCircle, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EXECUTION_STEPS, STARTUPS, TESTIMONIALS } from '../constants';
import * as Icons from 'lucide-react';

const IconComponent = ({ name, className }: { name: string; className?: string }) => {
  const LucideIcon = (Icons as any)[name];
  if (!LucideIcon) return null;
  return <LucideIcon className={className} />;
};

export const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-accent/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-accent-light/20 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-white/5 border border-white/10 rounded-full text-brand-accent">
              The Execution Lab for Young Founders
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
              Turn Your Ideas Into <br />
              <span className="gradient-text">Real Startups</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
              PathSarthee helps students validate ideas, build MVPs, and launch real startups. Stop dreaming, start executing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/submit" className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2">
                Submit Your Idea <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/startups" className="btn-secondary w-full sm:w-auto">
                Explore Startups
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Execution System */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How PathSarthee Executes Ideas</h2>
            <p className="text-white/60">A systematic approach to building sustainable businesses.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {EXECUTION_STEPS.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-accent/20 transition-colors">
                  <IconComponent name={step.icon} className="w-6 h-6 text-brand-accent" />
                </div>
                <h3 className="font-bold mb-2">{step.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Execution Lab (Services) */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Execution Over Ideas</h2>
              <p className="text-lg text-white/60 mb-8 leading-relaxed">
                At PathSarthee, we believe ideas are only valuable when they are executed. We help builders turn ideas into real startups step by step.
              </p>
              <div className="space-y-4">
                {[
                  'Startup Idea Validation',
                  'MVP / Website Development',
                  'Branding and Design',
                  'Marketing and Ads',
                  'Startup Growth Strategy'
                ].map((service) => (
                  <div key={service} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-accent/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-brand-accent" />
                    </div>
                    <span className="font-medium text-white/80">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-8">
                <div className="glass-card p-8 h-48 flex flex-col justify-end">
                  <h4 className="font-bold text-xl">10+</h4>
                  <p className="text-sm text-white/50">Startups Built</p>
                </div>
                <div className="glass-card p-8 h-64 bg-brand-accent/20 border-brand-accent/30">
                  <Users className="w-8 h-8 text-brand-accent mb-4" />
                  <h4 className="font-bold text-xl">500+</h4>
                  <p className="text-sm text-white/50">Builders in Community</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="glass-card p-8 h-64">
                  <RocketIcon className="w-8 h-8 text-brand-accent-light mb-4" />
                  <h4 className="font-bold text-xl">Launch</h4>
                  <p className="text-sm text-white/50">Ready in 30 days</p>
                </div>
                <div className="glass-card p-8 h-48 flex flex-col justify-end">
                  <h4 className="font-bold text-xl">24/7</h4>
                  <p className="text-sm text-white/50">Execution Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Startups Built */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Startups Built With PathSarthee</h2>
              <p className="text-white/60">Real businesses built by student founders.</p>
            </div>
            <Link to="/startups" className="text-brand-accent font-semibold flex items-center gap-2 hover:underline">
              View All Startups <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STARTUPS.map((startup) => (
              <div key={startup.id} className="glass-card overflow-hidden group">
                <div className="h-48 bg-linear-to-br from-white/5 to-white/10 flex items-center justify-center">
                  <div className="w-16 h-16 bg-brand-bg rounded-2xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500">
                    <RocketIcon className="w-8 h-8 text-brand-accent" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{startup.name}</h3>
                    <span className="px-2 py-1 text-[10px] uppercase tracking-wider font-bold bg-brand-accent/10 text-brand-accent rounded">
                      {startup.category}
                    </span>
                  </div>
                  <p className="text-sm text-white/60 mb-6 line-clamp-2">{startup.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/40">Founder: {startup.founder}</span>
                    <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Builders Say</h2>
            <p className="text-white/60">Success stories from the RadicalEra community.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="glass-card p-8 relative">
                <div className="absolute top-8 right-8 text-4xl text-white/5 font-serif">"</div>
                <p className="text-white/80 mb-8 italic leading-relaxed">
                  “{testimonial.content}”
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src={`https://picsum.photos/seed/indian-founder-${testimonial.id}/100/100`} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border border-white/10"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-xs text-white/40">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Integration */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full mb-6">
            <Instagram className="w-4 h-4 text-pink-500" />
            <span className="text-sm font-medium">@pathsarthee</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Follow the PathSarthee Journey</h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-12">
            Watch real startup ideas being executed on our Instagram community. We build in public and share every step of the process.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square glass-card overflow-hidden group cursor-pointer">
                <img 
                  src={`https://picsum.photos/seed/indian-startup-${i}/600/600`} 
                  alt="Instagram post" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>

          <a href="#" className="btn-secondary inline-flex items-center gap-2">
            Follow PathSarthee on Instagram <Instagram className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 blur-[80px] -z-10" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Executors Assemble</h2>
                <p className="text-lg text-white/60 mb-8">
                  Join a community of builders who are turning ideas into real startups. Get access to mentors, resources, and a network of like-minded founders.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#" className="btn-primary flex items-center justify-center gap-2">
                    <MessageCircle className="w-5 h-5" /> Join WhatsApp Community
                  </a>
                  <a href="#" className="btn-secondary flex items-center justify-center gap-2">
                    <Users className="w-5 h-5" /> Join Discord Community
                  </a>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="grid grid-cols-3 gap-4">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-full aspect-square rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
                      <img 
                        src={`https://picsum.photos/seed/indian-person-${i}/200/200`} 
                        alt="Community member" 
                        className="w-full h-full object-cover opacity-40 hover:opacity-100 transition-opacity"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-linear-to-br from-brand-accent to-brand-accent-light p-16 rounded-[2rem] shadow-2xl shadow-brand-accent/20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Have a startup idea?</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Submit your idea and start building your startup with PathSarthee. We provide the tools and guidance you need to succeed.
            </p>
            <Link to="/submit" className="px-10 py-4 bg-white text-brand-bg font-bold rounded-2xl hover:bg-white/90 transition-colors inline-block text-lg">
              Submit Your Idea
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
