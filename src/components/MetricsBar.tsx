import React from 'react';
import { TrendingUp, Target } from 'lucide-react';

export const MetricsBar: React.FC = () => {
  const metrics = [
    {
      icon: TrendingUp,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-50',
      value: '15%+',
      title: 'Higher Qualified Lead Growth',
      subtitle: 'For clients who connect their data',
    },
    {
      icon: Target,
      iconColor: 'text-indigo-600',
      iconBg: 'bg-indigo-50',
      value: '100%',
      title: 'Tailored Growth Strategies',
      subtitle: 'Built for your business goals',
    },
  ];

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-slate-100/80">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100 gap-6 md:gap-0">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div 
                key={idx} 
                className={`flex flex-col items-center text-center ${
                  idx === 0 ? 'md:pr-10' : 'md:pl-10 pt-6 md:pt-0'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className={`p-1.5 rounded-lg ${metric.iconBg}`}>
                    <Icon className={`w-5 h-5 ${metric.iconColor}`} />
                  </div>
                  <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                    {metric.value}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-1">
                  {metric.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 italic">
                  {metric.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
