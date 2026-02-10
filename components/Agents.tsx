import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { AGENTS } from '../constants';

const Agents: React.FC = () => {
  return (
    <section id="agents" className="py-24 bg-white dark:bg-navy-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-8 h-px bg-gold-500"></div>
            <span className="text-gold-500 font-bold uppercase tracking-widest text-xs">Our Team</span>
            <div className="w-8 h-px bg-gold-500"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 dark:text-white mb-4">
            Meet Our Experts
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Our agents are more than just salespeople; they are trusted advisors with deep knowledge of the luxury market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AGENTS.map((agent) => (
            <div key={agent.id} className="group bg-gray-50 dark:bg-navy-800 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-80 overflow-hidden relative">
                <img 
                  src={agent.imageUrl} 
                  alt={agent.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/20 transition-colors"></div>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-xl font-bold text-navy-900 dark:text-white font-serif mb-1">{agent.name}</h3>
                <p className="text-gold-500 text-sm font-medium mb-6 uppercase tracking-wider">{agent.role}</p>
                <div className="flex justify-center gap-4">
                  <a href={`tel:${agent.phone}`} className="p-3 bg-white dark:bg-navy-900 rounded-full text-navy-900 dark:text-white hover:bg-gold-500 hover:text-white transition-colors shadow-sm">
                    <Phone size={18} />
                  </a>
                  <a href={`mailto:${agent.email}`} className="p-3 bg-white dark:bg-navy-900 rounded-full text-navy-900 dark:text-white hover:bg-gold-500 hover:text-white transition-colors shadow-sm">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agents;