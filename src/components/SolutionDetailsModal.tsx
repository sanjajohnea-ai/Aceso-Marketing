import React from 'react';
import { X, Check, ArrowRight, Sparkles, CheckCircle2, Megaphone, RotateCw, Settings2, BarChart, Layers } from 'lucide-react';
import { SolutionItem } from '../types';

interface SolutionDetailsModalProps {
  solution: SolutionItem | null;
  onClose: () => void;
  onRequestAuditForSolution: (solutionTitle: string) => void;
}

export const SolutionDetailsModal: React.FC<SolutionDetailsModalProps> = ({
  solution,
  onClose,
  onRequestAuditForSolution,
}) => {
  if (!solution) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col">
        
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-slate-100 p-5 sm:p-6 flex items-start justify-between z-10">
          <div className="flex items-start gap-3">
            <div className={`w-12 h-12 rounded-xl ${solution.iconBg} flex items-center justify-center shrink-0`}>
              {solution.iconType === 'acquisition' && <Megaphone className="w-6 h-6" />}
              {solution.iconType === 'reactivation' && <RotateCw className="w-6 h-6" />}
              {solution.iconType === 'automation' && <Settings2 className="w-6 h-6" />}
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-0.5 block">
                PILLAR {solution.stepNumber} SOLUTION
              </span>
              <h3 className="text-2xl font-black text-slate-900 leading-snug">
                {solution.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-6">
          
          {/* Detailed Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Strategic Approach
            </h4>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              {solution.detailedDescription || solution.description}
            </p>
          </div>

          {/* Key Deliverables */}
          {solution.deliverables && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                Key Systems We Build & Deploy:
              </h4>
              <div className="space-y-2.5">
                {solution.deliverables.map((del, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      {del}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Highlight Case Study */}
          {solution.caseStudyHighlight && (
            <div className="bg-emerald-50/80 border border-emerald-200 rounded-xl p-4 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 block mb-0.5">
                  Proven Client Outcome
                </span>
                <p className="text-xs sm:text-sm font-bold text-emerald-950">
                  {solution.caseStudyHighlight}
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-slate-50 border-t border-slate-200 p-5 sm:p-6 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-lg border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-100 transition-colors cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={() => {
              onRequestAuditForSolution(solution.title);
              onClose();
            }}
            className="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold transition-all shadow-md flex items-center gap-2 cursor-pointer"
          >
            <span>Request Audit for {solution.title}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
