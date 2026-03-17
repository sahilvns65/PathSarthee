import { motion } from 'motion/react';
import { Rocket, Search, Filter } from 'lucide-react';
import { STARTUPS } from '../constants';

export const Startups = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Startup Directory</h1>
          <p className="text-white/60">Discover the next generation of student-led startups.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
            <input 
              type="text" 
              placeholder="Search startups..."
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 focus:outline-hidden focus:border-brand-accent transition-colors"
            />
          </div>
          <button className="btn-secondary flex items-center gap-2">
            <Filter className="w-5 h-5" /> Filter
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {STARTUPS.map((startup, index) => (
            <motion.div 
              key={startup.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card overflow-hidden group"
            >
              <div className="h-48 bg-linear-to-br from-white/5 to-white/10 flex items-center justify-center">
                <div className="w-16 h-16 bg-brand-bg rounded-2xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500">
                  <Rocket className="w-8 h-8 text-brand-accent" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{startup.name}</h3>
                    <p className="text-sm text-white/40">by {startup.founder}</p>
                  </div>
                  <span className="px-2 py-1 text-[10px] uppercase tracking-wider font-bold bg-brand-accent/10 text-brand-accent rounded">
                    {startup.category}
                  </span>
                </div>
                <p className="text-sm text-white/60 mb-6 leading-relaxed">{startup.description}</p>
                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <button className="text-sm font-semibold text-brand-accent hover:underline">View Journey</button>
                  <button className="btn-secondary py-1.5 px-4 text-xs">Visit Website</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
