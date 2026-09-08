import React, { useState } from 'react';
import { Calculator, DollarSign, HelpCircle, ShieldCheck, Sparkles, ArrowRight, Percent, Award } from 'lucide-react';

export default function FinancingSimulator({ property, onRequestFormModal }) {
  // Parsing numeric base value from string
  const basePriceNum = parseInt(property.priceFrom.replace(/\D/g, '')) || 350000;
  
  const [propertyValue, setPropertyValue] = useState(basePriceNum);
  const [downpaymentPct, setDownpaymentPct] = useState(property.financingInfo.minDownpaymentPct);
  const [termYears, setTermYears] = useState(30);

  // Calculation Logic (PMT approximation: SAC / PRICE formula)
  const downpaymentVal = propertyValue * (downpaymentPct / 100);
  const loanVal = propertyValue - downpaymentVal;
  
  // Rate assumption (~8.5% a 9.9% a.a.)
  const annualRate = property.id === 'mcmv' ? 0.055 : 0.095;
  const monthlyRate = annualRate / 12;
  const totalMonths = termYears * 12;

  // Monthly installment estimate (SAC initial PMT)
  const amortization = loanVal / totalMonths;
  const initialInterest = loanVal * monthlyRate;
  const estimatedMonthlyPmt = Math.round(amortization + initialInterest);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
      
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            <Calculator size={14} /> Simulador de Financiamento On-line
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-heading">
            Consultória especialista <span className="text-emerald-400">em imóveis de alto padrão</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
            Elimine as dúvidas financeiras. Ajuste os valores abaixo para simular as melhores condições com a taxa do {property.financingInfo.type}.
          </p>
        </div>

        {/* Interactive Calculator Card */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Range 1: Property Value */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-semibold">
                <span className="text-slate-300">Valor Estimado do Imóvel</span>
                <span className="text-amber-400 font-bold font-heading text-lg">
                  R$ {propertyValue.toLocaleString('pt-BR')}
                </span>
              </div>
              <input
                type="range"
                min={basePriceNum * 0.8}
                max={basePriceNum * 1.8}
                step={10000}
                value={propertyValue}
                onChange={(e) => setPropertyValue(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                <span>R$ {(basePriceNum * 0.8).toLocaleString('pt-BR')}</span>
                <span>R$ {(basePriceNum * 1.8).toLocaleString('pt-BR')}</span>
              </div>
            </div>

            {/* Range 2: Downpayment Pct */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-semibold">
                <span className="text-slate-300">Valor da Entrada ({downpaymentPct}%)</span>
                <span className="text-emerald-400 font-bold font-heading text-lg">
                  R$ {downpaymentVal.toLocaleString('pt-BR')}
                </span>
              </div>
              <input
                type="range"
                min={10}
                max={50}
                step={5}
                value={downpaymentPct}
                onChange={(e) => setDownpaymentPct(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                <span>10% (Mínimo)</span>
                <span>50% (Entrada Facilitada)</span>
              </div>
            </div>

            {/* Term Selector */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-slate-300 block">
                Prazo Total de Financiamento
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[20, 30, 35].map((years) => (
                  <button
                    key={years}
                    type="button"
                    onClick={() => setTermYears(years)}
                    className={`py-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${termYears === years ? 'bg-amber-500/20 border-amber-500 text-amber-300 shadow-md' : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'}`}
                  >
                    {years} Anos ({years * 12}x)
                  </button>
                ))}
              </div>
            </div>

            {/* Notice pill */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-400 flex items-start gap-2.5">
              <HelpCircle size={16} className="text-amber-400 shrink-0 mt-0.5" />
              <span>
                Você pode utilizar seu <strong className="text-slate-200">FGTS acumulado</strong> para abater o valor da entrada ou amortizar até 80% do saldo devedor.
              </span>
            </div>

          </div>

          {/* Result Highlight Box Column */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-900/80 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 space-y-6 text-center shadow-xl">
            
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              Resultado da Simulação
            </span>

            <div>
              <span className="text-xs text-slate-400 uppercase font-semibold tracking-wider block">
                Primeira Parcela Estimada
              </span>
              <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-heading mt-1">
                R$ {estimatedMonthlyPmt.toLocaleString('pt-BR')} <span className="text-xs font-normal text-slate-400">/mês</span>
              </div>
              <span className="text-[11px] text-slate-400 mt-1 block">
                Sistema SAC (Parcelas Decrescentes)
              </span>
            </div>

            <div className="space-y-2 border-t border-slate-800 pt-4 text-xs text-slate-300 text-left">
              <div className="flex justify-between">
                <span className="text-slate-400">Valor a Financiar:</span>
                <span className="font-bold text-slate-100">R$ {loanVal.toLocaleString('pt-BR')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Taxa Estimada:</span>
                <span className="font-bold text-amber-400">{property.financingInfo.ratesFrom}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Modalidade:</span>
                <span className="font-bold text-slate-100">{property.financingInfo.type}</span>
              </div>
            </div>

            <button
              onClick={onRequestFormModal}
              className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-bold py-4 px-6 rounded-xl transition-all shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2 text-xs uppercase tracking-wider cursor-pointer"
            >
              Simular com Meu CPF Sem Compromisso
              <ArrowRight size={16} />
            </button>

            <span className="text-[10px] text-slate-400 block">
              Aprovação sujeita à análise de crédito do agente financeiro.
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
