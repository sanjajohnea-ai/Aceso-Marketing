import React from 'react';
import { 
  ArrowRight, 
  Check, 
  X,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

interface VetClinicsDetailedSectionProps {
  onRequestAudit?: () => void;
  onNavigate?: (view: string) => void;
}

export const VetClinicsDetailedSection: React.FC<VetClinicsDetailedSectionProps> = ({
  onRequestAudit,
  onNavigate
}) => {
  const handleBookConsultation = () => {
    if (onRequestAudit) {
      onRequestAudit();
    } else if (onNavigate) {
      onNavigate('free-audit');
    }
  };

  const scrollToChannels = () => {
    const el = document.getElementById('ad-channel-breakdown-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-12 sm:space-y-16 text-slate-800">
      
      {/* 1. HERO SECTION */}
      <div className="space-y-6">
        <div className="space-y-4 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            <span className="text-[#1D63ED]">Veterinary</span> Digital Marketing Agency
          </h1>
          <div className="space-y-3 max-w-3xl text-base sm:text-lg text-slate-700 leading-relaxed">
            <p>
              A veterinary digital marketing agency specializes in helping veterinary practices attract more pet owners through SEO, Google Ads, Meta Ads, and other digital channels.
            </p>
            <p>
              Unlike a general agency, it understands the veterinary industry and creates strategies around how pet owners search for care, what drives urgent decisions, and what builds trust and encourages appointments.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <button
              onClick={handleBookConsultation}
              className="px-6 py-3.5 rounded-xl bg-[#F28E13] hover:bg-[#DE7C05] text-slate-950 font-bold text-sm transition-all shadow-sm flex items-center justify-center cursor-pointer"
            >
              Book Free Consultation Now
            </button>
          </div>
        </div>

        {/* Active Channels Grid Card */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-7 shadow-xs space-y-4">
          <div className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500">
            ACTIVE CHANNELS & SERVICES — VETERINARY MARKETING MANAGEMENT
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Google Search Ads */}
            <div className="bg-slate-50/70 border border-slate-200/80 rounded-xl p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 text-sm">Google Search Ads</span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-md uppercase">
                  ACTIVE
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Captures pet owners searching "emergency vet near me" right now
              </p>
            </div>

            {/* Google Local Services Ads */}
            <div className="bg-slate-50/70 border border-slate-200/80 rounded-xl p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 text-sm">Google Local Services Ads</span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-md uppercase">
                  ACTIVE
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Google Screened badge at the very top of mobile results
              </p>
            </div>

            {/* Google Business Review Optimization */}
            <div className="bg-slate-50/70 border border-slate-200/80 rounded-xl p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 text-sm">Google Review Optimization</span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-md uppercase">
                  ACTIVE
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Automated 5-star review generation & Google Business Profile ranking
              </p>
            </div>

            {/* WhatsApp Ads */}
            <div className="bg-slate-50/70 border border-slate-200/80 rounded-xl p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 text-sm">WhatsApp Ads</span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-md uppercase">
                  ACTIVE
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct click-to-WhatsApp messaging campaigns for instant booking
              </p>
            </div>

            {/* Facebook and Instagram Ads */}
            <div className="bg-slate-50/70 border border-slate-200/80 rounded-xl p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 text-sm">Facebook & Instagram Ads</span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-md uppercase">
                  ACTIVE
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Reaches pet owner demographics while they scroll social feeds
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. STATS BAR (NAVY BANNER) */}
      <div className="bg-[#0B2545] rounded-2xl p-6 sm:p-8 text-white grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
        <div className="space-y-1">
          <div className="text-2xl sm:text-3xl font-extrabold text-[#F28E13]">5</div>
          <div className="text-xs sm:text-sm text-slate-300">Active ad channels & growth services</div>
        </div>
        <div className="space-y-1">
          <div className="text-2xl sm:text-3xl font-extrabold text-[#F28E13]">7 days</div>
          <div className="text-xs sm:text-sm text-slate-300">To first new appointment inquiries on Google Ads</div>
        </div>
        <div className="space-y-1">
          <div className="text-2xl sm:text-3xl font-extrabold text-[#F28E13]">WhatsApp</div>
          <div className="text-xs sm:text-sm text-slate-300">Direct booking ads for animal hospitals</div>
        </div>
        <div className="space-y-1">
          <div className="text-2xl sm:text-3xl font-extrabold text-[#F28E13]">100%</div>
          <div className="text-xs sm:text-sm text-slate-300">Transparent reporting</div>
        </div>
        <div className="col-span-2 sm:col-span-1 space-y-1">
          <div className="text-2xl sm:text-3xl font-extrabold text-[#F28E13]">Yours</div>
          <div className="text-xs sm:text-sm text-slate-300">You own every account and all data</div>
        </div>
      </div>

      {/* 3. WHY AD SPEND FAILS FOR MOST VET CLINICS */}
      <div className="space-y-6 pt-2">
        <div className="space-y-2 max-w-3xl">
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#C25E00] mb-2">
            WHY AD SPEND FAILS FOR MOST VET CLINICS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-[1.18]">
            Why Your Current Veterinary Marketing <span className="bg-gradient-to-r from-[#DE8E53] via-[#E5A958] to-[#C25E00] bg-clip-text text-transparent">Is Not Working</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed pt-1">
            Understanding why conventional agency campaigns waste budget is the first step to building a predictable veterinary patient acquisition system.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Image with Caption */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-sm aspect-4/3 lg:aspect-auto lg:h-[320px]">
            <img 
              src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?q=80&w=1200&auto=format&fit=crop" 
              alt="Veterinarian examining pet cat" 
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
              <p className="text-xs text-white font-medium">
                Paid campaigns built for animal hospitals, not generic local ads.
              </p>
            </div>
          </div>

          {/* Right Narrative Paragraphs */}
          <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
            <p>
              Most vet clinics that have tried paid advertising came away frustrated. The ads ran. The budget disappeared. The phone did not ring enough to justify the cost. That is not a paid advertising problem. That is a veterinary digital marketing problem. Broad campaigns built by generalist agencies do not account for how pet owners actually behave when they need a vet.
            </p>
            <p>
              <strong className="text-slate-900">Here is what goes wrong most often.</strong> Targeting is set too wide so budget goes to clicks that were never going to convert. Landing pages send people to a generic homepage instead of a page built around one specific action. Conversion tracking is missing so there is no way to know which ads drove real bookings. And no one is running follow-up for the people who clicked but did not book that day.
            </p>
          </div>
        </div>

        {/* 4 Numbered Breakdown Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="bg-white border border-slate-200/90 rounded-2xl p-5 flex items-start gap-4 shadow-2xs">
            <span className="w-8 h-8 rounded-lg bg-[#0F223D] text-white font-extrabold text-xs flex items-center justify-center shrink-0">
              01
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-snug font-medium pt-0.5">
              Targeting reaches too many people who are not in a position to book a veterinary appointment right now
            </p>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-2xl p-5 flex items-start gap-4 shadow-2xs">
            <span className="w-8 h-8 rounded-lg bg-[#0F223D] text-white font-extrabold text-xs flex items-center justify-center shrink-0">
              02
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-snug font-medium pt-0.5">
              Landing pages are not built to convert for a specific service or a specific type of pet owner
            </p>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-2xl p-5 flex items-start gap-4 shadow-2xs">
            <span className="w-8 h-8 rounded-lg bg-[#0F223D] text-white font-extrabold text-xs flex items-center justify-center shrink-0">
              03
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-snug font-medium pt-0.5">
              No retargeting is running for the pet owners who visited your site and left without booking
            </p>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-2xl p-5 flex items-start gap-4 shadow-2xs">
            <span className="w-8 h-8 rounded-lg bg-[#0F223D] text-white font-extrabold text-xs flex items-center justify-center shrink-0">
              04
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-snug font-medium pt-0.5">
              No one is running WhatsApp Ads and direct messaging campaigns even though mobile pet owners prefer instant booking
            </p>
          </div>
        </div>

        <div className="text-center pt-2">
          <button
            onClick={handleBookConsultation}
            className="px-8 py-3.5 rounded-xl bg-[#F28E13] hover:bg-[#DE7C05] text-slate-950 font-bold text-sm transition-all shadow-sm cursor-pointer"
          >
            Book Free Consultation
          </button>
        </div>
      </div>

      {/* 4. AD CHANNEL BREAKDOWN TABLE */}
      <div id="ad-channel-breakdown-section" className="space-y-6 pt-4">
        <div className="space-y-2 max-w-4xl">
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#C25E00] mb-2">
            AD CHANNEL BREAKDOWN
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-[1.18]">
            Multi-Channel Paid Advertising <span className="bg-gradient-to-r from-[#DE8E53] via-[#E5A958] to-[#C25E00] bg-clip-text text-transparent">for Animal Hospitals</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed pt-1">
            Every channel reaches pet owners at a different decision point. We deploy the right channel for the right moment, maximizing patient volume and appointment conversions.
          </p>
        </div>

        {/* Responsive Table Container */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-[#0B2545] text-white text-xs font-extrabold tracking-wider uppercase">
                  <th className="py-4 px-5 w-1/4">CHANNEL</th>
                  <th className="py-4 px-5 w-1/3">WHO IT REACHES</th>
                  <th className="py-4 px-5 w-1/4">BEST USED FOR</th>
                  <th className="py-4 px-5 w-1/6">SPEED TO RESULTS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm text-slate-700">
                {/* 1. Google Search Ads */}
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-5 font-bold text-slate-900">
                    Google Search Ads
                  </td>
                  <td className="py-4 px-5 text-slate-600">
                    Pet owners actively typing "vet near me" or service-specific searches into Google right now
                  </td>
                  <td className="py-4 px-5 text-slate-600">
                    Emergency care, surgery inquiries, new client acquisition with high booking intent
                  </td>
                  <td className="py-4 px-5 font-medium text-slate-900">
                    First inquiries within 3 to 7 days of launch
                  </td>
                </tr>

                {/* 2. Google Local Services Ads */}
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-5 font-bold text-slate-900">
                    Google Local Services Ads
                  </td>
                  <td className="py-4 px-5 text-slate-600">
                    Mobile searchers who see the Google Screened placement above all other results
                  </td>
                  <td className="py-4 px-5 text-slate-600">
                    Trust building with new clients, high-visibility local positioning, reducing cost per call
                  </td>
                  <td className="py-4 px-5 font-medium text-slate-900">
                    Live within 1 to 2 weeks after verification
                  </td>
                </tr>

                {/* 3. Google Business Review Optimization */}
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-5 font-bold text-slate-900">
                    <div className="flex items-center gap-2">
                      <span>Google Review Optimization</span>
                      <span className="text-[9px] font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded uppercase">
                        ACTIVE
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-5 text-slate-600">
                    Pet owners on Google Maps & search results comparing star ratings before calling
                  </td>
                  <td className="py-4 px-5 text-slate-600">
                    Automated review requests, 5-star social proof, Google Maps 3-Pack ranking boost
                  </td>
                  <td className="py-4 px-5 font-medium text-slate-900">
                    Review velocity increases within 7 to 14 days
                  </td>
                </tr>

                {/* 4. WhatsApp Ads */}
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-5 font-bold text-slate-900">
                    <div className="flex items-center gap-2">
                      <span>WhatsApp Ads</span>
                      <span className="text-[9px] font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded uppercase">
                        ACTIVE
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-5 text-slate-600">
                    Pet owners on mobile looking for quick answers or direct booking with your clinic staff
                  </td>
                  <td className="py-4 px-5 text-slate-600">
                    Instant appointment booking, direct messaging, wellness inquiries, and triage support
                  </td>
                  <td className="py-4 px-5 font-medium text-slate-900">
                    Direct conversation inquiries from day one
                  </td>
                </tr>

                {/* 5. Meta Ads */}
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-5 font-bold text-slate-900">
                    Meta Ads (Facebook & Instagram)
                  </td>
                  <td className="py-4 px-5 text-slate-600">
                    Pet owner demographics targeted by location, pet ownership signals, and household profile
                  </td>
                  <td className="py-4 px-5 text-slate-600">
                    Awareness campaigns, wellness plan promotions, animal care, new neighbourhood coverage
                  </td>
                  <td className="py-4 px-5 font-medium text-slate-900">
                    Optimization ramps up over 30 to 60 days
                  </td>
                </tr>

                {/* 6. Retargeting */}
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-5 font-bold text-slate-900">
                    Retargeting (all platforms)
                  </td>
                  <td className="py-4 px-5 text-slate-600">
                    Pet owners who already visited your website but left without booking an appointment
                  </td>
                  <td className="py-4 px-5 text-slate-600">
                    Converting warm traffic, reducing wasted ad spend, closing the loop on high-intent visitors
                  </td>
                  <td className="py-4 px-5 font-medium text-slate-900">
                    High conversion rate from week one
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 5. ECONOMICS BANNER (UNDERSTAND WHAT VETERINARIAN PAID ADVERTISING SHOULD COST) */}
      <div className="bg-[#0B2545] rounded-3xl p-6 sm:p-10 lg:p-12 text-white space-y-6">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            Understand What Veterinarian Paid Advertising Should Cost and What It Should Return
          </h2>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
            Before you run any ads, you need to know what a new client is worth to your clinic over their lifetime and what you can afford to pay to acquire them. Most vet clinics spend money on ads without ever answering those two questions. That is why the budget disappears without results.
          </p>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
            A new client who books for a wellness exam and stays with your clinic typically returns for 3 to 7 years. Across that time they spend several hundred to several thousand dollars depending on their pet's health. The math on acquiring that client through paid advertising works well when the campaign is built correctly.
          </p>
        </div>

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="bg-[#103058] border border-slate-700/80 rounded-2xl p-6 text-center space-y-2">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#F28E13]">
              $1,500
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-snug">
              Typical minimum monthly ad spend for a competitive Canadian city
            </p>
          </div>

          <div className="bg-[#103058] border border-slate-700/80 rounded-2xl p-6 text-center space-y-2">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#F28E13]">
              3 to 7
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-snug">
              Years an average new client stays with a vet clinic
            </p>
          </div>

          <div className="bg-[#103058] border border-slate-700/80 rounded-2xl p-6 text-center space-y-2">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#F28E13]">
              Week 1
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-snug">
              When Google Search Ads typically produce the first appointment inquiry
            </p>
          </div>
        </div>

        <div className="text-center pt-3">
          <button
            onClick={handleBookConsultation}
            className="px-8 py-3.5 rounded-xl bg-[#F28E13] hover:bg-[#DE7C05] text-slate-950 font-bold text-sm transition-all shadow-sm cursor-pointer"
          >
            Book Free Consultation
          </button>
        </div>
      </div>

      {/* 6. GENERIC VS SPECIALIST COMPARISON SECTION */}
      <div className="space-y-6 pt-2">
        <div className="space-y-2 max-w-4xl">
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#C25E00] mb-2">
            GENERIC VS SPECIALIST
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-[1.18]">
            The Clinical Difference <span className="bg-gradient-to-r from-[#DE8E53] via-[#E5A958] to-[#C25E00] bg-clip-text text-transparent">a Specialist Agency Makes</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed pt-1">
            Compare standard agency approaches against our dedicated veterinary patient acquisition engine.
          </p>
        </div>

        {/* Side-by-Side Comparison with clear row boundaries */}
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
          {/* Header Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            <div className="bg-red-50/70 p-4 sm:p-5 border-b md:border-b-0 border-red-100">
              <h3 className="text-sm sm:text-base font-bold text-red-700 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 font-bold flex items-center justify-center text-xs">✕</span>
                What a Generic Marketing Agency Does
              </h3>
            </div>
            <div className="bg-[#0B2545] p-4 sm:p-5 text-white">
              <h3 className="text-sm sm:text-base font-bold flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-400/20 text-emerald-300 font-bold flex items-center justify-center text-xs">✓</span>
                What We Do as a Veterinary Digital Marketing Agency
              </h3>
            </div>
          </div>

          {/* Comparison Rows with Boundaries */}
          <div className="divide-y divide-slate-200">
            {/* Row 1: Strategy & Templates */}
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
              <div className="p-4 sm:p-5 bg-red-50/20 text-xs sm:text-sm text-slate-700 flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">✕</span>
                <div>
                  <div className="font-semibold text-slate-900 mb-0.5">Generic Templates</div>
                  <span>Uses the same broad campaign template they use for plumbers, local retail, and general businesses.</span>
                </div>
              </div>
              <div className="p-4 sm:p-5 bg-emerald-50/20 text-xs sm:text-sm text-slate-700 flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">✓</span>
                <div>
                  <div className="font-semibold text-slate-900 mb-0.5">Veterinary-Specific Intent</div>
                  <span>Builds every campaign specifically around how pet owners search for, evaluate, and choose a vet clinic.</span>
                </div>
              </div>
            </div>

            {/* Row 2: Audience Targeting */}
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
              <div className="p-4 sm:p-5 bg-red-50/20 text-xs sm:text-sm text-slate-700 flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">✕</span>
                <div>
                  <div className="font-semibold text-slate-900 mb-0.5">Broad Demographic Spray</div>
                  <span>Targets broadly by location without filtering for pet owners, pet species, or pet-related behavior signals.</span>
                </div>
              </div>
              <div className="p-4 sm:p-5 bg-emerald-50/20 text-xs sm:text-sm text-slate-700 flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">✓</span>
                <div>
                  <div className="font-semibold text-slate-900 mb-0.5">Pet Owner Signals & Urgency</div>
                  <span>Targets audiences using verified pet ownership signals, breed health triggers, and high-intent clinical services.</span>
                </div>
              </div>
            </div>

            {/* Row 3: Landing Pages */}
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
              <div className="p-4 sm:p-5 bg-red-50/20 text-xs sm:text-sm text-slate-700 flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">✕</span>
                <div>
                  <div className="font-semibold text-slate-900 mb-0.5">Generic Homepages</div>
                  <span>Sends all expensive ad clicks to your homepage where pet owners get distracted and bounce without calling.</span>
                </div>
              </div>
              <div className="p-4 sm:p-5 bg-emerald-50/20 text-xs sm:text-sm text-slate-700 flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">✓</span>
                <div>
                  <div className="font-semibold text-slate-900 mb-0.5">Dedicated Clinical Pages</div>
                  <span>Builds dedicated conversion landing pages for each service and campaign with one clear, frictionless booking action.</span>
                </div>
              </div>
            </div>

            {/* Row 4: Messaging & WhatsApp */}
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
              <div className="p-4 sm:p-5 bg-red-50/20 text-xs sm:text-sm text-slate-700 flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">✕</span>
                <div>
                  <div className="font-semibold text-slate-900 mb-0.5">Outdated Channel Mix</div>
                  <span>Does not know how to run WhatsApp Ads or direct messaging campaigns for modern mobile pet owners.</span>
                </div>
              </div>
              <div className="p-4 sm:p-5 bg-emerald-50/20 text-xs sm:text-sm text-slate-700 flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">✓</span>
                <div>
                  <div className="font-semibold text-slate-900 mb-0.5">Omnichannel & WhatsApp Direct</div>
                  <span>Runs WhatsApp Ads alongside Google and Meta so pet owners can chat, triage, and book directly from their phone.</span>
                </div>
              </div>
            </div>

            {/* Row 5: Tracking & Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
              <div className="p-4 sm:p-5 bg-red-50/20 text-xs sm:text-sm text-slate-700 flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">✕</span>
                <div>
                  <div className="font-semibold text-slate-900 mb-0.5">Vanity Metrics Only</div>
                  <span>Reports on meaningless impressions and clicks rather than actual confirmed veterinary appointment inquiries.</span>
                </div>
              </div>
              <div className="p-4 sm:p-5 bg-emerald-50/20 text-xs sm:text-sm text-slate-700 flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">✓</span>
                <div>
                  <div className="font-semibold text-slate-900 mb-0.5">True Clinical Revenue Attribution</div>
                  <span>Reports on confirmed appointments, cost per new acquired pet owner, and multi-year practice revenue growth.</span>
                </div>
              </div>
            </div>

            {/* Row 6: Google Business Reviews & Reputation */}
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
              <div className="p-4 sm:p-5 bg-red-50/20 text-xs sm:text-sm text-slate-700 flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">✕</span>
                <div>
                  <div className="font-semibold text-slate-900 mb-0.5">Unmanaged Reviews & Profile</div>
                  <span>Leaves Google Reviews unmanaged, ignores review velocity, and lets competitors outrank your practice on Google Maps.</span>
                </div>
              </div>
              <div className="p-4 sm:p-5 bg-emerald-50/20 text-xs sm:text-sm text-slate-700 flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">✓</span>
                <div>
                  <div className="font-semibold text-slate-900 mb-0.5">Automated 5-Star Review Growth</div>
                  <span>Sets up automated post-visit review generation, reputation protection, and Google Maps 3-Pack optimization.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 7. BOTTOM CALL TO ACTION */}
      <div className="bg-gradient-to-r from-[#0B2545] via-[#103058] to-[#0B2545] text-white rounded-3xl p-8 sm:p-12 text-center space-y-6">
        <div className="max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            Ready To Fill Your Operating Rooms and Exam Slots?
          </h2>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            Get a tailored Veterinary Growth Strategy & Competitor Analysis for your practice.
          </p>
        </div>

        <div className="flex items-center justify-center">
          <button
            onClick={handleBookConsultation}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#F28E13] hover:bg-[#DE7C05] text-slate-950 font-bold text-sm tracking-wide uppercase transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Book Free Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
};
