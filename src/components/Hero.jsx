import React, { useState, useEffect } from 'react';
import { Search, Zap, ArrowDown, Sparkles, Eye, EyeOff } from 'lucide-react';
import { VISTAHAVEN_DATA } from '../data/propertyData';
import { slowScrollTo } from '../utils/scrollUtils';
import { ElasticGallery } from './ui/elastic-gallery';
import LogoEduarda from './ui/LogoEduarda';
import { cn } from '@/lib/utils';

export default function Hero({ onRequestFormModal }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [hasInteracted, setHasInteracted] = useState(false);
  const [manualImmersive, setManualImmersive] = useState(false);

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

  const handleSearch = (e) => {
    e.preventDefault();
    onRequestFormModal();
  };

  const handleScrollDown = (e) => {
    e.preventDefault();
    slowScrollTo('#who-we-are', 1100, 75);
  };

  const isVisible = hasInteracted && !manualImmersive;

  return (
    <section
      id="home"
      onMouseMove={handleInteraction}
      onTouchStart={handleInteraction}
      onClick={handleInteraction}
      onWheel={handleInteraction}
      className="relative h-screen min-h-screen flex flex-col justify-between pt-16 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden select-none"
    >
      
      {/* Interactive Elastic Gallery Background - 100% Fullscreen & High Visibility */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <ElasticGallery isHeroBackground={true} />
        
        {/* Very Light & Soft Gradient Overlay only when text is active - No heavy blur */}
        <div
          className={cn(
            "absolute inset-0 transition-opacity duration-700 pointer-events-none",
            isVisible
              ? "opacity-100 bg-gradient-to-r from-slate-950/75 via-slate-950/30 to-transparent"
              : "opacity-100 bg-slate-950/40 backdrop-blur-[1px]"
          )}
        />
        
        {/* Subtle Bottom vignette to blend into page footer/sections */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Tela de Abertura Inicial (Logo + Frase) - Máximo Minimalismo: sem texto 'role ou toque', apenas a logo, a frase e o ícone sutil */}
      <div
        className={cn(
          "absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none transition-all duration-700 ease-out px-4",
          !isVisible
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-6 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center text-center space-y-6 max-w-3xl">
          {/* Logo Oficial de Eduarda Jackes (subtítulo nas cores padrão da página) */}
          <div className="transform transition-transform duration-700 hover:scale-105">
            <LogoEduarda
              variant="light"
              subtitleColor="brand"
              className="scale-110 sm:scale-125 md:scale-140 drop-shadow-2xl mb-2"
            />
          </div>

          {/* Frase nas cores padrão da página */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight drop-shadow-2xl">
            Consultoria especialista{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-indigo-300">
              em imóveis de alto padrão
            </span>
          </h2>

          {/* Apenas o ícone flutuante sutil (máximo minimalismo) */}
          <div className="pt-6">
            <div className="w-10 h-10 rounded-full bg-slate-950/60 backdrop-blur-md border border-purple-500/30 flex items-center justify-center shadow-lg shadow-purple-500/10 animate-bounceSlow">
              <ArrowDown size={16} className="text-purple-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Top Bar Floating Control (Permite alternar para modo imersivo a qualquer momento) */}
      <div className="relative z-20 max-w-7xl w-full mx-auto flex justify-end">
        {hasInteracted && (
          <button
            onClick={() => setManualImmersive(!manualImmersive)}
            className="hidden sm:flex bg-slate-950/70 hover:bg-slate-900 border border-white/20 hover:border-purple-400/60 text-white text-[11px] font-bold px-3.5 py-1.5 rounded-full backdrop-blur-md items-center gap-1.5 transition-all duration-300 shadow-xl cursor-pointer active:scale-95"
            title={manualImmersive ? "Ver textos" : "Ocultar textos para ver as fotos"}
          >
            {manualImmersive ? <Eye size={13} className="text-purple-400" /> : <EyeOff size={13} className="text-slate-400" />}
            <span>{manualImmersive ? "Ver Detalhes" : "Modo Fotos"}</span>
          </button>
        )}
      </div>

      {/* Hero Content Container (Aparece suavemente após interação) - 100% Minimalista: sem pesquisa e sem cards flutuantes */}
      <div
        className={cn(
          "relative z-10 max-w-5xl w-full mx-auto my-auto flex flex-col items-center text-center py-6 transition-all duration-700 ease-out",
          isVisible
            ? "opacity-100 translate-y-0 pointer-events-none"
            : "opacity-0 translate-y-8 pointer-events-none select-none"
        )}
      >
        <div className={cn(
          "space-y-3.5 sm:space-y-6 max-w-3xl px-4 py-6 sm:p-0 rounded-3xl sm:rounded-none bg-slate-950/45 sm:bg-transparent backdrop-blur-[2px] sm:backdrop-blur-none border border-white/10 sm:border-none shadow-2xl sm:shadow-none",
          isVisible ? "pointer-events-auto" : "pointer-events-none"
        )}>
          {/* Eyebrow Label com Borda Branca & Fundo de Alto Contraste */}
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full border border-white/90 bg-slate-950/85 backdrop-blur-md text-[10px] sm:text-xs uppercase font-black tracking-[0.2em] sm:tracking-[0.22em] text-purple-300 font-heading shadow-2xl drop-shadow-md">
              {VISTAHAVEN_DATA.hero.badge}
            </span>
          </div>

          {/* Main Display Headline com Alto Contraste para Mobile */}
          <h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15] sm:leading-[1.1] font-heading drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
            {VISTAHAVEN_DATA.hero.headlineLine1}{' '}
            <br />
            que{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-200 to-indigo-200 drop-shadow-md">
              {VISTAHAVEN_DATA.hero.headlineHighlight}
            </span>
            <br />
            {VISTAHAVEN_DATA.hero.headlineLine2}
          </h1>

          {/* Subtitle Paragraph com Legibilidade Otimizada */}
          <p className="text-slate-100 text-xs sm:text-base max-w-xl mx-auto leading-relaxed sm:leading-relaxed font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] px-2">
            {VISTAHAVEN_DATA.hero.subtext}
          </p>
        </div>
      </div>

      {/* Bottom Scroll Indicator - Apenas o ícone flutuante sutil minimalista */}
      <div
        className={cn(
          "relative z-10 max-w-7xl w-full mx-auto flex justify-center pb-2 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        <div
          onClick={handleScrollDown}
          className="w-9 h-9 rounded-full bg-slate-900/80 hover:bg-purple-600 border border-purple-400/30 flex items-center justify-center text-white cursor-pointer transition-all hover:scale-110 shadow-lg animate-bounceSlow"
          title="Rolar para baixo"
        >
          <ArrowDown size={14} className="text-purple-200" />
        </div>
      </div>

    </section>
  );
}


