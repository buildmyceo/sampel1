import React, { useState } from 'react';
import { Bed, Bath, Move, Heart, ArrowRightLeft } from 'lucide-react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
  isCompareSelected?: boolean;
  onToggleCompare?: (property: Property) => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ 
  property,
  isCompareSelected = false,
  onToggleCompare
}) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className={`group bg-white dark:bg-navy-800 rounded-xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border h-full flex flex-col relative ${isCompareSelected ? 'border-gold-500 ring-2 ring-gold-500/20' : 'border-gray-100 dark:border-navy-700'}`}>
      {/* Image Container */}
      <div className="relative h-72 overflow-hidden shrink-0">
        <img
          src={property.imageUrl}
          alt={property.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
            {property.isFeatured && (
                <span className="bg-gold-500 text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider">
                    Featured
                </span>
            )}
            <span className="bg-navy-900/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider">
                {property.type}
            </span>
        </div>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
           <button 
            onClick={(e) => { e.stopPropagation(); setIsLiked(!isLiked); }}
            className={`p-2 backdrop-blur-md rounded-full transition-all shadow-lg ${isLiked ? 'bg-white text-red-500' : 'bg-white/20 text-white hover:bg-white hover:text-red-500'}`}
            title="Add to Favorites"
          >
              <Heart size={18} fill={isLiked ? "currentColor" : "none"} />
          </button>

          {onToggleCompare && (
            <button 
              onClick={(e) => { e.stopPropagation(); onToggleCompare(property); }}
              className={`p-2 backdrop-blur-md rounded-full transition-all shadow-lg ${isCompareSelected ? 'bg-gold-500 text-white' : 'bg-white/20 text-white hover:bg-gold-500 hover:text-white'}`}
              title="Compare Property"
            >
                <ArrowRightLeft size={18} />
            </button>
          )}
        </div>
        
        {/* Price on Image (Mobile/Design Choice) */}
        <div className="absolute bottom-4 left-4 text-white">
             <p className="text-2xl font-serif font-bold">
            ${property.price.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col grow">
        <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-2 font-serif group-hover:text-gold-500 transition-colors">
          {property.title}
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 flex items-center gap-1">
          <MapPinIcon />
          {property.location}
        </p>

        {/* Divider */}
        <div className="w-full h-px bg-gray-100 dark:bg-navy-700 my-4"></div>

        {/* Specs */}
        <div className="flex justify-between items-center text-gray-600 dark:text-gray-300 mt-auto">
          <div className="flex items-center gap-2">
            <Bed size={18} className="text-gold-500" />
            <span className="text-sm font-medium">{property.beds} <span className="text-xs text-gray-400">Beds</span></span>
          </div>
          <div className="flex items-center gap-2">
            <Bath size={18} className="text-gold-500" />
            <span className="text-sm font-medium">{property.baths} <span className="text-xs text-gray-400">Baths</span></span>
          </div>
          <div className="flex items-center gap-2">
            <Move size={18} className="text-gold-500" />
            <span className="text-sm font-medium">{property.sqft.toLocaleString()} <span className="text-xs text-gray-400">sqft</span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

const MapPinIcon = () => (
    <svg className="w-4 h-4 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
);

export default PropertyCard;