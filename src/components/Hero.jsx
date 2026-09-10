import React, { useState, useEffect } from 'react';
import { ArrowDown, MessageSquare, Calculator, ShieldCheck, CheckCircle2, Award } from 'lucide-react';
import { VISTAHAVEN_DATA } from '../data/propertyData';
import { slowScrollTo } from '../utils/scrollUtils';
import { ElasticGallery } from './ui/elastic-gallery';
import LogoEduarda from './ui/LogoEduarda';
import { cn } from '@/lib/utils';
import matheusFoto from '../img/matheus.jpg';

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

  const whatsappHeroUrl = `${VISTAHAVEN_DATA.brand.whatsapp}&text=${encodeURIComponent(VISTAHAVEN_DATA.brand.whatsappSimulationMessage)}`;

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
        <div className="flex flex-col items-center text-center space-y-6 max-w-4xl">
          
          {/* Avatar / Foto Real do Matheus Ferreira */}
          <div className="relative group">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-tr from-[#C79C3F] via-[#122C58] to-[#6FC34B] shadow-2xl shadow-black/60">
              <img
                src={matheusFoto}
                alt="Matheus Ferreira - Corretor de Imóveis CRECI 20367"
                className="w-full h-full object-cover rounded-full object-top shadow-inner"
              />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#C79C3F] text-[#0B1C38] font-black text-[10px] sm:text-[11px] px-3 py-0.5 rounded-full shadow-lg whitespace-nowrap uppercase tracking-wider flex items-center gap-1 border border-white/40">
              <CheckCircle2 size={12} /> CRECI 20367
            </div>
          </div>

          {/* Logo e Nome Oficial */}
          <div className="transform transition-transform duration-700 hover:scale-105">
            <LogoEduarda
              variant="light"
              className="drop-shadow-2xl"
            />
          </div>

          {/* Título Principal de Alto Impacto do PRD */}
          <div className="space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#122C58]/90 border border-[#C79C3F]/60 text-xs uppercase font-extrabold tracking-wider text-[#C79C3F] shadow-xl">
              {VISTAHAVEN_DATA.hero.badge}
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white font-heading tracking-tight leading-tight drop-shadow-2xl">
              Realize o Sonho da Sua{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C79C3F] via-[#e5b95c] to-[#C79C3F]">
                Casa Própria
              </span>{' '}
              na Grande Recife com Segurança.
            </h1>
            <p className="text-slate-200 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-md">
              {VISTAHAVEN_DATA.hero.subtext}
            </p>
          </div>

          {/* CTAs de Conversão Imediata (Botão Dourado de Destaque) */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
            <button
              onClick={onRequestFormModal}
              className="w-full sm:w-auto bg-[#C79C3F] hover:bg-[#B58B32] text-white font-extrabold text-sm sm:text-base px-8 py-4 rounded-full transition-all shadow-xl shadow-[#C79C3F]/30 active:scale-95 hover:scale-105 cursor-pointer flex items-center justify-center gap-2.5 animate-pulseGold"
            >
              <Calculator size={18} />
              <span>Quero Simular Meu Financiamento</span>
            </button>

            <a
              href={whatsappHeroUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base px-6 py-4 rounded-full transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 border border-emerald-400/40"
            >
              <MessageSquare size={18} />
              <span>Falar no WhatsApp</span>
            </a>
          </div>

          {/* Indicador sutil para rolar */}
          <div className="pt-4">
            <div className="w-10 h-10 rounded-full bg-[#0B1C38]/80 border border-[#C79C3F]/40 flex items-center justify-center shadow-lg shadow-black/40 animate-bounceSlow cursor-pointer" onClick={handleScrollDown}>
              <ArrowDown size={16} className="text-[#C79C3F]" />
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
          
          {/* Eyebrow Label com Borda Dourada */}
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C79C3F]/80 bg-[#122C58]/90 backdrop-blur-md text-[10px] sm:text-xs uppercase font-extrabold tracking-[0.2em] text-[#C79C3F] font-heading shadow-2xl">
              {VISTAHAVEN_DATA.hero.badge}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-2xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.15] sm:leading-[1.1] font-heading drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
            Realize o Sonho da Sua{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C79C3F] via-[#f3cb70] to-[#C79C3F]">
              Casa Própria
            </span>{' '}
            na Grande Recife
          </h1>

          {/* Subtitle */}
          <p className="text-slate-200 text-xs sm:text-base max-w-xl mx-auto leading-relaxed font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] px-2">
            {VISTAHAVEN_DATA.hero.subtext}
          </p>

          {/* CTAs de Conversão Dourado & WhatsApp */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={onRequestFormModal}
              className="w-full sm:w-auto bg-[#C79C3F] hover:bg-[#B58B32] text-white font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all shadow-xl shadow-[#C79C3F]/30 active:scale-95 hover:scale-105 cursor-pointer flex items-center justify-center gap-2.5"
            >
              <Calculator size={18} />
              <span>Simular Meu Financiamento</span>
            </button>

            <a
              href={whatsappHeroUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-full transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
            >
              <MessageSquare size={18} />
              <span>Falar no WhatsApp</span>
            </a>
          </div>

          {/* Badges de Autoridade */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-300">
            <span className="flex items-center gap-1.5 bg-[#122C58]/80 px-3 py-1 rounded-full border border-white/10">
              <ShieldCheck size={14} className="text-[#6FC34B]" /> Correspondente Caixa Homologado
            </span>
            <span className="flex items-center gap-1.5 bg-[#122C58]/80 px-3 py-1 rounded-full border border-white/10">
              <Award size={14} className="text-[#C79C3F]" /> Parceria Oficial RM Home
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
          className="w-9 h-9 rounded-full bg-[#122C58]/90 hover:bg-[#C79C3F] border border-[#C79C3F]/40 flex items-center justify-center text-white cursor-pointer transition-all hover:scale-110 shadow-lg animate-bounceSlow"
          title="Rolar para baixo"
        >
          <ArrowDown size={14} className="text-[#C79C3F] hover:text-white" />
        </div>
      </div>

    </section>
  );
}
