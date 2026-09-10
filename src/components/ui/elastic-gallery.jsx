import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import entregaChaves from "../../img/entrega_chaves.jpg";
import assinaturaContrato from "../../img/assinatura_contrato.jpg";

const DEFAULT_ITEMS = [
  {
    id: "01",
    title: "Chaves na Mão",
    category: "Sonho Realizado",
    src: entregaChaves,
    alt: "Entrega de chaves com clientes sorrindo",
  },
  {
    id: "02",
    title: "Residencial Candeias",
    category: "Jaboatão",
    src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
    alt: "Condomínio Residencial Moderno",
  },
  {
    id: "03",
    title: "Contrato Assinado",
    category: "Caixa & Minha Casa Minha Vida",
    src: assinaturaContrato,
    alt: "Assinatura do contrato habitacional",
  },
  {
    id: "04",
    title: "Reserva Paulista",
    category: "Paulista",
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
    alt: "Condomínio Clube com Piscina",
  },
  {
    id: "05",
    title: "Parque Verde",
    category: "Abreu e Lima",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    alt: "Condomínio Residencial Fechado",
  },
];

export function ElasticGallery({
  items = DEFAULT_ITEMS,
  className = "",
  isHeroBackground = false,
  onItemClick,
}) {
  const [activeId, setActiveId] = useState("01");

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
              "relative h-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer overflow-hidden group",
              activeId === item.id ? "flex-[4.5]" : "flex-[1] hover:flex-[1.8]"
            )}
          >
            {/* Background Image */}
            <img
              src={item.src}
              alt={item.alt}
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            {/* Soft Black Gradient Overlay */}
            <div
              className={cn(
                "absolute inset-0 transition-opacity duration-500",
                activeId === item.id
                  ? "bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-80"
                  : "bg-black/40 group-hover:bg-black/20 opacity-70"
              )}
            />

            {/* Content Pill (Visible on active or expanded state) */}
            <div
              className={cn(
                "absolute bottom-6 left-6 right-6 transition-all duration-500 flex flex-col justify-end pointer-events-none",
                activeId === item.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              <span className="text-[10px] font-bold text-[#C79C3F] uppercase tracking-widest block mb-1">
                {item.category}
              </span>
              <h3 className="text-sm sm:text-base font-extrabold text-white font-heading">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-4", className)}>
      {items.map((item) => (
        <div key={item.id} className="relative rounded-2xl overflow-hidden h-64 group shadow-lg">
          <img
            src={item.src}
            alt={item.alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
            <div>
              <span className="text-xs font-bold text-[#C79C3F] block">{item.category}</span>
              <h4 className="text-sm font-bold text-white">{item.title}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
