import { motion } from 'motion/react';
import { BookOpen, Download, ExternalLink } from 'lucide-react';
import { RESOURCES } from '../constants';

export const Resources = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Startup Resources</h1>
          <p className="text-white/60">Guides and tools to help you build and scale.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {RESOURCES.map((resource, index) => (
            <motion.div 
              key={resource.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 flex items-start gap-6 group"
            >
              <div className="w-14 h-14 bg-brand-accent/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-brand-accent/20 transition-colors">
                <BookOpen className="w-7 h-7 text-brand-accent" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold">{resource.title}</h3>
                  <span className="px-2 py-0.5 text-[10px] uppercase tracking-wider font-bold bg-white/5 text-white/40 rounded">
                    {resource.category}
                  </span>
                </div>
                <p className="text-white/60 mb-6 leading-relaxed">{resource.description}</p>
                <div className="flex items-center gap-4">
                  <a href={resource.link} className="btn-primary py-2 px-4 text-sm flex items-center gap-2">
                    Read Guide <ExternalLink className="w-4 h-4" />
                  </a>
                  <button className="text-white/40 hover:text-white transition-colors">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 glass-card p-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Need personalized guidance?</h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Join our community to get access to exclusive templates, pitch deck reviews, and 1-on-1 mentorship.
          </p>
          <button className="btn-secondary">Join the Community</button>
        </div>
      </div>
    </div>
  );
};
