import React from 'react';
import { UserCheck, FileCheck, Key, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { VISTAHAVEN_DATA } from '../data/propertyData';

export default function Solutions({ onRequestFormModal }) {
  const { solutions } = VISTAHAVEN_DATA;

  return (
    <section id="services" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200/60 pb-8">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs uppercase font-extrabold tracking-[0.2em] text-[#C79C3F] font-heading block">
              {solutions.category}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#122C58] font-heading tracking-tight leading-tight">
              {solutions.title}
            </h2>
          </div>

          {/* Right Trust Badge */}
          <div className="flex items-center gap-3 bg-[#F8F8F8] p-3.5 px-5 rounded-2xl border border-slate-200/80 shadow-sm max-w-sm">
            <div className="w-10 h-10 rounded-full bg-[#122C58]/10 text-[#122C58] flex items-center justify-center shrink-0">
              <ShieldCheck size={22} className="text-[#122C58]" />
            </div>
            <p className="text-xs font-semibold text-slate-700 leading-snug">
              {solutions.trustBadge}
            </p>
          </div>
        </div>

        {/* 3 Passos do Processo do PRD com Ícones de Contorno */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Passo 1: Análise de Perfil */}
          <div className="bg-[#F8F8F8] hover:bg-white border border-slate-200/80 hover:border-[#C79C3F]/50 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm hover:shadow-xl transition-all duration-300 interactive-card">
            <div className="flex items-center justify-between">
              <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#122C58] shadow-sm">
                <UserCheck size={26} className="text-[#122C58]" />
              </div>
              <span className="text-3xl font-black text-[#C79C3F]/40 font-heading">01</span>
            </div>
            <h3 className="text-xl font-extrabold text-[#122C58] font-heading">
              {solutions.steps[0].title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {solutions.steps[0].description}
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-bold text-[#122C58]">
              <CheckCircle2 size={14} className="text-[#6FC34B]" />
              <span>Cálculo gratuito de subsídio</span>
            </div>
          </div>

          {/* Passo 2: Aprovação de Crédito */}
          <div className="bg-[#F8F8F8] hover:bg-white border border-slate-200/80 hover:border-[#C79C3F]/50 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm hover:shadow-xl transition-all duration-300 interactive-card">
            <div className="flex items-center justify-between">
              <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#122C58] shadow-sm">
                <FileCheck size={26} className="text-[#122C58]" />
              </div>
              <span className="text-3xl font-black text-[#C79C3F]/40 font-heading">02</span>
            </div>
            <h3 className="text-xl font-extrabold text-[#122C58] font-heading">
              {solutions.steps[1].title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {solutions.steps[1].description}
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-bold text-[#122C58]">
              <CheckCircle2 size={14} className="text-[#6FC34B]" />
              <span>Sem cobrança de taxas ocultas</span>
            </div>
          </div>

          {/* Passo 3: Assinatura e Chaves */}
          <div className="bg-[#122C58] text-white border border-[#0B1C38] rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl transition-all duration-300 interactive-card">
            <div className="flex items-center justify-between">
              <div className="w-14 h-14 rounded-2xl bg-[#0B1C38] border border-[#C79C3F]/40 flex items-center justify-center text-[#C79C3F] shadow-inner">
                <Key size={26} className="text-[#C79C3F]" />
              </div>
              <span className="text-3xl font-black text-[#C79C3F]/40 font-heading">03</span>
            </div>
            <h3 className="text-xl font-extrabold text-white font-heading">
              {solutions.steps[2].title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {solutions.steps[2].description}
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-bold text-[#C79C3F]">
              <CheckCircle2 size={14} className="text-[#6FC34B]" />
              <span>Mais de 300 famílias já comemoraram</span>
            </div>
          </div>

        </div>

        {/* 3-Card Grid com Destaque Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4">
          
          {/* Card 1: Foto Real de Entrega de Chaves */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-xl min-h-[380px] group border border-slate-200/80 interactive-card">
            <img
              src={solutions.cards.card1.image}
              alt={solutions.cards.card1.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C38]/90 via-transparent to-transparent"></div>
            
            {/* Top Badge */}
            <div className="absolute top-5 left-5">
              <span className="bg-[#C79C3F] text-white font-extrabold text-xs px-4 py-1.5 rounded-full shadow-md">
                {solutions.cards.card1.badge}
              </span>
            </div>

            <div className="absolute bottom-5 left-5 right-5 text-white">
              <h4 className="text-lg font-bold">Histórias de Famílias Reais</h4>
              <p className="text-xs text-slate-200">A emoção de receber a chave da sua casa própria.</p>
            </div>
          </div>

          {/* Card 2: Box Informativo de Saída do Aluguel */}
          <div className="lg:col-span-4 bg-[#F8F8F8] border border-slate-200/80 rounded-3xl p-8 flex flex-col justify-between space-y-6 shadow-sm interactive-card">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#122C58] text-[#C79C3F] flex items-center justify-center">
                <Key size={24} />
              </div>
              <h3 className="text-2xl font-extrabold text-[#122C58] font-heading leading-tight">
                {solutions.cards.card2.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {solutions.cards.card2.text}
              </p>
            </div>

            <div>
              <button
                onClick={onRequestFormModal}
                className="w-full bg-[#C79C3F] hover:bg-[#B58B32] text-white font-extrabold text-xs py-3.5 px-5 rounded-full transition-all cursor-pointer shadow-md active:scale-95 flex items-center justify-center gap-2"
              >
                <span>{solutions.cards.card2.buttonText}</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>

          {/* Card 3: Foto de Assinatura de Contrato */}
          <div className="lg:col-span-3 bg-white border border-slate-200/80 rounded-3xl p-5 flex flex-col justify-between space-y-4 shadow-xl interactive-card">
            <div className="relative rounded-2xl overflow-hidden h-52 group">
              <img
                src={solutions.cards.card3.image}
                alt={solutions.cards.card3.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-[#0B1C38]/20"></div>
            </div>

            <div className="space-y-1">
              <h3 className="text-base font-bold text-[#122C58] font-heading">
                {solutions.cards.card3.title}
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                {solutions.cards.card3.price}
              </p>
            </div>

            <button
              onClick={onRequestFormModal}
              className="w-full bg-[#122C58] hover:bg-[#0B1C38] text-white font-bold py-3 px-4 rounded-full text-xs transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <span>{solutions.cards.card3.buttonText}</span>
              <ArrowRight size={14} className="text-[#C79C3F]" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
