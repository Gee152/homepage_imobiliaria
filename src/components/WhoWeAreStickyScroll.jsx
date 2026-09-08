import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { VISTAHAVEN_DATA } from "../data/propertyData";
import { Sparkles, ShieldCheck, TrendingUp, Cpu, Award } from "lucide-react";
import eduardaFoto from "../img/eduarda.jpg";

export default function WhoWeAreStickyScroll({ onRequestFormModal }) {
  const { metrics } = VISTAHAVEN_DATA;

  // Conteúdo detalhado com os pilares da VistaHaven e fotos reais de alta resolução
  const stickyContent = [
    {
      badge: "Quem Somos",
      title: "Eduarda Jackes - Especialista em Imóveis de Médio e Alto Padrão",
      description:
        "Assessoria completa e personalizada para Venda e Locação em Recife - PE. Curadoria rigorosa, discrição e segurança jurídica em cada etapa da sua conquista imobiliária.",
      content: (
        <div className="relative h-full w-full overflow-hidden group bg-slate-900 flex items-center justify-center">
          <img
            src={eduardaFoto}
            alt="Eduarda Jackes - Consultora Imobiliária"
            className="h-full w-full object-cover object-[center_15%] transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4 sm:p-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-purple-600/95 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-lg shadow-purple-600/20">
              <TrendingUp size={14} /> Eduarda Jackes • CRECI 18.531
            </span>
          </div>
        </div>
      ),
    },
    {
      badge: "Curadoria de Luxo",
      title: "Portfólio Exclusivo de Alto Padrão",
      description:
        "Mansões, coberturas duplex e residências projetadas por arquitetos renomados. Espaços selecionados a dedo que unem privacidade, estética atemporal e conforto absoluto.",
      content: (
        <div className="relative h-full w-full overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
            alt="Portfólio Exclusivo"
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4 sm:p-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-indigo-600/95 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-lg">
              <Award size={14} /> Imóveis Assinados
            </span>
          </div>
        </div>
      ),
    },
    {
      badge: "Auditoria & Compliance",
      title: "Assessoria Jurídica e Estruturação Segura",
      description:
        "Tranquilidade do início ao pós-venda. Nossa equipe cuida de toda a auditoria documental (due diligence), contratos transparentes e aprovação ágil de crédito patrimonial.",
      content: (
        <div className="relative h-full w-full overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
            alt="Segurança Jurídica"
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4 sm:p-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-purple-600/95 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-lg shadow-purple-600/20">
              <ShieldCheck size={14} /> 100% Verificado & Seguro
            </span>
          </div>
        </div>
      ),
    },
    {
      badge: "Inovação & Sustentabilidade",
      title: "Tecnologia & Casas Inteligentes",
      description:
        "Empreendimentos preparados para o futuro: automação residencial completa, fechaduras biométricas, placas fotovoltaicas e alta eficiência energética para um estilo de vida sustentável.",
      content: (
        <div className="relative h-full w-full overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80"
            alt="Casas Inteligentes"
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4 sm:p-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-amber-500/95 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-lg">
              <Cpu size={14} /> Smart Home Ready
            </span>
          </div>
        </div>
      ),
    },
  ];

  // Header integrado diretamente no StickyScroll (sem caixas separadas)
  const integratedHeader = (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end w-full">
      {/* Título e Visão Institucional com Credenciais de Eduarda Jackes */}
      <div className="lg:col-span-6 space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs uppercase font-extrabold tracking-[0.2em] text-purple-600 font-heading flex items-center gap-1.5">
            <Sparkles size={14} /> Quem Somos
          </span>
          <span className="text-[11px] font-bold text-slate-700 bg-purple-100/80 text-purple-800 px-2.5 py-0.5 rounded-full border border-purple-200">
            CRECI 18.531
          </span>
          <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
            📍 Recife - PE
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-heading tracking-tight leading-tight">
          Eduarda Jackes • Especialista em Imóveis de Médio e Alto Padrão
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Assessoria completa e personalizada para <strong>Venda</strong> e <strong>Locação</strong> em Recife - PE. Curadoria rigorosa, discrição e segurança jurídica em cada etapa da sua conquista imobiliária.
        </p>
      </div>

      {/* Grid de Métricas Responsivo (Mobile First) */}
      <div className="lg:col-span-6 w-full">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {metrics.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-3 sm:p-4 rounded-2xl bg-white/90 hover:bg-purple-50/80 border border-slate-200/80 hover:border-purple-300 transition-all duration-300 hover:-translate-y-1 shadow-sm group"
            >
              <span className="text-2xl sm:text-3xl font-black text-purple-600 group-hover:scale-105 transition-transform font-heading tracking-tight block">
                {stat.val}
              </span>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-500 group-hover:text-purple-800 transition-colors block leading-tight mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div id="who-we-are" className="w-full">
      <StickyScroll content={stickyContent} />
    </div>
  );
}
