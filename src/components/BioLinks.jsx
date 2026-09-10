import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MessageCircle, 
  Instagram, 
  Phone, 
  ShieldCheck, 
  Building2, 
  CalendarCheck,
  Share2,
  ExternalLink,
  ChevronRight,
  Sparkles,
  MapPin,
  Banknote,
  CheckCircle2
} from "lucide-react";
import matheusFoto from "../img/matheus.jpg";
import { VISTAHAVEN_DATA } from "../data/propertyData";
import LogoEduarda from "./ui/LogoEduarda";

export default function BioLinks() {
  const { brand } = VISTAHAVEN_DATA;
  const [activeId, setActiveId] = useState(null);

  const links = [
    {
      id: "whatsapp",
      name: "Simulação MCMV",
      actionText: "Simular Financiamento no WhatsApp",
      destUrl: "Atendimento imediato com Matheus",
      badge: "Mais Rápido",
      icon: MessageCircle,
      href: `${brand.whatsapp}&text=${encodeURIComponent(brand.whatsappSimulationMessage)}`,
      gradient: "from-[#122C58] to-[#0B1C38]",
      borderGlow: "border-[#C79C3F]/50 shadow-[#C79C3F]/30",
      activeTabColor: "bg-[#C79C3F]"
    },
    {
      id: "indicou-ganhou",
      name: "Indicou Ganhou R$ 500",
      actionText: "Indique um Amigo e Ganhe R$ 500 no Pix",
      destUrl: "Programa de Indicação Oficial",
      badge: "R$ 500 no Pix",
      icon: Banknote,
      href: `${brand.whatsapp}&text=${encodeURIComponent(brand.whatsappReferralMessage)}`,
      gradient: "from-[#6FC34B] to-[#16a34a]",
      borderGlow: "border-[#6FC34B]/60 shadow-[#6FC34B]/40",
      activeTabColor: "bg-[#6FC34B]"
    },
    {
      id: "website",
      name: "Catálogo de Imóveis",
      actionText: "Ver Imóveis em Jaboatão, Paulista e Recife",
      destUrl: "matheusferreira.com.br",
      badge: "MCMV",
      icon: Building2,
      href: window.location.pathname,
      gradient: "from-[#122C58] to-[#1E3A8A]",
      borderGlow: "border-[#122C58]/60 shadow-[#122C58]/40",
      activeTabColor: "bg-[#122C58]"
    },
    {
      id: "instagram",
      name: "Instagram Matheus",
      actionText: "Acompanhar @matheusferreira.corretor",
      destUrl: "@matheusferreira.corretor",
      badge: "Dicas & Imóveis",
      icon: Instagram,
      href: brand.instagram,
      gradient: "from-[#f09433] via-[#e6683c] to-[#bc1888]",
      borderGlow: "border-pink-400/50 shadow-pink-500/40",
      activeTabColor: "bg-[#e1306c]"
    },
    {
      id: "rmhome",
      name: "RM Home Imobiliária",
      actionText: "Instagram da Imobiliária Parceira",
      destUrl: "@rmhomeimobiliaria",
      badge: "Parceira Oficial",
      icon: Building2,
      href: brand.instagramPartner,
      gradient: "from-[#0B1C38] to-[#122C58]",
      borderGlow: "border-[#C79C3F]/40 shadow-slate-900/40",
      activeTabColor: "bg-[#C79C3F]"
    },
    {
      id: "phone",
      name: "Telefone Direto",
      actionText: "Ligar para Matheus Ferreira",
      destUrl: "(81) 99999-9999",
      badge: "Ligação",
      icon: Phone,
      href: `tel:+${brand.whatsappPhone}`,
      gradient: "from-[#00b09b] to-[#96c93d]",
      borderGlow: "border-emerald-400/50 shadow-emerald-500/40",
      activeTabColor: "bg-[#00a884]"
    }
  ];

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Matheus Ferreira - Corretor de Imóveis (CRECI 20367)",
          text: "Realize o sonho da sua casa própria na Grande Recife com o Matheus Ferreira.",
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
    <div className="min-h-screen bg-gradient-to-b from-[#0B1C38] via-[#122C58] to-[#0B1C38] text-white flex flex-col items-center justify-between py-10 px-4 sm:px-6 relative overflow-x-hidden">
      
      {/* Botão de Compartilhar no Topo */}
      <div className="w-full max-w-md flex justify-end pb-4">
        <button
          onClick={handleShare}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 backdrop-blur-md transition-all cursor-pointer shadow-md"
          title="Compartilhar Perfil"
        >
          <Share2 size={18} className="text-white" />
        </button>
      </div>

      <div className="w-full max-w-md flex flex-col items-center text-center space-y-6">
        
        {/* Foto Profissional do Matheus */}
        <div className="relative">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-[#C79C3F] via-white to-[#6FC34B] shadow-2xl">
            <img
              src={matheusFoto}
              alt="Matheus Ferreira - Corretor de Imóveis"
              className="w-full h-full object-cover rounded-full object-top shadow-inner"
            />
          </div>
          <span className="absolute bottom-0 right-0 w-6 h-6 bg-[#6FC34B] border-2 border-[#0B1C38] rounded-full flex items-center justify-center text-[10px] font-bold text-[#0B1C38]">
            ✓
          </span>
        </div>

        {/* Título e Cargo */}
        <div className="space-y-1.5">
          <h1 className="text-2xl font-black font-heading tracking-tight text-white flex items-center justify-center gap-2">
            Matheus Ferreira
          </h1>
          <p className="text-xs font-bold uppercase tracking-widest text-[#C79C3F]">
            CRECI 20367 • RM Home Imobiliária
          </p>
          <p className="text-xs text-slate-300 max-w-xs mx-auto leading-relaxed pt-1">
            Especialista em Minha Casa Minha Vida e crédito habitacional Caixa na Grande Recife.
          </p>
        </div>

        {/* Lista de Botões de Link */}
        <div className="w-full space-y-3.5 pt-2">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.id}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : "_self"}
                rel="noreferrer"
                className={`w-full bg-[#0B1C38]/90 hover:bg-[#122C58] border border-white/10 hover:border-[#C79C3F]/50 p-4 rounded-2xl flex items-center justify-between transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] group cursor-pointer ${link.borderGlow}`}
              >
                <div className="flex items-center gap-3.5 text-left">
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                    <Icon size={20} className={link.id === "indicou-ganhou" ? "text-[#6FC34B]" : "text-[#C79C3F]"} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-extrabold text-white group-hover:text-[#C79C3F] transition-colors">
                        {link.name}
                      </span>
                      {link.badge && (
                        <span className="text-[9px] font-bold bg-[#C79C3F]/20 text-[#C79C3F] px-2 py-0.5 rounded-full uppercase tracking-wider border border-[#C79C3F]/30">
                          {link.badge}
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-slate-300 block leading-tight">
                      {link.actionText}
                    </span>
                  </div>
                </div>

                <ChevronRight size={18} className="text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>
            );
          })}
        </div>

      </div>

      {/* Footer do BioLinks */}
      <footer className="w-full max-w-md text-center pt-8 text-[11px] text-slate-400 space-y-2">
        <p>© {new Date().getFullYear()} Matheus Ferreira • CRECI 20367</p>
        <p className="text-[10px] text-slate-500">Parceria Oficial RM Home Imobiliária • Juntos Realizamos Sonhos</p>
      </footer>

    </div>
  );
}
