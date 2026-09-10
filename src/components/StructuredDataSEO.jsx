import React, { useEffect } from "react";
import { VISTAHAVEN_DATA } from "../data/propertyData";

/**
 * Injeta dinamicamente na tag <head> os dados estruturados Schema.org (JSON-LD)
 * com conformidade aos Rich Results do Google (RealEstateAgent, RealEstateListing, Offer).
 */
export default function StructuredDataSEO() {
  const { brand, trustedLocations } = VISTAHAVEN_DATA;

  useEffect(() => {
    // 1. Gera schema para cada imóvel do catálogo com RealEstateListing + Apartment + Offer
    const propertyListingsSchema = trustedLocations.properties.map((prop) => ({
      "@context": "https://schema.org",
      "@type": "RealEstateListing",
      "name": `${prop.name} em ${prop.neighborhood} | Matheus Ferreira Corretor`,
      "description": prop.description,
      "datePosted": prop.datePosted,
      "url": `https://matheusferreiraimoveis.com.br/#properties`,
      "image": [prop.image],
      "mainEntity": {
        "@type": "Apartment",
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
          "addressLocality": prop.neighborhood,
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
        "url": `https://matheusferreiraimoveis.com.br/#properties`,
        "seller": {
          "@type": "RealEstateAgent",
          "name": brand.name,
          "telephone": "+55-81-99999-9999"
        }
      }
    }));

    // 2. Entidade RealEstateAgent (Matheus Ferreira - CRECI 20367)
    const agencySchema = {
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      "@id": "https://matheusferreiraimoveis.com.br/#agent",
      "name": "Matheus Ferreira - Corretor de Imóveis",
      "alternateName": "Matheus Ferreira Minha Casa Minha Vida",
      "url": "https://matheusferreiraimoveis.com.br/",
      "logo": "https://matheusferreiraimoveis.com.br/assets/matheus.jpg",
      "image": "https://matheusferreiraimoveis.com.br/assets/matheus.jpg",
      "description": brand.bio,
      "telephone": "+55-81-99999-9999",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Recife",
        "addressRegion": "PE",
        "addressCountry": "BR"
      },
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "Jaboatão dos Guararapes - PE" },
        { "@type": "AdministrativeArea", "name": "Paulista - PE" },
        { "@type": "AdministrativeArea", "name": "Abreu e Lima - PE" },
        { "@type": "AdministrativeArea", "name": "Recife - PE" }
      ],
      "sameAs": [
        brand.instagram,
        brand.instagramPartner
      ]
    };

    // Cria as tags de script e injeta no head
    const scripts = [];

    const agencyScript = document.createElement("script");
    agencyScript.type = "application/ld+json";
    agencyScript.text = JSON.stringify(agencySchema);
    document.head.appendChild(agencyScript);
    scripts.push(agencyScript);

    propertyListingsSchema.forEach((item) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(item);
      document.head.appendChild(script);
      scripts.push(script);
    });

    return () => {
      scripts.forEach((s) => {
        if (s && s.parentNode) {
          s.parentNode.removeChild(s);
        }
      });
    };
  }, [brand, trustedLocations]);

  return null;
}
