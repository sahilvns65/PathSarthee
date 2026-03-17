import { Link } from 'react-router-dom';
import { Rocket, Instagram, Github, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-brand-bg border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold font-display tracking-tight">PathSarthee</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Helping the next generation of builders turn ideas into real startups through validation, guidance, and execution support.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-6">Platform</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link to="/startups" className="hover:text-white transition-colors">Startups</Link></li>
              <li><Link to="/stories" className="hover:text-white transition-colors">Execution Stories</Link></li>
              <li><Link to="/resources" className="hover:text-white transition-colors">Resources</Link></li>
              <li><Link to="/submit" className="hover:text-white transition-colors">Submit Idea</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-6">Community</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">WhatsApp Community</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
          <p>© {new Date().getFullYear()} PathSarthee. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Built with passion for the next generation of founders.</p>
        </div>
      </div>
    </footer>
  );
};
