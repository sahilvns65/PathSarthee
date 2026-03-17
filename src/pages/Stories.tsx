import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { STORIES } from '../constants';

export const Stories = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Execution Stories</h1>
          <p className="text-white/60">Real journeys of building startups in public.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {STORIES.map((story, index) => (
            <motion.div 
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card overflow-hidden flex flex-col"
            >
              <div className="h-56 bg-white/5 overflow-hidden">
                <img 
                  src={`https://picsum.photos/seed/${story.id}/800/600`} 
                  alt={story.title}
                  className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-xs text-white/40 mb-4">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {story.date}</span>
                  <span className="flex items-center gap-1"><User className="w-3 h-3" /> {story.author}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 leading-tight">{story.title}</h3>
                <p className="text-sm text-white/60 mb-6 line-clamp-3">{story.excerpt}</p>
                <div className="mt-auto">
                  <button className="flex items-center gap-2 text-brand-accent font-semibold hover:underline">
                    Read Full Story <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
