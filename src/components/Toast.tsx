import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, AlertCircle, Info, X, Sparkles } from 'lucide-react';

export type ToastType = 'success' | 'info' | 'warning' | 'error';

export interface ToastMessage {
  id?: string;
  type?: ToastType;
  title: string;
  message?: string;
  duration?: number;
}

interface ToastProps {
  toast: ToastMessage | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ toast, onClose }) => {
  useEffect(() => {
    if (!toast) return;

    const duration = toast.duration ?? 5000;
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [toast, onClose]);

  return (
    <div 
      aria-live="assertive" 
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none max-w-sm w-full px-4 sm:px-0"
    >
      <AnimatePresence mode="wait">
        {toast && (
          <motion.div
            key={toast.id || toast.title}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="pointer-events-auto w-full bg-slate-900 text-white rounded-2xl p-4 sm:p-5 shadow-2xl border border-slate-800 flex items-start gap-3.5 relative overflow-hidden"
          >
            {/* Top glowing accent line */}
            <div 
              className={`absolute top-0 left-0 right-0 h-1 ${
                toast.type === 'error'
                  ? 'bg-rose-500'
                  : toast.type === 'warning'
                  ? 'bg-amber-500'
                  : toast.type === 'info'
                  ? 'bg-sky-500'
                  : 'bg-emerald-500'
              }`}
            />

            {/* Icon */}
            <div 
              className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                toast.type === 'error'
                  ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                  : toast.type === 'warning'
                  ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                  : toast.type === 'info'
                  ? 'bg-sky-500/20 text-sky-400 border border-sky-500/30'
                  : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
              }`}
            >
              {toast.type === 'error' ? (
                <AlertCircle className="w-5 h-5" />
              ) : toast.type === 'warning' ? (
                <AlertCircle className="w-5 h-5" />
              ) : toast.type === 'info' ? (
                <Info className="w-5 h-5" />
              ) : (
                <CheckCircle2 className="w-5 h-5" />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 pr-2">
              <div className="flex items-center gap-1.5">
                <h4 className="text-sm font-bold text-white tracking-tight">
                  {toast.title}
                </h4>
                {toast.type === 'success' && (
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                )}
              </div>
              {toast.message && (
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  {toast.message}
                </p>
              )}
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Dismiss notification"
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors shrink-0 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
