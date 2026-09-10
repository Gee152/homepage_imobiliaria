import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Instagram, 
  MessageCircle, 
  Phone,
  Globe,
  Building2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { VISTAHAVEN_DATA } from "@/data/propertyData";

const DEFAULT_SOCIALS = [
  {
    name: "Instagram Matheus",
    icon: Instagram,
    href: VISTAHAVEN_DATA.brand.instagram,
    label: "@matheusferreira.corretor"
  },
  {
    name: "RM Home Imobiliária",
    icon: Building2,
    href: VISTAHAVEN_DATA.brand.instagramPartner,
    label: "@rmhomeimobiliaria"
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    href: `${VISTAHAVEN_DATA.brand.whatsapp}&text=${encodeURIComponent(VISTAHAVEN_DATA.brand.whatsappSimulationMessage)}`,
    label: "Falar no WhatsApp"
  },
  {
    name: "Telefone",
    icon: Phone,
    href: `tel:+${VISTAHAVEN_DATA.brand.whatsappPhone}`,
    label: "Atendimento Direto"
  },
  {
    name: "Website",
    icon: Globe,
    href: "#home",
    label: "matheusferreira.com.br"
  }
];

export default function SocialDock({ items = DEFAULT_SOCIALS, className = "" }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 p-1.5 sm:p-2 rounded-2xl bg-[#0B1C38]/90 border border-[#122C58] shadow-2xl backdrop-blur-md relative",
        className
      )}
    >
      {items.map((item, idx) => {
        const Icon = item.icon;
        const isHovered = hoveredIndex === idx;

        return (
          <div
            key={item.name}
            className="relative"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Tooltip com Speech Bubble */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.85 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.85 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="absolute -top-11 left-1/2 -translate-x-1/2 z-30 pointer-events-none flex flex-col items-center"
                >
                  <div className="bg-[#C79C3F] text-[#0B1C38] text-[11px] font-extrabold px-3 py-1 rounded-xl shadow-xl whitespace-nowrap leading-none flex items-center justify-center">
                    {item.name}
                  </div>
                  <div className="w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-[#C79C3F] -mt-[1px]" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Ícone com cápsula interativa no hover */}
            <a
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : "_self"}
              rel="noreferrer"
              className={cn(
                "relative flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200 group cursor-pointer",
                isHovered
                  ? "bg-[#122C58] text-[#C79C3F] shadow-inner"
                  : "text-slate-300 hover:text-white"
              )}
              aria-label={item.name}
            >
              <Icon size={18} className="transition-transform duration-200 group-hover:scale-110" />

              {isHovered && (
                <motion.span
                  layoutId="activeUnderline"
                  className="absolute bottom-1 w-3.5 h-[2.5px] bg-[#C79C3F] rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
            </a>
          </div>
        );
      })}
    </div>
  );
}
