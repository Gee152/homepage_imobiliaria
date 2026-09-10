import React from 'react';
import { ArrowRight, MapPin, CheckCircle2, Home } from 'lucide-react';
import { VISTAHAVEN_DATA } from '../data/propertyData';

export default function TrustedLocations({ onRequestFormModal }) {
  const { trustedLocations } = VISTAHAVEN_DATA;

  return (
    <section id="properties" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#F8F8F8] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200/80 pb-8">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs uppercase font-extrabold tracking-[0.2em] text-[#C79C3F] font-heading block">
              {trustedLocations.category}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#122C58] font-heading tracking-tight leading-tight">
              {trustedLocations.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Apartamentos e casas com entrada facilitada, subsídio do governo de até R$ 55.000 e possibilidade de uso do seu FGTS.
            </p>
          </div>

          <div>
            <button
              onClick={onRequestFormModal}
              className="bg-[#C79C3F] hover:bg-[#B58B32] text-white font-extrabold text-xs px-6 py-3.5 rounded-full transition-all flex items-center gap-2 cursor-pointer shadow-md active:scale-95"
            >
              <span>{trustedLocations.viewAllText}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* 4-Column Properties Grid (Jaboatão, Paulista, Abreu e Lima, Recife) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustedLocations.properties.map((item) => (
            <div
              key={item.id}
              onClick={onRequestFormModal}
              className="bg-white border border-slate-200/80 hover:border-[#C79C3F]/60 rounded-3xl p-4 flex flex-col justify-between space-y-4 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer group interactive-card"
            >
              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden h-48">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-[#122C58] text-[#C79C3F] text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm border border-[#C79C3F]/30">
                    {item.subType}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="bg-[#6FC34B] text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase shadow-sm">
                    MCMV
                  </span>
                </div>
              </div>

              {/* Card Meta Details */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] text-slate-500 font-semibold">
                  <span className="text-[#122C58] font-bold">
                    {item.neighborhood}
                  </span>
                  <span>{item.floorSizeMTK} m² • {item.numberOfBedrooms} Quartos</span>
                </div>

                <h3 className="text-base font-extrabold text-[#122C58] font-heading group-hover:text-[#C79C3F] transition-colors leading-snug">
                  {item.name}
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <MapPin size={13} className="text-[#C79C3F] shrink-0" />
                  <span className="truncate">{item.location}</span>
                </div>

                {/* Destaque de Condição / Preço */}
                <div className="pt-2 flex items-center justify-between border-t border-slate-100 mt-2">
                  <div>
                    <span className="text-[10px] text-slate-400 block leading-none">Preço Estimado</span>
                    <span className="text-sm font-black text-[#122C58] font-heading">
                      {item.priceFormatted}
                    </span>
                  </div>
                  <span className="text-[10px] text-emerald-700 font-bold uppercase bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    Subsídio Disponível
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
