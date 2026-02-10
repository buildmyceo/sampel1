import React, { useEffect, useState } from 'react';

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Sequence: 
    // 0s: Mount
    // 2.2s: Start fade out
    // 2.9s: Unmount parent
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 2200);

    const finishTimer = setTimeout(() => {
      onFinish();
    }, 2900);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy-900 transition-opacity duration-700 ease-in-out ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative flex items-center gap-4">
        {/* Animated Logo Icon */}
        <div className="w-16 h-16 bg-gold-500 rounded-sm flex items-center justify-center shadow-2xl shadow-gold-500/30 animate-scale-in">
          <span className="text-white font-sans text-3xl font-bold">L</span>
        </div>
        
        {/* Animated Text */}
        <div className="text-left">
            <h1 className="text-5xl font-serif font-bold text-white tracking-tight animate-fade-in-up opacity-0" style={{ animationDelay: '200ms' }}>
            LuxeEstate
            </h1>
            <div className="flex items-center gap-3 overflow-hidden animate-fade-in-up-delay opacity-0">
                <div className="h-px bg-gold-500 w-8"></div>
                <p className="text-gold-500 text-xs font-semibold tracking-[0.25em] uppercase">
                    Premium Living
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;