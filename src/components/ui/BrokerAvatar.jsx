import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { VISTAHAVEN_DATA } from "@/data/propertyData";

/**
 * BrokerAvatar - Componente reutilizável da foto oficial da corretora
 * com borda em degradê dourado/branco e selo oficial CRECI.
 * 
 * Usado tanto na abertura da Hero quanto na página de BioLinks.
 */
export default function BrokerAvatar({
  size = "hero", // "hero" | "bio" | "md" | "sm"
  showBadge = true,
  badgeText = VISTAHAVEN_DATA.brand.creci,
  src = VISTAHAVEN_DATA.brand.photo,
  alt = VISTAHAVEN_DATA.brand.photoAlt,
  className = "",
  imgClassName = "",
  imgPosition = "54% 14%",
  imgScale = 0.94,
  enableBokeh = true
}) {
  const sizeMap = {
    hero: {
      avatarClass: "w-48 h-48 sm:w-64 sm:h-64 p-2 sm:p-2.5",
      badgeClass: "text-xs sm:text-sm px-4 sm:px-5 py-1.5 sm:py-2 -bottom-3.5 sm:-bottom-4",
      iconSize: 16
    },
    bio: {
      avatarClass: "w-36 h-36 sm:w-44 sm:h-44 p-1.5 sm:p-2",
      badgeClass: "text-[11px] sm:text-xs px-3.5 sm:px-4 py-1 -bottom-3 sm:-bottom-3.5",
      iconSize: 14
    },
    md: {
      avatarClass: "w-32 h-32 sm:w-36 sm:h-36 p-1.5",
      badgeClass: "text-[10px] sm:text-[11px] px-3 py-0.5 -bottom-2.5",
      iconSize: 13
    },
    sm: {
      avatarClass: "w-24 h-24 sm:w-28 sm:h-28 p-1",
      badgeClass: "text-[9px] sm:text-[10px] px-2.5 py-0.5 -bottom-2",
      iconSize: 12
    }
  };

  const currentSize = sizeMap[size] || sizeMap.hero;

  return (
    <div className={cn("relative group transition-transform duration-500 hover:scale-105 inline-block select-none", className)}>
      {/* Moldura Circular com Borda Dourada e Branca (#F28C0F via-white to-#F28C0F) */}
      <div
        className={cn(
          "rounded-full bg-gradient-to-tr from-[#F28C0F] via-white to-[#F28C0F] shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(242,140,15,0.4)] ring-2 ring-white/40",
          currentSize.avatarClass
        )}
      >
        <div className="relative w-full h-full rounded-full overflow-hidden bg-[#181d24]">
          {/* Camada de fundo ambiente (bokeh) que harmoniza o preenchimento da moldura circular */}
          {enableBokeh && (
            <img
              src={src}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover blur-md scale-125 opacity-70 pointer-events-none"
            />
          )}

          {/* Foto principal com enquadre profissional (mais respiro e proporção harmônica) */}
          <img
            src={src}
            alt={alt}
            className={cn(
              "relative z-10 w-full h-full object-cover shadow-inner transition-transform duration-500",
              imgClassName
            )}
            style={{
              objectPosition: imgPosition,
              transform: `scale(${imgScale})`,
              maskImage: "radial-gradient(ellipse 92% 92% at 50% 50%, black 75%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(ellipse 92% 92% at 50% 50%, black 75%, transparent 100%)"
            }}
          />
        </div>
      </div>

      {/* Selo / Badge Oficial CRECI */}
      {showBadge && (
        <div
          className={cn(
            "absolute left-1/2 -translate-x-1/2 bg-[#F28C0F] text-[#101C30] font-black rounded-full shadow-2xl shadow-black/80 whitespace-nowrap uppercase tracking-wider flex items-center gap-1.5 border-2 border-white z-10",
            currentSize.badgeClass
          )}
        >
          <CheckCircle2 size={currentSize.iconSize} className="stroke-[2.5]" />
          <span>{badgeText}</span>
        </div>
      )}
    </div>
  );
}
