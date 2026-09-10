import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Calculator } from 'lucide-react';
import { VISTAHAVEN_DATA } from '../data/propertyData';
import { slowScrollTo } from '../utils/scrollUtils';
import LogoEduarda from './ui/LogoEduarda';

export default function Header({ onRequestFormModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileScrolled50, setIsMobileScrolled50] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleInteraction = () => {
      setHasInteracted(true);
    };

    window.addEventListener('mousemove', handleInteraction, { once: true });
    window.addEventListener('touchstart', handleInteraction, { once: true });
    window.addEventListener('wheel', handleInteraction, { once: true });

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }

      setIsScrolled(currentScroll > 20);
      if (currentScroll > 20) {
        setHasInteracted(true);
      }

      // No mobile: só ativa após rolar 50% da altura da tela (0.5 * window.innerHeight)
      const mobileTriggerPoint = window.innerHeight * 0.5;
      setIsMobileScrolled50(currentScroll >= mobileTriggerPoint);

      // Detecta seção ativa para destacar no menu
      const sections = ['home', 'who-we-are', 'services', 'properties', 'indicou-ganhou'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('wheel', handleInteraction);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveSection(targetId.replace('#', ''));
    slowScrollTo(targetId, 950, 75);
  };

  const showDesktopHeader = hasInteracted || isScrolled;
  const showMobileHeader = isMobileScrolled50;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
      showMobileHeader
        ? 'translate-y-0 opacity-100 pointer-events-auto'
        : showDesktopHeader
          ? 'max-sm:-translate-y-full max-sm:opacity-0 max-sm:pointer-events-none sm:translate-y-0 sm:opacity-100 sm:pointer-events-auto'
          : '-translate-y-full opacity-0 pointer-events-none'
    } ${
      isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-md shadow-[#122C58]/5 border-b border-slate-200/80 py-0'
        : 'bg-white/90 backdrop-blur-sm border-b border-slate-100/80'
    }`}>
      {/* Top Interactive Scroll Progress Bar com Gradiente Azul Marinho & Dourado */}
      <div
        className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-[#122C58] via-[#C79C3F] to-[#6FC34B] transition-all duration-150 ease-out z-50 shadow-sm shadow-[#C79C3F]/50"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo Oficial Matheus Ferreira & RM Home */}
        <LogoEduarda
          variant="dark"
          onClick={(e) => handleNavClick(e, '#home')}
        />

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-700">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className={`transition-all py-1 relative ${
              activeSection === 'home'
                ? 'text-[#122C58] font-bold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#C79C3F] after:rounded-full'
                : 'hover:text-[#122C58]'
            }`}
          >
            Início
          </a>
          <a
            href="#who-we-are"
            onClick={(e) => handleNavClick(e, '#who-we-are')}
            className={`transition-all py-1 relative ${
              activeSection === 'who-we-are'
                ? 'text-[#122C58] font-bold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#C79C3F] after:rounded-full'
                : 'hover:text-[#122C58]'
            }`}
          >
            Sobre
          </a>
          <a
            href="#services"
            onClick={(e) => handleNavClick(e, '#services')}
            className={`transition-all py-1 relative ${
              activeSection === 'services'
                ? 'text-[#122C58] font-bold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#C79C3F] after:rounded-full'
                : 'hover:text-[#122C58]'
            }`}
          >
            Como Funciona
          </a>
          <a
            href="#properties"
            onClick={(e) => handleNavClick(e, '#properties')}
            className={`transition-all py-1 relative ${
              activeSection === 'properties'
                ? 'text-[#122C58] font-bold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#C79C3F] after:rounded-full'
                : 'hover:text-[#122C58]'
            }`}
          >
            Imóveis
          </a>
          {/* Link para Indicou Ganhou comentado temporariamente
          <a
            href="#indicou-ganhou"
            onClick={(e) => handleNavClick(e, '#indicou-ganhou')}
            className={`transition-all py-1 relative flex items-center gap-1 ${
              activeSection === 'indicou-ganhou'
                ? 'text-[#122C58] font-bold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#6FC34B] after:rounded-full'
                : 'text-emerald-700 hover:text-emerald-800'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#6FC34B] animate-pulse"></span>
            <span>Ganhe R$ 500</span>
          </a> */}
        </nav>

        {/* Right CTA Button Dourado */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onRequestFormModal}
            className="bg-[#C79C3F] hover:bg-[#B58B32] text-white font-bold text-sm px-6 py-2.5 rounded-full transition-all shadow-md shadow-[#C79C3F]/30 active:scale-95 hover:scale-105 cursor-pointer flex items-center gap-2 group"
          >
            <Calculator size={16} className="group-hover:rotate-12 transition-transform text-white" />
            <span>Simular Financiamento</span>
          </button>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#122C58] hover:text-[#C79C3F] cursor-pointer transition-colors"
          aria-label="Abrir Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Menu Dropdown with Slow Scroll */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200/80 px-6 py-4 space-y-3 animate-fadeIn shadow-xl">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="block text-sm font-bold text-[#122C58] py-2 border-b border-slate-100"
          >
            Início
          </a>
          <a
            href="#who-we-are"
            onClick={(e) => handleNavClick(e, '#who-we-are')}
            className="block text-sm font-semibold text-slate-700 hover:text-[#122C58] py-2 border-b border-slate-100"
          >
            Sobre
          </a>
          <a
            href="#services"
            onClick={(e) => handleNavClick(e, '#services')}
            className="block text-sm font-semibold text-slate-700 hover:text-[#122C58] py-2 border-b border-slate-100"
          >
            Como Funciona
          </a>
          <a
            href="#properties"
            onClick={(e) => handleNavClick(e, '#properties')}
            className="block text-sm font-semibold text-slate-700 hover:text-[#122C58] py-2 border-b border-slate-100"
          >
            Imóveis MCMV
          </a>
          {/* Link mobile para Indicou Ganhou comentado temporariamente
          <a
            href="#indicou-ganhou"
            onClick={(e) => handleNavClick(e, '#indicou-ganhou')}
            className="block text-sm font-bold text-emerald-700 py-2 border-b border-slate-100 flex items-center gap-1.5"
          >
            <span className="w-2 h-2 rounded-full bg-[#6FC34B]"></span>
            Indicou, Ganhou R$ 500 no Pix
          </a> */}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onRequestFormModal();
            }}
            className="w-full mt-2 bg-[#C79C3F] hover:bg-[#B58B32] text-white font-bold py-3 rounded-full text-xs uppercase tracking-wider shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            <Calculator size={15} />
            Simular Financiamento
          </button>
        </div>
      )}
    </header>
  );
}
