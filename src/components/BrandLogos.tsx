import React from 'react';

const brands = [
  {
    name: 'Instagram',
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <defs>
          <radialGradient id="igBrandGrad" r="150%" cx="30%" cy="107%">
            <stop offset="0" stopColor="#fdf497" />
            <stop offset="0.05" stopColor="#fdf497" />
            <stop offset="0.45" stopColor="#fd5949" />
            <stop offset="0.6" stopColor="#d6249f" />
            <stop offset="0.9" stopColor="#285AEB" />
          </radialGradient>
        </defs>
        <rect width="24" height="24" rx="6" fill="url(#igBrandGrad)" />
        <circle cx="12" cy="12" r="4.2" stroke="#ffffff" strokeWidth="2" fill="none" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="#ffffff" />
      </svg>
    ),
    label: <span className="font-bold text-base sm:text-lg tracking-tight text-slate-900">Instagram</span>
  },
  {
    name: 'Facebook',
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-[#0866FF]" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    label: <span className="font-bold text-base sm:text-lg tracking-tight text-slate-900">Facebook</span>
  },
  {
    name: 'X',
    icon: (
      <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-slate-950" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    label: <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-950">X</span>
  },
  {
    name: 'Google',
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
        <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
        <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.16 0 9.97 0 12s.45 3.84 1.25 5.42l4.03-3.15z"/>
        <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
      </svg>
    ),
    label: <span className="font-bold text-base sm:text-lg text-slate-800">Google</span>
  },
  {
    name: 'TikTok',
    icon: (
      <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-slate-900" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.298 0 .59.044.87.13V9.4a6.33 6.33 0 00-1-.08A6.34 6.34 0 003 15.66a6.34 6.34 0 0010.82 4.48c1.65-1.65 2.05-3.96 2.05-6.14V7.95a8.16 8.16 0 004.91 1.74v-3.5a4.85 4.85 0 01-1.19-.5z"/>
      </svg>
    ),
    label: <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900">TikTok</span>
  },
  {
    name: 'WhatsApp Business',
    icon: (
      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0 shadow-xs">
        <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </div>
    ),
    label: (
      <div className="flex flex-col leading-tight">
        <span className="font-bold text-sm sm:text-base text-slate-800">WhatsApp</span>
        <span className="text-[9px] text-slate-500 font-semibold uppercase tracking-wider">Business</span>
      </div>
    )
  },
  {
    name: 'LinkedIn Ads',
    icon: (
      <svg className="w-5 h-5 text-[#0A66C2] fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0-.01-3.28 1.64 1.64 0 0 0 .01 3.28M5.07 18.5h2.79v-8.37H5.07v8.37z"/>
      </svg>
    ),
    label: <span className="font-bold text-base sm:text-lg text-slate-800">LinkedIn</span>
  },
  {
    name: 'Zapier',
    icon: <span className="text-[#FF4A00] font-black text-xl leading-none">*</span>,
    label: <span className="font-extrabold text-base sm:text-lg text-[#FF4A00] tracking-tight">zapier</span>
  },
  {
    name: 'Make',
    icon: (
      <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-[#6819EE] to-[#8833FF] flex items-center justify-center text-white font-bold text-xs shadow-xs">
        m
      </div>
    ),
    label: <span className="font-bold text-base sm:text-lg text-slate-900 tracking-tight">make</span>
  },
  {
    name: 'Brevo',
    icon: (
      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-[#0B996F] flex items-center justify-center text-white shrink-0 shadow-xs">
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z" opacity="0.1"/>
          <path d="M4.5 12a7.5 7.5 0 0 1 12.8-5.3l-2.12 2.12A4.5 4.5 0 0 0 7.5 12c0 2.48 2.02 4.5 4.5 4.5a4.48 4.48 0 0 0 3.18-1.32l2.12 2.12A7.47 7.47 0 0 1 12 19.5a7.5 7.5 0 0 1-7.5-7.5z" fill="#FFFFFF"/>
          <circle cx="12" cy="12" r="2.2" fill="#FFFFFF"/>
        </svg>
      </div>
    ),
    label: (
      <div className="flex items-center">
        <span className="font-extrabold text-base sm:text-lg text-[#0B996F] tracking-tight">brevo</span>
      </div>
    )
  }
];

export const BrandLogos: React.FC = () => {
  return (
    <section className="py-5 sm:py-7 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 bg-[#FAF9F6] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#C25E00] mb-4 sm:mb-5">
          BRANDS & PLATFORMS WE WORK WITH
        </p>

        {/* Animated Horizontal Marquee Container with Gradient Side Masks */}
        <div className="relative w-full overflow-hidden">
          {/* Left Fade Gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#FAF9F6] to-transparent z-10 pointer-events-none" />
          
          {/* Right Fade Gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#FAF9F6] to-transparent z-10 pointer-events-none" />

          {/* Continuous Sliding Ticker */}
          <div className="animate-marquee flex items-center gap-8 sm:gap-14 py-2 cursor-default">
            {/* First Set */}
            {brands.map((brand, idx) => (
              <div 
                key={`brand-1-${idx}`}
                className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white border border-slate-200/80 shadow-xs hover:shadow-sm hover:border-amber-400/50 transition-all shrink-0 select-none grayscale-[15%] hover:grayscale-0"
              >
                {brand.icon}
                {brand.label}
              </div>
            ))}

            {/* Duplicate Set for Seamless Loop */}
            {brands.map((brand, idx) => (
              <div 
                key={`brand-2-${idx}`}
                className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white border border-slate-200/80 shadow-xs hover:shadow-sm hover:border-amber-400/50 transition-all shrink-0 select-none grayscale-[15%] hover:grayscale-0"
              >
                {brand.icon}
                {brand.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
