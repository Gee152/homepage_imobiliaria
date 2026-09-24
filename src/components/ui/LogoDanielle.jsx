import React from 'react';
import { cn } from '@/lib/utils';
import { VISTAHAVEN_DATA } from '@/data/propertyData';

/**
 * LogoDanielle - Identidade visual tipográfica vetorial / CSS baseada no criativo de referência.
 */
export default function LogoDanielle({
  className = "",
  variant = "light", // "light" (para fundos escuros #101C30) ou "dark" (para fundos claros)
  size = "md",       // "sm" (navbar), "md" (padrão / hero), "lg" (destaque / footer)
  layout = "stacked", // "stacked" (vertical) ou "inline" (horizontal lado a lado)
  renderMode = "svg", // "svg" (vetor com anti-aliasing nítido) ou "css" (css borders)
  name = VISTAHAVEN_DATA.brand.name,
  role = "CORRETORA DE IMÓVEIS",
  creci = VISTAHAVEN_DATA.brand.creci,
  showCreci = true,
  align = "center",  // "center" | "left"
  showRoof = true,
  onClick
}) {
  const isLight = variant === "light";

  // Dimensões dinâmicas por tamanho
  const sizeConfig = {
    sm: {
      nameClass: "text-2xl sm:text-[26px] leading-[0.9]",
      roleClass: "text-[8px] sm:text-[9px] tracking-[0.24em] mt-0.5",
      creciClass: "text-[7px] sm:text-[8px] tracking-[0.22em] mt-0.5",
      roofSvgWidth: 38,
      roofSvgHeight: 12,
      roofStroke: 3.2,
      roofCssClass: "w-8 h-2.5 border-t-[2px] border-l-[2px]",
      containerGap: "gap-0"
    },
    md: {
      nameClass: "text-3xl sm:text-4xl lg:text-[42px] leading-[0.95]",
      roleClass: "text-[9.5px] sm:text-[11px] tracking-[0.26em] mt-1",
      creciClass: "text-[8px] sm:text-[9.5px] tracking-[0.24em] mt-0.5",
      roofSvgWidth: 52,
      roofSvgHeight: 16,
      roofStroke: 4.0,
      roofCssClass: "w-11 h-3.5 border-t-[3px] border-l-[3px]",
      containerGap: "gap-0.5"
    },
    lg: {
      nameClass: "text-4xl sm:text-5xl lg:text-6xl leading-[1]",
      roleClass: "text-[12px] sm:text-[14px] tracking-[0.28em] mt-1.5",
      creciClass: "text-[10px] sm:text-[12px] tracking-[0.26em] mt-1",
      roofSvgWidth: 70,
      roofSvgHeight: 22,
      roofStroke: 4.8,
      roofCssClass: "w-14 h-4.5 border-t-[4px] border-l-[4px]",
      containerGap: "gap-1"
    }
  };

  const currentSize = sizeConfig[size] || sizeConfig.md;

  // Layout Inline: Nome com telhado sobre o 'n' e Cargo lado a lado na mesma linha
  if (layout === "inline") {
    return (
      <div
        onClick={onClick}
        className={cn(
          "inline-flex items-center select-none transition-all duration-300 group gap-2.5 sm:gap-3",
          onClick && "cursor-pointer hover:opacity-95 hover:scale-[1.01]",
          className
        )}
        style={{ WebkitFontSmoothing: 'antialiased' }}
      >
        {/* Bloco do Nome com o Telhado sobre o 'n' de Danielle */}
        <div className="relative inline-flex flex-col items-center">
          {showRoof && (
            <div className="w-full relative h-3 sm:h-3.5 -mb-0.5 sm:-mb-1 pointer-events-none">
              <div className="absolute left-[21.5%] w-[37%] transition-transform duration-300 group-hover:-translate-y-0.5">
                <svg
                  viewBox="0 0 100 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto text-[#F28C0F] overflow-visible drop-shadow-sm"
                >
                  <path
                    d="M 5 22 L 50 5 L 95 22"
                    stroke="currentColor"
                    strokeWidth={currentSize.roofStroke || 4}
                    strokeLinecap="round"
                    strokeLinejoin="miter"
                  />
                </svg>
              </div>
            </div>
          )}

          <h1
            className={cn(
              "font-signature font-normal tracking-wide transition-colors whitespace-nowrap",
              currentSize.nameClass,
              isLight
                ? "text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]"
                : "text-[#101C30]"
            )}
            style={{
              fontFamily: "'Allura', cursive",
              textRendering: "optimizeLegibility"
            }}
          >
            {name}
          </h1>
        </div>

        {/* Separador Ponto Laranja (#F28C0F) */}
        {role && (
          <span className="w-1.5 h-1.5 rounded-full bg-[#F28C0F] shrink-0 opacity-80" />
        )}

        {/* Cargo Institucional Inline */}
        {role && (
          <span
            className={cn(
              "font-heading font-extrabold uppercase whitespace-nowrap transition-colors",
              currentSize.roleClass,
              isLight ? "text-white/95" : "text-[#101C30]"
            )}
            style={{ letterSpacing: '0.22em' }}
          >
            {role}
          </span>
        )}

        {/* CRECI opcional */}
        {showCreci && creci && (
          <>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-white/30 shrink-0" />
            <span
              className={cn(
                "font-heading font-semibold uppercase whitespace-nowrap transition-colors",
                currentSize.creciClass,
                isLight ? "text-white/80" : "text-slate-600"
              )}
              style={{ letterSpacing: '0.2em' }}
            >
              {creci}
            </span>
          </>
        )}
      </div>
    );
  }

  // Layout Stacked (Padrão Vertical)
  return (
    <div
      onClick={onClick}
      className={cn(
        "inline-flex flex-col select-none transition-all duration-300 group",
        align === "center" ? "items-center text-center" : "items-start text-left",
        onClick && "cursor-pointer hover:opacity-95 hover:scale-[1.01]",
        currentSize.containerGap,
        className
      )}
      style={{ WebkitFontSmoothing: 'antialiased' }}
    >
      {/* 1. Telhado Laranja (#F28C0F) posicionado exatamente sobre a letra 'n' de Danielle conforme criativo */}
      {showRoof && (
        <div className="w-full relative h-3.5 sm:h-4.5 lg:h-5.5 -mb-0.5 sm:-mb-1 pointer-events-none">
          <div className="absolute left-[21.5%] w-[37%] transition-transform duration-300 group-hover:-translate-y-0.5">
            <svg
              viewBox="0 0 100 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto text-[#F28C0F] overflow-visible drop-shadow-sm"
            >
              <path
                d="M 5 22 L 50 5 L 95 22"
                stroke="currentColor"
                strokeWidth={currentSize.roofStroke || 4}
                strokeLinecap="round"
                strokeLinejoin="miter"
              />
            </svg>
          </div>
        </div>
      )}

      {/* 2. Nome da Marca em Tipografia Cursiva de Assinatura */}
      <div className="relative">
        <h1
          className={cn(
            "font-signature font-normal tracking-wide transition-colors whitespace-nowrap",
            currentSize.nameClass,
            isLight
              ? "text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]"
              : "text-[#101C30]"
          )}
          style={{
            fontFamily: "'Allura', cursive",
            textRendering: "optimizeLegibility"
          }}
        >
          {name}
        </h1>
      </div>

      {/* 3. Subtítulo Institucional ("CORRETORA DE IMÓVEIS") */}
      <span
        className={cn(
          "font-heading font-extrabold uppercase whitespace-nowrap transition-colors",
          currentSize.roleClass,
          isLight ? "text-white/95" : "text-[#101C30]"
        )}
        style={{ letterSpacing: '0.24em' }}
      >
        {role}
      </span>

      {/* 4. CRECI do Profissional */}
      {showCreci && creci && (
        <span
          className={cn(
            "font-heading font-semibold uppercase whitespace-nowrap transition-colors",
            currentSize.creciClass,
            isLight ? "text-white/80" : "text-slate-600"
          )}
          style={{ letterSpacing: '0.22em' }}
        >
          {creci}
        </span>
      )}
    </div>
  );
}
