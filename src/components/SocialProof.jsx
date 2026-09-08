import React from 'react';
import { Star, ShieldCheck, Award, Building2, CheckCircle, Users } from 'lucide-react';
import { TESTIMONIALS } from '../data/propertyData';

export default function SocialProof({ property, onRequestFormModal }) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest block">
            Reputação & Credibilidade
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-heading">
            A Escolha de Quem Procura <span className="text-amber-400">Segurança Jurídica</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
            Mais de 1.400 famílias atendidas e com contratos devidamente registrados e entregues dentro do prazo.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="bg-slate-950 border border-slate-800 p-6 rounded-2xl space-y-4 flex flex-col justify-between hover:border-slate-700 transition-all shadow-xl">
              <div className="space-y-3">
                {/* Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-xs text-slate-300 italic leading-relaxed">
                  "{t.text}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-3 border-t border-slate-900 pt-4">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover border border-slate-800" />
                <div>
                  <h4 className="text-xs font-bold text-slate-100 font-heading">{t.name}</h4>
                  <span className="text-[10px] text-emerald-400 font-semibold block">{t.tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Authority Numbers & Partner Logos */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <span className="text-3xl sm:text-4xl font-black text-amber-400 font-heading block">+1.400</span>
            <span className="text-xs text-slate-400 font-medium">Imóveis Vendidos & Entregues</span>
          </div>
          <div>
            <span className="text-3xl sm:text-4xl font-black text-emerald-400 font-heading block">100%</span>
            <span className="text-xs text-slate-400 font-medium">Obras Entregues No Prazo</span>
          </div>
          <div>
            <span className="text-3xl sm:text-4xl font-black text-amber-400 font-heading block">24h</span>
            <span className="text-xs text-slate-400 font-medium">Análise de Crédito Bancário</span>
          </div>
          <div>
            <span className="text-3xl sm:text-4xl font-black text-slate-100 font-heading block">Nota 4.9</span>
            <span className="text-xs text-slate-400 font-medium">Avaliação Média dos Clientes</span>
          </div>
        </div>

        {/* Partner Banks Logos Callout */}
        <div className="border-t border-slate-800/80 pt-8 text-center space-y-4">
          <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">
            Parceiros Financeiros & Agentes Homologados
          </span>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all text-xs font-bold text-slate-300">
            <span className="px-4 py-2 bg-slate-950 border border-slate-800 rounded-xl">Caixa Econômica Federal</span>
            <span className="px-4 py-2 bg-slate-950 border border-slate-800 rounded-xl">Banco Itaú BBA</span>
            <span className="px-4 py-2 bg-slate-950 border border-slate-800 rounded-xl">Banco Bradesco</span>
            <span className="px-4 py-2 bg-slate-950 border border-slate-800 rounded-xl">Banco Santander</span>
          </div>
        </div>

      </div>
    </section>
  );
}
