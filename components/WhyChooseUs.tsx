import React from 'react';
import { ShieldCheck, Award, Clock, Users } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck size={40} />,
    title: 'Verified Listings',
    description: 'Every property is hand-picked and vetted by our expert team to ensure premium quality.',
  },
  {
    icon: <Award size={40} />,
    title: 'Award Winning',
    description: 'Recognized globally for excellence in luxury real estate and customer service.',
  },
  {
    icon: <Clock size={40} />,
    title: '24/7 Concierge',
    description: 'Our dedicated support team is available around the clock to assist with your needs.',
  },
  {
    icon: <Users size={40} />,
    title: 'Expert Agents',
    description: 'Work with the top 1% of agents who specialize in high-value property transactions.',
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-navy-900 relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 dark:bg-navy-800/50 -z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          
          {/* Header */}
          <div className="md:w-1/3 sticky top-32">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-px bg-gold-500"></div>
              <span className="text-gold-500 font-bold uppercase tracking-widest text-sm">Why LuxeEstate</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 dark:text-white mb-6 leading-tight">
              Redefining <br/> Luxury Real Estate.
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
              We understand that buying a home is more than a transaction; it's a life-changing experience. Our commitment to excellence ensures your journey is nothing short of extraordinary.
            </p>
            <button className="px-8 py-3 bg-navy-900 dark:bg-white text-white dark:text-navy-900 font-medium rounded-sm hover:bg-gold-500 dark:hover:bg-gold-400 transition-colors">
              Read Our Story
            </button>
          </div>

          {/* Grid */}
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="p-8 bg-white dark:bg-navy-800 border border-gray-100 dark:border-navy-700 rounded-xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="mb-6 text-navy-900 dark:text-white group-hover:text-gold-500 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3 font-serif">
                  {feature.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;