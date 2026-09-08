import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Instagram, 
  Linkedin, 
  MessageCircle, 
  Phone,
  Mail,
  Globe
} from "lucide-react";
import { cn } from "@/lib/utils";

const DEFAULT_SOCIALS = [
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/eduardajackesimoveis/",
    label: "@eduardajackesimoveis"
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    href: "https://api.whatsapp.com/send?phone=5581999999999",
    label: "Conversar no WhatsApp"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com",
    label: "Eduarda Jackes"
  },
  {
    name: "Telefone",
    icon: Phone,
    href: "tel:+5581999999999",
    label: "(81) 99999-9999"
  },
  {
    name: "Website",
    icon: Globe,
    href: "#home",
    label: "eduardajackes.com.br"
  }
];

export default function SocialDock({ items = DEFAULT_SOCIALS, className = "" }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 p-1.5 sm:p-2 rounded-2xl bg-slate-900/80 border border-slate-800/80 shadow-2xl backdrop-blur-md relative",
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
            {/* Tooltip com a seta estilo Speech Bubble (exatamente como no print) */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.85 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.85 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="absolute -top-11 left-1/2 -translate-x-1/2 z-30 pointer-events-none flex flex-col items-center"
                >
                  <div className="bg-white text-slate-950 text-[11px] font-bold px-3 py-1 rounded-xl shadow-xl whitespace-nowrap leading-none flex items-center justify-center">
                    {item.name}
                  </div>
                  {/* Pequena setinha apontando para baixo */}
                  <div className="w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-white -mt-[1px]" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Ícone com cápsula interativa no hover e tracinho inferior */}
            <a
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : "_self"}
              rel="noreferrer"
              className={cn(
                "relative flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200 group cursor-pointer",
                isHovered
                  ? "bg-slate-800/90 text-white shadow-inner"
                  : "text-slate-400 hover:text-white"
              )}
              aria-label={item.name}
            >
              <Icon size={18} className="transition-transform duration-200 group-hover:scale-110" />

              {/* Indicador sutil de traço inferior ativo quando em hover */}
              {isHovered && (
                <motion.span
                  layoutId="activeUnderline"
                  className="absolute bottom-1 w-3.5 h-[2.5px] bg-white rounded-full"
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
