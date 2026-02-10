import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-navy-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Trusted by Visionaries</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Hear from our esteemed clients about their experience finding their perfect property with LuxeEstate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div key={item.id} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors">
              <div className="text-gold-500 mb-6">
                <Quote size={32} />
              </div>
              <p className="text-gray-200 mb-8 italic leading-relaxed text-lg">"{item.content}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={item.avatarUrl}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gold-500/50"
                />
                <div>
                  <h4 className="font-bold font-serif">{item.name}</h4>
                  <p className="text-sm text-gold-500/80">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Logos strip (mock) */}
        <div className="mt-20 pt-10 border-t border-white/10 flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Simple text placeholders for Luxury Brands */}
             <span className="text-xl font-serif font-bold">FORBES</span>
             <span className="text-xl font-serif font-bold">VOGUE</span>
             <span className="text-xl font-serif font-bold">ARCHITECTURAL DIGEST</span>
             <span className="text-xl font-serif font-bold">WALL STREET JOURNAL</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;