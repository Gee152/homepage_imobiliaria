// VistaHaven Properties - Dados e Conteúdos em Português
import planta from "../img/planta.avif"

export const VISTAHAVEN_DATA = {
  brand: {
    name: "Eduarda Jackes",
    brokerName: "Eduarda Jackes",
    tagline: "IMÓVEIS DE ALTO PADRÃO",
    logoText: "EJ",
    creci: "CRECI 18.531",
    location: "Recife - PE",
    specialty: "Especialista em imóveis de médio e alto padrão",
    services: "Venda | Locação",
    bio: "Especialista em imóveis de médio e alto padrão em Recife - PE. Assessoria exclusiva para venda e locação com total segurança jurídica e discrição.",
    instagram: "https://www.instagram.com/eduardajackesimoveis/",
    whatsappPhone: "5581999999999",
    whatsapp: "https://api.whatsapp.com/send?phone=5581999999999"
  },
  
  hero: {
    badge: "RECIFE - PE • MÉDIO & ALTO PADRÃO",
    headlineLine1: "Descubra imóveis",
    headlineHighlight: "elevam",
    headlineLine2: "seu estilo de vida",
    subtext: "Eduarda Jackes (CRECI 18.531) — Especialista em imóveis de médio e alto padrão em Recife - PE. Soluções sob medida para Venda e Locação.",
    smartHomeBadge: {
      title: "Venda & Locação Exclusiva",
      desc: "Imóveis selecionados de médio e alto padrão em Recife.",
      price: "Consulte Disponibilidade"
    },
    bgImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80"
  },

  metrics: {
    category: "QUEM SOMOS",
    leftTitle: "Construindo Futuros Melhores Através do Mercado Imobiliário Inteligente",
    leftDesc: "Combinamos inteligência de mercado, estratégias inovadoras e atendimento personalizado para ajudar você a comprar, vender ou investir com total segurança.",
    rightTitle: "Soluções Imobiliárias que Geram Resultados e",
    rightHighlight: "Maximizam o Valor",
    stats: [
      { label: "Imóveis Vendidos", val: "1.200+" },
      { label: "Clientes Satisfeitos", val: "2.500+" },
      { label: "Anúncios Ativos", val: "1.800+" },
      { label: "Parceiros Globais", val: "150+" }
    ]
  },

  solutions: {
    category: "NOSSAS SOLUÇÕES",
    title: "Ajudando você a encontrar o lugar perfeito para chamar de lar.",
    trustBadge: "Recomendado por milhares de clientes pela transparência e excelência no atendimento.",
    cards: {
      card1: {
        badge: "Imóvel em Destaque",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
        alt: "Fachada de Villa Moderna de Luxo"
      },
      card2: {
        title: "Grandes espaços, melhor qualidade de vida.",
        text: "De apartamentos modernos a casas de luxo, oferecemos residências selecionadas que combinam com seu estilo de vida e aspirações.",
        buttonText: "Saiba Mais"
      },
      card3: {
        image: planta,
        title: "Imoveis na planta",
        price: "A partir de R$ 950.000",
        buttonText: "Ver Detalhes"
      }
    }
  },

  trustedLocations: {
    category: "CURADORIA DE ALTO PADRÃO EM RECIFE",
    title: "Empreendimentos selecionados em Boa Viagem, Pina e Zona Norte.",
    viewAllText: "Consultar Portfólio Completo",
    properties: [
      {
        id: "boa-viagem-duplex",
        name: "Cobertura Duplex Beira-Mar",
        typology: "Apartment",
        subType: "Cobertura Duplex",
        neighborhood: "Boa Viagem",
        location: "Av. Boa Viagem, Boa Viagem, Recife - PE",
        priceFormatted: "R$ 4.850.000",
        priceValue: 4850000,
        priceCurrency: "BRL",
        availability: "https://schema.org/InStock",
        datePosted: "2025-01-15",
        numberOfRooms: 4,
        numberOfBedrooms: 4,
        numberOfBathrooms: 5,
        floorSizeMTK: 380,
        geo: {
          latitude: -8.1274,
          longitude: -34.9015
        },
        amenities: [
          "Piscina de Borda Infinita com Vista Mar",
          "Varanda Gourmet Integrada",
          "Automação Residencial Completa",
          "4 Vagas de Garagem Cobertas",
          "Heliponto no Condomínio"
        ],
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
        description: "Exclusiva cobertura duplex frente mar na Av. Boa Viagem. 4 suítes, 380m² privativos, piscina privativa aquecida e acabamento de grife."
      },
      {
        id: "pina-orla-residence",
        name: "Mansão Suspensa Reserva do Pina",
        typology: "Apartment",
        subType: "Apartamento Luxo",
        neighborhood: "Pina",
        location: "Av. Antônio de Góes, Pina, Recife - PE",
        priceFormatted: "R$ 3.200.000",
        priceValue: 3200000,
        priceCurrency: "BRL",
        availability: "https://schema.org/InStock",
        datePosted: "2025-01-20",
        numberOfRooms: 4,
        numberOfBedrooms: 4,
        numberOfBathrooms: 4,
        floorSizeMTK: 265,
        geo: {
          latitude: -8.0892,
          longitude: -34.8872
        },
        amenities: [
          "Vista Panorâmica da Bacia do Pina",
          "Acabamento em Mármore Italiano",
          "Elevador Biométrico Privativo",
          "3 Vagas Soltas"
        ],
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        description: "Apartamento de altíssimo luxo na orla do Pina com vista panorâmica da bacia e do mar. 4 suítes e living ampliado."
      },
      {
        id: "parnamirim-parque",
        name: "Villa Contemporânea Parnamirim",
        typology: "SingleFamilyResidence",
        subType: "Casa em Condomínio Fechado",
        neighborhood: "Parnamirim",
        location: "Parnamirim, Zona Norte, Recife - PE",
        priceFormatted: "R$ 2.750.000",
        priceValue: 2750000,
        priceCurrency: "BRL",
        availability: "https://schema.org/InStock",
        datePosted: "2025-02-01",
        numberOfRooms: 4,
        numberOfBedrooms: 4,
        numberOfBathrooms: 5,
        floorSizeMTK: 320,
        geo: {
          latitude: -8.0345,
          longitude: -34.9082
        },
        amenities: [
          "Jardim Tropical Privativo com Paisagismo",
          "Energia Solar Fotovoltaica",
          "Espaço Gourmet com Churrasqueira",
          "Segurança Patrimonial Armada 24h"
        ],
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
        description: "Casa contemporânea em enclave nobre de Parnamirim. 320m² de área construída, 4 suítes e total privacidade arborizada."
      },
      {
        id: "jaqueira-horizon",
        name: "Residencial Parque da Jaqueira",
        typology: "Apartment",
        subType: "Apartamento Alto Padrão",
        neighborhood: "Jaqueira",
        location: "Rua do Futuro, Jaqueira, Recife - PE",
        priceFormatted: "R$ 1.980.000",
        priceValue: 1980000,
        priceCurrency: "BRL",
        availability: "https://schema.org/InStock",
        datePosted: "2025-02-10",
        numberOfRooms: 3,
        numberOfBedrooms: 3,
        numberOfBathrooms: 4,
        floorSizeMTK: 185,
        geo: {
          latitude: -8.0388,
          longitude: -34.9044
        },
        amenities: [
          "A 50 metros do Parque da Jaqueira",
          "Varanda Integrada com Cortina de Vidro",
          "Área de Lazer Completa com Piscina Aquecida",
          "Gerador Full no Edifício"
        ],
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
        description: "Viva em frente ao Parque da Jaqueira com 185m² de conforto, 3 suítes, varanda gourmet e lazer de resort urbano."
      }
    ]
  }
};
