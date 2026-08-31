import React from 'react';
import { 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface TermsOfUsePageProps {
  onBackToHome?: () => void;
  onRequestAudit: () => void;
  onNavigate: (sectionId: string) => void;
}

export const TermsOfUsePage: React.FC<TermsOfUsePageProps> = ({
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
              Terms of Use
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Please read these terms carefully before engaging Aceso Solutions for digital marketing, advertising management, web development, and automation services.
            </p>
            <p className="text-slate-400 text-xs sm:text-sm mt-3">
              Last Updated: January 2026 • Governed under the Laws of Kenya
            </p>
          </div>
        </section>

        {/* Content Body */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-10 space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
            
            {/* Quick Summary Card */}
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-5 sm:p-6 text-slate-800">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#C25E00] shrink-0" />
                Agreement Overview
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                By accessing this website, requesting a free digital growth audit, or engaging Aceso Solutions for services, you agree to comply with and be bound by the following terms, conditions, and operational policies.
              </p>
            </div>

            {/* Section 1 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                1. Scope of Services
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Aceso Solutions provides digital marketing, customer acquisition, customer reactivation, and marketing automation solutions for small and medium-sized enterprises (SMEs). These services include, but are not limited to:
              </p>
              <ul className="space-y-2 text-sm sm:text-base text-slate-600 list-disc list-inside pl-2">
                <li>Search Engine Optimization (SEO) & Google Maps Local 3-Pack optimization.</li>
                <li>Paid Advertising management across Meta Ads (Facebook & Instagram), Google Ads, and TikTok Ads.</li>
                <li>Social Media Management, content planning, and creative copywriting.</li>
                <li>Website Design, landing page optimization, and Conversion Rate Optimization (CRO).</li>
                <li>WhatsApp Business API, CRM integrations, and automated marketing follow-up pipelines.</li>
                <li>Digital Growth Audits, discovery strategy sessions, and competitive research.</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                2. Client Responsibilities & Account Access
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">To ensure timely and effective campaign execution, the client agrees to:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#DE8E53] shrink-0 mt-1" />
                  <span>Provide accurate, lawful, and complete business information, assets, and branding guidelines.</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#DE8E53] shrink-0 mt-1" />
                  <span>Grant necessary administrative or partner access to ad accounts, Google Business Profiles, and websites.</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#DE8E53] shrink-0 mt-1" />
                  <span>Review and approve proposed ad copies, creatives, and strategies in a timely manner.</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#DE8E53] shrink-0 mt-1" />
                  <span>Maintain an active, valid payment method directly with ad networks (Meta/Google) for media budgets.</span>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                3. Fees, Invoicing & Payment Terms
              </h2>
              <ul className="space-y-2 text-sm sm:text-base text-slate-600 list-disc list-inside pl-2">
                <li><strong className="text-slate-800">Agency Service Fees:</strong> Service retainers and fixed package fees are invoiced in Kenyan Shillings (KES) or agreed currency prior to the commencement of each billing cycle.</li>
                <li><strong className="text-slate-800">Ad Spend Disassociation:</strong> Advertising spend (paid to Meta, Google, TikTok, etc.) is separate from Aceso Solutions' agency management fees and is billed directly to the client's own payment card.</li>
                <li><strong className="text-slate-800">Custom Package Pricing:</strong> Bespoke contracts and custom enterprise packages are governed by individual Service Level Agreements (SLAs).</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                4. Intellectual Property Rights
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-2">
                <strong>Client Property:</strong> All client logos, trademarks, proprietary customer databases, and product data remain the exclusive property of the client.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                <strong>Agency Deliverables:</strong> Upon full payment of all relevant invoices, the client receives full ownership of final graphic creatives, ad copies, landing pages, and customized automation setups created specifically for them. Aceso Solutions reserves the right to showcase anonymized performance metrics and non-confidential case studies for portfolio purposes.
              </p>
            </div>

            {/* Section 5 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                5. Performance & Marketing Disclaimers
              </h2>
              <div className="p-4 sm:p-5 rounded-xl bg-amber-50/80 border border-amber-200/90 text-amber-900 text-sm sm:text-base flex items-start gap-3 leading-relaxed">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <p>
                  While Aceso Solutions applies rigorous, data-driven methodologies, conversion rate optimizations, and proven advertising strategies, digital marketing outcomes (including clicks, leads, sales, and ROAS) depend heavily on market demand, competitive dynamics, client sales closing processes, third-party platform algorithm updates, and client product/service quality. Specific numerical financial returns cannot be guaranteed.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                6. Cancellation & Termination
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Either party may terminate a monthly recurring service agreement by providing written notice at least 14 days prior to the start of the next billing cycle. Prepaid agency fees for work already initiated or completed within the active billing month are non-refundable.
              </p>
            </div>

            {/* Section 7 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                7. Governing Law & Jurisdiction
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                These Terms of Use and any disputes arising out of or related to our services shall be governed by and construed in accordance with the laws of the Republic of Kenya.
              </p>
            </div>

            {/* Section 8 - Contact */}
            <div className="pt-4 border-t border-slate-200 space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                8. Questions & Legal Inquiries
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                If you have questions regarding these Terms of Use, please reach out to us:
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

