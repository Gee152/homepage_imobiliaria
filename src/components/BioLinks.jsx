import React, { useState } from "react";
import {
  Instagram,
  Building2,
  Share2,
  ChevronRight,
  MapPin,
  Sun,
  Moon,
  Home
} from "lucide-react";
import { VISTAHAVEN_DATA } from "../data/propertyData";
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
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

export default function BioLinks() {
  const { brand } = VISTAHAVEN_DATA;
  const [theme, setTheme] = useState("light"); // "light" (padrão com cores do projeto) | "dark" (como estava)
  const isDark = theme === "dark";

  const links = [
    {
      id: "whatsapp",
      name: "Simulação MCMV Caixa",
      actionText: "Simular Financiamento com Danielle",
      badge: "Mais Procurado",
      badgeType: "orange",
      icon: WhatsAppIcon,
      href: `${brand.whatsapp}&text=${encodeURIComponent(brand.whatsappSimulationMessage)}`,
    },
    {
      id: "website",
      name: "Catálogo de Imóveis",
      actionText: "Ver Opções em Paulista, Jaboatão e Recife",
      badge: "Catálogo",
      badgeType: "orange",
      icon: Building2,
      href: window.location.origin + window.location.pathname,
    },
    {
      id: "rmhome",
      name: brand.company || "RM Home Imobiliária",
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

  return (
    <div
      className={`min-h-screen min-h-[100dvh] transition-colors duration-500 flex flex-col items-center justify-start sm:justify-center sm:py-8 px-0 sm:px-4 relative overflow-x-hidden selection:bg-[#F28C0F] selection:text-white ${
        !isDark ? "bg-[#F4F6F9]" : "bg-[#0A1220] sm:bg-[#060B14]"
      }`}
    >
      {/* Card Principal Estilo Mobile Editorial - Preenche 100% da tela no mobile */}
      <div
        className={`w-full max-w-md min-h-screen min-h-[100dvh] sm:min-h-0 sm:h-auto sm:my-auto sm:rounded-[36px] overflow-hidden flex flex-col justify-between transition-all duration-500 relative flex-1 sm:flex-initial ${
          !isDark
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
            className={`p-2.5 rounded-full backdrop-blur-md transition-all shadow-md active:scale-95 flex items-center justify-center ${
              !isDark
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
              className={`p-2.5 rounded-full backdrop-blur-md transition-all shadow-md active:scale-95 flex items-center justify-center cursor-pointer ${
                !isDark
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
              className={`p-2.5 rounded-full backdrop-blur-md transition-all shadow-md active:scale-95 flex items-center justify-center cursor-pointer ${
                !isDark
                  ? "bg-white/90 hover:bg-white text-[#101C30] border border-slate-200 hover:text-[#F28C0F]"
                  : "bg-white/10 hover:bg-white/20 text-white border border-white/15"
              }`}
              title="Compartilhar Perfil"
            >
              <Share2 size={16} />
            </button>
          </div>
        </div>

        {/* 1. TOPO EDITORIAL: FOTO AMPLA DA CORRETORA COM TRANSIÇÃO EM DEGRADÊ SUAVE */}
        <div className="relative w-full h-[400px] sm:h-[430px] overflow-hidden select-none shrink-0">
          {/* Foto Profissional da Corretora centralizada e ampla */}
          <img
            src={brand.photo}
            alt={brand.brokerName}
            className="absolute inset-0 w-full h-full object-cover object-[center_16%] pointer-events-none contrast-[1.02] brightness-[1.01]"
            style={{ imageRendering: "-webkit-optimize-contrast" }}
          />

          {/* Gradiente Inferior de Fade Suave (step anterior: apenas na base da imagem) */}
          <div
            className={`absolute inset-x-0 bottom-0 h-48 sm:h-52 pointer-events-none ${
              !isDark
                ? "bg-gradient-to-t from-white via-white/80 to-transparent"
                : "bg-gradient-to-t from-[#0A1220] via-[#0A1220]/80 to-transparent"
            }`}
          />
        </div>

        {/* 2. LISTA DE LINKS, LOGO PADRÃO E ÍCONES SUBINDO NO DEGRADÊ (EFEITO DA IMAGEM POR TRÁS) */}
        <div className="w-full px-4 sm:px-6 pb-6 sm:pb-8 flex-1 relative z-20 -mt-20 sm:-mt-24 pt-0 flex flex-col justify-center">
          {/* Bloco Unificado: Print 2 (Logo + 3 Botões) e os Cards descem harmoniosamente juntos */}
          <div className="w-full flex flex-col items-center my-auto">
            {/* Bloco Superior (Print 2): Logo Oficial + 3 Botões de Contato Rápido */}
            <div className="flex flex-col items-center shrink-0 mb-4 sm:mb-4.5">
              {/* Logo Padrão Oficial - Layout Inline sem CRECI e tamanho aumentado em 15% */}
              <div className="flex justify-center mb-3 sm:mb-3.5 pointer-events-auto">
                <a
                  href="/"
                  title="Danielle Galdino - Corretora de Imóveis"
                  className="inline-block transition-transform hover:scale-105 active:scale-95 drop-shadow-[0_2px_8px_rgba(255,255,255,0.9)] dark:drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
                >
                  <LogoDanielle
                    variant={!isDark ? "dark" : "light"}
                    size="sm"
                    layout="inline"
                    showCreci={false}
                    align="center"
                    showRoof={true}
                    className="scale-[1.15] origin-center py-0.5"
                  />
                </a>
              </div>

              {/* Linha dos 3 Botões Quadrados no Início do Degradê */}
              <div className="flex items-center justify-center gap-4 sm:gap-4.5 pointer-events-auto shrink-0">
                {/* Botão 1: Instagram */}
                <a
                  href={brand.instagram}
                  target="_blank"
                  rel="noreferrer"
                  title="Instagram da Danielle Galdino"
                  aria-label="Instagram da Danielle Galdino"
                  className={`w-14 h-14 sm:w-15 sm:h-15 rounded-2xl flex items-center justify-center transition-all duration-300 group cursor-pointer shrink-0 ${
                    !isDark
                      ? "bg-white/95 border-2 border-slate-100 shadow-[0_8px_25px_rgba(16,28,48,0.12)] text-[#101C30] hover:text-[#F28C0F] hover:border-[#F28C0F]/40 hover:shadow-[0_12px_28px_rgba(242,140,15,0.2)] hover:scale-105 active:scale-95"
                      : "bg-[#101C30]/95 border border-white/10 text-[#F28C0F] shadow-[0_8px_20px_rgba(0,0,0,0.5)] hover:border-[#F28C0F]/50 hover:scale-105 active:scale-95"
                  }`}
                >
                  <Instagram size={23} className="transition-transform group-hover:scale-110" />
                </a>

                {/* Botão 2: WhatsApp Oficial */}
                <a
                  href={`${brand.whatsapp}&text=${encodeURIComponent(brand.whatsappSimulationMessage)}`}
                  target="_blank"
                  rel="noreferrer"
                  title="Conversar Diretamente no WhatsApp"
                  aria-label="Conversar Diretamente no WhatsApp"
                  className={`w-14 h-14 sm:w-15 sm:h-15 rounded-2xl flex items-center justify-center transition-all duration-300 group cursor-pointer shrink-0 ${
                    !isDark
                      ? "bg-white/95 border-2 border-[#25D366]/40 shadow-[0_8px_25px_rgba(37,211,102,0.22)] text-[#25D366] hover:bg-[#25D366] hover:text-white hover:border-[#25D366] hover:shadow-[0_12px_28px_rgba(37,211,102,0.35)] hover:scale-105 active:scale-95"
                    : "bg-[#101C30]/95 border border-[#25D366]/40 text-[#25D366] shadow-[0_8px_20px_rgba(0,0,0,0.5)] hover:bg-[#25D366] hover:text-white hover:border-[#25D366] hover:shadow-[0_12px_28px_rgba(37,211,102,0.35)] hover:scale-105 active:scale-95"
                  }`}
                >
                  <WhatsAppIcon size={25} className="transition-transform group-hover:scale-110" />
                </a>

                {/* Botão 3: Localização / Área de Atuação */}
                <a
                  href="https://maps.google.com/?q=Paulista+Pernambuco"
                  target="_blank"
                  rel="noreferrer"
                  title="Atendimento em Paulista, Recife e Região"
                  aria-label="Atendimento em Paulista, Recife e Região"
                  className={`w-14 h-14 sm:w-15 sm:h-15 rounded-2xl flex items-center justify-center transition-all duration-300 group cursor-pointer shrink-0 ${
                    !isDark
                      ? "bg-white/95 border-2 border-slate-100 shadow-[0_8px_25px_rgba(16,28,48,0.12)] text-[#101C30] hover:text-[#F28C0F] hover:border-[#F28C0F]/40 hover:shadow-[0_12px_28px_rgba(242,140,15,0.2)] hover:scale-105 active:scale-95"
                      : "bg-[#101C30]/95 border border-white/10 text-[#F28C0F] shadow-[0_8px_20px_rgba(0,0,0,0.5)] hover:border-[#F28C0F]/50 hover:scale-105 active:scale-95"
                  }`}
                >
                  <MapPin size={23} className="transition-transform group-hover:scale-110" />
                </a>
              </div>
            </div>

            {/* Container dos Cards de Link com Dimensões Padronizadas e Espaçamento Consistente */}
            <div className="w-full space-y-3.5 sm:space-y-4">
            {links.map((link) => {
              const Icon = link.icon;
              const isGreen = link.badgeType === "green";

              return (
                <a
                  key={link.id}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : "_self"}
                  rel="noreferrer"
                  className={`w-full p-4 sm:p-4.5 min-h-[76px] sm:min-h-[80px] rounded-2xl flex items-center justify-between transition-all duration-300 group cursor-pointer ${
                    !isDark
                      ? "bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-[#F28C0F]/60 shadow-[0_4px_18px_rgba(16,28,48,0.06)] hover:shadow-[0_8px_24px_rgba(242,140,15,0.14)] hover:scale-[1.01]"
                      : "bg-[#101C30]/90 hover:bg-[#162540] border border-white/10 hover:border-[#F28C0F]/50 shadow-lg hover:shadow-xl hover:scale-[1.01]"
                  }`}
                >
                  <div className="flex items-center gap-3.5 sm:gap-4 text-left min-w-0 flex-1">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                        !isDark
                          ? isGreen
                            ? "bg-emerald-50 text-[#16a34a] group-hover:scale-110"
                            : "bg-orange-50 text-[#F28C0F] group-hover:bg-[#F28C0F] group-hover:text-white group-hover:scale-110"
                          : "bg-white/10 text-[#F28C0F] group-hover:scale-110"
                      }`}
                    >
                      <Icon size={22} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span
                          className={`text-[14.5px] sm:text-[15.5px] font-bold transition-colors ${
                            !isDark
                              ? "text-[#101C30] group-hover:text-[#F28C0F]"
                              : "text-white group-hover:text-[#F28C0F]"
                          }`}
                        >
                          {link.name}
                        </span>

                        {link.badge && (
                          <span
                            className={`text-[9.5px] sm:text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider shrink-0 ${
                              !isDark
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
                        className={`text-xs sm:text-[13px] block leading-snug mt-0.5 truncate ${
                          !isDark ? "text-slate-500" : "text-slate-300"
                        }`}
                      >
                        {link.actionText}
                      </span>
                    </div>
                  </div>

                  <ChevronRight
                    size={19}
                    className={`transition-all group-hover:translate-x-1 shrink-0 ml-2 ${
                      !isDark
                        ? "text-slate-400 group-hover:text-[#F28C0F]"
                        : "text-slate-400 group-hover:text-white"
                    }`}
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>

        {/* 4. FOOTER DO BIOLINKS */}
        <footer
          className={`w-full text-center py-5 sm:py-6 text-[11px] space-y-1 transition-colors border-t shrink-0 mt-auto ${
            !isDark
              ? "border-slate-100 text-slate-500"
              : "border-white/10 text-slate-400"
          }`}
        >
          <p>© {new Date().getFullYear()} {brand.brokerName} • {brand.creci}</p>
          <p className="text-[10px] opacity-75">{brand.slogan}</p>
        </footer>
      </div>
    </div>
  );
}
