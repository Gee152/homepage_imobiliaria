import React, { useState, useEffect } from 'react';
import { VISTAHAVEN_DATA } from '../data/propertyData';

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Exibe o botão suavemente após carregamento inicial
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 600);

    // Exibe o balãozinho de atendimento no desktop após 2.5s
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
    };
  }, []);

  const defaultMessage = VISTAHAVEN_DATA.brand.whatsappSimulationMessage || "Olá Matheus, vim pelo site e quero simular o financiamento da minha casa própria.";
  const whatsappUrl = `${VISTAHAVEN_DATA.brand.whatsapp}&text=${encodeURIComponent(defaultMessage)}`;

  const handleClick = () => {
    if (window.fbq) {
      window.fbq('trackCustom', 'WhatsAppFloatingClick');
    }
    if (window.gtag) {
      window.gtag('event', 'whatsapp_floating_click', {
        event_category: 'contact',
        event_label: 'Matheus Ferreira'
      });
    }
  };

  return (
    <aside
      aria-label="Contato via WhatsApp"
      className={`fixed bottom-6 right-6 z-40 flex items-center gap-3 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
      }`}
    >
      {/* Balão de Dica / Speech Bubble (Desktop) */}
      <div
        className={`hidden sm:flex items-center gap-2.5 bg-[#0B1C38]/95 text-white pl-3.5 pr-2 py-2 rounded-2xl shadow-2xl border border-[#C79C3F]/40 backdrop-blur-md transition-all duration-300 select-none ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-3 pointer-events-none'
        }`}
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          className="flex flex-col text-left group"
        >
          <span className="text-[10px] text-[#6FC34B] font-extrabold uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6FC34B] animate-pulse"></span>
            Online Agora • CRECI 20367
          </span>
          <span className="text-xs font-bold text-slate-100 group-hover:text-[#C79C3F] transition-colors">
            Falar com Matheus Ferreira
          </span>
        </a>
        <button
          type="button"
          onClick={() => setShowTooltip(false)}
          className="text-slate-400 hover:text-white text-base leading-none p-1 cursor-pointer transition-colors"
          title="Fechar mensagem"
          aria-label="Fechar mensagem"
        >
          ×
        </button>
      </div>

      {/* Botão Flutuante do WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        aria-label="Falar com Matheus Ferreira no WhatsApp"
        title="Falar com Matheus Ferreira"
        className="relative group flex items-center justify-center w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-gradient-to-tr from-[#128C7E] via-[#25D366] to-[#25D366] text-white shadow-2xl shadow-emerald-950/40 hover:shadow-emerald-500/50 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer border border-white/30"
      >
        {/* Efeito Radar */}
        <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping pointer-events-none"></span>

        {/* Indicador de Status Online */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full shadow-sm"></span>

        {/* Ícone Oficial WhatsApp */}
        <svg
          viewBox="0 0 24 24"
          width="30"
          height="30"
          fill="currentColor"
          className="relative z-10 drop-shadow-md group-hover:rotate-12 transition-transform duration-300"
          aria-hidden="true"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15ZM16.56 14.39C16.31 14.26 15.09 13.66 14.86 13.58C14.63 13.5 14.47 13.46 14.3 13.71C14.14 13.96 13.67 14.51 13.53 14.67C13.38 14.84 13.24 14.86 12.99 14.73C12.74 14.61 11.95 14.35 11 13.51C10.26 12.85 9.77 12.04 9.62 11.79C9.48 11.54 9.61 11.4 9.73 11.28C9.84 11.17 9.98 10.99 10.1 10.84C10.23 10.7 10.27 10.59 10.35 10.43C10.43 10.26 10.39 10.12 10.33 10C10.27 9.87 9.77 8.65 9.57 8.15C9.37 7.66 9.17 7.73 9.01 7.72C8.87 7.71 8.7 7.71 8.54 7.71C8.38 7.71 8.11 7.77 7.89 8.01C7.66 8.26 7.02 8.86 7.02 10.07C7.02 11.29 7.91 12.46 8.03 12.63C8.16 12.79 9.77 15.28 12.24 16.35C12.83 16.6 13.29 16.76 13.65 16.87C14.24 17.06 14.78 17.03 15.21 16.97C15.69 16.9 16.69 16.36 16.9 15.78C17.11 15.2 17.11 14.7 17.05 14.6C16.98 14.5 16.82 14.43 16.56 14.39Z" />
        </svg>
      </a>
    </aside>
  );
}
