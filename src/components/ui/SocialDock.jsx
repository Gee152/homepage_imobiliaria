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
import { VISTAHAVEN_DATA, getWhatsAppUrl } from "@/data/propertyData";

const DEFAULT_SOCIALS = [
  {
    name: `Instagram ${VISTAHAVEN_DATA.brand.brokerName}`,
    icon: Instagram,
    href: VISTAHAVEN_DATA.brand.instagram,
    label: "@daniellegaldino.corretora"
  },
  {
<<<<<<< Updated upstream
    name: VISTAHAVEN_DATA.brand.company || "Aurora Imobiliária",
=======
    name: VISTAHAVEN_DATA.brand.company || "RM Home Imobiliária",
>>>>>>> Stashed changes
    icon: Building2,
    href: VISTAHAVEN_DATA.brand.instagramPartner,
    label: "@auroraimobiliariaoficial"
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    href: getWhatsAppUrl("Olá Danielle! Vim pelo site e gostaria de falar com você no WhatsApp."),
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
    label: "daniellegaldino.com.br"
  }
];

export default function SocialDock({ items = DEFAULT_SOCIALS, className = "" }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 p-1.5 sm:p-2 rounded-2xl bg-[#0A1220]/90 border border-[#101C30] shadow-2xl backdrop-blur-md relative",
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
                  <div className="bg-[#F28C0F] text-[#101C30] text-[11px] font-extrabold px-3 py-1 rounded-xl shadow-xl whitespace-nowrap leading-none flex items-center justify-center">
                    {item.name}
                  </div>
                  <div className="w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-[#F28C0F] -mt-[1px]" />
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
                  ? "bg-[#101C30] text-[#F28C0F] shadow-inner"
                  : "text-slate-300 hover:text-white"
              )}
              aria-label={item.name}
            >
              <Icon size={18} className="transition-transform duration-200 group-hover:scale-110" />

              {isHovered && (
                <motion.span
                  layoutId="activeUnderline"
                  className="absolute bottom-1 w-3.5 h-[2.5px] bg-[#F28C0F] rounded-full"
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
