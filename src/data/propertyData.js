// Matheus Ferreira - Corretor de Imóveis (CRECI 20367) & RM Home Imobiliária
// Dados Oficiais e Conteúdos em Português conforme PRD

import matheusFoto from "../img/matheus.jpg";
import entregaChaves from "../img/entrega_chaves.jpg";
import assinaturaContrato from "../img/assinatura_contrato.jpg";
import residencialToledo from "../img/ResidencialToledo.png";
import residencialSegovia from "../img/ResidencialSegóvia.png";
import residencialIgarassu from "../img/ResidencialIgarassu.png";
import residencialJanga from "../img/ResidencialJanga.png";
import casasIgarassu from "../img/igarassu.png";
import privesSaramandaia from "../img/Apartamentoscasasprivês.png";

export const VISTAHAVEN_DATA = {
  brand: {
    name: "Matheus Ferreira",
    brokerName: "Matheus Ferreira",
    creci: "CRECI 20367",
    partner: "RM Home Imobiliária",
    tagline: "CORRETOR DE IMÓVEIS • CRECI 20367",
    logoText: "MF",
    location: "Grande Recife - PE",
    coverageAreas: "Jaboatão dos Guararapes, Paulista, Abreu e Lima e Recife",
    specialty: "Especialista em Crédito Habitacional e Minha Casa Minha Vida",
    services: "Minha Casa Minha Vida | Financiamento Caixa | Consultoria Habitacional",
    bio: "Mais de 300 famílias com as chaves na mão. Juntos realizamos sonhos! Especialista no programa Minha Casa Minha Vida e crédito imobiliário na Grande Recife em parceria com a RM Home Imobiliária.",
    instagram: "https://www.instagram.com/matheusferreira.corretor/",
    instagramPartner: "https://www.instagram.com/rmhomeimobiliaria/",
    whatsappPhone: "5581999999999",
    whatsapp: "https://api.whatsapp.com/send?phone=5581999999999",
    whatsappSimulationMessage: "Olá Matheus, vim pelo site e quero simular o financiamento da minha casa própria.",
    whatsappReferralMessage: "Olá Matheus, vim pelo site e quero indicar um amigo para o programa Indicou, Ganhou R$ 500 no Pix!"
  },

  hero: {
    badge: "ESPECIALISTA MINHA CASA MINHA VIDA 🔑🏠",
    headlineLine1: "Realize o Sonho da Sua",
    headlineHighlight: "Casa Própria",
    headlineLine2: "na Grande Recife com Segurança",
    subtext: "Mais de 300 famílias com as chaves na mão. Juntos realizamos sonhos! (CRECI 20367). Parceria oficial RM Home Imobiliária.",
    ctaPrimary: "Quero Simular Meu Financiamento",
    ctaSecondary: "Falar com Matheus no WhatsApp",
    smartHomeBadge: {
      title: "Financiamento Minha Casa Minha Vida",
      desc: "Subsídios do governo, use seu FGTS e parcele sua entrada com parcelas que cabem no bolso.",
      price: "Entrada Facilitada"
    },
    bgImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=80"
  },

  metrics: {
    category: "AUTORIDADE E PROVA SOCIAL",
    leftTitle: "Por que escolher a Danielle Galdino?",
    leftDesc: "Mais de 300 sonhos realizados com total segurança jurídica, assessoria do início ao fim e aprovação de crédito ágil junto à Caixa Econômica Federal e principais bancos parceiros.",
    rightTitle: "Parceria oficial com a Aurora Imobiliária e",
    rightHighlight: "mais de 300 famílias com as chaves na mão",
    stats: [
      { label: "Sonhos Realizados", val: "+300" },
      { label: "Minha Casa Minha Vida", val: "Especialista" },
      { label: "Parceria Oficial", val: "Aurora" },
      { label: "Grande Recife", val: "4 Cidades" }
    ]
  },

  solutions: {
    category: "O PROCESSO: COMO FUNCIONA",
    title: "O caminho simples e transparente para sair de vez do aluguel.",
    trustBadge: "Acompanhamento profissional completo em todas as etapas de financiamento junto à Caixa.",
    steps: [
      {
        number: "01",
        title: "Análise de Perfil",
        description: "Entendemos sua renda familiar, suas necessidades e calculamos o subsídio máximo que você tem direito pelo programa Minha Casa Minha Vida."
      },
      {
        number: "02",
        title: "Aprovação de Crédito",
        description: "Cuidamos de toda a burocracia documental junto à Caixa Econômica Federal e agentes financeiros homologados com agilidade."
      },
      {
        number: "03",
        title: "Assinatura e Chaves",
        description: "O grande momento! Assinatura segura do contrato habitacional e a entrega da chave do seu novo lar."
      }
    ],
    cards: {
      card1: {
        badge: "Chaves na Mão",
        image: entregaChaves,
        alt: "Família com as chaves na mão em frente ao condomínio"
      },
      card2: {
        title: "Saia do aluguel e more no que é seu.",
        text: "Financiamento acessível com condições facilitadas, taxa de juros reduzida e apoio total para quem busca o primeiro imóvel na Grande Recife.",
        buttonText: "Simular Minha Parcela"
      },
      card3: {
        image: assinaturaContrato,
        title: "Contrato e Chaves Seguras",
        price: "Aprovação rápida e descomplicada",
        buttonText: "Falar com a Corretora"
      }
    }
  },

  indicouGanhou: {
    badge: "PROGRAMA EXCLUSIVO DE INDICAÇÃO",
    title: "INDICOU, CLIENTE ASSINOU, GANHOU R$ 500,00!",
    subtitle: "Conhece alguém procurando imóvel ou querendo sair do aluguel? Indique para a Danielle. Quando o contrato for assinado, você ganha R$ 500tão direto no Pix!",
    pixAmount: "R$ 500,00",
    cta: "Quero Indicar um Amigo Agora",
    steps: [
      {
        step: "1",
        title: "Indique um Amigo",
        desc: "Passe o contato de quem deseja comprar a casa própria ou sair do aluguel."
      },
      {
        step: "2",
        title: "O Cliente Assina",
        desc: "A Danielle cuida da consultoria, aprovação de crédito e fechamento do contrato."
      },
      {
        step: "3",
        title: "Você Ganha R$ 500",
        desc: "Contrato assinado? R$ 500tão no seu Pix no mesmo instante!"
      }
    ]
  },

  trustedLocations: {
    category: "OPORTUNIDADES MINHA CASA MINHA VIDA",
    title: "Empreendimentos e Imóveis em Destaque",
    viewAllText: "Consultar Imóveis no WhatsApp",
    headerWhatsappMessage: "Olá Danielle! Vim pelo site e gostaria de consultar as opções de imóveis e lançamentos disponíveis na região!",
    bannerWhatsappMessage: "Olá Danielle! Gostaria de agendar uma visita presencial para conhecer as opções de imóveis disponíveis.",
    properties: [
      {
        id: "residencial-toledo",
        name: "Residencial Privê Toledo",
        typology: "Privê / Casa",
        subType: "Minha Casa Minha Vida",
        neighborhood: "Paulista",
        location: "Paulista - PE",
        priceFormatted: "Consulte Condições",
        priceValue: 190000,
        priceCurrency: "BRL",
        availability: "https://schema.org/InStock",
        datePosted: "2025-02-01",
        numberOfRooms: 3,
        numberOfBedrooms: 2,
        numberOfBathrooms: 1,
        floorSizeMTK: 54,
        geo: { latitude: -7.9408, longitude: -34.8728 },
        amenities: [
          "Varanda Integrada",
          "Acabamento Moderno",
          "Vaga de Garagem",
          "Entrada Facilitada e FGTS"
        ],
        image: residencialToledo,
        whatsappMessage: "Olá Danielle! Quero mais informações sobre o Residencial Privê Toledo em Paulista, pode me explicar as condições e subsídio?",
        description: "Privê contemporâneo em Paulista com 2 quartos, varanda privativa, garagem e condições facilitadas pelo Minha Casa Minha Vida."
      },
      {
        id: "residencial-segovia",
        name: "Residencial Privê Segóvia",
        typology: "Privê / Casa",
        subType: "Minha Casa Minha Vida",
        neighborhood: "Paulista",
        location: "Paulista - PE",
        priceFormatted: "Consulte Condições",
        priceValue: 195000,
        priceCurrency: "BRL",
        availability: "https://schema.org/InStock",
        datePosted: "2025-02-05",
        numberOfRooms: 3,
        numberOfBedrooms: 2,
        numberOfBathrooms: 1,
        floorSizeMTK: 56,
        geo: { latitude: -7.9420, longitude: -34.8710 },
        amenities: [
          "Fachada com Detalhes Amadeirados",
          "Portão Eletrônico",
          "Garagem Exclusiva",
          "Subsídio do Governo"
        ],
        image: residencialSegovia,
        whatsappMessage: "Olá Danielle! Quero mais informações sobre o Residencial Privê Segóvia em Paulista, pode me explicar?",
        description: "Privê com design contemporâneo em Paulista. 2 quartos, fino acabamento, segurança e localização estratégica."
      },
      {
        id: "residencial-peonia-igarassu",
        name: "Residencial Peônia Igarassu",
        typology: "Apartment",
        subType: "Minha Casa Minha Vida",
        neighborhood: "Igarassu",
        location: "Igarassu - PE",
        priceFormatted: "Consulte Condições",
        priceValue: 185000,
        priceCurrency: "BRL",
        availability: "https://schema.org/InStock",
        datePosted: "2025-02-10",
        numberOfRooms: 3,
        numberOfBedrooms: 2,
        numberOfBathrooms: 1,
        floorSizeMTK: 52,
        geo: { latitude: -7.8340, longitude: -34.9064 },
        amenities: [
          "Varanda com Jardineira",
          "Condomínio Fechado",
          "Estacionamento Privativo",
          "Documentação Facilitada"
        ],
        image: residencialIgarassu,
        whatsappMessage: "Olá Danielle! Quero mais informações sobre o Residencial Peônia em Igarassu, pode me explicar os valores e entrada?",
        description: "Residencial pronto para morar em Igarassu. Unidades novas com excelente ventilação, garagem privativa e subsídio ."
      },
      {
        id: "residencial-janga",
        name: "Residencial Janga",
        typology: "Apartment",
        subType: "Minha Casa Minha Vida",
        neighborhood: "Janga, Paulista",
        location: "Janga, Paulista - PE",
        priceFormatted: "Consulte Condições",
        priceValue: 189000,
        priceCurrency: "BRL",
        availability: "https://schema.org/InStock",
        datePosted: "2025-02-15",
        numberOfRooms: 3,
        numberOfBedrooms: 2,
        numberOfBathrooms: 1,
        floorSizeMTK: 50,
        geo: { latitude: -7.9300, longitude: -34.8300 },
        amenities: [
          "Próximo à Orla do Janga",
          "Transporte na Porta",
          "Fácil Acesso a Serviços",
          "Subsídio Caixa"
        ],
        image: residencialJanga,
        whatsappMessage: "Quero mais informações sobre o Imovel Residencial Janga, pode me explicar?",
        description: "Apartamentos no Janga próximo à praia e comércio. 2 quartos, fácil acesso a transporte e entrada facilitada."
      },
      {
        id: "casas-igarassu",
        name: "Casas em Igarassu",
        typology: "House",
        subType: "Minha Casa Minha Vida",
        neighborhood: "Igarassu",
        location: "Igarassu - PE",
        priceFormatted: "Consulte Condições",
        priceValue: 180000,
        priceCurrency: "BRL",
        availability: "https://schema.org/InStock",
        datePosted: "2025-02-20",
        numberOfRooms: 3,
        numberOfBedrooms: 2,
        numberOfBathrooms: 1,
        floorSizeMTK: 58,
        geo: { latitude: -7.8360, longitude: -34.9080 },
        amenities: [
          "Casa Individual / Geminada",
          "Rua Calçada",
          "Quintal Privativo",
          "Garagem na Frente"
        ],
        image: casasIgarassu,
        whatsappMessage: "Olá Danielle! Quero mais informações sobre as Casas em Igarassu com quintal privativo, pode me explicar as condições?",
        description: "Casas novinhas em Igarassu com quintal privativo, rua pavimentada e financiamento Minha Casa Minha Vida facilitado."
      },
      {
        id: "prives-saramandaia",
        name: "Apartamentos & Privês Saramandaia",
        typology: "Apartment",
        subType: "Minha Casa Minha Vida",
        neighborhood: "Saramandaia, Igarassu",
        location: "Saramandaia, Igarassu - PE",
        priceFormatted: "Consulte Condições",
        priceValue: 185000,
        priceCurrency: "BRL",
        availability: "https://schema.org/InStock",
        datePosted: "2025-02-25",
        numberOfRooms: 3,
        numberOfBedrooms: 2,
        numberOfBathrooms: 1,
        floorSizeMTK: 55,
        geo: { latitude: -7.8350, longitude: -34.9050 },
        amenities: [
          "Projeto Paisagístico Moderno",
          "Cobogós e Iluminação Cênica",
          "Vaga de Garagem Demarcada",
          "Use seu FGTS na Entrada"
        ],
        image: privesSaramandaia,
        whatsappMessage: "Olá Danielle! Quero mais informações sobre os Apartamentos & Privês Saramandaia em Igarassu, pode me explicar?",
        description: "Empreendimento com arquitetura diferenciada em Saramandaia, Igarassu. Unidades de 2 quartos com acabamento premium."
      }
    ]
  },

  testimonials: [
    {
      name: "Lucas & Camila Ferreira",
      location: "Jaboatão dos Guararapes - PE",
      tag: "Sonho Realizado • Chaves na Mão",
      stars: 5,
      text: "Estávamos pagando aluguel há 5 anos sem esperança. A Danielle fez nossa simulação, conseguiu um subsídio maravilhoso pelo Minha Casa Minha Vida e cuidou de toda aprovação na Caixa. Hoje estamos no nosso próprio apartamento!",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Mariana e Rogério Silva",
      location: "Paulista - PE",
      tag: "Contrato Assinado • Caixa",
      stars: 5,
      text: "Atendimento nota mil! O Matheus tirou todas as nossas dúvidas com muita paciência e transparência. A parceria dele com a RM Home dá uma segurança gigante. Recomendo de olhos fechados.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Everton Santos",
      location: "Abreu e Lima - PE",
      tag: "Cliente & Indicador",
      stars: 5,
      text: "Comprei meu primeiro apê com a Danielle e depois ainda indiquei dois amigos do trabalho. Os dois fecharam e recebi R$ 1.000 no Pix direto na conta pelo programa Indicou Ganhou! Sensacional!",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    }
  ]
};

// Export para retrocompatibilidade
export const TESTIMONIALS = VISTAHAVEN_DATA.testimonials;

/**
 * Constrói o link oficial do WhatsApp da Danielle Galdino com mensagem pré-preenchida contextual
 * @param {string} [message] - Mensagem personalizada para o chat
 * @returns {string} URL pronta para abertura no WhatsApp
 */
export const getWhatsAppUrl = (message) => {
  const base = VISTAHAVEN_DATA.brand.whatsapp;
  if (!message) return base;
  const separator = base.includes('?') ? '&' : '?';
  return `${base}${separator}text=${encodeURIComponent(message)}`;
};

