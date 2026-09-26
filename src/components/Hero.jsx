import React, { useState, useEffect } from 'react';
import { ArrowDown, MessageSquare, Calculator, ShieldCheck, CheckCircle2, Award } from 'lucide-react';
import { VISTAHAVEN_DATA, getWhatsAppUrl } from '../data/propertyData';
import { slowScrollTo } from '../utils/scrollUtils';
import { ElasticGallery } from './ui/elastic-gallery';
import LogoEduarda from './ui/LogoEduarda';
import BrokerAvatar from './ui/BrokerAvatar';
import { cn } from '@/lib/utils';

export default function Hero({ onRequestFormModal }) {
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 10) {
        setHasInteracted(true);
      }
    };
    window.addEventListener('scroll', handleWindowScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, []);

  const handleInteraction = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
    }
  };

  const handleScrollDown = (e) => {
    e.preventDefault();
    slowScrollTo('#who-we-are', 1100, 75);
  };

  const isVisible = hasInteracted;

  const whatsappHeroUrl = getWhatsAppUrl(
    VISTAHAVEN_DATA.brand.whatsappScheduleMessage ||
    "Olá Danielle! Vim pelo site e gostaria de agendar uma visita e tirar dúvidas sobre os imóveis Minha Casa Minha Vida."
  );

  return (
    <section
      id="home"
      onMouseMove={handleInteraction}
      onTouchStart={handleInteraction}
      onClick={handleInteraction}
      onWheel={handleInteraction}
      className="relative min-h-screen flex flex-col justify-between pt-20 pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden select-none"
    >

      {/* Background Interativo com Elastic Gallery */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <ElasticGallery isHeroBackground={true} />

        {/* Overlay preto leve com blur suave para contraste sem tirar as cores naturais das fotos */}
        <div
          className={cn(
            "absolute inset-0 transition-opacity duration-700 pointer-events-none",
            isVisible
              ? "opacity-100 bg-gradient-to-r from-black/80 via-black/45 to-black/70 backdrop-blur-[1px]"
              : "opacity-100 bg-black/45 backdrop-blur-[0.5px]"
          )}
        />

        {/* Vignette inferior preto suave */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
      </div>

      {/* Tela de Abertura Inicial (Impacto em 3 segundos) */}
      <div
        className={cn(
          "absolute inset-0 z-20 flex flex-col items-center justify-center transition-all duration-700 ease-out px-4",
          !isVisible
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-6 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6 max-w-4xl translate-y-[10%] sm:translate-y-0">

          {/* Avatar / Foto Oficial da Corretora com borda dourada e branca e selo CRECI */}
          <BrokerAvatar size="hero" />

          {/* Logo e Nome Oficial */}
          <div className="transform transition-transform duration-700 hover:scale-105">
            <LogoEduarda
              variant="light"
              showCreci={false}
              className="drop-shadow-2xl"
            />
          </div>

          {/* Título Principal de Alto Impacto do PRD */}
          <div className="space-y-3">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white font-heading tracking-tight leading-tight drop-shadow-2xl">
              Realize o Sonho da Sua{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F28C0F] via-[#ffb049] to-[#F28C0F]">
                Casa Própria
              </span>{' '}
              na Grande Recife com Segurança.
            </h1>
            <p className="text-slate-200 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-md">
              {VISTAHAVEN_DATA.hero.subtext}
            </p>
          </div>

<<<<<<< Updated upstream
          {/* CTAs de Conversão Imediata (Lado a Lado e Menores no Mobile) */}
          <div className="pt-2 flex flex-row items-center justify-center gap-2 sm:gap-3.5 w-full max-w-sm sm:max-w-none mx-auto">
            <button
              onClick={onRequestFormModal}
              className="flex-1 sm:flex-initial bg-[#F28C0F] hover:bg-[#DE7D09] text-white font-extrabold text-[11px] sm:text-base px-2.5 sm:px-8 py-2.5 sm:py-3.5 rounded-full transition-all shadow-xl shadow-[#F28C0F]/30 active:scale-95 hover:scale-105 cursor-pointer flex items-center justify-center gap-1.5 sm:gap-2.5 animate-pulseOrange"
=======
          {/* CTAs de Conversão Imediata (Botão Laranja de Destaque) */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
            <button
              onClick={onRequestFormModal}
              className="w-full sm:w-auto bg-[#F28C0F] hover:bg-[#DE7D09] text-white font-extrabold text-sm sm:text-base px-8 py-4 rounded-full transition-all shadow-xl shadow-[#F28C0F]/30 active:scale-95 hover:scale-105 cursor-pointer flex items-center justify-center gap-2.5 animate-pulseOrange"
>>>>>>> Stashed changes
            >
              <Calculator size={15} className="shrink-0 sm:w-[18px] sm:h-[18px]" />
              <span className="hidden sm:inline">Quero Simular Meu Financiamento</span>
              <span className="sm:hidden whitespace-nowrap">Simular Financiamento</span>
            </button>

            <a
              href={whatsappHeroUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] sm:text-base px-2.5 sm:px-6 py-2.5 sm:py-3.5 rounded-full transition-all shadow-lg active:scale-95 flex items-center justify-center gap-1.5 sm:gap-2 border border-emerald-400/40"
            >
<<<<<<< Updated upstream
              <MessageSquare size={15} className="shrink-0 sm:w-[18px] sm:h-[18px]" />
              <span className="whitespace-nowrap">{VISTAHAVEN_DATA.brand.ctaSchedule}</span>
=======
              <MessageSquare size={18} />
              <span>{VISTAHAVEN_DATA.brand.ctaSchedule}</span>
>>>>>>> Stashed changes
            </a>
          </div>

          {/* Indicador sutil para rolar */}
          <div className="pt-4">
            <div className="w-10 h-10 rounded-full bg-[#101C30]/80 border border-[#F28C0F]/40 flex items-center justify-center shadow-lg shadow-black/40 animate-bounceSlow cursor-pointer" onClick={handleScrollDown}>
              <ArrowDown size={16} className="text-[#F28C0F]" />
            </div>
          </div>

        </div>
      </div>

      {/* Hero Content Container (Aparece suavemente após rolagem/interação) */}
      <div
        className={cn(
          "relative z-10 max-w-5xl w-full mx-auto my-auto flex flex-col items-center text-center py-6 transition-all duration-700 ease-out",
          isVisible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-8 pointer-events-none select-none"
        )}
      >
        <div className="space-y-4 sm:space-y-6 max-w-3xl px-4 py-6 sm:p-0 rounded-3xl sm:rounded-none bg-black/40 sm:bg-transparent backdrop-blur-[2px] sm:backdrop-blur-none border border-white/10 sm:border-none shadow-2xl sm:shadow-none">

          {/* Main Headline */}
          <h1 className="text-2xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.15] sm:leading-[1.1] font-heading drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
            Realize o Sonho da Sua{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F28C0F] via-[#ffb049] to-[#F28C0F]">
              Casa Própria
            </span>{' '}
            na Grande Recife
          </h1>

          {/* Subtitle */}
          <p className="text-slate-200 text-xs sm:text-base max-w-xl mx-auto leading-relaxed font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] px-2">
            {VISTAHAVEN_DATA.hero.subtext}
          </p>

<<<<<<< Updated upstream
          {/* CTAs de Conversão Laranja & WhatsApp (Lado a Lado e Menores no Mobile) */}
          <div className="pt-2 flex flex-row items-center justify-center gap-2 sm:gap-3.5 w-full max-w-sm sm:max-w-none mx-auto">
            <button
              onClick={onRequestFormModal}
              className="flex-1 sm:flex-initial bg-[#F28C0F] hover:bg-[#DE7D09] text-white font-extrabold text-[11px] sm:text-base px-2.5 sm:px-8 py-2.5 sm:py-3.5 rounded-full transition-all shadow-xl shadow-[#F28C0F]/30 active:scale-95 hover:scale-105 cursor-pointer flex items-center justify-center gap-1.5 sm:gap-2.5"
=======
          {/* CTAs de Conversão Laranja & WhatsApp */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={onRequestFormModal}
              className="w-full sm:w-auto bg-[#F28C0F] hover:bg-[#DE7D09] text-white font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all shadow-xl shadow-[#F28C0F]/30 active:scale-95 hover:scale-105 cursor-pointer flex items-center justify-center gap-2.5"
>>>>>>> Stashed changes
            >
              <Calculator size={15} className="shrink-0 sm:w-[18px] sm:h-[18px]" />
              <span className="hidden sm:inline">Simular Meu Financiamento</span>
              <span className="sm:hidden whitespace-nowrap">Simular Financiamento</span>
            </button>

            <a
              href={whatsappHeroUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] sm:text-base px-2.5 sm:px-6 py-2.5 sm:py-3.5 rounded-full transition-all shadow-lg active:scale-95 flex items-center justify-center gap-1.5 sm:gap-2"
            >
              <MessageSquare size={15} className="shrink-0 sm:w-[18px] sm:h-[18px]" />
              <span className="whitespace-nowrap">{VISTAHAVEN_DATA.brand.ctaSchedule}</span>
            </a>
          </div>

          {/* Badges de Autoridade */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-300">
            <span className="flex items-center gap-1.5 bg-[#101C30]/80 px-3 py-1 rounded-full border border-white/10">
              <ShieldCheck size={14} className="text-[#6FC34B]" /> Correspondente Caixa Homologado
            </span>
            <span className="flex items-center gap-1.5 bg-[#101C30]/80 px-3 py-1 rounded-full border border-white/10">
<<<<<<< Updated upstream
              <Award size={14} className="text-[#F28C0F]" /> Parceria Oficial Aurora Imobiliária
=======
              <Award size={14} className="text-[#F28C0F]" /> Parceria Oficial RM Home
>>>>>>> Stashed changes
            </span>
          </div>

        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div
        className={cn(
          "relative z-10 max-w-7xl w-full mx-auto flex justify-center pb-2 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        <div
          onClick={handleScrollDown}
          className="w-9 h-9 rounded-full bg-[#101C30]/90 hover:bg-[#F28C0F] border border-[#F28C0F]/40 flex items-center justify-center text-white cursor-pointer transition-all hover:scale-110 shadow-lg animate-bounceSlow"
          title="Rolar para baixo"
        >
          <ArrowDown size={14} className="text-[#F28C0F] hover:text-white" />
        </div>
      </div>

    </section>
  );
}
