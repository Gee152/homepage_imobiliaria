import React, { useEffect } from "react";
import { VISTAHAVEN_DATA } from "../data/propertyData";

/**
 * Injeta dinamicamente na tag <head> os dados estruturados Schema.org (JSON-LD)
 * com conformidade estrita aos Rich Results do Google (Google Rich Results Test).
 * Entidades: RealEstateListing, Apartment, SingleFamilyResidence, Offer, VideoObject, Event.
 */
export default function StructuredDataSEO() {
  const { brand, trustedLocations } = VISTAHAVEN_DATA;

  useEffect(() => {
    // 1. Gera schema para cada imóvel do catálogo com RealEstateListing + Apartment/SingleFamilyResidence + Offer
    const propertyListingsSchema = trustedLocations.properties.map((prop) => ({
      "@context": "https://schema.org",
      "@type": "RealEstateListing",
      "name": `${prop.name} em ${prop.neighborhood} | Eduarda Jackes`,
      "description": prop.description,
      "datePosted": prop.datePosted,
      "url": `https://eduardajackes.com.br/#properties`,
      "image": [prop.image],
      "mainEntity": {
        "@type": prop.typology === "SingleFamilyResidence" ? "SingleFamilyResidence" : "Apartment",
        "name": prop.name,
        "description": prop.description,
        "numberOfRooms": prop.numberOfRooms,
        "numberOfBedrooms": prop.numberOfBedrooms,
        "numberOfBathroomsTotal": prop.numberOfBathrooms,
        "floorSize": {
          "@type": "QuantitativeValue",
          "value": prop.floorSizeMTK,
          "unitCode": "MTK"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": prop.location,
          "addressLocality": "Recife",
          "addressRegion": "PE",
          "addressCountry": "BR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": prop.geo.latitude,
          "longitude": prop.geo.longitude
        },
        "amenityFeature": prop.amenities.map((amenity) => ({
          "@type": "LocationFeatureSpecification",
          "name": amenity,
          "value": true
        }))
      },
      "offers": {
        "@type": "Offer",
        "price": prop.priceValue,
        "priceCurrency": prop.priceCurrency,
        "priceValidUntil": "2026-12-31",
        "availability": prop.availability,
        "url": `https://eduardajackes.com.br/#properties`,
        "seller": {
          "@type": "RealEstateAgent",
          "name": brand.name,
          "telephone": "+55-81-99999-9999"
        }
      }
    }));

    // 2. Entidade RealEstateAgent (Organização / Consultora Oficial)
    const agencySchema = {
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      "@id": "https://eduardajackes.com.br/#agent",
      "name": "Eduarda Jackes Consultoria Imobiliária",
      "alternateName": "Eduarda Jackes Imóveis de Alto Padrão",
      "url": "https://eduardajackes.com.br/",
      "logo": "https://eduardajackes.com.br/assets/eduarda.jpg",
      "image": "https://eduardajackes.com.br/assets/eduarda.jpg",
      "description": brand.bio,
      "telephone": "+55-81-99999-9999",
      "priceRange": "$$$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Recife",
        "addressRegion": "PE",
        "addressCountry": "BR"
      },
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "Boa Viagem, Recife - PE" },
        { "@type": "AdministrativeArea", "name": "Pina, Recife - PE" },
        { "@type": "AdministrativeArea", "name": "Parnamirim, Recife - PE" },
        { "@type": "AdministrativeArea", "name": "Jaqueira, Recife - PE" }
      ],
      "sameAs": [
        brand.instagram
      ]
    };

    // 3. Entidade VideoObject (Tour Virtual e Vídeos dos Empreendimentos)
    const videoObjectSchema = {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": "Tour Virtual Exclusivo - Imóveis de Alto Padrão em Recife",
      "description": "Apresentação em vídeo e detalhes arquitetônicos dos empreendimentos selecionados por Eduarda Jackes em Boa Viagem e Zona Norte.",
      "thumbnailUrl": [
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
      ],
      "uploadDate": "2025-01-20T08:00:00-03:00",
      "contentUrl": "https://eduardajackes.com.br/#home",
      "embedUrl": "https://eduardajackes.com.br/#home"
    };

    // 4. Entidade Event (Open House / Lançamento Exclusivo)
    const openHouseEventSchema = {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": "Open House VIP - Lançamentos Beira-Mar Boa Viagem & Pina",
      "description": "Coquetel exclusivo para apresentação de coberturas duplex e apartamentos de luxo em Recife com Eduarda Jackes (CRECI 18.531).",
      "startDate": "2025-10-15T16:00:00-03:00",
      "endDate": "2025-10-15T21:00:00-03:00",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "location": {
        "@type": "Place",
        "name": "Reserva Boa Viagem",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Av. Boa Viagem, 3000",
          "addressLocality": "Recife",
          "addressRegion": "PE",
          "addressCountry": "BR"
        }
      },
      "organizer": {
        "@type": "RealEstateAgent",
        "name": "Eduarda Jackes Consultoria Imobiliária",
        "url": "https://eduardajackes.com.br/"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "BRL",
        "availability": "https://schema.org/InStock",
        "url": "https://eduardajackes.com.br/"
      }
    };

    // Cria os elementos script JSON-LD dinamicamente no <head>
    const allSchemas = [
      agencySchema,
      ...propertyListingsSchema,
      videoObjectSchema,
      openHouseEventSchema
    ];

    const scriptElements = [];

    allSchemas.forEach((schema, index) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = `schema-seo-${index}`;
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
      scriptElements.push(script);
    });

    // Cleanup: remove os scripts injetados caso o componente desmonte
    return () => {
      scriptElements.forEach((script) => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      });
    };
  }, [brand, trustedLocations]);

  return null;
}
