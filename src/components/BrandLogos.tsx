import React from 'react';

export const BrandLogos: React.FC = () => {
  return (
    <section className="py-3.5 sm:py-7 px-4 sm:px-6 lg:px-8 border-y border-slate-100 bg-white/60">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-[10px] sm:text-xs font-bold uppercase tracking-widest text-blue-600 mb-2.5 sm:mb-5">
          BRANDS & PLATFORMS WE WORK WITH
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-10 md:gap-12 lg:gap-16 opacity-90 grayscale-[20%] hover:grayscale-0 transition-all duration-300">
          {/* Meta */}
          <div className="flex items-center gap-2 text-slate-800 hover:text-blue-600 transition-colors">
            <svg className="w-6 h-6 fill-current text-[#0081FB]" viewBox="0 0 24 24">
              <path d="M12 7.15c-1.85-2.73-4.32-4.15-7-4.15C2.24 3 0 5.24 0 8c0 4.12 4.41 8.7 10.65 12.72.76.49 1.94.49 2.7 0C19.59 16.7 24 12.12 24 8c0-2.76-2.24-5-5-5-2.68 0-5.15 1.42-7 4.15zM7.2 12.4c-1.5 0-2.7-1.2-2.7-2.7s1.2-2.7 2.7-2.7c1.1 0 2.1.7 2.5 1.7-.1.4-.2.7-.3 1.1-.5 1.5-1.1 2.6-2.2 2.6zm9.6 0c-1.1 0-1.7-1.1-2.2-2.6-.1-.4-.2-.7-.3-1.1.4-1 1.4-1.7 2.5-1.7 1.5 0 2.7 1.2 2.7 2.7s-1.2 2.7-2.7 2.7z" />
            </svg>
            <span className="font-bold text-lg sm:text-xl tracking-tight text-slate-900">Meta</span>
          </div>

          {/* Google */}
          <div className="flex items-center gap-1.5">
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
              <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.16 0 9.97 0 12s.45 3.84 1.25 5.42l4.03-3.15z"/>
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
            </svg>
            <span className="font-bold text-lg sm:text-xl text-slate-800">Google</span>
          </div>

          {/* WhatsApp Business */}
          <div className="flex items-center gap-2 text-slate-800">
            <div className="w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-xs">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-sm sm:text-base text-slate-800">WhatsApp</span>
              <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Business</span>
            </div>
          </div>

          {/* TikTok */}
          <div className="flex items-center gap-2 text-slate-800">
            <svg className="w-5 h-5 fill-current text-slate-900" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.298 0 .59.044.87.13V9.4a6.33 6.33 0 00-1-.08A6.34 6.34 0 003 15.66a6.34 6.34 0 0010.82 4.48c1.65-1.65 2.05-3.96 2.05-6.14V7.95a8.16 8.16 0 004.91 1.74v-3.5a4.85 4.85 0 01-1.19-.5z"/>
            </svg>
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900">TikTok</span>
          </div>

          {/* Zapier */}
          <div className="flex items-center gap-1.5 text-slate-800">
            <span className="text-[#FF4A00] font-black text-2xl leading-none">*</span>
            <span className="font-extrabold text-lg sm:text-xl text-[#FF4A00] tracking-tight">zapier</span>
          </div>

          {/* Make */}
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-[#6819EE] to-[#8833FF] flex items-center justify-center text-white font-bold text-xs shadow-xs">
              m
            </div>
            <span className="font-bold text-lg sm:text-xl text-slate-900 tracking-tight">make</span>
          </div>

          {/* HubSpot */}
          <div className="flex items-center gap-1.5 text-slate-800">
            <span className="font-bold text-lg sm:text-xl text-slate-800">HubSp</span>
            <div className="w-4 h-4 rounded-full border-[3px] border-[#FF7A59] -mx-0.5 relative top-[1px]"></div>
            <span className="font-bold text-lg sm:text-xl text-slate-800">t</span>
          </div>
        </div>
      </div>
    </section>
  );
};
