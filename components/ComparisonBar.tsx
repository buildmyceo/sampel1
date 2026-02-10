import React from 'react';
import { ArrowRightLeft, X, Trash2 } from 'lucide-react';
import { Property } from '../types';

interface ComparisonBarProps {
  selectedProperties: Property[];
  onOpenModal: () => void;
  onClear: () => void;
  onRemove: (id: string) => void;
}

const ComparisonBar: React.FC<ComparisonBarProps> = ({ 
  selectedProperties, 
  onOpenModal, 
  onClear,
  onRemove
}) => {
  if (selectedProperties.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4 animate-fade-in-up">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-navy-900 dark:bg-white text-white dark:text-navy-900 rounded-lg shadow-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 border border-gold-500/20">
          
          <div className="flex items-center gap-4 w-full sm:w-auto overflow-x-auto no-scrollbar pb-2 sm:pb-0">
            <span className="font-serif font-bold whitespace-nowrap hidden sm:block">
              Compare ({selectedProperties.length})
            </span>
            <div className="flex items-center gap-2">
              {selectedProperties.map((prop) => (
                <div key={prop.id} className="relative group shrink-0">
                  <img 
                    src={prop.imageUrl} 
                    alt={prop.title} 
                    className="w-12 h-12 rounded-md object-cover border border-white/20 dark:border-navy-900/20"
                  />
                  <button 
                    onClick={() => onRemove(prop.id)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm"
                  >
                    <X size={10} />
                  </button>
                </div>
              ))}
              {selectedProperties.length < 4 && (
                <div className="w-12 h-12 rounded-md border-2 border-dashed border-white/20 dark:border-navy-900/20 flex items-center justify-center text-xs opacity-50">
                  Add
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
             <button 
              onClick={onClear}
              className="px-4 py-2 text-sm font-medium hover:text-gold-500 transition-colors flex items-center gap-1"
            >
              <Trash2 size={16} />
              <span className="hidden sm:inline">Clear</span>
            </button>
            <button 
              onClick={onOpenModal}
              disabled={selectedProperties.length < 2}
              className={`flex-1 sm:flex-none px-6 py-2.5 rounded-sm font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                selectedProperties.length < 2 
                  ? 'bg-gray-500 cursor-not-allowed opacity-50' 
                  : 'bg-gold-500 hover:bg-gold-600 text-white shadow-lg shadow-gold-500/20'
              }`}
            >
              <ArrowRightLeft size={16} />
              Compare Now
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ComparisonBar;