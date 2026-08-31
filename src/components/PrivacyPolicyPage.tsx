import React from 'react';
import { 
  Lock, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface PrivacyPolicyPageProps {
  onBackToHome?: () => void;
  onRequestAudit: () => void;
  onNavigate: (sectionId: string) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({
  onRequestAudit,
  onNavigate
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-slate-800 selection:bg-[#DE8E53] selection:text-white pb-16 md:pb-0 font-sans">
      {/* Header Navigation */}
      <Navbar 
        activeSection=""
        onRequestAudit={onRequestAudit}
        onNavigate={onNavigate}
      />

      {/* Main Content Area */}
      <main className="flex-1 pt-24 pb-16 sm:pb-20">
        
        {/* Hero Header */}
        <section className="bg-gradient-to-r from-[#070D1E] via-[#0B132B] to-[#162235] text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-slate-800">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(222,142,83,0.15)_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />
          
          <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
              Privacy Policy
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              We respect your privacy and are committed to protecting the personal and business information you share with Aceso Solutions.
            </p>
            <p className="text-slate-400 text-xs sm:text-sm mt-3">
              Last Updated: January 2026 • Applies to all Aceso Solutions services and websites
            </p>
          </div>
        </section>

        {/* Content Body */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-10 space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
            
            {/* Quick Summary Card */}
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-5 sm:p-6 text-slate-800">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Lock className="w-5 h-5 text-[#C25E00] shrink-0" />
                Privacy Commitment Summary
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Aceso Solutions collects only the information necessary to provide digital marketing, paid advertising, SEO, web design, and automation services. We never sell your personal or business data to third parties. All lead details and campaign materials are treated with strict confidentiality.
              </p>
            </div>

            {/* Section 1 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                1. Information We Collect
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When you interact with our website, request a digital growth audit, submit inquiries, or use our digital marketing services, we may collect the following types of information:
              </p>
              <ul className="space-y-2 text-sm sm:text-base text-slate-600 list-disc list-inside pl-2">
                <li><strong className="text-slate-800">Contact Information:</strong> Full name, business email address, phone number (WhatsApp enabled), and country code.</li>
                <li><strong className="text-slate-800">Business Information:</strong> Business name, website URL, social media handles, industry vertical, marketing goals, and estimated advertising budgets.</li>
                <li><strong className="text-slate-800">Technical & Usage Data:</strong> IP address, browser type, device information, operating system, pages visited, and time spent on our website via standard analytics tools.</li>
                <li><strong className="text-slate-800">Communications:</strong> Records of WhatsApp messages, emails, discovery call notes, audit requests, and support queries.</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                2. How We Use Your Information
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                We utilize the collected information strictly for legitimate business purposes:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                  <span>Preparing and delivering customized Digital Growth Audits & strategy roadmaps.</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                  <span>Scheduling and executing 1-on-1 strategy and discovery calls.</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                  <span>Configuring and executing agreed marketing campaigns, SEO, and automation pipelines.</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                  <span>Sending critical campaign performance reports, invoices, and service updates.</span>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                3. Data Sharing & Third-Party Platforms
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                We do not sell, rent, or trade your data. We only share information with trusted third-party service providers necessary to operate our business and deliver services:
              </p>
              <ul className="space-y-2 text-sm sm:text-base text-slate-600 list-disc list-inside pl-2">
                <li><strong className="text-slate-800">Advertising & Analytics Platforms:</strong> Google Analytics, Google Ads, Meta (Facebook & Instagram Ads), and TikTok Ads for campaign management and web performance tracking.</li>
                <li><strong className="text-slate-800">CRM & Messaging Providers:</strong> Google Workspace, WhatsApp Business API, and CRM software utilized for client communications and follow-ups.</li>
                <li><strong className="text-slate-800">Legal Compliance:</strong> When required by applicable laws, regulations, or legal processes in Kenya.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                4. Data Security & Storage
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                We implement industry-standard administrative, technical, and physical security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. Access to client databases and campaign assets is restricted strictly to authorized team members on a need-to-know basis.
              </p>
            </div>

            {/* Section 5 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                5. Your Rights & Choices
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under applicable data protection regulations, you have the right to:
              </p>
              <ul className="space-y-2 text-sm sm:text-base text-slate-600 list-disc list-inside pl-2">
                <li>Request access to the personal data we hold about you or your business.</li>
                <li>Request corrections to any inaccurate or incomplete information.</li>
                <li>Request the deletion of your contact data from our marketing mailing lists.</li>
                <li>Opt out of marketing communications at any time by replying "STOP" on WhatsApp or clicking unsubscribe in emails.</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                6. Cookies & Tracking Technologies
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Our website uses standard browser cookies and tracking pixels to analyze traffic patterns, remember user preferences, and measure marketing campaign effectiveness. You can configure your browser to reject cookies, though some interactive features may experience limited functionality.
              </p>
            </div>

            {/* Section 7 - Contact info */}
            <div className="pt-4 border-t border-slate-200 space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                7. Contact Our Data Privacy Team
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                If you have questions, concerns, or requests regarding this Privacy Policy or how your data is handled, please contact us directly:
              </p>
              
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 space-y-2.5 text-sm sm:text-base text-slate-700">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#DE8E53] shrink-0" />
                  <span>Email: <a href="mailto:support@acesosolutions.co.ke" className="font-semibold text-[#DE8E53] hover:underline">support@acesosolutions.co.ke</a></span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#DE8E53] shrink-0" />
                  <span>Phone: <strong className="text-slate-900">+254 758 544 241</strong></span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#DE8E53] shrink-0" />
                  <span>Location: <strong className="text-slate-900">Mombasa, Kenya</strong></span>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer 
        onNavigate={onNavigate}
        onRequestAudit={onRequestAudit}
      />
    </div>
  );
};

