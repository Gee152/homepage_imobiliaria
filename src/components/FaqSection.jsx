import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall, ArrowRight, Sparkles } from 'lucide-react';
import { FREQUENT_QUESTIONS } from '../data/propertyData';

export default function FaqSection({ property, onRequestFormModal }) {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleQuestion = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-slate-900">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest block">
            Dúvidas Frequentes & Objeções
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-heading">
            Tudo o Que Você Precisa Saber <span className="text-amber-400">Antes de Comprar</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-lg mx-auto">
            Respostas diretas sobre condições de financiamento, uso do FGTS e garantia de entrega.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FREQUENT_QUESTIONS.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleQuestion(idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-200 text-sm sm:text-base font-heading cursor-pointer hover:text-amber-400 transition-all"
              >
                <span className="flex items-center gap-3">
                  <HelpCircle size={18} className="text-amber-400 shrink-0" />
                  {item.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-slate-400 transition-transform duration-300 shrink-0 ${openIdx === idx ? 'transform rotate-180 text-amber-400' : ''}`}
                />
              </button>

              {openIdx === idx && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-slate-800/60 bg-slate-950/40">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Final Conversion Banner */}
        <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-emerald-600 rounded-3xl p-8 sm:p-12 text-slate-950 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-slate-950/20 text-slate-950 uppercase tracking-widest">
              <Sparkles size={14} /> Condição Limitada de Lançamento
            </span>
            <h3 className="text-2xl sm:text-4xl font-black font-heading text-slate-950">
              Pronto Para Dar o Próximo Passo Comercial?
            </h3>
            <p className="text-slate-950/80 text-xs sm:text-sm max-w-xl mx-auto font-medium">
              Garanta atendimento com um especialista credenciado, agende sua visita ao decorado ou receba a tabela atualizada de unidades.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onRequestFormModal}
              className="w-full sm:w-auto bg-slate-950 hover:bg-slate-900 text-amber-400 font-bold py-4 px-8 rounded-2xl text-xs uppercase tracking-wider transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer"
            >
              Falar Com o Corretor no WhatsApp
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
