import React from 'react';
import { Home, ShieldCheck, ArrowRight } from 'lucide-react';
import { VISTAHAVEN_DATA } from '../data/propertyData';

export default function Solutions({ onRequestFormModal }) {
  const { solutions } = VISTAHAVEN_DATA;

  return (
    <section id="services" className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200/60 pb-8">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs uppercase font-extrabold tracking-[0.2em] text-purple-600 font-heading block">
              {solutions.category}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight leading-tight">
              {solutions.title}
            </h2>
          </div>

          {/* Right Trust Badge */}
          <div className="flex items-center gap-3 bg-white p-3.5 px-5 rounded-2xl border border-slate-200/80 shadow-sm max-w-sm">
            <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
              <ShieldCheck size={20} />
            </div>
            <p className="text-xs font-semibold text-slate-600 leading-snug">
              {solutions.trustBadge}
            </p>
          </div>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: Large Featured Property Visual */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-xl min-h-[420px] group border border-slate-200/80 interactive-card">
            <img
              src={solutions.cards.card1.image}
              alt={solutions.cards.card1.alt}
              className="w-full h-full object-cover group-hover:scale-108 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
            
            {/* Top Featured Badge */}
            <div className="absolute top-5 left-5">
              <span className="bg-purple-600 text-white font-bold text-xs px-4 py-1.5 rounded-full shadow-md animate-pulseGlow">
                {solutions.cards.card1.badge}
              </span>
            </div>
          </div>

          {/* Card 2: Soft Lavender Text Card */}
          <div className="lg:col-span-3 bg-purple-50/70 hover:bg-purple-50 border border-purple-100 rounded-3xl p-8 flex flex-col justify-between space-y-6 shadow-sm interactive-card">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Home size={24} />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 font-heading leading-tight">
                {solutions.cards.card2.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {solutions.cards.card2.text}
              </p>
            </div>

            <div>
              <button
                onClick={onRequestFormModal}
                className="bg-white hover:bg-purple-600 hover:text-white text-slate-800 font-bold text-xs px-5 py-2.5 rounded-full border border-slate-200 transition-all cursor-pointer shadow-sm active:scale-95 hover:shadow-md"
              >
                {solutions.cards.card2.buttonText}
              </button>
            </div>
          </div>

          {/* Card 3: Modern Villa Photo & Details */}
          <div className="lg:col-span-4 bg-white border border-slate-200/80 rounded-3xl p-5 flex flex-col justify-between space-y-4 shadow-xl interactive-card">
            <div className="relative rounded-2xl overflow-hidden h-56 group">
              <img
                src={solutions.cards.card3.image}
                alt={solutions.cards.card3.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-all duration-700"
              />
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-bold text-slate-900 font-heading">
                {solutions.cards.card3.title}
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                {solutions.cards.card3.price}
              </p>
            </div>

            <button
              onClick={onRequestFormModal}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full text-xs transition-all flex items-center justify-center gap-2 shadow-md shadow-purple-600/20 cursor-pointer active:scale-95 hover:shadow-lg"
            >
              {solutions.cards.card3.buttonText}
              <ArrowRight size={16} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
