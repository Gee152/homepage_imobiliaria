import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { VISTAHAVEN_DATA } from '../data/propertyData';

export default function TrustedLocations({ onRequestFormModal }) {
  const { trustedLocations } = VISTAHAVEN_DATA;

  return (
    <section id="properties" className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-100 pb-8">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs uppercase font-extrabold tracking-[0.2em] text-purple-600 font-heading block">
              {trustedLocations.category}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight leading-tight">
              {trustedLocations.title}
            </h2>
          </div>

          <div>
            <button
              onClick={onRequestFormModal}
              className="bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs px-6 py-3 rounded-full border border-slate-200 transition-all flex items-center gap-2 cursor-pointer shadow-sm"
            >
              {trustedLocations.viewAllText}
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* 4-Column Properties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustedLocations.properties.map((item) => (
            <div
              key={item.id}
              onClick={onRequestFormModal}
              className="bg-white border border-slate-200/80 rounded-3xl p-4 flex flex-col justify-between space-y-4 shadow-lg hover:shadow-2xl hover:border-purple-300 transition-all duration-500 cursor-pointer group interactive-card"
            >
              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden h-48">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-slate-950/10"></div>
              </div>

              {/* Card Meta Details */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[11px] text-slate-500 font-semibold">
                  <span className="bg-purple-50 text-purple-700 px-2.5 py-0.5 rounded-md border border-purple-200/60 font-medium">
                    {item.subType}
                  </span>
                  <span>{item.floorSizeMTK} m² MTK • {item.numberOfBedrooms} Suítes</span>
                </div>
                <h3 className="text-base font-extrabold text-slate-900 font-heading group-hover:text-purple-600 transition-colors leading-snug">
                  {item.name}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <MapPin size={13} className="text-purple-500 shrink-0" />
                  <span className="truncate">{item.location}</span>
                </div>
                <div className="pt-2 flex items-center justify-between border-t border-slate-100 mt-2">
                  <span className="text-sm font-black text-purple-700 font-heading">
                    {item.priceFormatted}
                  </span>
                  <span className="text-[10px] text-emerald-600 font-bold uppercase bg-emerald-50 px-2 py-0.5 rounded-full">
                    Disponível
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
