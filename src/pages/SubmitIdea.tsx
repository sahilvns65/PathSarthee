import React from 'react';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export const SubmitIdea = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-32 pb-24 flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card p-12 text-center max-w-lg w-full"
        >
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Send className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Idea Submitted!</h2>
          <p className="text-white/60 mb-8">
            Thank you for sharing your vision with PathSarthee. Our team will review your idea and get back to you within 48 hours.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="btn-primary w-full"
          >
            Submit Another Idea
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Submit Your Startup Idea</h1>
          <p className="text-white/60">Tell us what you're building. We'll help you execute it.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 md:p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Full Name</label>
                <input 
                  required
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-hidden focus:border-brand-accent transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">College / University</label>
                <input 
                  required
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-hidden focus:border-brand-accent transition-colors"
                  placeholder="Stanford University"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80">Email Address</label>
              <input 
                required
                type="email" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-hidden focus:border-brand-accent transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80">Startup Idea Name</label>
              <input 
                required
                type="text" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-hidden focus:border-brand-accent transition-colors"
                placeholder="e.g. CampusKart"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80">Problem you want to solve</label>
              <textarea 
                required
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-hidden focus:border-brand-accent transition-colors resize-none"
                placeholder="Describe the pain point you've identified..."
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80">Target users</label>
              <input 
                required
                type="text" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-hidden focus:border-brand-accent transition-colors"
                placeholder="Who are you building this for?"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80">Current Stage</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-hidden focus:border-brand-accent transition-colors appearance-none">
                <option value="idea" className="bg-brand-bg">Just an Idea</option>
                <option value="mvp" className="bg-brand-bg">MVP Built</option>
                <option value="launched" className="bg-brand-bg">Launched / Live</option>
              </select>
            </div>

            <button type="submit" className="btn-primary w-full py-4 text-lg mt-4">
              Submit Idea for Review
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};
