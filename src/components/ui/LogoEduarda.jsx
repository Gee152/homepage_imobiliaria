import React from 'react';
import { cn } from '@/lib/utils';
import { ShieldCheck, Home } from 'lucide-react';

export default function LogoEduarda({
  className = "",
  variant = "dark", // "dark" para fundos claros, "light" para fundos escuros
  subtitle = "CRECI 20367",
  showPartner = true,
  onClick
}) {
  const isLight = variant === "light";

  return (
    <div
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 cursor-pointer select-none transition-transform duration-300 hover:scale-[1.02] text-left",
        className
      )}
    >
      {/* Monograma / Ícone de Marca com Dourado e Azul */}
      <div
        className={cn(
          "w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center font-black tracking-wider text-sm sm:text-base transition-all duration-300 shadow-md shrink-0 border",
          isLight
            ? "bg-gradient-to-br from-[#122C58] to-[#0B1C38] text-[#C79C3F] border-[#C79C3F]/40 shadow-[#C79C3F]/10"
            : "bg-gradient-to-br from-[#122C58] to-[#0B1C38] text-[#C79C3F] border-[#122C58]/20 shadow-slate-900/10"
        )}
      >
        <div className="flex items-center justify-center relative">
          <span className="font-extrabold tracking-tight">MF</span>
        </div>
      </div>

      {/* Textos da Marca: Nome + CRECI + Parceria RM Home */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-center gap-1.5">
          <span
            className={cn(
              "text-lg sm:text-xl font-extrabold tracking-tight font-heading transition-colors",
              isLight ? "text-white" : "text-[#122C58]"
            )}
          >
            Matheus Ferreira
          </span>
        </div>

        <div className="flex items-center gap-2 mt-1">
          <span
            className={cn(
              "text-[10px] sm:text-[11px] font-bold uppercase tracking-wider",
              isLight ? "text-[#C79C3F]" : "text-[#C79C3F]"
            )}
          >
            Corretor • {subtitle}
          </span>
          {showPartner && (
            <>
              <span className={cn("text-[9px]", isLight ? "text-slate-400" : "text-slate-400")}>•</span>
              <span
                className={cn(
                  "text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded",
                  isLight
                    ? "bg-white/10 text-slate-200 border border-white/10"
                    : "bg-[#122C58]/10 text-[#122C58] font-semibold"
                )}
              >
                RM Home
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
