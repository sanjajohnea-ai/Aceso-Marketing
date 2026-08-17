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
  Calendar
} from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Toast, ToastMessage } from './Toast';
import { saveLocalAuditLead, appendLeadToGoogleSheet, submitToGoogleForm, submitLeadToGoogleWebApp, AuditSubmissionRecord } from '../lib/googleSheets';
import { getAccessToken } from '../lib/googleAuth';

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
  const [toast, setToast] = useState<ToastMessage | null>(null);
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const servicesList = [
    'Social Media Marketing',
    'SEO & Google Maps',
    'Google Ads / PPC',
    'Web Design & Hosting',
    'WhatsApp Automation',
    'Custom Growth Package'
  ];

  const budgetRanges = [
    'Under KSh 20,000 /mo',
    'KSh 20,000 – KSh 50,000 /mo',
    'KSh 50,000 – KSh 100,000 /mo',
    'KSh 100,000+ /mo',
    'One-time Project'
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
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(trimmed)) return 'Please enter a valid email address';
    return '';
  };

  const validatePhone = (val: string) => {
    const trimmed = val.trim();
    if (!trimmed) return 'Phone number is required';
    if (trimmed.length < 9) return 'Please enter a valid phone number';
    return '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emErr = validateEmail(formData.email);
    const phErr = validatePhone(formData.phone);

    if (emErr || phErr) {
      setEmailError(emErr);
      setPhoneError(phErr);
      setToast({
        type: 'error',
        title: 'Validation Error',
        description: 'Please correct the highlighted fields before submitting.'
      });
      return;
    }

    setIsSubmitting(true);

    const submissionRecord: AuditSubmissionRecord = {
      id: `CONTACT-${Date.now()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`,
      timestamp: new Date().toISOString(),
      fullName: formData.fullName,
      businessName: formData.businessName || 'N/A',
      email: formData.email,
      phoneCode: '+254',
      phone: formData.phone,
      website: formData.website || 'N/A',
      industry: 'General Inquiry',
      primaryGoal: formData.services.join(', ') || 'General Contact',
      challenges: formData.services,
      marketingBudget: formData.budget || 'Not specified',
      referralSource: 'Contact Us Page',
      additionalNotes: formData.message,
      status: 'Pending Audit'
    };

    try {
      saveLocalAuditLead(submissionRecord);
      const token = getAccessToken();
      if (token) {
        await appendLeadToGoogleSheet(submissionRecord, token).catch(() => {});
      }
      await submitToGoogleForm(submissionRecord).catch(() => {});
      await submitLeadToGoogleWebApp(submissionRecord).catch(() => {});

      setIsSubmitted(true);
      setToast({
        type: 'success',
        title: 'Message Sent Successfully',
        description: 'Thank you! Our growth team will get back to you within 24 business hours.'
      });
    } catch {
      setIsSubmitted(true);
      setToast({
        type: 'success',
        title: 'Message Received',
        description: 'Thank you! We will get in touch with you shortly.'
      });
    } finally {
      setIsSubmitting(false);
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
      <section className="relative overflow-hidden bg-gradient-to-r from-[#002D72] via-[#003B95] to-[#0D47A1] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 shadow-sm">
        {/* Subtle SVG Grid Matrix */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="contact-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
                <circle cx="20" cy="20" r="1.5" fill="rgba(255,255,255,0.6)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contact-grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-wider text-white leading-tight">
            Contact Aceso Solutions
          </h1>
          <p className="text-blue-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
            Ready to accelerate your revenue, automate customer acquisition, or discuss a tailored growth strategy? Send us a message or connect directly.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Fast Links (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Contact Cards */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
              <h2 className="text-xl font-bold uppercase tracking-wide text-slate-900 border-b border-slate-100 pb-3">
                Get In Touch
              </h2>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#003B95] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Phone & WhatsApp</p>
                  <a href="tel:+254700000000" className="text-sm sm:text-base font-bold text-slate-900 hover:text-[#003B95] transition-colors">
                    +254 (0) 700 000 000
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">Available for instant calls & WhatsApp chats</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#003B95] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Direct Email</p>
                  <a href="mailto:info@acesosolutions.com" className="text-sm sm:text-base font-bold text-slate-900 hover:text-[#003B95] transition-colors">
                    info@acesosolutions.com
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">We respond within 24 business hours</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#003B95] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Headquarters</p>
                  <p className="text-sm sm:text-base font-bold text-slate-900">Nairobi, Kenya</p>
                  <p className="text-xs text-slate-500 mt-0.5">Serving clients across East Africa & Global</p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#003B95] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Business Hours</p>
                  <p className="text-sm font-semibold text-slate-900">Monday – Friday: 8:00 AM – 6:00 PM</p>
                  <p className="text-xs text-slate-500">Saturday: 9:00 AM – 2:00 PM (EAT)</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Inquiry Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm">
              
              {isSubmitted ? (
                <div className="text-center py-12 space-y-5">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold uppercase tracking-wide text-slate-900">
                    Message Received!
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to Aceso Solutions. Our strategy team has received your details and will get back to you within 24 business hours.
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
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="border-b border-slate-100 pb-4">
                    <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-slate-900">
                      Send Us A Message
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Fill out the form below and we will respond promptly with insights and next steps.
                    </p>
                  </div>

                  {/* Name & Business */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. John Kamau"
                          className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003B95] focus:bg-white text-slate-900"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Business Name
                      </label>
                      <div className="relative">
                        <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          value={formData.businessName}
                          onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                          placeholder="e.g. Apex Health Clinic"
                          className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003B95] focus:bg-white text-slate-900"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Work Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            setEmailError('');
                          }}
                          placeholder="john@business.com"
                          className={`w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003B95] focus:bg-white text-slate-900 ${
                            emailError ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200'
                          }`}
                        />
                      </div>
                      {emailError && <p className="text-xs text-red-500 mt-1">{emailError}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="flex gap-2">
                        <span className="inline-flex items-center px-3 text-xs font-bold text-slate-600 bg-slate-100 border border-slate-200 rounded-lg">
                          +254
                        </span>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => {
                            setFormData({ ...formData, phone: e.target.value });
                            setPhoneError('');
                          }}
                          placeholder="712 345 678"
                          className={`w-full px-4 py-2.5 text-sm bg-slate-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003B95] focus:bg-white text-slate-900 ${
                            phoneError ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200'
                          }`}
                        />
                      </div>
                      {phoneError && <p className="text-xs text-red-500 mt-1">{phoneError}</p>}
                    </div>
                  </div>

                  {/* Website */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Website / Social Profile (Optional)
                    </label>
                    <div className="relative">
                      <Globe className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="url"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        placeholder="https://yourbusiness.com"
                        className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003B95] focus:bg-white text-slate-900"
                      />
                    </div>
                  </div>

                  {/* Services of Interest */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Services of Interest (Select all that apply)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {servicesList.map((service) => {
                        const isChecked = formData.services.includes(service);
                        return (
                          <button
                            type="button"
                            key={service}
                            onClick={() => toggleService(service)}
                            className={`p-2.5 rounded-lg border text-xs font-semibold text-left transition-all flex items-center justify-between cursor-pointer ${
                              isChecked
                                ? 'border-[#003B95] bg-blue-50/80 text-[#003B95]'
                                : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700'
                            }`}
                          >
                            <span>{service}</span>
                            {isChecked && <Check className="w-3.5 h-3.5 text-[#003B95] stroke-[3]" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Estimated Monthly Budget */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Estimated Monthly Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003B95] focus:bg-white text-slate-900 cursor-pointer"
                    >
                      <option value="">Select your approximate budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Project Details / Message
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your business goals, current bottlenecks, or what you'd like to achieve..."
                      className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003B95] focus:bg-white text-slate-900 resize-none"
                    />
                  </div>

                  {/* Privacy & Guarantee note */}
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Your details are 100% confidential. No spam, ever.</span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 bg-[#003B95] hover:bg-[#002D72] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-md shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                </form>
              )}

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
