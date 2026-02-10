import React, { useState } from 'react';
import { MapPin, Home, DollarSign, ArrowRight } from 'lucide-react';
import { FilterState } from '../types';

interface HeroProps {
  onSearch: (filters: FilterState) => void;
}

const Hero: React.FC<HeroProps> = ({ onSearch }) => {
  const [filters, setFilters] = useState<FilterState>({
    location: '',
    type: '',
    priceRange: ''
  });

  const handleSearch = () => {
    onSearch(filters);
    const element = document.getElementById('properties');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Luxury Home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/60 via-navy-900/30 to-navy-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in-up">
          <span className="inline-block py-1 px-3 border border-white/30 rounded-full bg-white/10 backdrop-blur-sm text-white text-xs font-medium tracking-widest uppercase mb-4">
            Exclusive Living
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Discover Your <span className="text-gold-400 italic">Legacy</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 font-light mb-8 max-w-2xl mx-auto leading-relaxed">
            Curated real estate for the visionary investor. Find a home that reflects your ambition and success.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-4xl mx-auto bg-white/10 dark:bg-navy-900/40 backdrop-blur-md border border-white/20 p-3 rounded-lg md:rounded-full shadow-2xl">
          <div className="flex flex-col md:flex-row items-center gap-2">
            
            {/* Location Input */}
            <div className="flex-1 w-full relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-gold-400 transition-colors">
                <MapPin size={20} />
              </div>
              <input
                type="text"
                placeholder="Location (e.g., Beverly Hills)"
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                className="w-full h-12 md:h-14 pl-12 pr-4 bg-transparent text-white placeholder-gray-300 border-none outline-none focus:ring-0 text-base"
              />
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-8 bg-white/20"></div>
            </div>

            {/* Type Select */}
            <div className="flex-1 w-full relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-gold-400 transition-colors">
                <Home size={20} />
              </div>
              <select 
                value={filters.type}
                onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                className="w-full h-12 md:h-14 pl-12 pr-4 bg-transparent text-white border-none outline-none focus:ring-0 appearance-none cursor-pointer [&>option]:text-navy-900"
              >
                <option value="" className="text-navy-900">Property Type</option>
                <option value="Villa">Villa</option>
                <option value="Penthouse">Penthouse</option>
                <option value="Estate">Estate</option>
                <option value="Apartment">Luxury Apartment</option>
              </select>
               <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-8 bg-white/20"></div>
            </div>

            {/* Budget Select */}
            <div className="flex-1 w-full relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-gold-400 transition-colors">
                <DollarSign size={20} />
              </div>
               <select 
                value={filters.priceRange}
                onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
                className="w-full h-12 md:h-14 pl-12 pr-4 bg-transparent text-white border-none outline-none focus:ring-0 appearance-none cursor-pointer [&>option]:text-navy-900"
              >
                <option value="" className="text-navy-900">Budget Range</option>
                <option value="1-2m">$1M - $2M</option>
                <option value="2-5m">$2M - $5M</option>
                <option value="5-10m">$5M - $10M</option>
                <option value="10m+">$10M+</option>
              </select>
            </div>

            {/* Search Button */}
            <button 
              onClick={handleSearch}
              className="w-full md:w-auto h-12 md:h-14 px-8 bg-gold-500 hover:bg-gold-600 text-white font-medium rounded-md md:rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-gold-500/20 group"
            >
              <span>Search</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a href="#properties" className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
          <span className="text-white text-xs tracking-widest uppercase">Explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
        </a>
      </div>
    </div>
  );
};

export default Hero;