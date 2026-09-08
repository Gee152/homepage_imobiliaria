import React from 'react';
import { VISTAHAVEN_DATA } from '../data/propertyData';

export default function WhoWeAre() {
  const { metrics } = VISTAHAVEN_DATA;

  return (
    <section id="who-we-are" className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Top Grid: Left Story vs Right Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Who We Are */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-[0.2em] text-purple-600 font-heading block">
              {metrics.category}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight leading-tight">
              {metrics.leftTitle}
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              {metrics.leftDesc}
            </p>
          </div>

          {/* Right Column: Maximize Value & Stats */}
          <div className="lg:col-span-7 space-y-8 lg:pl-6">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight leading-tight">
              {metrics.rightTitle}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                {metrics.rightHighlight}
              </span>
            </h3>

            {/* 4 Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-slate-100">
              {metrics.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="space-y-1 p-3 rounded-2xl bg-slate-50/60 hover:bg-purple-50/70 border border-slate-100 hover:border-purple-200 transition-all duration-300 hover:-translate-y-1 cursor-default group"
                >
                  <span className="text-3xl sm:text-4xl font-black text-purple-600 group-hover:scale-105 transition-transform font-heading tracking-tight block">
                    {stat.val}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 group-hover:text-purple-800 transition-colors block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
