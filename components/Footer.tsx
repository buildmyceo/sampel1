import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Send, Check } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-white dark:bg-navy-950 text-navy-900 dark:text-gray-300 border-t border-gray-100 dark:border-navy-800">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-6">
             <a href="#" className="text-2xl font-serif font-bold tracking-tight flex items-center gap-2 text-navy-900 dark:text-white">
                <span className="w-8 h-8 bg-gold-500 rounded-sm flex items-center justify-center text-white font-sans text-sm font-bold">L</span>
                LuxeEstate
            </a>
            <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
              The premier destination for luxury real estate. We connect exceptional people with exceptional properties across the globe.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-navy-800 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-all">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-navy-800 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-navy-800 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-all">
                <Twitter size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-navy-800 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold font-serif mb-6 text-navy-900 dark:text-white">Discover</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#properties" className="hover:text-gold-500 transition-colors">New Listings</a></li>
              <li><a href="#properties" className="hover:text-gold-500 transition-colors">Featured Estates</a></li>
              <li><a href="#properties" className="hover:text-gold-500 transition-colors">Past Sold</a></li>
              <li><a href="#agents" className="hover:text-gold-500 transition-colors">Our Agents</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold font-serif mb-6 text-navy-900 dark:text-white">Contact Us</h4>
             <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                 <span className="text-gold-500 font-bold">A.</span>
                 <span>123 Luxury Lane, Beverly Hills, CA 90210</span>
              </li>
              <li className="flex gap-3">
                 <span className="text-gold-500 font-bold">T.</span>
                 <span>+1 (888) 555-0123</span>
              </li>
              <li className="flex gap-3">
                 <span className="text-gold-500 font-bold">E.</span>
                 <a href="mailto:concierge@luxeestate.com" className="hover:text-gold-500">concierge@luxeestate.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold font-serif mb-6 text-navy-900 dark:text-white">Newsletter</h4>
            <p className="text-sm mb-4 text-gray-500 dark:text-gray-400">Subscribe for exclusive market insights and new listings.</p>
            <form onSubmit={handleSubscribe} className="relative">
                <input 
                    type="email" 
                    placeholder="Your email address" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-gray-100 dark:bg-navy-800 border-none rounded-sm py-3 px-4 text-sm focus:ring-2 focus:ring-gold-500 outline-none"
                />
                <button type="submit" className={`absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-sm transition-colors ${subscribed ? 'bg-green-500 hover:bg-green-600' : 'bg-gold-500 hover:bg-gold-600'} text-white`}>
                    {subscribed ? <Check size={16} /> : <Send size={16} />}
                </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-100 dark:border-navy-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>&copy; 2024 LuxeEstate. All rights reserved.</p>
            <div className="flex flex-col md:flex-row items-center gap-6 mt-4 md:mt-0">
                <div className="flex gap-6">
                    <a href="#" className="hover:text-gold-500">Privacy Policy</a>
                    <a href="#" className="hover:text-gold-500">Terms of Service</a>
                    <a href="#" className="hover:text-gold-500">Sitemap</a>
                </div>
                <div className="text-gray-400 font-medium">
                    Sample by <a href="https://buildmyceo.com" target="_blank" rel="noopener noreferrer" className="text-gold-500 hover:underline">buildmyceo.com</a>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;