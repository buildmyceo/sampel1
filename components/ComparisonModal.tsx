import React from 'react';
import { X, Check, Bed, Bath, Move, MapPin, Home } from 'lucide-react';
import { Property } from '../types';

interface ComparisonModalProps {
  properties: Property[];
  isOpen: boolean;
  onClose: () => void;
  onRemove: (id: string) => void;
}

const ComparisonModal: React.FC<ComparisonModalProps> = ({ 
  properties, 
  isOpen, 
  onClose,
  onRemove
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-navy-900/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-white dark:bg-navy-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-scale-in">
        
        {/* Header */}
        <div className="p-6 border-b border-gray-100 dark:border-navy-800 flex justify-between items-center bg-white dark:bg-navy-900 z-10">
          <div>
            <h2 className="text-2xl font-serif font-bold text-navy-900 dark:text-white">Property Comparison</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Comparing {properties.length} properties side by side</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-navy-800 rounded-full transition-colors text-gray-500 dark:text-gray-400"
          >
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-auto custom-scrollbar flex-1 p-6">
          <div className="grid gap-8 min-w-[768px]" style={{ gridTemplateColumns: `150px repeat(${properties.length}, minmax(280px, 1fr))` }}>
            
            {/* Labels Column */}
            <div className="flex flex-col gap-6 pt-64 font-medium text-gray-400 dark:text-gray-500 text-sm">
              <div className="h-8 flex items-center">Price</div>
              <div className="h-px bg-gray-100 dark:bg-navy-800"></div>
              <div className="h-8 flex items-center">Location</div>
              <div className="h-px bg-gray-100 dark:bg-navy-800"></div>
              <div className="h-8 flex items-center">Type</div>
              <div className="h-px bg-gray-100 dark:bg-navy-800"></div>
              <div className="h-8 flex items-center">Bedrooms</div>
              <div className="h-px bg-gray-100 dark:bg-navy-800"></div>
              <div className="h-8 flex items-center">Bathrooms</div>
              <div className="h-px bg-gray-100 dark:bg-navy-800"></div>
              <div className="h-8 flex items-center">Square Feet</div>
              <div className="h-px bg-gray-100 dark:bg-navy-800"></div>
              <div className="h-8 flex items-center">Price / SqFt</div>
              <div className="h-px bg-gray-100 dark:bg-navy-800"></div>
              <div className="h-8 flex items-center">Status</div>
            </div>

            {/* Property Columns */}
            {properties.map((prop) => (
              <div key={prop.id} className="flex flex-col gap-6 relative group">
                {/* Remove Button (Hover) */}
                <button 
                  onClick={() => onRemove(prop.id)}
                  className="absolute top-2 right-2 z-10 p-2 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-lg hover:scale-110"
                  title="Remove from comparison"
                >
                  <X size={14} />
                </button>

                {/* Card Header */}
                <div className="h-64 flex flex-col gap-3">
                  <div className="relative h-48 rounded-xl overflow-hidden shadow-md">
                    <img src={prop.imageUrl} alt={prop.title} className="w-full h-full object-cover" />
                    {prop.isFeatured && (
                       <span className="absolute top-2 left-2 bg-gold-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif font-bold text-lg text-navy-900 dark:text-white leading-tight">
                    {prop.title}
                  </h3>
                </div>

                {/* Data Rows */}
                <div className="h-8 flex items-center text-xl font-bold text-gold-500">
                  ${prop.price.toLocaleString()}
                </div>
                <div className="h-px bg-gray-100 dark:bg-navy-800"></div>

                <div className="h-8 flex items-center text-navy-900 dark:text-gray-200">
                  <MapPin size={16} className="mr-2 text-gray-400" />
                  {prop.location}
                </div>
                <div className="h-px bg-gray-100 dark:bg-navy-800"></div>

                <div className="h-8 flex items-center text-navy-900 dark:text-gray-200">
                  <Home size={16} className="mr-2 text-gray-400" />
                  {prop.type}
                </div>
                <div className="h-px bg-gray-100 dark:bg-navy-800"></div>

                <div className="h-8 flex items-center text-navy-900 dark:text-gray-200">
                  <Bed size={16} className="mr-2 text-gray-400" />
                  {prop.beds} Beds
                </div>
                <div className="h-px bg-gray-100 dark:bg-navy-800"></div>

                <div className="h-8 flex items-center text-navy-900 dark:text-gray-200">
                  <Bath size={16} className="mr-2 text-gray-400" />
                  {prop.baths} Baths
                </div>
                <div className="h-px bg-gray-100 dark:bg-navy-800"></div>

                <div className="h-8 flex items-center text-navy-900 dark:text-gray-200">
                  <Move size={16} className="mr-2 text-gray-400" />
                  {prop.sqft.toLocaleString()} sqft
                </div>
                <div className="h-px bg-gray-100 dark:bg-navy-800"></div>

                <div className="h-8 flex items-center text-navy-900 dark:text-gray-200 font-mono text-sm">
                  ${Math.round(prop.price / prop.sqft).toLocaleString()} / sqft
                </div>
                <div className="h-px bg-gray-100 dark:bg-navy-800"></div>

                 <div className="h-8 flex items-center text-green-500 font-medium text-sm">
                  <Check size={16} className="mr-2" />
                  Available
                </div>

                <button className="w-full mt-2 py-3 bg-navy-900 dark:bg-white text-white dark:text-navy-900 rounded-sm font-bold hover:opacity-90 transition-opacity">
                  Inquire
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonModal;