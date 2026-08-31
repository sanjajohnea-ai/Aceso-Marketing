import React from 'react';

interface AcesoLogoProps {
  className?: string;
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export const AcesoLogo: React.FC<AcesoLogoProps> = ({ 
  className = '', 
  variant = 'dark',
  size = 'md',
  onClick
}) => {
  const isLight = variant === 'light';
  
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11'
  };

  const titleSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  const subtitleSizes = {
    sm: 'text-[8px] tracking-[0.22em]',
    md: 'text-[10px] tracking-[0.28em]',
    lg: 'text-xs tracking-[0.3em]'
  };

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <a 
      href="#" 
      onClick={handleClick}
      className={`flex items-center gap-2.5 group cursor-pointer ${className}`} 
      aria-label="Aceso Solutions Home"
    >
      {/* Stylized geometric 'A' Icon */}
      <div className={`relative flex items-center justify-center shrink-0 ${iconSizes[size]}`}>
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
          {/* Main bold geometric triangular A shape with D-EDGE warm copper gradient */}
          <path 
            d="M50 8L8 88H32L50 50L68 88H92L50 8Z" 
            fill="url(#aceso-dedge-gradient)" 
          />
          {/* Inner accent cutout fold */}
          <path 
            d="M50 36L35 70H65L50 36Z" 
            fill={isLight ? '#0B132B' : '#FAF9F6'} 
          />
          <defs>
            <linearGradient id="aceso-dedge-gradient" x1="8" y1="8" x2="92" y2="88" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E29457" />
              <stop offset="0.5" stopColor="#DE8E53" />
              <stop offset="1" stopColor="#C25E00" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center select-none">
        <span className={`font-black uppercase tracking-wider leading-none ${titleSizes[size]} ${isLight ? 'text-white' : 'text-slate-900'}`}>
          ACESO
        </span>
        <span className={`font-semibold uppercase text-slate-500 mt-1 leading-none ${subtitleSizes[size]} ${isLight ? 'text-slate-300' : 'text-slate-500'}`}>
          SOLUTIONS
        </span>
      </div>
    </a>
  );
};
