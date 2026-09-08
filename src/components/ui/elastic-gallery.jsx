import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const DEFAULT_ITEMS = [
  {
    id: "01",
    title: "Villa Panorâmica",
    category: "Arquitetura",
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
    alt: "Mansão Moderna com Fachada de Vidro",
  },
  {
    id: "02",
    title: "Mansão Greenfield",
    category: "Alto Padrão",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    alt: "Residência Contemporânea de Luxo",
  },
  {
    id: "03",
    title: "Bayview Heights",
    category: "Design",
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
    alt: "Piscina Infinita e Vista Mar",
  },
  {
    id: "04",
    title: "Alpine Haven",
    category: "Exclusivo",
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
    alt: "Residência nas Montanhas",
  },
  {
    id: "05",
    title: "Casa Inteligente",
    category: "Inovação",
    src: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80",
    alt: "Imóvel Sustentável de Alta Tecnologia",
  },
];

export function ElasticGallery({
  items = DEFAULT_ITEMS,
  className = "",
  isHeroBackground = false,
  onItemClick,
}) {
  const [activeId, setActiveId] = useState("03");

  // Quando usado como Background do Hero: ocupa 100% da área de fundo de forma fluida
  if (isHeroBackground) {
    return (
      <div className={cn("w-full h-full flex flex-row gap-1.5 sm:gap-2 select-none overflow-hidden", className)}>
        {items.map((item) => (
          <div
            key={item.id}
            onMouseEnter={() => setActiveId(item.id)}
            onClick={() => {
              setActiveId(item.id);
              if (onItemClick) onItemClick(item);
            }}
            className={cn(
              "relative cursor-pointer overflow-hidden rounded-xl border border-white/15 bg-slate-900 shadow-md",
              // Layout & Flex Transition (no mobile: muito mais destaque para o ativo com flex-[6] vs flex-[0.5] nas laterais)
              "transition-[flex,filter] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
              activeId === item.id 
                ? "flex-[6] sm:flex-[4] brightness-100 contrast-105" 
                : "flex-[0.6] sm:flex-[1] brightness-75 sm:brightness-85 hover:brightness-95 hover:scale-[1.01]"
            )}
          >
            {/* Background Image Layer */}
            <div className="absolute inset-0 h-full w-full">
              <img
                src={item.src}
                alt={item.alt}
                className={cn(
                  "w-full h-full object-cover object-center transition-transform duration-1000",
                  activeId === item.id ? "scale-100" : "scale-105"
                )}
                loading="eager"
              />
              {/* Soft Gradient Overlay for Text Readability */}
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent transition-opacity duration-500",
                  activeId === item.id ? "opacity-100" : "opacity-30"
                )}
              />
            </div>

            {/* Content Container: No hover/interação só o texto aparece, sem botões */}
            <div className="absolute bottom-0 left-0 right-0 flex h-full flex-col justify-end p-2.5 sm:p-5 pointer-events-none">
              {/* Active Content: Apenas Categoria e Título (Sem botões) */}
              <div
                className={cn(
                  "flex flex-col gap-1 transition-all duration-500",
                  activeId === item.id
                    ? "translate-y-0 opacity-100 delay-200"
                    : "translate-y-8 opacity-0"
                )}
              >
                <div className="flex items-center gap-1.5">
                  <span className="rounded-full border border-purple-400/40 bg-purple-950/70 px-2 py-0.5 text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-purple-200 backdrop-blur-md">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-sm sm:text-lg md:text-xl font-extrabold uppercase leading-tight text-white font-heading truncate drop-shadow-md">
                  {item.title}
                </h3>
              </div>

              {/* Inactive Content: Vertical Text (Desktop) / ID (Mobile) */}
              <div
                className={cn(
                  "absolute transition-all duration-500",
                  "bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2",
                  activeId === item.id
                    ? "opacity-0 scale-50"
                    : "opacity-100 delay-300"
                )}
              >
                <span className="hidden whitespace-nowrap text-xs sm:text-sm font-bold uppercase tracking-widest text-white/80 [writing-mode:vertical-rl] md:block">
                  {item.title}
                </span>
                <span className="block text-[9px] sm:text-[10px] font-bold text-white/80 md:hidden">
                  {item.id}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Modo Standalone Padrão (conforme especificação original)
  return (
    <div className={cn("w-full py-12 dark:bg-black md:py-24", className)}>
      <div className="mx-auto flex h-[500px] w-full max-w-6xl flex-col gap-2 px-4 md:h-[600px] md:flex-row md:gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            onMouseEnter={() => setActiveId(item.id)}
            onClick={() => {
              setActiveId(item.id);
              if (onItemClick) onItemClick(item);
            }}
            className={cn(
              "relative cursor-pointer overflow-hidden rounded-2xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950",
              "transition-[flex,filter] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
              activeId === item.id ? "flex-[4]" : "flex-[1]",
              activeId === item.id
                ? "brightness-100"
                : "brightness-50 hover:brightness-75"
            )}
          >
            {/* Background Image Layer */}
            <div className="absolute inset-0 h-full w-full">
              <img
                src={item.src}
                alt={item.alt}
                className={cn(
                  "w-full h-full object-cover transition-transform duration-1000",
                  activeId === item.id ? "scale-100" : "scale-110"
                )}
                loading="lazy"
              />
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500",
                  activeId === item.id ? "opacity-100" : "opacity-0"
                )}
              />
            </div>

            {/* Content Container */}
            <div className="absolute bottom-0 left-0 right-0 flex h-full flex-col justify-end p-4 md:p-8">
              <div
                className={cn(
                  "flex flex-col gap-2 transition-all duration-500",
                  activeId === item.id
                    ? "translate-y-0 opacity-100 delay-200"
                    : "translate-y-12 opacity-0"
                )}
              >
                <div className="flex items-center gap-2">
                  <span className="rounded-full border border-white/30 bg-white/10 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur-md md:px-3 md:text-xs">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-2xl font-black uppercase leading-none text-white md:text-5xl font-heading">
                  {item.title}
                </h3>

                <div className="mt-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/80 md:mt-4 md:text-sm">
                  View Project{" "}
                  <ArrowUpRight className="h-3 w-3 md:h-4 md:w-4" />
                </div>
              </div>

              <div
                className={cn(
                  "absolute transition-all duration-500",
                  "bottom-4 left-1/2 -translate-x-1/2 md:bottom-8",
                  activeId === item.id
                    ? "opacity-0 scale-50"
                    : "opacity-100 delay-500"
                )}
              >
                <span className="hidden whitespace-nowrap text-xl font-bold uppercase tracking-widest text-white [writing-mode:vertical-rl] md:block">
                  {item.title}
                </span>

                <span className="block text-xs font-bold text-white md:hidden">
                  {item.id}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ElasticGallery;
