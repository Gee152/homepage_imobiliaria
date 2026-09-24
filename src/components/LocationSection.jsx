import React from 'react';
import { MapPin, Navigation, Compass, CheckCircle2, Building, ShieldCheck } from 'lucide-react';

export default function LocationSection({ property, onRequestFormModal }) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#101C30] border-t border-white/10">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-[#F28C0F] font-bold text-xs uppercase tracking-widest block">
            Localização Privilegiada
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            Perto de Tudo o Que É <span className="text-[#F28C0F]">Importante Para Você</span>
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Economize tempo no trânsito e aproveite a conveniência de morar cercado por infraestrutura completa de serviços, mobilidade e lazer.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Nearby List */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-sm uppercase font-bold text-slate-400 tracking-wider mb-4">
              Distâncias e Mobilidade:
            </h3>

            <div className="space-y-3">
              {property.nearby.map((item, idx) => (
                <div key={idx} className="bg-[#0A1220] border border-white/10 p-4 rounded-xl flex items-center justify-between hover:border-[#F28C0F]/40 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#F28C0F]/10 text-[#F28C0F] flex items-center justify-center shrink-0">
                      <Navigation size={18} />
                    </div>
                    <span className="text-sm font-semibold text-slate-200">{item.name}</span>
                  </div>
                  <span className="text-xs font-bold text-[#F28C0F] bg-[#F28C0F]/10 border border-[#F28C0F]/20 px-3 py-1 rounded-full">
                    {item.dist}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={onRequestFormModal}
                className="w-full bg-[#0A1220] hover:bg-[#F28C0F] text-[#F28C0F] hover:text-white border border-[#F28C0F]/30 hover:border-[#F28C0F] font-bold py-3.5 px-6 rounded-xl text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <MapPin size={16} />
                Receber Mapa Completo de Localização no WhatsApp
              </button>
            </div>
          </div>

          {/* Map Preview Display */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-white/10 h-80 sm:h-96 shadow-2xl group">
            {/* Interactive Map Visual Mockup */}
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80"
              alt="Mapa de Localização"
              className="w-full h-full object-cover filter contrast-125 brightness-90 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-[#0A1220]/40"></div>

            {/* Pin Badge Overlay */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0A1220]/95 border-2 border-[#F28C0F] p-4 rounded-2xl text-center shadow-2xl backdrop-blur-md animate-bounce">
              <div className="w-8 h-8 rounded-full bg-[#F28C0F] text-[#101C30] flex items-center justify-center mx-auto mb-2 font-bold">
                <MapPin size={18} />
              </div>
              <h4 className="text-xs font-bold text-white font-heading">{property.name}</h4>
              <span className="text-[10px] text-[#F28C0F] block mt-0.5">{property.location}</span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 bg-[#0A1220]/90 backdrop-blur-md p-3 rounded-xl border border-white/10 text-[11px] text-slate-300 flex items-center justify-between">
              <span>📍 Visitas com horário agendado</span>
              <span className="font-bold text-emerald-400">Stand de Vendas Aberto</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
