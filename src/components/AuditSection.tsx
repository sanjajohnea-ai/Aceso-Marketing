import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Lock, 
  Sparkles, 
  Check, 
  TrendingUp, 
  Calendar, 
  MessageSquare,
  FileCheck,
  RefreshCw,
  PhoneCall
} from 'lucide-react';
import { AuditFormData } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { saveLocalAuditLead, appendLeadToGoogleSheet, submitToGoogleForm, submitLeadToGoogleWebApp, AuditSubmissionRecord } from '../lib/googleSheets';
import { getAccessToken } from '../lib/googleAuth';

interface AuditSectionProps {
  onSuccessSubmit?: (data: AuditFormData) => void;
}

export const AuditSection: React.FC<AuditSectionProps> = ({ onSuccessSubmit }) => {
  const [formData, setFormData] = useState<AuditFormData>({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    industry: '',
    goal: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<Partial<AuditFormData>>({});

  const validateForm = () => {
    const errors: Partial<AuditFormData> = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full name is required';
    if (!formData.businessName.trim()) errors.businessName = 'Business name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) errors.phone = 'Phone number is required';
    if (!formData.industry) errors.industry = 'Please select your industry';
    if (!formData.goal) errors.goal = 'Please select your primary goal';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const leadRecord: AuditSubmissionRecord = {
      timestamp: new Date().toISOString(),
      fullName: formData.fullName.trim(),
      businessName: formData.businessName.trim(),
      email: formData.email.trim(),
      phoneCode: '+254',
      phone: formData.phone.trim(),
      industry: formData.industry,
      primaryGoal: formData.goal,
      challenges: [],
      additionalNotes: formData.message?.trim() || '',
      status: 'Pending Audit',
      referralSource: 'Homepage Quick Audit'
    };

    const saved = saveLocalAuditLead(leadRecord);
    
    // 1. Submit directly to Google Apps Script Web App (instantly appends to Google Sheet)
    submitLeadToGoogleWebApp(saved).catch(console.error);

    // 2. Submit to Google Form fallback connected to your responses sheet
    submitToGoogleForm(saved).catch(console.error);

    const token = getAccessToken();
    if (token) {
      appendLeadToGoogleSheet(saved, token).catch(console.error);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onSuccessSubmit) {
        onSuccessSubmit(formData);
      }
    }, 700);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      businessName: '',
      email: '',
      phone: '',
      industry: '',
      goal: '',
      message: ''
    });
    setIsSubmitted(false);
    setFormErrors({});
  };

  return (
    <section id="audit" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="bg-[#0B132B] rounded-3xl p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden text-white border border-slate-800">
        
        {/* Ambient subtle glow background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 relative z-10">
          
          {/* Left Column: Audit Benefits & Vector Chart Graphic */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Eyebrow */}
              <div className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-3">
                FREE GROWTH AUDIT
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 leading-tight">
                Get a FREE Growth Audit
              </h2>

              {/* Subheading */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                Discover what's holding your business back and how we can help you grow.
              </p>

              {/* 3 Value Propositions */}
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-slate-200 text-sm sm:text-base font-medium">
                    In-depth marketing analysis
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-slate-200 text-sm sm:text-base font-medium">
                    Actionable recommendations
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-slate-200 text-sm sm:text-base font-medium">
                    No obligation. 100% free.
                  </span>
                </div>
              </div>
            </div>

            {/* Geometric Ascending Growth Line Graphic in bottom-left */}
            <div className="pt-4 border-t border-slate-800/80">
              <div className="flex items-end justify-between">
                <div className="w-48 h-20 relative">
                  <svg viewBox="0 0 200 80" className="w-full h-full overflow-visible">
                    <defs>
                      <linearGradient id="auditChartGlow" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#60a5fa" stopOpacity="1" />
                      </linearGradient>
                    </defs>
                    {/* Grid lines */}
                    <line x1="0" y1="70" x2="190" y2="70" stroke="#1e293b" strokeWidth="1" />
                    <line x1="0" y1="40" x2="190" y2="40" stroke="#1e293b" strokeWidth="1" strokeDasharray="3,3" />
                    <line x1="0" y1="10" x2="190" y2="10" stroke="#1e293b" strokeWidth="1" strokeDasharray="3,3" />
                    
                    {/* Ascending Trend Line */}
                    <path
                      d="M 10 65 L 50 55 L 90 48 L 130 30 L 175 10"
                      fill="none"
                      stroke="url(#auditChartGlow)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    {/* Points */}
                    <circle cx="10" cy="65" r="3" fill="#3b82f6" />
                    <circle cx="50" cy="55" r="3" fill="#3b82f6" />
                    <circle cx="90" cy="48" r="3" fill="#3b82f6" />
                    <circle cx="130" cy="30" r="3" fill="#60a5fa" />
                    <circle cx="175" cy="10" r="5" fill="#60a5fa" className="animate-pulse" />
                  </svg>
                </div>

                <div className="text-right">
                  <span className="text-[11px] text-slate-400 font-semibold block">Tailored for</span>
                  <span className="text-xs font-bold text-sky-300">East African SMEs</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Free Audit Form */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="audit-form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubmit} 
                  className="space-y-4"
                >
                  
                  {/* Row 1: Full Name & Business Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Full Name <span className="text-sky-400">*</span>
                      </label>
                      <input
                        id="audit-fullName"
                        type="text"
                        placeholder="Your full name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-lg bg-[#111A38] border text-white placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                          formErrors.fullName ? 'border-red-500' : 'border-slate-700/80 hover:border-slate-600'
                        }`}
                      />
                      {formErrors.fullName && (
                        <p className="text-red-400 text-xs mt-1">{formErrors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Business Name <span className="text-sky-400">*</span>
                      </label>
                      <input
                        id="audit-businessName"
                        type="text"
                        placeholder="Your business name"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-lg bg-[#111A38] border text-white placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                          formErrors.businessName ? 'border-red-500' : 'border-slate-700/80 hover:border-slate-600'
                        }`}
                      />
                      {formErrors.businessName && (
                        <p className="text-red-400 text-xs mt-1">{formErrors.businessName}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Email Address & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Email Address <span className="text-sky-400">*</span>
                      </label>
                      <input
                        id="audit-email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-lg bg-[#111A38] border text-white placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                          formErrors.email ? 'border-red-500' : 'border-slate-700/80 hover:border-slate-600'
                        }`}
                      />
                      {formErrors.email && (
                        <p className="text-red-400 text-xs mt-1">{formErrors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Phone Number <span className="text-sky-400">*</span>
                      </label>
                      <input
                        id="audit-phone"
                        type="tel"
                        placeholder="0700 000 000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-lg bg-[#111A38] border text-white placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                          formErrors.phone ? 'border-red-500' : 'border-slate-700/80 hover:border-slate-600'
                        }`}
                      />
                      {formErrors.phone && (
                        <p className="text-red-400 text-xs mt-1">{formErrors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Industry & Goal Dropdowns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Industry <span className="text-sky-400">*</span>
                      </label>
                      <select
                        id="audit-industry"
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-lg bg-[#111A38] border text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all cursor-pointer ${
                          formErrors.industry ? 'border-red-500' : 'border-slate-700/80 hover:border-slate-600'
                        } ${!formData.industry ? 'text-slate-400' : 'text-white'}`}
                      >
                        <option value="" disabled className="bg-[#111A38] text-slate-400">Select your industry</option>
                        <option value="E-commerce & Retail" className="bg-[#111A38] text-white">E-commerce & Retail</option>
                        <option value="Healthcare & Wellness" className="bg-[#111A38] text-white">Healthcare & Wellness</option>
                        <option value="Real Estate & Property" className="bg-[#111A38] text-white">Real Estate & Property</option>
                        <option value="Professional Services (Legal, Finance)" className="bg-[#111A38] text-white">Professional Services (Legal, Finance)</option>
                        <option value="Tourism & Hospitality" className="bg-[#111A38] text-white">Tourism & Hospitality</option>
                        <option value="Education & Training" className="bg-[#111A38] text-white">Education & Training</option>
                        <option value="Manufacturing & Logistics" className="bg-[#111A38] text-white">Manufacturing & Logistics</option>
                        <option value="Technology & SaaS" className="bg-[#111A38] text-white">Technology & SaaS</option>
                        <option value="Other SME" className="bg-[#111A38] text-white">Other SME</option>
                      </select>
                      {formErrors.industry && (
                        <p className="text-red-400 text-xs mt-1">{formErrors.industry}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        What are you looking to achieve? <span className="text-sky-400">*</span>
                      </label>
                      <select
                        id="audit-goal"
                        value={formData.goal}
                        onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-lg bg-[#111A38] border text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all cursor-pointer ${
                          formErrors.goal ? 'border-red-500' : 'border-slate-700/80 hover:border-slate-600'
                        } ${!formData.goal ? 'text-slate-400' : 'text-white'}`}
                      >
                        <option value="" disabled className="bg-[#111A38] text-slate-400">Select your primary goal</option>
                        <option value="Attract More High-Intent Inquiries" className="bg-[#111A38] text-white">Attract More High-Intent Inquiries</option>
                        <option value="Reactivate Dormant Past Clients" className="bg-[#111A38] text-white">Reactivate Dormant Past Clients</option>
                        <option value="Automate WhatsApp & Sales Follow-ups" className="bg-[#111A38] text-white">Automate WhatsApp & Sales Follow-ups</option>
                        <option value="Build High-Converting Landing Pages" className="bg-[#111A38] text-white">Build High-Converting Landing Pages</option>
                        <option value="Full Digital Marketing Overhaul" className="bg-[#111A38] text-white">Full Digital Marketing Overhaul</option>
                      </select>
                      {formErrors.goal && (
                        <p className="text-red-400 text-xs mt-1">{formErrors.goal}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 4: Message Textarea */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Tell us more about your business...
                    </label>
                    <textarea
                      id="audit-message"
                      rows={3}
                      placeholder="e.g. Current marketing channels, biggest bottleneck, monthly target..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-[#111A38] border border-slate-700/80 hover:border-slate-600 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      id="submit-growth-audit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-lg bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-base transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="w-5 h-5 animate-spin" />
                          <span>Analyzing business profile...</span>
                        </>
                      ) : (
                        <>
                          <span>Request My Free Growth Audit</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Privacy note */}
                  <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 pt-1">
                    <Lock className="w-3.5 h-3.5 text-slate-400" />
                    <span>We respect your privacy. Your information will never be shared.</span>
                  </div>

                </motion.form>
              ) : (
                /* Success Confirmation State */
                <motion.div
                  key="audit-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#111A38] border border-blue-500/40 rounded-2xl p-6 sm:p-8 text-white text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-extrabold text-white mb-2">
                    Audit Request Received!
                  </h3>

                  <p className="text-slate-300 text-sm max-w-md mx-auto mb-6">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. Our senior growth strategist is now auditing <strong className="text-sky-300">{formData.businessName}</strong> for the <span className="text-white">{formData.industry}</span> sector.
                  </p>

                  {/* Preliminary Audit Scope Card */}
                  <div className="bg-[#0B132B] rounded-xl p-4 text-left border border-slate-800 mb-6 space-y-2.5 text-xs sm:text-sm">
                    <div className="flex justify-between items-center text-slate-400">
                      <span>Primary Target Goal:</span>
                      <span className="font-semibold text-white">{formData.goal}</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-400">
                      <span>Audit Deliverable:</span>
                      <span className="font-semibold text-sky-400">Custom 7-Point Revenue Plan</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-400">
                      <span>Estimated Review Time:</span>
                      <span className="font-semibold text-emerald-400">Within 24 Hours</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href="https://calendar.app.google/i9YT96iwcduZDF8Q8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-md"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Schedule Discovery Call</span>
                    </a>
                    <button
                      onClick={resetForm}
                      className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
                    >
                      Submit Another Request
                    </button>
                    <a
                      href="https://wa.me/254700000000?text=Hi%20Aceso%20Solutions,%20I%20just%20submitted%20a%20Growth%20Audit%20request"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-slate-900 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-md"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-current" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
