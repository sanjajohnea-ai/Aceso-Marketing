import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  ArrowRight, 
  Building2, 
  User, 
  Globe, 
  ShieldCheck,
  Check,
  Calendar,
  RotateCcw,
  AlertTriangle
} from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Toast, ToastMessage } from './Toast';
import { 
  submitContactMessageToGoogleSheet, 
  ContactMessageRecord 
} from '../lib/googleSheets';

interface ContactPageProps {
  onBackToHome: () => void;
  onRequestAudit: () => void;
  onNavigate: (sectionId: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onBackToHome,
  onRequestAudit,
  onNavigate
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    businessName: '',
    website: '',
    services: [] as string[],
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [toast, setToast] = useState<ToastMessage | null>(null);
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const servicesList = [
    'SEO Optimization',
    'Social Media Advertising',
    'Social Media Management',
    'Google Ads & PPC'
  ];

  const toggleService = (service: string) => {
    if (formData.services.includes(service)) {
      setFormData({
        ...formData,
        services: formData.services.filter(s => s !== service)
      });
    } else {
      setFormData({
        ...formData,
        services: [...formData.services, service]
      });
    }
  };

  const validateEmail = (val: string) => {
    const trimmed = val.trim();
    if (!trimmed) return 'Email is required';
    if (!trimmed.includes('@')) return 'Invalid email address - missing @';
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(trimmed)) return 'Invalid email address';
    return '';
  };

  const validatePhone = (val: string) => {
    const trimmed = val.trim();
    if (trimmed.length > 13) {
      return 'Phone number cannot exceed 13 characters';
    }
    return '';
  };

