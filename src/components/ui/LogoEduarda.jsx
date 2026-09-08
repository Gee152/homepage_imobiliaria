import React from 'react';
import { cn } from '@/lib/utils';

export default function LogoEduarda({
  className = "",
  variant = "dark", // "dark" para fundos claros (texto escuro), "light" para fundos escuros (texto branco)
  subtitle = "Consultora Imobiliária",
  subtitleColor = "brand", // "brand" (cor padrão da página: purple), "gold" (#d4af37), ou classe personalizada
  onClick
}) {
  const isLight = variant === "light";

  return (
    <div
      onClick={onClick}
      className={cn(
        "flex flex-col items-center justify-center text-center cursor-pointer select-none transition-transform duration-300 hover:scale-[1.02]",
        className
      )}
    >
      <span
        style={{ fontFamily: "'Italiana', serif" }}
        className={cn(
          "text-xl sm:text-2xl md:text-[1.65rem] tracking-[4px] sm:tracking-[5px] uppercase leading-none font-normal transition-colors",
          isLight ? "text-white drop-shadow-sm" : "text-slate-900"
        )}
      >
        Eduarda Jackes
      </span>
      <span
        style={{ fontFamily: "'Montserrat', sans-serif" }}
        className={cn(
          "font-semibold text-[9px] sm:text-[11px] tracking-[6px] sm:tracking-[8px] uppercase mt-1.5 leading-tight transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]",
          subtitleColor === "brand"
            ? (isLight ? "text-purple-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]" : "text-purple-700")
            : subtitleColor === "gold"
              ? "text-[#d4af37]"
              : subtitleColor
        )}
      >
        {subtitle}
      </span>
    </div>
  );
}
