import React from 'react';
import { CATEGORIES } from '../constants';
import { ArrowUpRight } from 'lucide-react';

interface CategoriesProps {
  onSelectCategory: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({ onSelectCategory }) => {
  const handleCategoryClick = (categoryName: string) => {
    onSelectCategory(categoryName);
    const element = document.getElementById('properties');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-navy-900/50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
            <div>
                 <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 dark:text-white mb-2">
                    Explore by Category
                </h2>
                <p className="text-gray-500 dark:text-gray-400">Find the perfect property type for your lifestyle.</p>
            </div>
            <button onClick={() => handleCategoryClick('')} className="hidden md:flex items-center gap-2 text-gold-500 font-medium hover:text-gold-600 transition-colors">
                View All Categories <ArrowUpRight size={18} />
            </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, idx) => (
            <div 
              key={idx} 
              onClick={() => handleCategoryClick(cat.name)}
              className="group relative h-80 rounded-lg overflow-hidden cursor-pointer"
            >
              <img
                src={cat.image}
                alt={cat.display}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-2xl font-serif font-bold text-white mb-1 group-hover:text-gold-400 transition-colors">
                    {cat.display}
                </h3>
                <p className="text-gray-300 text-sm flex items-center justify-between">
                    <span>{cat.count} Listings</span>
                    <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-gold-500 group-hover:text-white transition-all">
                        <ArrowUpRight size={14} />
                    </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;