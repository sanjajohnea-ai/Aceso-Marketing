import React from 'react';
import { X, Check, ArrowRight, ShieldCheck, Zap, Sparkles, Clock, Users } from 'lucide-react';
import { PackageItem } from '../types';

interface PackageDetailsModalProps {
  pkg: PackageItem | null;
  onClose: () => void;
  onSelectPackageForAudit: (pkgName: string) => void;
}

export const PackageDetailsModal: React.FC<PackageDetailsModalProps> = ({
  pkg,
  onClose,
  onSelectPackageForAudit,
}) => {
  if (!pkg) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col">
        
        {/* Modal Header */}
        <div className="sticky top-0 bg-white border-b border-slate-100 p-5 sm:p-6 flex items-start justify-between z-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1 block">
              PACKAGE BREAKDOWN
            </span>
            <h3 className="text-2xl font-black text-slate-900">
              {pkg.name} Package
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              {pkg.description}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-6">
          
          {/* Price & Timeline Card */}
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs text-slate-500 font-medium block">Monthly Investment</span>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black text-slate-900">{pkg.price}</span>
                <span className="text-xs text-slate-500 font-semibold">{pkg.period}</span>
              </div>
            </div>

            {pkg.timeline && (
              <div className="flex items-center gap-2 text-xs text-slate-700 bg-white px-3 py-2 rounded-lg border border-slate-200">
                <Clock className="w-4 h-4 text-blue-600" />
                <span className="font-semibold">{pkg.timeline}</span>
              </div>
            )}
          </div>

          {/* Ideal For */}
          {pkg.idealFor && (
            <div className="bg-blue-50/60 border border-blue-100 rounded-xl p-4 flex items-start gap-3">
              <Users className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold uppercase text-blue-900 tracking-wider mb-1">
                  Ideal For Your Business If:
                </h4>
                <p className="text-xs sm:text-sm text-blue-950 font-medium leading-relaxed">
                  {pkg.idealFor}
                </p>
              </div>
            </div>
          )}

          {/* Included Deliverables */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
              What's Included in {pkg.name}:
            </h4>
            <div className="space-y-3">
              {(pkg.fullFeatures || pkg.features).map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white p-3 rounded-lg border border-slate-100 shadow-2xs">
                  <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-800 font-medium">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Guarantees */}
          <div className="border-t border-slate-100 pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600 font-semibold">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Zero setup fees & transparent invoicing</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-500" />
              <span>Cancel or pause with 14 days notice</span>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 bg-slate-50 border-t border-slate-200 p-5 sm:p-6 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-lg border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-100 transition-colors cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={() => {
              onSelectPackageForAudit(pkg.name);
              onClose();
            }}
            className="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold transition-all shadow-md flex items-center gap-2 cursor-pointer active:scale-95"
          >
            <span>Request {pkg.name} Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
