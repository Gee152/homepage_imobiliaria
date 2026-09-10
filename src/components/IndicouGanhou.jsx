import React from 'react';
import { UserPlus, FileCheck, Banknote, ArrowRight, Sparkles, MessageSquare, CheckCircle } from 'lucide-react';
import { VISTAHAVEN_DATA } from '../data/propertyData';

export default function IndicouGanhou({ onRequestFormModal }) {
  const { indicouGanhou, brand } = VISTAHAVEN_DATA;
  const whatsappReferralUrl = `${brand.whatsapp}&text=${encodeURIComponent(brand.whatsappReferralMessage)}`;

  return (
    <section id="indicou-ganhou" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0B1C38] via-[#122C58] to-[#0B1C38] text-white relative overflow-hidden">
      
      {/* Glow de Fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#C79C3F]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#6FC34B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-12">
        
        {/* Header do Card com Tag de Destaque */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C79C3F]/20 border border-[#C79C3F]/60 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#C79C3F] shadow-lg">
            <Sparkles size={16} /> {indicouGanhou.badge}
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-heading tracking-tight leading-tight drop-shadow-md">
            INDICOU, CLIENTE ASSINOU,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6FC34B] via-emerald-300 to-[#6FC34B] block sm:inline">
              GANHOU R$ 500,00!
            </span>
          </h2>

          <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {indicouGanhou.subtitle}
          </p>
        </div>

        {/* 3 Passos da Indicação (👤 ➔ 📝 ➔ 💲) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          
          {/* Passo 1: Indicação */}
          <div className="bg-[#0B1C38]/90 border border-white/10 hover:border-[#C79C3F]/50 rounded-3xl p-6 sm:p-8 space-y-4 text-center relative group transition-all duration-300 hover:-translate-y-1 shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-[#122C58] border border-[#C79C3F]/40 text-[#C79C3F] flex items-center justify-center mx-auto shadow-inner group-hover:scale-110 transition-transform">
              <UserPlus size={30} />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C79C3F] block">Passo 01</span>
            <h3 className="text-xl font-bold text-white font-heading">
              1. Indique um Amigo
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Conhece um parente, amigo ou colega querendo sair do aluguel? Envie o contato dele para o Matheus.
            </p>
          </div>

          {/* Passo 2: Assinatura do Contrato */}
          <div className="bg-[#0B1C38]/90 border border-white/10 hover:border-[#C79C3F]/50 rounded-3xl p-6 sm:p-8 space-y-4 text-center relative group transition-all duration-300 hover:-translate-y-1 shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-[#122C58] border border-white/20 text-white flex items-center justify-center mx-auto shadow-inner group-hover:scale-110 transition-transform">
              <FileCheck size={30} className="text-sky-400" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400 block">Passo 02</span>
            <h3 className="text-xl font-bold text-white font-heading">
              2. O Cliente Assina
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              O Matheus cuida de todo o atendimento, simulação Caixa, aprovação do crédito e fechamento do contrato.
            </p>
          </div>

          {/* Passo 3: R$ 500 no Pix */}
          <div className="bg-gradient-to-br from-[#0B1C38] to-[#122C58] border-2 border-[#6FC34B] rounded-3xl p-6 sm:p-8 space-y-4 text-center relative group transition-all duration-300 hover:-translate-y-1 shadow-2xl shadow-[#6FC34B]/15">
            <div className="w-16 h-16 rounded-2xl bg-[#6FC34B] text-[#0B1C38] flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform font-black">
              <Banknote size={32} />
            </div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#6FC34B] block">Passo 03</span>
            <h3 className="text-xl font-black text-white font-heading">
              3. R$ 500tão no seu Pix!
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              Contrato assinado pela Caixa? Você recebe R$ 500,00 na hora diretamente na sua chave Pix!
            </p>
          </div>

        </div>

        {/* CTA Principal da Indicação */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <a
            href={whatsappReferralUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#6FC34B] hover:bg-[#5eb03d] text-[#0B1C38] font-black text-sm sm:text-base px-8 py-4 rounded-full transition-all shadow-xl shadow-[#6FC34B]/30 active:scale-95 hover:scale-105 flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <MessageSquare size={18} />
            <span>{indicouGanhou.cta}</span>
            <ArrowRight size={16} />
          </a>

          <button
            onClick={onRequestFormModal}
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base px-6 py-4 rounded-full transition-all border border-white/20 cursor-pointer active:scale-95"
          >
            Cadastrar Indicação no Formulário
          </button>
        </div>

        {/* Prova de Confiança */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <CheckCircle size={14} className="text-[#6FC34B]" /> Sem limite de indicações
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle size={14} className="text-[#6FC34B]" /> Pagamento direto via Pix
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle size={14} className="text-[#6FC34B]" /> Garantia Matheus Ferreira & RM Home
          </span>
        </div>

      </div>
    </section>
  );
}