  const [messageError, setMessageError] = useState('');
  const [nameError, setNameError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let hasError = false;

    if (!formData.fullName.trim()) {
      setNameError('Full name is required');
      hasError = true;
    } else {
      setNameError('');
    }

    const emErr = validateEmail(formData.email);
    if (emErr) {
      setEmailError(emErr);
      hasError = true;
    } else {
      setEmailError('');
    }

    const phErr = validatePhone(formData.phone);
    if (phErr) {
      setPhoneError(phErr);
      hasError = true;
    } else {
      setPhoneError('');
    }

    if (!formData.message.trim()) {
      setMessageError('Please tell us what you need help with');
      hasError = true;
    } else {
      setMessageError('');
    }

    if (hasError) {
      setToast({
        type: 'error',
        title: 'Required Fields Missing',
        description: 'Please fill in all compulsory fields (*).'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmissionError(null);

    const formattedDateTime = new Date().toLocaleString('en-KE', {
      timeZone: 'Africa/Nairobi',
      dateStyle: 'medium',
      timeStyle: 'short'
    });

    const contactRecord: ContactMessageRecord = {
      submissionDateTime: formattedDateTime,
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      services: formData.services,
      message: formData.message.trim()
    };

    try {
      const res = await submitContactMessageToGoogleSheet(contactRecord);
      
      if (!res.success) {
        setIsSubmitting(false);
        const errMsg = res.error || 'Unable to record your enquiry in Google Sheets. Please check your connection.';
        setSubmissionError(errMsg);
        setToast({
          type: 'error',
          title: 'Enquiry Submission Failed',
          description: 'Failed to record in Google Sheets. Please click retry below.'
        });
        return;
      }

      setSubmissionError(null);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setToast({
        type: 'success',
        title: 'Message Sent Successfully',
        description: 'Thank you! Your enquiry has been received and recorded.'
      });
    } catch (err: any) {
      console.error('Contact submission error:', err);
      setIsSubmitting(false);
      const errMsg = err?.message || 'Network error: Could not reach Google Sheets server.';
      setSubmissionError(errMsg);
      setToast({
        type: 'error',
        title: 'Submission Error',
        description: 'Could not send enquiry. Please click retry below.'
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800 font-sans antialiased selection:bg-blue-600 selection:text-white">
      
      {/* Navbar */}
      <Navbar 
        activeSection="contact"
        onRequestAudit={onRequestAudit}
        onNavigate={onNavigate}
        ctaLabel="Get Free Growth Audit"
      />

      {/* Toast Notification */}
      {toast && (
        <Toast 
          type={toast.type}
          title={toast.title}
          description={toast.description}
          onClose={() => setToast(null)}
        />
      )}

      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-[#003B95] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 shadow-xs">
        <div className="max-w-6xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            LET'S TALK GROWTH
          </h1>
          <p className="text-white/90 text-sm sm:text-base max-w-2xl leading-relaxed font-normal">
            Tell us about your business and we'll come back with a free growth audit and a recommended package.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: REQUEST YOUR FREE AUDIT Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-slate-200/80 shadow-xs">
            {isSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-slate-900">
                  Enquiry Received!
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. We have received your details and will come back with the next steps within one business day.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      fullName: '',
                      email: '',
                      phone: '',
                      businessName: '',
                      website: '',
                      services: [],
                      budget: '',
                      message: ''
                    });
                  }}
                  className="px-6 py-2.5 bg-[#003B95] text-white font-bold text-xs uppercase tracking-wider rounded-md hover:bg-[#002D72] transition-colors cursor-pointer"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-slate-900">
                    TALK TO US
                  </h2>
                </div>

                {/* Full name (Compulsory) */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
                    Full name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    autoComplete="name"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      setNameError('');
                    }}
                    placeholder="Jane Wanjiku"
                    className={`w-full px-4 py-3 text-base sm:text-sm font-normal text-slate-700 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003B95] focus:border-transparent placeholder:text-slate-400 leading-relaxed transition-all ${
                      nameError ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200'
                    }`}
                  />
                  {nameError && <p className="text-xs text-red-500 mt-1">{nameError}</p>}
                </div>

                {/* Email (Compulsory) */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    inputMode="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) => {
                      const val = e.target.value;
                      setFormData({ ...formData, email: val });
                      if (emailError) {
                        setEmailError(validateEmail(val));
                      }
                    }}
                    onBlur={() => {
                      if (formData.email) {
                        setEmailError(validateEmail(formData.email));
                      }
                    }}
                    placeholder="jane@business.co.ke"
                    className={`w-full px-4 py-3 text-base sm:text-sm font-normal text-slate-700 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003B95] focus:border-transparent placeholder:text-slate-400 leading-relaxed transition-all ${
                      emailError ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200'
                    }`}
                  />
                  {emailError && <p className="text-xs text-red-500 mt-1">{emailError}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
                    Phone
                  </label>
                  <input
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    maxLength={13}
                    value={formData.phone}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (val.length <= 13) {
                        setFormData({ ...formData, phone: val });
                        setPhoneError('');
                      } else {
                        setPhoneError('Phone number cannot exceed 13 characters');
                      }
                    }}
                    onBlur={() => {
                      if (formData.phone) {
                        setPhoneError(validatePhone(formData.phone));
                      }
                    }}
                    placeholder="+254 758 544 241"
                    className={`w-full px-4 py-3 text-base sm:text-sm font-normal text-slate-700 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003B95] focus:border-transparent placeholder:text-slate-400 leading-relaxed transition-all ${
                      phoneError ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200'
                    }`}
                  />
                  {phoneError && <p className="text-xs text-red-500 mt-1">{phoneError}</p>}
                </div>

                {/* Services Multiselect */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-800 mb-2">
                    Services you are interested in (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {servicesList.map((service) => {
                      const isSelected = formData.services.includes(service);
                      return (
                        <button
                          type="button"
                          key={service}
                          onClick={() => toggleService(service)}
                          className={`min-h-[44px] px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm font-normal text-left transition-all flex items-center justify-between cursor-pointer select-none touch-manipulation active:scale-[0.99] ${
                            isSelected
                              ? 'border-[#003B95] bg-blue-50/80 text-[#003B95] ring-1 ring-[#003B95]'
                              : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-600'
                          }`}
                        >
                          <span>{service}</span>
                          {isSelected ? (
                            <CheckCircle2 className="w-4 h-4 text-[#003B95] shrink-0" />
                          ) : (
                            <div className="w-4 h-4 rounded-full border border-slate-300 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* What do you need help with? (Compulsory) */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
                    What do you need help with? <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      setMessageError('');
                    }}
                    placeholder="Tell us about your business and goals"
                    className={`w-full px-4 py-3 text-base sm:text-sm font-normal text-slate-700 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003B95] focus:border-transparent placeholder:text-slate-400 resize-none leading-relaxed transition-all ${
                      messageError ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200'
                    }`}
                  />
                  {messageError && <p className="text-xs text-red-500 mt-1">{messageError}</p>}
                </div>

                {/* Error Banner with Retry */}
                {submissionError && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-in fade-in">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                        <AlertTriangle className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-red-900">
                          Google Sheet Submission Failed
                        </h4>
                        <p className="text-xs text-red-700 mt-0.5 leading-relaxed">
                          {submissionError}
                        </p>
                        <p className="text-[11px] text-red-600 mt-1 font-medium">
                          Your message is intact. Click retry to resubmit.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-4 py-2 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold text-xs rounded-lg shadow-xs flex items-center gap-1.5 cursor-pointer transition-colors disabled:opacity-50"
                      >
                        <RotateCcw className={`w-3.5 h-3.5 ${isSubmitting ? 'animate-spin' : ''}`} />
                        <span>{isSubmitting ? 'Retrying...' : 'Retry Submission'}</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full min-h-[48px] py-3.5 px-6 ${
                    submissionError 
                      ? 'bg-red-600 hover:bg-red-700 active:bg-red-800' 
                      : 'bg-[#003B95] hover:bg-[#002D72] active:bg-[#002255]'
                  } text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-md shadow-xs transition-all cursor-pointer block text-center disabled:opacity-75 touch-manipulation active:scale-[0.99] flex items-center justify-center gap-2`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <RotateCcw className="w-4 h-4 animate-spin" />
                      <span>SENDING ENQUIRY...</span>
                    </span>
                  ) : submissionError ? (
                    <span className="flex items-center gap-2">
                      <RotateCcw className="w-4 h-4" />
                      <span>RETRY SENDING ENQUIRY</span>
                    </span>
                  ) : (
                    'SEND ENQUIRY'
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact Cards Stack (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Call us Card */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-[#003B95] flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  Call us
                </h3>
                <a 
                  href="tel:+254758544241" 
                  className="text-xs sm:text-sm text-slate-600 hover:text-[#003B95] transition-colors"
                >
                  +254 758 544 241
                </a>
              </div>
            </div>

            {/* Office Card */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-[#003B95] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  Office
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Mombasa, Kenya
                </p>
              </div>
            </div>

            {/* Response time Card */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs space-y-1.5">
              <h3 className="text-sm sm:text-base font-bold text-slate-900">
                Response time
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We reply to every enquiry within one business day.
              </p>
            </div>

          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer 
        onRequestAudit={onRequestAudit}
        onNavigate={onNavigate}
      />

    </div>
  );
};
