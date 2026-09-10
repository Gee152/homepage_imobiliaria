import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, Sparkles, MessageSquare, ArrowRight, User, Phone, MapPin, DollarSign, Wallet, Home, X } from 'lucide-react';
import { VISTAHAVEN_DATA } from '../data/propertyData';

export default function QualificationForm({ onLeadCaptured, isModal = false, onCloseModal }) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedWhatsappUrl, setSubmittedWhatsappUrl] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    city: 'Jaboatão dos Guararapes',
    incomeBracket: 'R$ 2.640 a R$ 4.400 (Faixa 2 MCMV)',
    hasFgts: 'Sim, tenho saldo de FGTS',
    housingStatus: 'Moro de Aluguel'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.whatsapp) {
      alert("Por favor, preencha seu Nome e WhatsApp antes de prosseguir.");
      return;
    }
    setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const message = `Olá Matheus! Vim pelo site e gostaria de uma simulação gratuita do Minha Casa Minha Vida na Grande Recife.\n\n` +
      `👤 *Nome:* ${formData.name}\n` +
      `📱 *WhatsApp:* ${formData.whatsapp}\n` +
      `📍 *Cidade de Interesse:* ${formData.city}\n` +
      `💰 *Renda Familiar Estimada:* ${formData.incomeBracket}\n` +
      `💼 *FGTS:* ${formData.hasFgts}\n` +
      `🏠 *Situação Atual:* ${formData.housingStatus}`;

    const encodedMsg = encodeURIComponent(message);
    const whatsappUrl = `${VISTAHAVEN_DATA.brand.whatsapp}&text=${encodedMsg}`;
    setSubmittedWhatsappUrl(whatsappUrl);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      if (onLeadCaptured) {
        onLeadCaptured({
          ...formData,
          brand: VISTAHAVEN_DATA.brand.name,
          partner: VISTAHAVEN_DATA.brand.partner,
          timestamp: new Date().toISOString()
        });
      }

      window.open(whatsappUrl, '_blank');
    }, 600);
  };

  return (
    <div className={`bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200/80 relative overflow-hidden text-slate-900 ${isModal ? 'max-w-xl w-full mx-auto' : 'w-full'}`}>
      
      {/* Background Glow em Dourado e Azul Marinho */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#C79C3F]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#122C58]/10 rounded-full blur-3xl pointer-events-none"></div>

      {submitted ? (
        <div className="text-center py-8 space-y-4">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
            <CheckCircle2 size={36} />
          </div>
          <h3 className="text-2xl font-extrabold text-[#122C58] font-heading">
            Simulação Solicitada com Sucesso!
          </h3>
          <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
            Obrigado <span className="font-bold text-[#122C58]">{formData.name}</span>. Você está sendo redirecionado para o WhatsApp do corretor Matheus Ferreira...
          </p>
          <div className="pt-4 flex flex-col gap-3">
            <a
              href={submittedWhatsappUrl || VISTAHAVEN_DATA.brand.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#6FC34B] hover:bg-[#5eb03d] text-[#0B1C38] font-black py-3.5 px-6 rounded-full transition-all shadow-lg cursor-pointer"
            >
              <MessageSquare size={20} />
              Conversar com o Matheus no WhatsApp
            </a>
            {isModal && (
              <button
                type="button"
                onClick={onCloseModal}
                className="text-slate-400 hover:text-slate-600 text-xs py-2 cursor-pointer"
              >
                Fechar janela
              </button>
            )}
          </div>
        </div>
      ) : (
        <div>
          {/* Header */}
          <div className="mb-6 border-b border-slate-100 pb-4 flex items-center justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold bg-[#122C58]/10 text-[#122C58]">
                <Sparkles size={12} className="text-[#C79C3F]" /> Simulação Minha Casa Minha Vida
              </span>
              <h3 className="text-xl font-extrabold text-[#122C58] mt-2 font-heading">
                {step === 1 ? 'Descubra Seu Subsídio e Parcela' : 'Informações para Análise Caixa'}
              </h3>
            </div>
            {isModal && (
              <button 
                type="button" 
                onClick={onCloseModal} 
                className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
                aria-label="Fechar"
              >
                <X size={20} />
              </button>
            )}
          </div>

          <form onSubmit={step === 1 ? handleNextStep : handleSubmit} className="space-y-4">
            {step === 1 ? (
              <>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                    <User size={14} className="text-[#122C58]" /> Seu Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Ex: Carlos Eduardo Silva"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#C79C3F] focus:bg-white rounded-xl px-4 py-3 text-slate-900 text-sm outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                    <Phone size={14} className="text-[#122C58]" /> WhatsApp com DDD *
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    required
                    placeholder="Ex: (81) 99999-8888"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#C79C3F] focus:bg-white rounded-xl px-4 py-3 text-slate-900 text-sm outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                    <MapPin size={14} className="text-[#122C58]" /> Cidade Onde Quer Morar
                  </label>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#C79C3F] focus:bg-white rounded-xl px-4 py-3 text-slate-900 text-sm outline-none transition-all cursor-pointer"
                  >
                    <option value="Jaboatão dos Guararapes">Jaboatão dos Guararapes</option>
                    <option value="Paulista">Paulista</option>
                    <option value="Abreu e Lima">Abreu e Lima</option>
                    <option value="Recife">Recife</option>
                    <option value="Outra cidade da Grande Recife">Outra cidade da Grande Recife</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 bg-[#C79C3F] hover:bg-[#B58B32] text-white font-extrabold py-3.5 px-6 rounded-full transition-all shadow-lg shadow-[#C79C3F]/25 flex items-center justify-center gap-2 text-xs uppercase tracking-wider cursor-pointer active:scale-95"
                >
                  <span>Avançar para Simulação</span>
                  <ArrowRight size={16} />
                </button>
              </>
            ) : (
              <>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                    <DollarSign size={14} className="text-[#122C58]" /> Renda Familiar Bruta Estimada
                  </label>
                  <select
                    name="incomeBracket"
                    value={formData.incomeBracket}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#C79C3F] focus:bg-white rounded-xl px-4 py-3 text-slate-900 text-sm outline-none transition-all cursor-pointer"
                  >
                    <option value="Até R$ 2.640 (Faixa 1 - Maior Subsídio)">Até R$ 2.640 (Maior Subsídio)</option>
                    <option value="R$ 2.640 a R$ 4.400 (Faixa 2 MCMV)">R$ 2.640 a R$ 4.400 (Faixa 2)</option>
                    <option value="R$ 4.400 a R$ 8.000 (Faixa 3 MCMV)">R$ 4.400 a R$ 8.000 (Faixa 3)</option>
                    <option value="Acima de R$ 8.000">Acima de R$ 8.000</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                      <Wallet size={14} className="text-[#122C58]" /> Tem FGTS?
                    </label>
                    <select
                      name="hasFgts"
                      value={formData.hasFgts}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-[#C79C3F] focus:bg-white rounded-xl px-3 py-3 text-slate-900 text-sm outline-none transition-all cursor-pointer"
                    >
                      <option value="Sim, tenho saldo de FGTS">Sim, tenho FGTS</option>
                      <option value="Não possuo FGTS">Não tenho FGTS</option>
                      <option value="Não sei se tenho">Não sei</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                      <Home size={14} className="text-[#122C58]" /> Situação Atual
                    </label>
                    <select
                      name="housingStatus"
                      value={formData.housingStatus}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-[#C79C3F] focus:bg-white rounded-xl px-3 py-3 text-slate-900 text-sm outline-none transition-all cursor-pointer"
                    >
                      <option value="Moro de Aluguel">Moro de Aluguel</option>
                      <option value="Moro com Familiares">Com Familiares</option>
                      <option value="Quero Investir">Investimento</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="w-1/3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 rounded-full text-xs transition-all cursor-pointer"
                  >
                    Voltar
                  </button>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-2/3 bg-[#C79C3F] hover:bg-[#B58B32] text-white font-extrabold py-3.5 px-6 rounded-full transition-all shadow-lg shadow-[#C79C3F]/25 flex items-center justify-center gap-2 text-xs uppercase tracking-wider cursor-pointer active:scale-95"
                  >
                    {loading ? (
                      <span className="inline-block animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                    ) : (
                      <>
                        <Send size={16} />
                        Enviar e Simular
                      </>
                    )}
                  </button>
                </div>
              </>
            )}
          </form>

          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <span className="flex items-center gap-1">
              <ShieldCheck size={14} className="text-[#6FC34B]" /> Dados 100% Protegidos
            </span>
            <span className="font-bold text-[#122C58]">{VISTAHAVEN_DATA.brand.creci}</span>
          </div>
        </div>
      )}
    </div>
  );
}
