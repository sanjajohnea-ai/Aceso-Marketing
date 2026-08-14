import React, { useState } from 'react';
import { X, MessageCircle, Phone, Mail, Calendar, Building, Globe, CheckCircle2, User, Clock, ArrowRight } from 'lucide-react';

interface LeadDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeadDetailsModal: React.FC<LeadDetailsModalProps> = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState<'New' | 'Contacted' | 'Qualified' | 'Audit Scheduled'>('New');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col">
        
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-slate-100 p-5 sm:p-6 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-base">
              SW
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-slate-900">Sarah Wanjiku</h3>
                <span className="bg-emerald-50 text-emerald-700 text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-emerald-200">
                  {status}
                </span>
              </div>
              <p className="text-xs text-slate-500">Consultation Enquiry • Inbound via Website</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6 space-y-5">
          
          {/* Quick contact buttons */}
          <div className="grid grid-cols-2 gap-3">
            <a
              href="https://wa.me/254712345678?text=Hello%20Sarah,%20thank%20you%20for%20reaching%20out%20to%20Aceso%20Solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-slate-900 font-bold text-xs shadow-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Message</span>
            </a>

            <a
              href="tel:+254712345678"
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-xs border border-blue-200 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Lead</span>
            </a>
          </div>

          {/* Lead Info Grid */}
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80 space-y-3 text-xs">
            <div className="flex justify-between items-center pb-2 border-b border-slate-200/60">
              <span className="text-slate-500 font-medium">Business / SME:</span>
              <span className="font-bold text-slate-900">Wanjiku Dental & Aesthetics Clinic</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-200/60">
              <span className="text-slate-500 font-medium">Industry:</span>
              <span className="font-bold text-slate-900">Healthcare & Specialized Clinic</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-200/60">
              <span className="text-slate-500 font-medium">Target Growth Goal:</span>
              <span className="font-bold text-blue-600">WhatsApp Booking Automation + Google Ads</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-200/60">
              <span className="text-slate-500 font-medium">Estimated Monthly Revenue:</span>
              <span className="font-bold text-slate-900">KSh 1.5M - 2.5M</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500 font-medium">Attribution Channel:</span>
              <span className="font-bold text-slate-800 flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-blue-600" />
                Google Search (High-Intent Organic)
              </span>
            </div>
          </div>

          {/* Inquiry Message */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
              Client Note / Message:
            </span>
            <div className="bg-white p-3.5 rounded-xl border border-slate-200 text-xs text-slate-700 leading-relaxed italic bg-slate-50/50">
              "We have 4 dentists at our Kilimani clinic. Our front desk is overwhelmed with missed calls and WhatsApp inquiries, and we need an automated booking system and targeted Google Ads campaign."
            </div>
          </div>

          {/* Pipeline Status update */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
              Update Lead Status in Aceso CRM:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {(['New', 'Contacted', 'Qualified', 'Audit Scheduled'] as const).map((st) => (
                <button
                  key={st}
                  onClick={() => setStatus(st)}
                  className={`py-1.5 px-2 rounded-lg text-xs font-semibold border transition-all ${
                    status === st
                      ? 'bg-blue-600 text-white border-blue-600 shadow-2xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-slate-50 border-t border-slate-200 p-4 sm:p-5 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
