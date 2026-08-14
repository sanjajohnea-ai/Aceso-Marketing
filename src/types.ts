export interface SolutionItem {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  iconType: 'acquisition' | 'reactivation' | 'automation';
  badgeColor: string;
  iconBg: string;
  checkColor: string;
  items: string[];
  detailedDescription?: string;
  deliverables?: string[];
  caseStudyHighlight?: string;
}

export interface PackageItem {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  isPopular?: boolean;
  isCustom?: boolean;
  accentColor: string;
  iconType: 'starter' | 'growth' | 'scale' | 'custom';
  buttonText: string;
  buttonVariant: 'outline-blue' | 'outline-green' | 'outline-purple' | 'solid-dark';
  features: string[];
  fullFeatures?: string[];
  idealFor?: string;
  timeline?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  iconType: 'audit' | 'analyze' | 'recommend' | 'implement' | 'grow';
}

export interface AuditFormData {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  industry: string;
  goal: string;
  message: string;
}

export interface CustomServiceOption {
  id: string;
  name: string;
  category: 'Acquisition' | 'Reactivation' | 'Automation' | 'Design & Strategy';
  basePrice: number;
  description: string;
  icon: string;
}
