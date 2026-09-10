import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { VISTAHAVEN_DATA } from "../data/propertyData";
import { Sparkles, ShieldCheck, TrendingUp, CheckCircle, Award, Building2, Key, Users } from "lucide-react";
import matheusFoto from "../img/matheus.jpg";
import entregaChaves from "../img/entrega_chaves.jpg";
import assinaturaContrato from "../img/assinatura_contrato.jpg";

export default function WhoWeAreStickyScroll({ onRequestFormModal }) {
  const { metrics } = VISTAHAVEN_DATA;

  // Conteúdo detalhado com os pilares de autoridade do Matheus Ferreira e RM Home
  const stickyContent = [
    {
      badge: "Autoridade Habitacional",
      title: "Matheus Ferreira — Especialista Minha Casa Minha Vida",
      description:
        "Mais de 300 sonhos realizados na Grande Recife. Atendimento humanizado, transparente e focado em encontrar a melhor oportunidade para você sair de vez do aluguel com parcelas menores do que imagina.",
      content: (
        <div className="relative h-full w-full overflow-hidden group bg-[#0B1C38] flex items-center justify-center">
          <img
            src={matheusFoto}
            alt="Matheus Ferreira - Corretor de Imóveis"
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C38]/90 via-transparent to-transparent flex items-end p-4 sm:p-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#122C58]/95 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-lg border border-[#C79C3F]/40">
              <Award size={14} className="text-[#C79C3F]" /> Matheus Ferreira • CRECI 20367
            </span>
          </div>
        </div>
      ),
    },
    {
      badge: "Parceria Estratégica",
      title: "Solidez e Confiança com a RM Home Imobiliária",
      description:
        "Parceria oficial com a RM Home Imobiliária. Mais de 300 famílias atendidas com assessoria documental completa, contratos verificados e total tranquilidade jurídica do primeiro contato à entrega.",
      content: (
        <div className="relative h-full w-full overflow-hidden group">
          <img
            src={assinaturaContrato}
            alt="Parceria RM Home Imobiliária"
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C38]/90 via-transparent to-transparent flex items-end p-4 sm:p-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#122C58]/95 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-lg border border-white/20">
              <Building2 size={14} className="text-[#C79C3F]" /> Parceria Oficial RM Home
            </span>
          </div>
        </div>
      ),
    },
    {
      badge: "Crédito Caixa",
      title: "Aprovação Ágil de Financiamento Habitacional",
      description:
        "Cuidamos de toda a burocracia bancária junto à Caixa Econômica Federal. Enquadramos seu perfil no Minha Casa Minha Vida, calculamos seu subsídio máximo e usamos seu FGTS para abater a entrada.",
      content: (
        <div className="relative h-full w-full overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80"
            alt="Empreendimentos Minha Casa Minha Vida"
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C38]/90 via-transparent to-transparent flex items-end p-4 sm:p-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#122C58]/95 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-lg border border-[#6FC34B]/40">
              <ShieldCheck size={14} className="text-[#6FC34B]" /> Correspondente Caixa Homologado
            </span>
          </div>
        </div>
      ),
    },
    {
      badge: "Chaves na Mão",
      title: "A Realização do Seu Sonho: Sua Casa Própria",
      description:
        "Do aperto de mãos na assinatura até a entrega da chave do seu apartamento novo em Jaboatão, Paulista, Abreu e Lima ou Recife. Segurança, celebração e o início de uma nova fase para sua família.",
      content: (
        <div className="relative h-full w-full overflow-hidden group">
          <img
            src={entregaChaves}
            alt="Entrega das chaves do imóvel"
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C38]/90 via-transparent to-transparent flex items-end p-4 sm:p-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#C79C3F] px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-lg text-[#0B1C38]">
              <Key size={14} /> +300 Chaves Entregues
            </span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div id="who-we-are" className="w-full">
      <StickyScroll content={stickyContent} />
    </div>
  );
}
