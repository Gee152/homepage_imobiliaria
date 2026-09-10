import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhoWeAreStickyScroll from './components/WhoWeAreStickyScroll';
import Solutions from './components/Solutions';
import IndicouGanhou from './components/IndicouGanhou';
import TrustedLocations from './components/TrustedLocations';
import SocialProof from './components/SocialProof';
import QualificationForm from './components/QualificationForm';
import LogoEduarda from './components/ui/LogoEduarda';
import SocialDock from './components/ui/SocialDock';
import BioLinks from './components/BioLinks';
import { VISTAHAVEN_DATA } from './data/propertyData';
import { ShieldCheck, ArrowUp, Sparkles, Building2, MessageSquare, Phone } from 'lucide-react';
import { slowScrollTo } from './utils/scrollUtils';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import StructuredDataSEO from './components/StructuredDataSEO';

// Função síncrona para detectar rota antes da primeira renderização
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
  const [currentRoute, setCurrentRoute] = useState(getActiveRoute);

  // Escuta mudanças de navegação sem reload
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

  // Fecha modal com Escape e bloqueia scroll do fundo enquanto o modal estiver aberto
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  const handleLeadCaptured = (leadData) => {
    setLastCapturedLead(leadData);

    if (window.fbq) {
      window.fbq('track', 'Lead', {
        brand: 'Matheus Ferreira',
        partner: 'RM Home Imobiliária'
      });
    }
    if (window.gtag) {
      window.gtag('event', 'generate_lead', {
        broker: 'Matheus Ferreira',
        partner: 'RM Home Imobiliária'
      });
    }
  };

  // Se a rota secreta for ativada pelo link da bio, renderiza o BioLinks
  if (currentRoute === 'links') {
    return <BioLinks />;
  }

  return (
    <div className="min-h-screen bg-[#F8F8F8] text-slate-900 flex flex-col font-sans selection:bg-[#C79C3F] selection:text-white relative">
      {/* Dados Estruturados Schema.org JSON-LD para Google Rich Results */}
      <StructuredDataSEO />
      
      {/* 1. Header Navigation Bar */}
      <Header onRequestFormModal={() => setIsModalOpen(true)} />

      {/* 1. Hero Section (Seção 1 do PRD) */}
      <Hero onRequestFormModal={() => setIsModalOpen(true)} />

      {/* 2. Sticky Scroll com Histórias e Pilares */}
      <WhoWeAreStickyScroll onRequestFormModal={() => setIsModalOpen(true)} />

      {/* 3. O Processo: Como Funciona (Seção 3 do PRD) */}
      <Solutions onRequestFormModal={() => setIsModalOpen(true)} />

      {/* 4. Campanha "Indicou, Ganhou R$ 500 no Pix" (Seção 4 do PRD) - Temporariamente comentada */}
      {/* <IndicouGanhou onRequestFormModal={() => setIsModalOpen(true)} /> */}

      {/* 5. Oportunidades Minha Casa Minha Vida na Grande Recife */}
      <TrustedLocations onRequestFormModal={() => setIsModalOpen(true)} />

      {/* 5. Depoimentos de Quem Já Conquistou (Seção 5 do PRD) */}
      <SocialProof onRequestFormModal={() => setIsModalOpen(true)} />

      {/* Formulário de Qualificação & Simulação Caixa */}
      <section id="contato" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden border-t border-slate-200/80">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <span className="text-xs uppercase font-extrabold tracking-[0.2em] text-[#C79C3F] font-heading flex items-center justify-center gap-1.5">
              <Sparkles size={14} /> Atendimento Personalizado
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#122C58] font-heading tracking-tight">
              Simule Sua Casa Própria na Grande Recife
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Preencha os dados abaixo para receber um estudo completo de financiamento, cálculo de subsídio Caixa e atendimento direto com o corretor Matheus Ferreira.
            </p>
          </div>
          <QualificationForm onLeadCaptured={handleLeadCaptured} />
        </div>
      </section>

      {/* Seção 6: Rodapé (Footer & Contato Direto) */}
      <footer className="bg-[#0B1C38] text-slate-300 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-[#122C58] text-xs relative overflow-hidden">
        {/* Glow de fundo sutil em tom Dourado */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-[#C79C3F]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          {/* Linha Superior: Logo, Canais de Atendimento e Detalhes */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 pb-10 border-b border-white/10">
            {/* Bloco Centralizado da Marca com Logo e SocialDock */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 lg:gap-8">
              {/* Coluna 1: Logo Matheus Ferreira + Redes Sociais */}
              <div className="flex flex-col items-center text-center space-y-3">
                <LogoEduarda
                  variant="light"
                  onClick={() => slowScrollTo('top', 1000)}
                />
                
                {/* Redes Sociais */}
                <div className="pt-1 flex flex-col items-center text-center gap-1.5 w-full">
                  <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#C79C3F] text-center block">
                    Canais de Atendimento
                  </span>
                  <SocialDock />
                </div>
              </div>

              {/* Coluna 2: Detalhes do CRECI, Localização e Serviços */}
              <div className="border-t sm:border-t-0 sm:border-l border-white/10 pt-4 sm:pt-1 sm:pl-6 space-y-2.5 text-center sm:text-left flex flex-col items-center sm:items-start">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <span className="inline-flex items-center gap-1.5 text-[#C79C3F] font-bold bg-[#122C58] px-3 py-1 rounded-full border border-[#C79C3F]/30 text-xs shadow-sm">
                    <ShieldCheck size={13} className="text-[#C79C3F]" />
                    {VISTAHAVEN_DATA.brand.creci}
                  </span>
                  <span className="text-white text-xs font-semibold font-heading tracking-wide">
                    {VISTAHAVEN_DATA.brand.partner}
                  </span>
                </div>
                <span className="text-[12px] text-slate-300 block leading-relaxed">
                  📍 {VISTAHAVEN_DATA.brand.coverageAreas}
                </span>
                <span className="text-[11px] text-[#C79C3F] font-semibold block">
                  🔑 {VISTAHAVEN_DATA.brand.specialty}
                </span>
              </div>
            </div>

            {/* Frase de Impacto Oficial do PRD */}
            <div className="flex flex-col items-center lg:items-end gap-3 text-center lg:text-right">
              <span className="inline-flex items-center gap-1.5 text-[#6FC34B] font-extrabold bg-[#122C58] px-4 py-1.5 rounded-full border border-[#6FC34B]/30 text-xs">
                <Sparkles size={14} /> Sua Indicação Vale Mais!
              </span>
              <p className="text-sm font-bold text-white max-w-xs">
                "Sua Indicação Vale Mais! Juntos Realizamos Sonhos."
              </p>
              <p className="text-[11px] text-slate-400 max-w-xs">
                Indique amigos e ganhe R$ 500,00 no Pix a cada contrato assinado com o corretor Matheus Ferreira.
              </p>
            </div>
          </div>

          {/* Linha Inferior */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px] pt-2">
            <p className="text-center sm:text-left">
              © {new Date().getFullYear()} Matheus Ferreira • Corretor de Imóveis {VISTAHAVEN_DATA.brand.creci} • Parceria Oficial {VISTAHAVEN_DATA.brand.partner}. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4 text-slate-400">
              <span>{VISTAHAVEN_DATA.brand.location}</span>
              <span>•</span>
              <button
                onClick={() => slowScrollTo('top', 1000)}
                className="hover:text-[#C79C3F] transition-colors cursor-pointer"
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
          className="fixed bottom-24 sm:bottom-25 right-6 z-40 bg-[#C79C3F] hover:bg-[#B58B32] text-white p-3 rounded-full shadow-2xl shadow-black/40 backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer animate-fadeIn flex items-center justify-center border border-white/20 group"
          aria-label="Voltar ao Topo Suavemente"
          title="Subir suavemente ao topo"
        >
          <ArrowUp size={18} className="group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}

      {/* Botão Flutuante do WhatsApp */}
      <FloatingWhatsApp />

      {/* Modal de Simulação & Atendimento Exclusivo */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0B1C38]/85 backdrop-blur-sm overflow-y-auto"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsModalOpen(false);
          }}
        >
          <div className="relative w-full max-w-xl my-auto">
            <QualificationForm
              isModal={true}
              onCloseModal={() => setIsModalOpen(false)}
              onLeadCaptured={handleLeadCaptured}
            />
          </div>
        </div>
      )}

    </div>
  );
}
