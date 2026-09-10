// Matheus Ferreira - Corretor de Imóveis (CRECI 20367) & RM Home Imobiliária
// Dados Oficiais e Conteúdos em Português conforme PRD

import matheusFoto from "../img/matheus.jpg";
import entregaChaves from "../img/entrega_chaves.jpg";
import assinaturaContrato from "../img/assinatura_contrato.jpg";
import planta from "../img/planta.avif";

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
    leftTitle: "Por que escolher o Matheus Ferreira?",
    leftDesc: "Mais de 300 sonhos realizados com total segurança jurídica, assessoria do início ao fim e aprovação de crédito ágil junto à Caixa Econômica Federal e principais bancos parceiros.",
    rightTitle: "Parceria oficial com a RM Home Imobiliária e",
    rightHighlight: "mais de 300 famílias com as chaves na mão",
    stats: [
      { label: "Sonhos Realizados", val: "+300" },
      { label: "Minha Casa Minha Vida", val: "Especialista" },
      { label: "Parceria Oficial", val: "RM Home" },
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
        buttonText: "Falar com o Corretor"
      }
    }
  },

  indicouGanhou: {
    badge: "PROGRAMA EXCLUSIVO DE INDICAÇÃO",
    title: "INDICOU, CLIENTE ASSINOU, GANHOU R$ 500,00!",
    subtitle: "Conhece alguém procurando imóvel ou querendo sair do aluguel? Indique para o Matheus. Quando o contrato for assinado, você ganha R$ 500tão direto no Pix!",
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
        desc: "O Matheus cuida da consultoria, aprovação de crédito e fechamento do contrato."
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
    title: "Apartamentos e casas em Jaboatão, Paulista, Abreu e Lima e Recife.",
    viewAllText: "Quero Simular Financiamento",
    properties: [
      {
        id: "jaboatao-residence",
        name: "Residencial Candeias Jardins",
        typology: "Apartment",
        subType: "Minha Casa Minha Vida",
        neighborhood: "Jaboatão dos Guararapes",
        location: "Candeias, Jaboatão dos Guararapes - PE",
        priceFormatted: "A partir de R$ 195.000",
        priceValue: 195000,
        priceCurrency: "BRL",
        availability: "https://schema.org/InStock",
        datePosted: "2025-01-15",
        numberOfRooms: 3,
        numberOfBedrooms: 2,
        numberOfBathrooms: 1,
        floorSizeMTK: 52,
        geo: {
          latitude: -8.1982,
          longitude: -34.9255
        },
        amenities: [
          "Subsídio do Governo de até R$ 55.000",
          "Piscina Adulto e Infantil",
          "Salão de Festas com Churrasqueira",
          "Vaga de Garagem Demarcada",
          "Portaria 24 horas com Guarita"
        ],
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
        description: "Apartamento de 2 quartos em Candeias dentro do Minha Casa Minha Vida. Condomínio fechado com lazer completo e entrada parcelada."
      },
      {
        id: "paulista-clube",
        name: "Reserva das Palmeiras Paulista",
        typology: "Apartment",
        subType: "Minha Casa Minha Vida",
        neighborhood: "Paulista",
        location: "Centro / Aurora, Paulista - PE",
        priceFormatted: "A partir de R$ 185.000",
        priceValue: 185000,
        priceCurrency: "BRL",
        availability: "https://schema.org/InStock",
        datePosted: "2025-01-20",
        numberOfRooms: 3,
        numberOfBedrooms: 2,
        numberOfBathrooms: 1,
        floorSizeMTK: 48,
        geo: {
          latitude: -7.9408,
          longitude: -34.8728
        },
        amenities: [
          "Entrada Facilitada e FGTS",
          "Quadra Poliesportiva",
          "Playground e Espaço Kids",
          "Próximo ao Paulista North Way Shopping",
          "Segurança 24 Horas"
        ],
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
        description: "Excelente condomínio clube em Paulista. 2 quartos, área de lazer com piscina e fácil acesso a transporte e comércio."
      },
      {
        id: "abreu-e-lima-parque",
        name: "Parque Verde Abreu e Lima",
        typology: "Apartment",
        subType: "Minha Casa Minha Vida",
        neighborhood: "Abreu e Lima",
        location: "Abreu e Lima - PE",
        priceFormatted: "A partir de R$ 179.000",
        priceValue: 179000,
        priceCurrency: "BRL",
        availability: "https://schema.org/InStock",
        datePosted: "2025-02-01",
        numberOfRooms: 3,
        numberOfBedrooms: 2,
        numberOfBathrooms: 1,
        floorSizeMTK: 50,
        geo: {
          latitude: -7.9103,
          longitude: -34.9022
        },
        amenities: [
          "Documentação Grátis (ITBI + Registro)",
          "Área Gourmet com Churrasqueira",
          "Pista de Caminhada Arborizada",
          "Bicicletário",
          "Parcelas menores que aluguel"
        ],
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        description: "Condomínio residencial em Abreu e Lima com condições especiais do Minha Casa Minha Vida e parcelamento facilitado da entrada."
      },
      {
        id: "recife-bairro-novo",
        name: "Vila Imperial Grande Recife",
        typology: "Apartment",
        subType: "Minha Casa Minha Vida",
        neighborhood: "Recife",
        location: "Zona Oeste / Várzea, Recife - PE",
        priceFormatted: "A partir de R$ 210.000",
        priceValue: 210000,
        priceCurrency: "BRL",
        availability: "https://schema.org/InStock",
        datePosted: "2025-02-10",
        numberOfRooms: 3,
        numberOfBedrooms: 2,
        numberOfBathrooms: 1,
        floorSizeMTK: 54,
        geo: {
          latitude: -8.0476,
          longitude: -34.9515
        },
        amenities: [
          "Perto da UFPE e Corredor Leste-Oeste",
          "Academia ao Ar Livre e Pet Place",
          "Salão de Festas Climatizado",
          "Condomínio Fechado com Monitoramento",
          "Financiamento Caixa Aprovado"
        ],
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
        description: "More no Recife pagando parcelas menores que um aluguel. Apartamentos de 2 quartos com lazer e localização estratégica."
      }
    ]
  },

  testimonials: [
    {
      name: "Lucas & Camila Ferreira",
      location: "Jaboatão dos Guararapes - PE",
      tag: "Sonho Realizado • Chaves na Mão",
      stars: 5,
      text: "Estávamos pagando aluguel há 5 anos sem esperança. O Matheus fez nossa simulação, conseguiu um subsídio maravilhoso pelo Minha Casa Minha Vida e cuidou de toda aprovação na Caixa. Hoje estamos no nosso próprio apartamento!",
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
      text: "Comprei meu primeiro apê com o Matheus e depois ainda indiquei dois amigos do trabalho. Os dois fecharam e recebi R$ 1.000 no Pix direto na conta pelo programa Indicou Ganhou! Sensacional!",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    }
  ]
};

// Export para retrocompatibilidade
export const TESTIMONIALS = VISTAHAVEN_DATA.testimonials;
