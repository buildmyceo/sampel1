import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PropertyCard from './components/PropertyCard';
import Categories from './components/Categories';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Agents from './components/Agents';
import Blog from './components/Blog';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import ComparisonBar from './components/ComparisonBar';
import ComparisonModal from './components/ComparisonModal';
import { FEATURED_PROPERTIES, STATISTICS } from './constants';
import { FilterState, Property } from './types';
import { ArrowRight, CheckCircle } from 'lucide-react';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredProperties, setFilteredProperties] = useState(FEATURED_PROPERTIES);
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');
  
  // Comparison State
  const [compareList, setCompareList] = useState<Property[]>([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  // Prevent scrolling while splash screen is active
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleFilter = (filters: FilterState) => {
    let result = FEATURED_PROPERTIES;

    if (filters.location) {
      result = result.filter(p => p.location.toLowerCase().includes(filters.location.toLowerCase()));
    }

    if (filters.type) {
      result = result.filter(p => p.type.toLowerCase() === filters.type.toLowerCase());
    }

    if (filters.priceRange) {
      result = result.filter(p => {
        if (filters.priceRange === '1-2m') return p.price >= 1000000 && p.price <= 2000000;
        if (filters.priceRange === '2-5m') return p.price > 2000000 && p.price <= 5000000;
        if (filters.priceRange === '5-10m') return p.price > 5000000 && p.price <= 10000000;
        if (filters.priceRange === '10m+') return p.price > 10000000;
        return true;
      });
    }

    setFilteredProperties(result);
  };

  const handleCategorySelect = (category: string) => {
    if (!category) {
      setFilteredProperties(FEATURED_PROPERTIES);
      return;
    }
    const result = FEATURED_PROPERTIES.filter(p => p.type.toLowerCase() === category.toLowerCase());
    setFilteredProperties(result);
  };

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => setFormStatus('idle'), 5000);
  };

  // Comparison Handlers
  const toggleCompare = (property: Property) => {
    setCompareList(prev => {
      const exists = prev.find(p => p.id === property.id);
      if (exists) {
        return prev.filter(p => p.id !== property.id);
      }
      if (prev.length >= 4) {
        alert("You can compare up to 4 properties at a time.");
        return prev;
      }
      return [...prev, property];
    });
  };

  const removeFromCompare = (id: string) => {
    setCompareList(prev => prev.filter(p => p.id !== id));
  };

  const clearCompare = () => {
    setCompareList([]);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      {/* Splash Screen Overlay */}
      {isLoading && <SplashScreen onFinish={() => setIsLoading(false)} />}

      <div className="bg-white dark:bg-navy-950 transition-colors duration-300 pb-20"> {/* pb-20 for comparison bar space */}
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        
        <Hero onSearch={handleFilter} />

        {/* Featured Properties */}
        <section id="properties" className="py-24 container mx-auto px-6 scroll-mt-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
               <div className="flex items-center gap-2 mb-2">
                 <div className="w-8 h-px bg-gold-500"></div>
                 <span className="text-gold-500 font-bold uppercase tracking-widest text-xs">Curated Portfolio</span>
               </div>
              <h2 className="text-4xl font-serif font-bold text-navy-900 dark:text-white">
                Featured Properties
              </h2>
            </div>
            <button 
                onClick={() => setFilteredProperties(FEATURED_PROPERTIES)}
                className="hidden md:flex items-center gap-2 px-6 py-3 border border-gray-200 dark:border-navy-700 rounded-full hover:bg-gold-500 hover:text-white hover:border-gold-500 transition-all duration-300 group text-sm font-medium dark:text-white"
            >
              View All Listings
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
            </button>
          </div>

          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <PropertyCard 
                  key={property.id} 
                  property={property}
                  isCompareSelected={!!compareList.find(p => p.id === property.id)}
                  onToggleCompare={toggleCompare}
                />
              ))}
            </div>
          ) : (
             <div className="text-center py-20 bg-gray-50 dark:bg-navy-900 rounded-lg">
                <p className="text-xl text-gray-500 dark:text-gray-400">No properties found matching your criteria.</p>
                <button onClick={() => setFilteredProperties(FEATURED_PROPERTIES)} className="mt-4 text-gold-500 font-medium hover:underline">Clear Filters</button>
             </div>
          )}

           <div className="mt-12 text-center md:hidden">
              <button 
                onClick={() => setFilteredProperties(FEATURED_PROPERTIES)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 dark:bg-white text-white dark:text-navy-900 rounded-sm font-medium"
              >
                  View All Listings <ArrowRight size={16} />
              </button>
           </div>
        </section>

        <Categories onSelectCategory={handleCategorySelect} />

        <WhyChooseUs />

        {/* Statistics Strip */}
        <section className="py-20 bg-gold-500">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white divide-x divide-white/20">
                    {STATISTICS.map((stat, idx) => (
                        <div key={idx} className="px-4">
                            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-2">{stat.value}</h3>
                            <p className="font-bold text-lg mb-1">{stat.label}</p>
                            <p className="text-white/80 text-sm">{stat.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <Agents />
        
        <Testimonials />

        <Blog />

        {/* CTA Section */}
        <section id="contact" className="py-24 bg-gray-50 dark:bg-navy-900 scroll-mt-20">
            <div className="container mx-auto px-6">
                <div className="bg-white dark:bg-navy-800 rounded-2xl p-8 md:p-20 shadow-xl border border-gray-100 dark:border-navy-700 max-w-5xl mx-auto relative overflow-hidden">
                     {/* Decor */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gold-400 to-gold-600"></div>

                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 dark:text-white mb-6">
                                Ready to Find Your Dream Home?
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 text-lg mb-8">
                                Schedule a private consultation with one of our senior agents. We'll help you navigate the luxury market with confidence.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <a href="#properties" className="px-8 py-4 bg-transparent border border-navy-900 dark:border-white text-navy-900 dark:text-white font-bold rounded-sm hover:bg-navy-900 hover:text-white dark:hover:bg-white dark:hover:text-navy-900 transition-colors text-center">
                                    Browse Portfolio
                                </a>
                            </div>
                        </div>

                        {/* Quick Contact Form */}
                        <div className="flex-1 w-full max-w-md bg-gray-50 dark:bg-navy-900 p-8 rounded-xl">
                            {formStatus === 'success' ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600 dark:text-green-400">
                                        <CheckCircle size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-2">Message Sent!</h3>
                                    <p className="text-gray-500 dark:text-gray-400">Our concierge will contact you shortly.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleConsultationSubmit} className="space-y-4">
                                    <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-4">Book a Consultation</h3>
                                    <input type="text" placeholder="Name" required className="w-full p-4 bg-white dark:bg-navy-800 border border-gray-200 dark:border-navy-700 rounded-sm focus:ring-2 focus:ring-gold-500 outline-none" />
                                    <input type="email" placeholder="Email" required className="w-full p-4 bg-white dark:bg-navy-800 border border-gray-200 dark:border-navy-700 rounded-sm focus:ring-2 focus:ring-gold-500 outline-none" />
                                    <input type="tel" placeholder="Phone" className="w-full p-4 bg-white dark:bg-navy-800 border border-gray-200 dark:border-navy-700 rounded-sm focus:ring-2 focus:ring-gold-500 outline-none" />
                                    <button type="submit" className="w-full py-4 bg-navy-900 dark:bg-white text-white dark:text-navy-900 font-bold rounded-sm shadow-lg hover:-translate-y-1 transition-transform">
                                        Request Call Back
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer />
        
        <ComparisonBar 
            selectedProperties={compareList}
            onOpenModal={() => setIsCompareModalOpen(true)}
            onClear={clearCompare}
            onRemove={removeFromCompare}
        />

        <ComparisonModal 
            isOpen={isCompareModalOpen}
            properties={compareList}
            onClose={() => setIsCompareModalOpen(false)}
            onRemove={removeFromCompare}
        />
      </div>
    </div>
  );
};

export default App;