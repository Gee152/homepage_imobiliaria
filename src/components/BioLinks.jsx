import React, { useState, useEffect } from "react";
import {
  Instagram,
  Building2,
  Share2,
  ChevronRight,
  ChevronLeft,
  MapPin,
  Sun,
  Moon,
  Home,
  X,
  ExternalLink,
  Check,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { VISTAHAVEN_DATA, getWhatsAppUrl } from "../data/propertyData";
import LogoDanielle from "./ui/LogoDanielle";

/**
 * WhatsAppIcon - Ícone vetorial oficial e nítido do WhatsApp
 */
function WhatsAppIcon({ size = 22, className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

export default function BioLinks() {
  const { brand } = VISTAHAVEN_DATA;
  const properties = VISTAHAVEN_DATA.trustedLocations.properties;

  const [theme, setTheme] = useState("light"); // "light" (padrão com cores do projeto) | "dark" (como estava)
  const isDark = theme === "dark";

  // Controle do Modal de Catálogo em Slider
  const [isCatalogModalOpen, setIsCatalogModalOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  // Gestos touch para swipe suave no mobile
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 45;

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? properties.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev === properties.length - 1 ? 0 : prev + 1));
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      handleNextSlide();
    } else if (distance < -minSwipeDistance) {
      handlePrevSlide();
    }
  };

  // Trava scroll de fundo e atalhos de teclado (Escape e Setas)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isCatalogModalOpen) return;
      if (e.key === "Escape") {
        setIsCatalogModalOpen(false);
      } else if (e.key === "ArrowLeft") {
        handlePrevSlide();
      } else if (e.key === "ArrowRight") {
        handleNextSlide();
      }
    };

    if (isCatalogModalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isCatalogModalOpen, properties.length]);

  const links = [
    {
      id: "whatsapp",
      name: "Simulação Caixa",
      actionText: "Simular Financiamento com Danielle",
      badge: "Mais Procurado",
      badgeType: "orange",
      icon: WhatsAppIcon,
      href: getWhatsAppUrl("Olá Danielle, vim pelo link da bio do Instagram e gostaria de simular meu financiamento Minha Casa Minha Vida!"),
    },
    {
      id: "website",
      name: "Catálogo de Imóveis",
      actionText: "Ver Opções em Paulista, Jaboatão e Recife",
      badge: "Catálogo",
      badgeType: "orange",
      icon: Building2,
      onClick: () => setIsCatalogModalOpen(true),
    },
    {
      id: "aurora",
      name: brand.company || "Aurora Imobiliária",
      actionText: "Parceira Oficial de Crédito & Vendas",
      badge: "Parceria",
      badgeType: "orange",
      icon: Building2,
      href: brand.instagramPartner,
    }
  ];

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${brand.brokerName} - ${brand.tagline}`,
          text: `Realize o sonho da sua casa própria na Grande Recife com ${brand.brokerName}.`,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Compartilhamento cancelado", err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copiado para a área de transferência!");
    }
  };

  const currentProperty = properties[activeSlide] || properties[0];

  return (
    <div
      className={`min-h-screen min-h-[100dvh] transition-colors duration-500 flex flex-col items-center justify-start sm:justify-center sm:py-8 px-0 sm:px-4 relative overflow-x-hidden selection:bg-[#F28C0F] selection:text-white ${!isDark ? "bg-[#F4F6F9]" : "bg-[#0A1220] sm:bg-[#060B14]"
        }`}
    >
      {/* Card Principal Estilo Mobile Editorial - Preenche 100% da tela no mobile */}
      <div
        className={`w-full max-w-md min-h-screen min-h-[100dvh] sm:min-h-0 sm:h-auto sm:my-auto sm:rounded-[36px] overflow-hidden flex flex-col justify-between transition-all duration-500 relative flex-1 sm:flex-initial ${!isDark
          ? "bg-white text-[#101C30] shadow-[0_20px_60px_rgba(16,28,48,0.08)] sm:border sm:border-slate-200/80"
          : "bg-[#0A1220] text-white shadow-[0_25px_70px_rgba(0,0,0,0.85)] sm:border sm:border-white/10"
          }`}
      >
        {/* Barra Flutuante Superior de Ações (Voltar, Alternar Tema e Compartilhar) */}
        <div className="absolute top-4 inset-x-4 z-30 flex items-center justify-between pointer-events-auto">
          {/* Voltar ao Site Principal */}
          <a
            href="/"
            title="Voltar ao Site"
            className={`p-2.5 rounded-full backdrop-blur-md transition-all shadow-md active:scale-95 flex items-center justify-center ${!isDark
              ? "bg-white/90 hover:bg-white text-[#101C30] border border-slate-200 hover:text-[#F28C0F]"
              : "bg-white/10 hover:bg-white/20 text-white border border-white/15"
              }`}
          >
            <Home size={16} />
          </a>

          <div className="flex items-center gap-2">
            {/* Alternador de Tema: Light (Cores do Projeto) vs Dark (Royal Navy) */}
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className={`p-2.5 rounded-full backdrop-blur-md transition-all shadow-md active:scale-95 flex items-center justify-center cursor-pointer ${!isDark
                ? "bg-white/90 hover:bg-white text-[#101C30] border border-slate-200 hover:text-[#F28C0F]"
                : "bg-white/10 hover:bg-white/20 text-amber-300 border border-white/15"
                }`}
              title={!isDark ? "Mudar para Modo Escuro" : "Mudar para Modo Claro"}
            >
              {!isDark ? <Moon size={16} /> : <Sun size={16} />}
            </button>

            {/* Compartilhar Perfil */}
            <button
              onClick={handleShare}
              className={`p-2.5 rounded-full backdrop-blur-md transition-all shadow-md active:scale-95 flex items-center justify-center cursor-pointer ${!isDark
                ? "bg-white/90 hover:bg-white text-[#101C30] border border-slate-200 hover:text-[#F28C0F]"
                : "bg-white/10 hover:bg-white/20 text-white border border-white/15"
                }`}
              title="Compartilhar Perfil"
            >
              <Share2 size={16} />
            </button>
          </div>
        </div>

        {/* 1. TOPO EDITORIAL: FOTO AMPLA DA CORRETORA COM TRANSIÇÃO EM DEGRADÊ SUAVE (EXPERIÊNCIA ANTERIOR) */}
        <div className="relative w-full h-[370px] sm:h-[430px] overflow-hidden select-none shrink-0">
          {/* Foto Profissional da Corretora centralizada e ampla */}
          <img
            src={brand.photo}
            alt={brand.photoAlt}
            className="w-full h-full object-cover object-[center_12%] scale-105"
            fetchPriority="high"
          />

          {/* Gradiente Inferior de Fade Suave (apenas na base da imagem) */}
          <div
            className={`absolute inset-x-0 bottom-0 h-44 sm:h-52 pointer-events-none ${!isDark
              ? "bg-gradient-to-t from-white via-white/80 to-transparent"
              : "bg-gradient-to-t from-[#0A1220] via-[#0A1220]/80 to-transparent"
              }`}
          />
        </div>

        {/* 2. CONTEÚDO PRINCIPAL (IDENTIDADE, LOGO, BOTÕES COMPACTADOS E LINKS) */}
        <div className="relative z-10 px-4 sm:px-6 -mt-[276px] sm:-mt-[300px] pb-3 sm:pb-6 flex-1 flex flex-col justify-between">
          <div className="space-y-2.5 sm:space-y-4 my-auto">
            {/* Bloco de Nome e Slogan com Logo Danielle Galdino Centralizado */}
            <div className="text-center space-y-1.5 sm:space-y-2 pointer-events-auto">
              {/* Logo Oficial Centralizada */}
              <div className="flex items-center justify-center">
                <a
                  href="/"
                  title="Voltar ao início do site"
                  className="cursor-pointer transition-transform hover:scale-105 active:scale-95 block"
                >
                  <LogoDanielle
                    variant={!isDark ? "dark" : "light"}
                    showCreci={false}
                    align="center"
                    showRoof={true}
                    size="sm"
                    className="origin-center py-0"
                  />
                </a>
              </div>

              {/* Linha dos 3 Botões Principais - Tamanho Ajustado e Reduzido */}
              <div className="flex items-center justify-center gap-3 sm:gap-4 pointer-events-auto shrink-0 mt-1">
                {/* Botão 1: Instagram */}
                <a
                  href={brand.instagram}
                  target="_blank"
                  rel="noreferrer"
                  title="Instagram da Danielle Galdino"
                  aria-label="Instagram da Danielle Galdino"
                  className={`w-11 h-11 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group cursor-pointer shrink-0 ${!isDark
                    ? "bg-white/95 border-2 border-slate-100 shadow-[0_6px_18px_rgba(16,28,48,0.1)] text-[#101C30] hover:text-[#F28C0F] hover:border-[#F28C0F]/40 hover:shadow-[0_8px_22px_rgba(242,140,15,0.2)] hover:scale-105 active:scale-95"
                    : "bg-[#101C30]/95 border border-white/10 text-[#F28C0F] shadow-[0_6px_18px_rgba(0,0,0,0.5)] hover:border-[#F28C0F]/50 hover:scale-105 active:scale-95"
                    }`}
                >
                  <Instagram size={20} className="sm:w-[23px] sm:h-[23px] transition-transform group-hover:scale-110" />
                </a>

                {/* Botão 2: WhatsApp Oficial */}
                <a
                  href={getWhatsAppUrl("Olá Danielle! Vim pelo seu perfil do Instagram e gostaria de conversar com você!")}
                  target="_blank"
                  rel="noreferrer"
                  title="Conversar Diretamente no WhatsApp"
                  aria-label="Conversar Diretamente no WhatsApp"
                  className={`w-11 h-11 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group cursor-pointer shrink-0 ${!isDark
                    ? "bg-white/95 border-2 border-[#25D366]/40 shadow-[0_6px_18px_rgba(37,211,102,0.2)] text-[#25D366] hover:bg-[#25D366] hover:text-white hover:border-[#25D366] hover:shadow-[0_8px_22px_rgba(37,211,102,0.35)] hover:scale-105 active:scale-95"
                    : "bg-[#101C30]/95 border border-[#25D366]/40 text-[#25D366] shadow-[0_6px_18px_rgba(0,0,0,0.5)] hover:bg-[#25D366] hover:text-white hover:border-[#25D366] hover:shadow-[0_8px_22px_rgba(37,211,102,0.35)] hover:scale-105 active:scale-95"
                    }`}
                >
                  <WhatsAppIcon size={22} className="sm:w-[25px] sm:h-[25px] transition-transform group-hover:scale-110" />
                </a>

                {/* Botão 3: Localização / Endereço Oficial */}
                <a
                  href={brand.mapsUrl || "https://maps.google.com/?q=R.+Fazendinha,+72,+Paulista+-+PE"}
                  target="_blank"
                  rel="noreferrer"
                  title={`Localização: ${brand.address || "R. Fazendinha, 72, Paulista - PE"}`}
                  aria-label={`Localização: ${brand.address || "R. Fazendinha, 72, Paulista - PE"}`}
                  className={`w-11 h-11 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group cursor-pointer shrink-0 ${!isDark
                    ? "bg-white/95 border-2 border-slate-100 shadow-[0_6px_18px_rgba(16,28,48,0.1)] text-[#101C30] hover:text-[#F28C0F] hover:border-[#F28C0F]/40 hover:shadow-[0_8px_22px_rgba(242,140,15,0.2)] hover:scale-105 active:scale-95"
                    : "bg-[#101C30]/95 border border-white/10 text-[#F28C0F] shadow-[0_6px_18px_rgba(0,0,0,0.5)] hover:border-[#F28C0F]/50 hover:scale-105 active:scale-95"
                    }`}
                >
                  <MapPin size={20} className="sm:w-[23px] sm:h-[23px] transition-transform group-hover:scale-110" />
                </a>
              </div>
            </div>

            {/* Container dos Cards de Link com Dimensões Reduzidas e Compactas */}
            <div className="w-full space-y-2 sm:space-y-3 mt-1 sm:mt-2">
              {links.map((link) => {
                const Icon = link.icon;
                const isGreen = link.badgeType === "green";
                const isClickableModal = Boolean(link.onClick);
                const Component = isClickableModal ? "button" : "a";
                const componentProps = isClickableModal
                  ? {
                    type: "button",
                    onClick: link.onClick,
                  }
                  : {
                    href: link.href,
                    target: link.href?.startsWith("http") ? "_blank" : "_self",
                    rel: "noreferrer",
                  };

                return (
                  <Component
                    key={link.id}
                    {...componentProps}
                    className={`w-full p-2.5 sm:p-4 min-h-[52px] sm:min-h-[72px] rounded-2xl flex items-center justify-between transition-all duration-300 group cursor-pointer text-left ${!isDark
                      ? "bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-[#F28C0F]/60 shadow-[0_3px_12px_rgba(16,28,48,0.05)] hover:shadow-[0_6px_20px_rgba(242,140,15,0.12)] hover:scale-[1.01]"
                      : "bg-[#101C30]/90 hover:bg-[#162540] border border-white/10 hover:border-[#F28C0F]/50 shadow-md hover:shadow-lg hover:scale-[1.01]"
                      }`}
                  >
                    <div className="flex items-center gap-2.5 sm:gap-4 text-left min-w-0 flex-1">
                      <div
                        className={`w-9 h-9 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 transition-all ${!isDark
                          ? isGreen
                            ? "bg-emerald-50 text-[#16a34a] group-hover:scale-110"
                            : "bg-orange-50 text-[#F28C0F] group-hover:bg-[#F28C0F] group-hover:text-white group-hover:scale-110"
                          : "bg-white/10 text-[#F28C0F] group-hover:scale-110"
                          }`}
                      >
                        <Icon size={18} className="sm:w-[22px] sm:h-[22px]" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                          <span
                            className={`text-[13px] sm:text-[15px] font-bold transition-colors leading-tight ${!isDark
                              ? "text-[#101C30] group-hover:text-[#F28C0F]"
                              : "text-white group-hover:text-[#F28C0F]"
                              }`}
                          >
                            {link.name}
                          </span>

                          {link.badge && (
                            <span
                              className={`text-[8px] sm:text-[9.5px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0 leading-none ${!isDark
                                ? isGreen
                                  ? "bg-emerald-50 text-[#16a34a] border border-emerald-200"
                                  : "bg-orange-50 text-[#F28C0F] border border-orange-200"
                                : isGreen
                                  ? "bg-emerald-500/20 text-[#6FC34B] border border-emerald-500/30"
                                  : "bg-[#F28C0F]/20 text-[#F28C0F] border border-[#F28C0F]/30"
                                }`}
                            >
                              {link.badge}
                            </span>
                          )}
                        </div>

                        <span
                          className={`text-[10.5px] sm:text-[12.5px] block leading-tight mt-0.5 truncate ${!isDark ? "text-slate-500" : "text-slate-300"
                            }`}
                        >
                          {link.actionText}
                        </span>
                      </div>
                    </div>

                    <ChevronRight
                      size={16}
                      className={`transition-all group-hover:translate-x-1 shrink-0 ml-1.5 sm:ml-2 ${!isDark
                        ? "text-slate-400 group-hover:text-[#F28C0F]"
                        : "text-slate-400 group-hover:text-white"
                        }`}
                    />
                  </Component>
                );
              })}
            </div>
          </div>
        </div>

        {/* 4. FOOTER DO BIOLINKS COMPACTO */}
        <footer
          className={`w-full text-center py-2 sm:py-4 text-[9.5px] sm:text-[11px] space-y-0.5 transition-colors border-t shrink-0 mt-auto ${!isDark
            ? "border-slate-100 text-slate-500 bg-white"
            : "border-white/10 text-slate-400 bg-[#0A1220]"
            }`}
        >
          <p className="font-semibold">© {new Date().getFullYear()} {brand.brokerName} • {brand.creci}</p>
          <p className="text-[8.5px] sm:text-[10px] opacity-75">{brand.slogan}</p>
        </footer>
      </div>

      {/* =========================================================================
          MODAL DE CATÁLOGO EM SLIDER (OPÇÕES DE IMÓVEIS CONFORME PRINT 2)
          Sem alterar a responsividade mobile e mantendo o padrão visual
         ========================================================================= */}
      {isCatalogModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Catálogo de Imóveis"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn select-none"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsCatalogModalOpen(false);
          }}
        >
          <div
            className={`relative w-full max-w-md my-auto rounded-[32px] overflow-hidden shadow-2xl border flex flex-col max-h-[92vh] transition-all duration-300 ${!isDark
              ? "bg-white border-slate-200 text-[#101C30]"
              : "bg-[#0A1220] border-white/15 text-white"
              }`}
          >
            {/* Header do Modal com Contador e Botão Fechar */}
            <div
              className={`p-4 sm:p-4.5 border-b flex items-center justify-between shrink-0 ${!isDark ? "border-slate-100 bg-[#F8F9FA]" : "border-white/10 bg-[#0E1828]"
                }`}
            >
              <div className="space-y-0.5">
                <div className="inline-flex items-center gap-1.5 text-[#F28C0F] text-[10px] font-black uppercase tracking-wider font-heading">
                  <Sparkles size={11} className="shrink-0" />
                  <span>OPORTUNIDADES MCMV</span>
                </div>
                <h3
                  className={`text-base sm:text-lg font-black font-heading leading-tight ${!isDark ? "text-[#101C30]" : "text-white"
                    }`}
                >
                  Catálogo de Imóveis
                </h3>
                <p
                  className={`text-[11px] font-medium leading-none ${!isDark ? "text-slate-500" : "text-slate-400"
                    }`}
                >
                  Opção {activeSlide + 1} de {properties.length} • Deslize para navegar
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsCatalogModalOpen(false)}
                aria-label="Fechar catálogo"
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer ${!isDark
                  ? "bg-white hover:bg-slate-200 text-slate-700 shadow-sm border border-slate-200"
                  : "bg-white/10 hover:bg-white/20 text-white border border-white/15"
                  }`}
              >
                <X size={18} />
              </button>
            </div>

            {/* Corpo do Modal: Card do Imóvel em Destaque com Suporte a Swipe */}
            <div
              className="p-4 sm:p-5 overflow-y-auto space-y-4 flex-1"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {/* Container da Imagem com Badges Idênticos ao Print 2 e Setas Flutuantes */}
              <div className="relative rounded-2xl overflow-hidden h-44 sm:h-48 bg-slate-100 shadow-sm group select-none">
                <img
                  src={currentProperty.image}
                  alt={currentProperty.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Seta Esquerda Flutuante (conforme Print 2) */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevSlide();
                  }}
                  aria-label="Imóvel anterior"
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/55 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-sm transition-all shadow-md active:scale-90 cursor-pointer border border-white/20"
                >
                  <ChevronLeft size={18} />
                </button>

                {/* Seta Direita Flutuante (conforme Print 2) */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextSlide();
                  }}
                  aria-label="Próximo imóvel"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/55 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-sm transition-all shadow-md active:scale-90 cursor-pointer border border-white/20"
                >
                  <ChevronRight size={18} />
                </button>

                {/* Badge Topo Esquerdo: Programa / SubType */}
                <div className="absolute top-2.5 left-2.5">
                  <span className="bg-[#101C30]/90 backdrop-blur-sm text-[#F28C0F] text-[9.5px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm border border-[#F28C0F]/30">
                    {currentProperty.subType}
                  </span>
                </div>

                {/* Badge Topo Direito: MCMV */}
                <div className="absolute top-2.5 right-2.5">
                  <span className="bg-[#6FC34B] text-white text-[9.5px] font-black px-2 py-0.5 rounded-full uppercase shadow-md flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                    MCMV
                  </span>
                </div>

                {/* Faixa Inferior de Localização e Metragem */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-[10.5px] font-bold text-white bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-full">
                    <MapPin size={11} className="text-[#F28C0F]" />
                    <span className="truncate">{currentProperty.neighborhood}</span>
                  </span>
                  <span className="text-[10.5px] font-semibold text-white/95 bg-black/55 backdrop-blur-md px-2 py-0.5 rounded-full">
                    {currentProperty.floorSizeMTK} m² • {currentProperty.numberOfBedrooms} Qts
                  </span>
                </div>
              </div>

              {/* Informações Textuais do Imóvel */}
              <div className="space-y-2">
                <h4
                  className={`text-lg font-black font-heading leading-snug ${!isDark ? "text-[#101C30]" : "text-white"
                    }`}
                >
                  {currentProperty.name}
                </h4>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <MapPin size={13} className="text-[#F28C0F] shrink-0" />
                  <span className="truncate">{currentProperty.location}</span>
                </div>

                {/* Diferenciais e Comodidades */}
                {currentProperty.amenities && currentProperty.amenities.length > 0 && (
                  <ul className="pt-1 space-y-1">
                    {currentProperty.amenities.slice(0, 2).map((amenity, idx) => (
                      <li
                        key={idx}
                        className={`flex items-center gap-1.5 text-xs font-medium ${!isDark ? "text-slate-600" : "text-slate-300"
                          }`}
                      >
                        <Check size={12} className="text-emerald-500 shrink-0" />
                        <span className="truncate">{amenity}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Condição Especial e Subsídio */}
                <div
                  className={`pt-2.5 mt-2.5 border-t flex items-center justify-between ${!isDark ? "border-slate-100" : "border-white/10"
                    }`}
                >
                  <div>
                    <span className="text-[9.5px] text-slate-400 block leading-none font-medium">
                      Condição Especial
                    </span>
                    <span
                      className={`text-sm font-black font-heading ${!isDark ? "text-[#101C30]" : "text-white"
                        }`}
                    >
                      {currentProperty.priceFormatted}
                    </span>
                  </div>
                  <span className="text-[9.5px] text-emerald-700 font-bold uppercase bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    Subsídio Disponível
                  </span>
                </div>

                {/* Botão de Ação Direta para WhatsApp (Padrão com Mensagem Contextual) */}
                <div className="pt-2">
                  <a
                    href={getWhatsAppUrl(currentProperty.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg active:scale-[0.98] group/btn cursor-pointer"
                    title={`Quero mais informações sobre o ${currentProperty.name}`}
                  >
                    <WhatsAppIcon size={18} className="shrink-0 fill-current" />
                    <span>Quero Informações no WhatsApp</span>
                    <ExternalLink
                      size={13}
                      className="shrink-0 opacity-80 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Rodapé do Modal com Indicador de Paginação (sem os botões de texto) */}
            <div
              className={`p-3.5 sm:p-4 border-t flex flex-col items-center gap-2 shrink-0 ${!isDark ? "border-slate-100 bg-[#F8F9FA]" : "border-white/10 bg-[#0E1828]"
                }`}
            >
              {/* Bolinhas Indicadoras do Slider Centralizadas */}
              <div className="flex items-center justify-center gap-1.5 py-0.5">
                {properties.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveSlide(idx)}
                    aria-label={`Ir para imóvel ${idx + 1}`}
                    className={`transition-all rounded-full cursor-pointer ${activeSlide === idx
                      ? "w-6 h-2 bg-[#F28C0F]"
                      : !isDark
                        ? "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                        : "w-2 h-2 bg-white/30 hover:bg-white/50"
                      }`}
                  />
                ))}
              </div>

              {/* Link para o site completo com âncora nos imóveis */}
              <a
                href="/#properties"
                className={`text-center text-[11px] font-bold transition-colors py-0.5 flex items-center justify-center gap-1 ${!isDark ? "text-slate-500 hover:text-[#F28C0F]" : "text-slate-400 hover:text-[#F28C0F]"
                  }`}
              >
                <span>Ver todos no site completo</span>
                <ArrowRight size={12} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
