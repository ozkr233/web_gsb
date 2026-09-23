export const SITE_URL = "https://www.gimnasiosimonbolivar.edu.co";
export const SITE_NAME = "Gimnasio Simón Bolívar";
export const SCHOOL_ID = `${SITE_URL}/#colegio`;

export const DEFAULT_TITLE = "Colegio bilingüe en Riohacha, La Guajira | Gimnasio Simón Bolívar";
export const DEFAULT_DESCRIPTION =
  "Colegio cristiano y bilingüe en Riohacha, La Guajira, con más de 50 años de trayectoria. Inglés intensivo, excelencia académica y formación en valores.";

const OG_IMAGE = {
  url: "/images/og-image.jpg",
  width: 800,
  height: 420,
  alt: "Estudiantes del Gimnasio Simón Bolívar, colegio bilingüe en Riohacha",
};

// Open Graph / Twitter tags. Next.js replaces these objects per page instead of merging them,
// so every page needs the full set.
export function socialMetadata({ title, description, path }) {
  return {
    openGraph: {
      type: "website",
      locale: "es_CO",
      siteName: SITE_NAME,
      url: path,
      title,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

// Builds title, description, canonical and social tags for a page.
// `title` goes through the layout's "%s | Gimnasio Simón Bolívar" template unless `absoluteTitle` is set.
export function pageMetadata({ title, absoluteTitle, description, path }) {
  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    alternates: { canonical: path },
    ...socialMetadata({ title: absoluteTitle ?? `${title} | ${SITE_NAME}`, description, path }),
  };
}

export const schoolJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "School",
      "@id": SCHOOL_ID,
      name: SITE_NAME,
      alternateName: ["Colegio Gimnasio Simón Bolívar", "Gimnasio Simón Bolívar Riohacha", "GSB"],
      description: DEFAULT_DESCRIPTION,
      url: SITE_URL,
      logo: `${SITE_URL}/images/Logo.png`,
      image: `${SITE_URL}/images/hero/Estudiantes.jpg`,
      foundingDate: "1973",
      founder: { "@type": "Person", name: "Elsa Serrano de Ibarra" },
      telephone: "+57 310 653 2932",
      email: "gimnasiosimonbolivar@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Calle 9 # 12-63, Centro",
        addressLocality: "Riohacha",
        addressRegion: "La Guajira",
        postalCode: "440001",
        addressCountry: "CO",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 11.548584,
        longitude: -72.914103,
      },
      areaServed: [
        { "@type": "City", name: "Riohacha" },
        { "@type": "State", name: "La Guajira" },
      ],
      identifier: [
        { "@type": "PropertyValue", propertyID: "DANE", value: "344001001508" },
        { "@type": "PropertyValue", propertyID: "NIT", value: "900281609-4" },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+57 310 653 2932",
        email: "gimnasiosimonbolivar@gmail.com",
        contactType: "admissions",
        areaServed: "CO",
        availableLanguage: ["es", "en"],
      },
      sameAs: [
        "https://www.facebook.com/gimnasiosimonbolivar",
        "https://www.instagram.com/gimnasiosimonbolivar",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "es-CO",
      publisher: { "@id": SCHOOL_ID },
    },
  ],
};
