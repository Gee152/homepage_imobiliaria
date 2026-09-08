import React from 'react';
import { MapPin, Navigation, Compass, CheckCircle2, Building, ShieldCheck } from 'lucide-react';

export default function LocationSection({ property, onRequestFormModal }) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest block">
            Localização Privilegiada
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-heading">
            Perto de Tudo o Que É <span className="text-amber-400">Importante Para Você</span>
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
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
                <div key={idx} className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-center justify-between hover:border-amber-500/30 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                      <Navigation size={18} />
                    </div>
                    <span className="text-sm font-semibold text-slate-200">{item.name}</span>
                  </div>
                  <span className="text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
                    {item.dist}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={onRequestFormModal}
                className="w-full bg-slate-900 hover:bg-slate-800 text-amber-400 border border-amber-500/30 hover:border-amber-500 font-bold py-3.5 px-6 rounded-xl text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <MapPin size={16} />
                Receber Mapa Completo de Localização no WhatsApp
              </button>
            </div>
          </div>

          {/* Map Preview Display */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-slate-800 h-80 sm:h-96 shadow-2xl group">
            {/* Interactive Map Visual Mockup */}
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80"
              alt="Mapa de Localização"
              className="w-full h-full object-cover filter contrast-125 brightness-90 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-slate-950/40"></div>

            {/* Pin Badge Overlay */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-950/90 border-2 border-amber-500 p-4 rounded-2xl text-center shadow-2xl backdrop-blur-md animate-bounce">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center mx-auto mb-2 font-bold">
                <MapPin size={18} />
              </div>
              <h4 className="text-xs font-bold text-slate-100 font-heading">{property.name}</h4>
              <span className="text-[10px] text-amber-400 block mt-0.5">{property.location}</span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-3 rounded-xl border border-slate-800 text-[11px] text-slate-300 flex items-center justify-between">
              <span>📍 Visitas com horário agendado</span>
              <span className="font-bold text-emerald-400">Stand de Vendas Aberto</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
