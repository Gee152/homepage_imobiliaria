import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhoWeAreStickyScroll from './components/WhoWeAreStickyScroll';
import Solutions from './components/Solutions';
import TrustedLocations from './components/TrustedLocations';
import QualificationForm from './components/QualificationForm';
import LogoEduarda from './components/ui/LogoEduarda';
import SocialDock from './components/ui/SocialDock';
import BioLinks from './components/BioLinks';
import { VISTAHAVEN_DATA } from './data/propertyData';
import { ShieldCheck, ArrowUp } from 'lucide-react';
import { slowScrollTo } from './utils/scrollUtils';

import StructuredDataSEO from './components/StructuredDataSEO';

// Função síncrona para detectar rota antes da primeira renderização (evita piscar a landing page)
const getActiveRoute = () => {
  if (typeof window === 'undefined') return 'home';
  const urlParams = new URLSearchParams(window.location.search);
  const pageParam = (urlParams.get('page') || urlParams.get('p') || urlParams.get('view') || '').toLowerCase();
  const hash = (window.location.hash || '').toLowerCase();
  const path = (window.location.pathname || '').toLowerCase();

  if (
    pageParam === 'links' || 
    pageParam === 'bio' || 
    pageParam === 'linktree' ||
    hash === '#/links' || 
    hash === '#links' || 
    hash === '#/bio' || 
    hash === '#bio' ||
    path.endsWith('/links') || 
    path.endsWith('/bio')
  ) {
    return 'links';
  }
  return 'home';
};

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lastCapturedLead, setLastCapturedLead] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  // Inicialização síncrona: já começa diretamente com 'links' se a URL tiver ?page=links
  const [currentRoute, setCurrentRoute] = useState(getActiveRoute);

  // Escuta mudanças de navegação sem reload (botão voltar/avançar e cliques)
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentRoute(getActiveRoute());
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  useEffect(() => {
    const checkScroll = () => {
      if (window.pageYOffset > 350) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const handleLeadCaptured = (leadData) => {
    setLastCapturedLead(leadData);

    if (window.fbq) {
      window.fbq('track', 'Lead', { brand: 'VistaHaven' });
    }
    if (window.gtag) {
      window.gtag('event', 'generate_lead', { brand: 'VistaHaven' });
    }
  };

  // Se a rota secreta for ativada pelo link da bio, renderiza exclusivamente o BioLinks
  if (currentRoute === 'links') {
    return <BioLinks />;
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-purple-600 selection:text-white relative">
      {/* Dados Estruturados Schema.org JSON-LD para Google Rich Results */}
      <StructuredDataSEO />
      
      {/* 1. Header Navigation Bar */}
      <Header
        onRequestFormModal={() => {
          // Redireciona para contato WhatsApp oficial ao invés de abrir modal de formulário
          window.open(VISTAHAVEN_DATA.brand.whatsapp, '_blank');
        }}
      />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Who We Are & Metrics Section (Sticky Scroll Reveal) */}
      <WhoWeAreStickyScroll />

      {/* 4. Our Solutions Section */}
      <Solutions />

      {/* 5. Trusted Locations Grid Section */}
      <TrustedLocations />

      {/* Footer com tamanho 25% maior (py-16 sm:py-20) e SocialDock interativo com tooltips */}
      <footer className="bg-slate-950 text-slate-400 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-900 text-xs relative overflow-hidden">
        {/* Glow de fundo sutil */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          {/* Linha Superior: Logo, Canais de Atendimento e Detalhes */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 pb-10 border-b border-slate-900/80">
            {/* Bloco Centralizado da Marca com Logo e SocialDock alinhados pelo centro da Logo */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 lg:gap-8">
              {/* Coluna 1: Logo Eduarda + Redes Sociais perfeitamente alinhadas com a largura e centro da Logo */}
              <div className="flex flex-col items-center text-center space-y-3">
                <LogoEduarda
                  variant="light"
                  onClick={() => slowScrollTo('top', 1000)}
                />
                
                {/* Redes Sociais perfeitamente centralizadas e alinhadas abaixo da Logo */}
                <div className="pt-1 flex flex-col items-center text-center gap-1.5 w-full">
                  <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-400/90 text-center block">
                    Canais de Atendimento
                  </span>
                  <SocialDock />
                </div>
              </div>

              {/* Coluna 2: Detalhes do CRECI, Localização e Serviços */}
              <div className="border-t sm:border-t-0 sm:border-l border-slate-800/90 pt-4 sm:pt-1 sm:pl-6 space-y-2.5 text-center sm:text-left flex flex-col items-center sm:items-start">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <span className="inline-flex items-center gap-1.5 text-purple-300 font-semibold bg-purple-950/60 px-3 py-1 rounded-full border border-purple-500/30 text-xs shadow-sm">
                    <ShieldCheck size={13} className="text-purple-400" />
                    {VISTAHAVEN_DATA.brand.creci}
                  </span>
                  <span className="text-slate-300 text-xs font-medium font-heading tracking-wide">
                    Consultoria Imobiliária
                  </span>
                </div>
                <span className="text-[12px] text-slate-400 block leading-relaxed">
                  📍 {VISTAHAVEN_DATA.brand.location} • {VISTAHAVEN_DATA.brand.specialty}
                </span>
                <span className="text-[11px] text-purple-400/90 font-medium block">
                  🔑 {VISTAHAVEN_DATA.brand.services}
                </span>
              </div>
            </div>

            {/* Selo e Atendimento Rápido na lateral */}
            <div className="flex flex-col items-center lg:items-end gap-3 text-center lg:text-right">
              <span className="inline-flex items-center gap-1.5 text-purple-300 font-semibold bg-purple-950/40 px-3.5 py-1.5 rounded-full border border-purple-500/30 text-xs">
                <ShieldCheck size={15} className="text-purple-400" /> Atendimento Exclusivo & Personalizado
              </span>
              <p className="text-[12px] text-slate-400 max-w-xs">
                Assessoria jurídica, análise de crédito e seleção dos melhores empreendimentos em Recife e região.
              </p>
            </div>
          </div>

          {/* Linha Inferior com Informações Completas em Todo o Rodapé */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px] pt-2">
            <p className="text-center sm:text-left">
              © {new Date().getFullYear()} Eduarda Jackes Consultora Imobiliária • {VISTAHAVEN_DATA.brand.creci} • Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4 text-slate-400">
              <span>{VISTAHAVEN_DATA.brand.location}</span>
              <span>•</span>
              <button
                onClick={() => slowScrollTo('top', 1000)}
                className="hover:text-purple-300 transition-colors cursor-pointer"
              >
                Voltar ao topo ↑
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Slow Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={() => slowScrollTo('top', 1000)}
          className="fixed bottom-6 right-6 z-40 bg-purple-600/90 hover:bg-purple-600 text-white p-3 rounded-full shadow-2xl shadow-purple-900/40 backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer animate-fadeIn flex items-center justify-center border border-purple-400/30 group"
          aria-label="Voltar ao Topo Suavemente"
          title="Subir suavemente ao topo"
        >
          <ArrowUp size={18} className="group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}

    </div>
  );
}

