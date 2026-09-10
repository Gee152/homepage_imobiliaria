import React from 'react';
import { Star, ShieldCheck, Award, Building2, CheckCircle, Users, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/propertyData';

export default function SocialProof({ onRequestFormModal }) {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-[#C79C3F] font-extrabold text-xs uppercase tracking-widest block">
            DEPOIMENTOS DE QUEM JÁ CONQUISTOU
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#122C58] font-heading">
            Histórias Reais de Quem Conquistou a <span className="text-[#C79C3F]">Casa Própria</span>
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto leading-relaxed">
            Mais de 300 famílias atendidas com segurança, aprovação de crédito na Caixa e contratos assinados dentro do prazo.
          </p>
        </div>

        {/* Testimonials Grid com Estrelas Douradas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#F8F8F8] hover:bg-white border border-slate-200/80 hover:border-[#C79C3F]/50 p-6 sm:p-8 rounded-3xl space-y-4 flex flex-col justify-between hover:shadow-xl transition-all duration-300 interactive-card"
            >
              <div className="space-y-3">
                {/* Estrelas Douradas */}
                <div className="flex items-center gap-1 text-[#C79C3F]">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                  "{t.text}"
                </p>
              </div>

              {/* Autor do Depoimento */}
              <div className="flex items-center gap-3 border-t border-slate-200/70 pt-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#C79C3F]"
                />
                <div>
                  <h4 className="text-sm font-bold text-[#122C58] font-heading">{t.name}</h4>
                  <span className="text-[10px] text-[#C79C3F] font-bold block">{t.tag}</span>
                  <span className="text-[10px] text-slate-400 block">{t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Métricas de Autoridade */}
        <div className="bg-[#122C58] text-white border border-[#0B1C38] rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center shadow-xl">
          <div>
            <span className="text-3xl sm:text-4xl font-black text-[#C79C3F] font-heading block">+300</span>
            <span className="text-xs text-slate-300 font-medium">Famílias Atendidas</span>
          </div>
          <div>
            <span className="text-3xl sm:text-4xl font-black text-[#6FC34B] font-heading block">100%</span>
            <span className="text-xs text-slate-300 font-medium">Aprovação Assistida Caixa</span>
          </div>
          <div>
            <span className="text-3xl sm:text-4xl font-black text-[#C79C3F] font-heading block">Nota 5.0</span>
            <span className="text-xs text-slate-300 font-medium">Avaliação no Google</span>
          </div>
          <div>
            <span className="text-3xl sm:text-4xl font-black text-white font-heading block">CRECI 20367</span>
            <span className="text-xs text-slate-300 font-medium">Registro Profissional Ativo</span>
          </div>
        </div>

        {/* Parceiros Financeiros */}
        <div className="border-t border-slate-200 pt-8 text-center space-y-4">
          <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">
            Correspondentes e Parceiros Homologados
          </span>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-bold text-slate-700">
            <span className="px-4 py-2 bg-[#F8F8F8] border border-slate-200 rounded-xl text-[#122C58]">
              Caixa Econômica Federal (Minha Casa Minha Vida)
            </span>
            <span className="px-4 py-2 bg-[#F8F8F8] border border-slate-200 rounded-xl text-[#122C58]">
              RM Home Imobiliária (Parceria Oficial)
            </span>
            <span className="px-4 py-2 bg-[#F8F8F8] border border-slate-200 rounded-xl text-[#122C58]">
              Banco do Brasil
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
