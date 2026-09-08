import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, Sparkles, MessageSquare, ArrowRight, User, Phone, Mail, DollarSign, Target, Clock, X } from 'lucide-react';
import { VISTAHAVEN_DATA } from '../data/propertyData';

export default function QualificationForm({ onLeadCaptured, isModal = false, onCloseModal }) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    incomeBracket: 'R$ 500k a R$ 1MM',
    purpose: 'Moradia Própria',
    timeframe: 'Imediata (Até 30 dias)'
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

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      if (onLeadCaptured) {
        onLeadCaptured({
          ...formData,
          brand: VISTAHAVEN_DATA.brand.name,
          timestamp: new Date().toISOString()
        });
      }

      const message = `Olá Eduarda Jackes! Gostaria de atendimento exclusivo para imóveis em Recife - PE.\n\n` +
        `👤 *Nome:* ${formData.name}\n` +
        `📱 *WhatsApp:* ${formData.whatsapp}\n` +
        `📧 *E-mail:* ${formData.email || 'Não informado'}\n` +
        `💰 *Faixa de Orçamento:* ${formData.incomeBracket}\n` +
        `🎯 *Objetivo:* ${formData.purpose}\n` +
        `⏳ *Previsão:* ${formData.timeframe}`;

      const encodedMsg = encodeURIComponent(message);
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${VISTAHAVEN_DATA.brand.whatsappPhone}&text=${encodedMsg}`;
      
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 1000);

    }, 600);
  };

  return (
    <div className={`bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200/80 relative overflow-hidden text-slate-900 ${isModal ? 'max-w-xl w-full mx-auto' : 'w-full'}`}>
      
      {/* Background Subtle Gradient Glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {submitted ? (
        <div className="text-center py-8 space-y-4">
          <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
            <CheckCircle2 size={36} />
          </div>
          <h3 className="text-2xl font-extrabold text-slate-900 font-heading">Solicitação Enviada com Sucesso!</h3>
          <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
            Obrigado <span className="font-bold text-purple-600">{formData.name}</span>. Você está sendo redirecionado para o WhatsApp do nosso consultor...
          </p>
          <div className="pt-4 flex flex-col gap-3">
            <a
              href={`https://api.whatsapp.com/send?phone=${VISTAHAVEN_DATA.brand.whatsappPhone}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3.5 px-6 rounded-full transition-all shadow-md shadow-purple-600/20"
            >
              <MessageSquare size={20} />
              Abrir WhatsApp Agora
            </a>
            {isModal && (
              <button
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
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-purple-100 text-purple-700">
                <Sparkles size={12} /> Atendimento Prioritário
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 mt-2 font-heading">
                {step === 1 ? 'Receba Catálogo & Tabela de Imóveis' : 'Qualificação do Seu Perfil'}
              </h3>
            </div>
            {isModal && (
              <button onClick={onCloseModal} className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer">
                <X size={20} />
              </button>
            )}
          </div>

          <form onSubmit={step === 1 ? handleNextStep : handleSubmit} className="space-y-4">
            {step === 1 ? (
              <>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                    <User size={14} className="text-purple-600" /> Seu Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Ex: Ana Maria Silva"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-purple-600 focus:bg-white rounded-xl px-4 py-3 text-slate-900 text-sm outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                    <Phone size={14} className="text-purple-600" /> WhatsApp com DDD *
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    required
                    placeholder="Ex: (11) 99999-8888"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-purple-600 focus:bg-white rounded-xl px-4 py-3 text-slate-900 text-sm outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                    <Mail size={14} className="text-slate-400" /> E-mail (Opcional)
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Ex: ana@exemplo.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-purple-600 focus:bg-white rounded-xl px-4 py-3 text-slate-900 text-sm outline-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3.5 px-6 rounded-full transition-all shadow-md shadow-purple-600/20 flex items-center justify-center gap-2 text-xs uppercase tracking-wider cursor-pointer"
                >
                  Avançar & Ver Opções
                  <ArrowRight size={16} />
                </button>
              </>
            ) : (
              <>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                    <DollarSign size={14} className="text-purple-600" /> Faixa de Orçamento Estimada
                  </label>
                  <select
                    name="incomeBracket"
                    value={formData.incomeBracket}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-purple-600 focus:bg-white rounded-xl px-4 py-3 text-slate-900 text-sm outline-none transition-all cursor-pointer"
                  >
                    <option value="R$ 400k a R$ 700k">R$ 400k a R$ 700k</option>
                    <option value="R$ 700k a R$ 1,2MM">R$ 700k a R$ 1,2MM</option>
                    <option value="Acima de R$ 1,2MM">Acima de R$ 1,2MM</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                      <Target size={14} className="text-purple-600" /> Objetivo
                    </label>
                    <select
                      name="purpose"
                      value={formData.purpose}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-purple-600 focus:bg-white rounded-xl px-3 py-3 text-slate-900 text-sm outline-none transition-all cursor-pointer"
                    >
                      <option value="Moradia Própria">Moradia Própria</option>
                      <option value="Investimento">Investimento</option>
                      <option value="Segunda Moradia">Segunda Moradia</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                      <Clock size={14} className="text-purple-600" /> Previsão
                    </label>
                    <select
                      name="timeframe"
                      value={formData.timeframe}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-purple-600 focus:bg-white rounded-xl px-3 py-3 text-slate-900 text-sm outline-none transition-all cursor-pointer"
                    >
                      <option value="Imediata (Até 30 dias)">Imediata (30d)</option>
                      <option value="3 a 6 meses">3 a 6 meses</option>
                      <option value="Apenas Pesquisando">Pesquisando</option>
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
                    className="w-2/3 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3.5 px-6 rounded-full transition-all shadow-md shadow-purple-600/20 flex items-center justify-center gap-2 text-xs uppercase tracking-wider cursor-pointer"
                  >
                    {loading ? (
                      <span className="inline-block animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                    ) : (
                      <>
                        <Send size={16} />
                        Enviar Solicitação
                      </>
                    )}
                  </button>
                </div>
              </>
            )}
          </form>

          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1">
              <ShieldCheck size={14} className="text-purple-600" /> Atendimento 100% Seguro (LGPD)
            </span>
            <span>{VISTAHAVEN_DATA.brand.creci}</span>
          </div>
        </div>
      )}
    </div>
  );
}
