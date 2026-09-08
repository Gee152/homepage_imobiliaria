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
  MapPin
} from "lucide-react";
import eduardaFoto from "../img/eduarda.jpg";
import { VISTAHAVEN_DATA } from "../data/propertyData";
import LogoEduarda from "./ui/LogoEduarda";

export default function BioLinks() {
  const { brand } = VISTAHAVEN_DATA;
  // Inicialmente nenhum ativo/expandido (ou o que estiver sob hover)
  const [activeId, setActiveId] = useState(null);

  // Canais com cores autênticas e de alto padrão alinhadas ao nicho imobiliário de luxo
  const links = [
    {
      id: "whatsapp",
      name: "WhatsApp",
      actionText: "Conversar no WhatsApp",
      destUrl: "api.whatsapp.com/send?phone=...",
      badge: "Mais Rápido",
      icon: MessageCircle,
      href: brand.whatsapp,
      gradient: "from-[#00c6ff] to-[#0072ff]",
      borderGlow: "border-sky-400/50 shadow-sky-500/40",
      activeTabColor: "bg-[#0088ff]"
    },
    {
      id: "website",
      name: "Catálogo Imóveis",
      actionText: "Ver Portfólio de Alto Padrão",
      destUrl: "eduardajackes.com.br",
      badge: "Tour Virtual",
      icon: Building2,
      href: window.location.pathname,
      gradient: "from-[#8a2be2] to-[#4a00e0]",
      borderGlow: "border-purple-400/50 shadow-purple-500/40",
      activeTabColor: "bg-[#6a00f4]"
    },
    {
      id: "instagram",
      name: "Instagram",
      actionText: "Acompanhar no Instagram",
      destUrl: "@eduardajackesimoveis",
      badge: "Vídeos & Fotos",
      icon: Instagram,
      href: brand.instagram,
      gradient: "from-[#f09433] via-[#e6683c] to-[#bc1888]",
      borderGlow: "border-pink-400/50 shadow-pink-500/40",
      activeTabColor: "bg-[#e1306c]"
    },
    {
      id: "schedule",
      name: "Agendar Visita",
      actionText: "Marcar Visita VIP aos Imóveis",
      destUrl: "Consultoria presencial em Recife",
      badge: "Exclusivo",
      icon: CalendarCheck,
      href: `${brand.whatsapp}?text=${encodeURIComponent("Olá Eduarda! Gostaria de agendar uma visita presencial para conhecer imóveis de alto padrão.")}`,
      gradient: "from-[#2193b0] to-[#6dd5ed]",
      borderGlow: "border-cyan-400/50 shadow-cyan-500/40",
      activeTabColor: "bg-[#2193b0]"
    },
    {
      id: "phone",
      name: "Telefone",
      actionText: "Falar por Ligação Direta",
      destUrl: "(81) 99999-9999",
      badge: "Voz",
      icon: Phone,
      href: "tel:+5581999999999",
      gradient: "from-[#00b09b] to-[#96c93d]",
      borderGlow: "border-emerald-400/50 shadow-emerald-500/40",
      activeTabColor: "bg-[#00a884]"
    }
  ];

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Eduarda Jackes - Consultoria Imobiliária",
          text: "Acesse os canais de atendimento e imóveis de alto padrão da Eduarda Jackes",
          url: window.location.href,
        });
      } catch (err) {
        console.log("Cancelado", err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copiado para a área de transferência!");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-between px-4 py-8 sm:py-12 relative overflow-hidden selection:bg-purple-600 selection:text-white font-sans">
      {/* Luzes de Fundo e Glows Dinâmicos */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Botão sutil de Compartilhar no Topo Direito */}
      <div className="w-full max-w-md flex justify-end mb-2 relative z-20">
        <button
          onClick={handleShare}
          className="p-2.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-all cursor-pointer shadow-lg active:scale-95"
          title="Compartilhar Perfil"
          aria-label="Compartilhar"
        >
          <Share2 size={18} />
        </button>
      </div>

      {/* Conteúdo Central */}
      <main className="w-full max-w-md flex flex-col items-center relative z-10">
        
        {/* Avatar Ampliado com Borda Gradiente e Glow de Alta Presença */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="relative mb-6"
        >
          <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full p-[3.5px] bg-gradient-to-tr from-purple-500 via-purple-300 to-indigo-500 shadow-2xl shadow-purple-900/50">
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
              <img
                src={eduardaFoto}
                alt="Eduarda Jackes"
                className="w-full h-full object-cover object-[center_15%]"
              />
            </div>
          </div>
          {/* Badge de Verificado */}
          <div 
            className="absolute bottom-1 right-2 bg-purple-600 text-white p-2 rounded-full shadow-xl border-[2.5px] border-slate-950" 
            title="Perfil Verificado"
          >
            <ShieldCheck size={18} />
          </div>
        </motion.div>

        {/* Logo Eduarda Jackes */}
        <motion.div
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="text-center mb-3"
        >
          <LogoEduarda variant="light" />
        </motion.div>

        {/* Tagline e Credencial CRECI */}
        <motion.div
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="flex flex-col items-center gap-2 mb-8 text-center"
        >
          <span className="inline-flex items-center gap-1.5 text-purple-300 font-semibold bg-purple-950/60 px-3.5 py-1 rounded-full border border-purple-500/30 text-xs shadow-sm">
            <ShieldCheck size={13} className="text-purple-400" />
            {brand.creci}
          </span>
          <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
            Especialista em imóveis de médio e alto padrão em Recife - PE. Venda, locação e curadoria imobiliária exclusiva.
          </p>
        </motion.div>

        {/* Lista de Abas Estilo Gaveta com ajuste de centralização (+5% em direção ao centro) */}
        <div 
          className="w-full flex flex-col items-start space-y-3 pt-2 pl-[10%]"
          onMouseLeave={() => setActiveId(null)}
        >
          {links.map((link) => {
            const Icon = link.icon;
            const isHovered = activeId === link.id;

            return (
              <div 
                key={link.id}
                className="w-full flex items-center select-none"
                onMouseEnter={() => setActiveId(link.id)}
                onClick={() => setActiveId(link.id)}
              >
                <a
                  href={link.href}
                  target={link.id === "website" ? "_self" : "_blank"}
                  rel="noreferrer"
                  className="inline-block focus:outline-none"
                >
                  <motion.div
                    animate={{
                      width: isHovered ? "min(100vw - 48px, 360px)" : "min(100vw - 60px, 320px)",
                    }}
                    transition={{ type: "spring", stiffness: 420, damping: 28 }}
                    className={`h-15 flex items-center justify-between cursor-pointer rounded-r-3xl rounded-l-none relative overflow-hidden transition-all duration-300 ${
                      isHovered
                        ? `bg-gradient-to-r ${link.gradient} text-white border-y border-r border-white/40 shadow-2xl ${link.borderGlow}`
                        : "bg-slate-900/40 backdrop-blur-md text-slate-400 border-y border-r border-white/10 shadow-lg"
                    }`}
                  >
                    {/* Bloco de Texto (Título e Subtítulo) */}
                    <div className="flex flex-col pl-5 pr-2 min-w-0 flex-1 overflow-hidden text-left">
                      <span className={`text-base sm:text-[1.05rem] font-black tracking-tight truncate transition-all duration-200 ${
                        isHovered 
                          ? "text-white font-extrabold drop-shadow-sm" 
                          : "text-slate-400/50 font-bold"
                      }`}>
                        {link.name}
                      </span>
                      
                      {/* Subtítulo só ganha visibilidade no hover */}
                      <span className={`text-[11px] font-medium leading-tight truncate transition-all duration-300 ${
                        isHovered 
                          ? "text-white/95 opacity-100 max-h-5 mt-0.5 block" 
                          : "text-transparent opacity-0 max-h-0 hidden"
                      }`}>
                        {link.actionText}
                      </span>
                    </div>

                    {/* Ícone e Botão de Ação */}
                    <div className="flex items-center gap-2 pr-3.5 shrink-0">
                      {/* Cápsula do Ícone: translúcida suave no inativo, e com fundo arredondado branco/25 no hover */}
                      <div 
                        className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isHovered 
                            ? "bg-white/25 text-white scale-105 shadow-inner" 
                            : "bg-white/5 text-slate-400/60 border border-white/5"
                        }`}
                      >
                        <Icon size={20} className="drop-shadow-sm" />
                      </div>

                      {/* Botão de redirecionamento externo idêntico ao Print 1 */}
                      <div className={`transition-all duration-300 ${
                        isHovered ? "w-8 opacity-100 scale-100" : "w-0 opacity-0 scale-50 overflow-hidden"
                      }`}>
                        <div className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center shrink-0 transition-colors">
                          <ExternalLink size={13} className="text-white" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </a>
              </div>
            );
          })}
        </div>
      </main>

      {/* Footer Minimalista */}
      <footer className="w-full max-w-md text-center pt-10 text-[11px] text-slate-500 relative z-10">
        <p>© {new Date().getFullYear()} Eduarda Jackes Consultoria Imobiliária • Todos os direitos reservados</p>
      </footer>
    </div>
  );
}
