import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Search } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled
      ? 'bg-white/90 dark:bg-navy-900/90 backdrop-blur-md shadow-lg py-4'
      : 'bg-transparent py-6'
  }`;

  const textClasses = isScrolled
    ? 'text-navy-900 dark:text-white'
    : 'text-white';

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className={`text-2xl font-serif font-bold tracking-tight flex items-center gap-2 ${textClasses}`}>
          <span className="w-8 h-8 bg-gold-500 rounded-sm flex items-center justify-center text-white font-sans text-sm font-bold">L</span>
          LuxeEstate
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {['Properties', 'Agents', 'Blog', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-sm font-medium hover:text-gold-500 transition-colors ${textClasses}`}
            >
              {item}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full hover:bg-white/10 transition-colors ${textClasses}`}
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a
            href="#contact"
            className="px-5 py-2.5 bg-gold-500 hover:bg-gold-600 text-white text-sm font-medium rounded-sm transition-colors shadow-lg shadow-gold-500/20"
          >
            Book Consultation
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
           <button
            onClick={toggleTheme}
            className={`p-2 rounded-full hover:bg-white/10 transition-colors ${textClasses}`}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`${textClasses} focus:outline-none`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-navy-900 shadow-xl border-t border-gray-100 dark:border-navy-800">
          <div className="flex flex-col py-4 px-6 space-y-4">
            {['Properties', 'Agents', 'Blog', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-navy-900 dark:text-white font-medium hover:text-gold-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="block text-center px-5 py-3 bg-gold-500 text-white font-medium rounded-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;