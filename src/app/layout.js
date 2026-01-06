import Script from "next/script";
import { Manrope, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const manrope = Manrope({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata = {
  metadataBase: new URL("https://gimnasiosimonbolivar.edu"),
  title: {
    default: "Gimnasio Simón Bolívar",
    template: "%s | Gimnasio Simón Bolívar",
  },
  description:
    "Colegio cristiano bilingüe en Riohacha. Amor, Sabiduría y Paz con excelencia académica e intercambios internacionales.",
  keywords: [
    "colegio bilingüe",
    "educación cristiana",
    "Gimnasio Simón Bolívar",
    "colegio en Riohacha",
    "educación integral",
  ],
  icons: {
    icon: "/icon_gsb.png",
    shortcut: "/icon_gsb.png",
  },
  openGraph: {
    title: "Gimnasio Simón Bolívar",
    description:
      "Formamos líderes bilingües con valores cristianos, intercambio internacional y excelencia académica.",
    url: "https://gimnasiosimonbolivar.edu",
    siteName: "Gimnasio Simón Bolívar",
    images: [
      {
        url: "/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Estudiantes del Gimnasio Simón Bolívar",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gimnasio Simón Bolívar",
    description:
      "Formamos líderes bilingües con valores cristianos, intercambio internacional y excelencia académica.",
    images: ["/images/og-image.svg"],
  },
  alternates: {
    canonical: "https://gimnasiosimonbolivar.edu",
  },
};

export const viewport = {
  themeColor: "#0047AB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${manrope.variable} ${poppins.variable} bg-neutral-white text-neutral-dark`}>
        <a href="#contenido-principal" className="skip-link">
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido-principal" className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
        {GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        ) : null}
        <Script id="ld-json" strategy="afterInteractive" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "School",
              "name": "Gimnasio Simón Bolívar",
              "url": "https://gimnasiosimonbolivar.edu",
              "logo": "https://gimnasiosimonbolivar.edu/icon_gsb.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Calle 9 # 12 – 63",
                "addressLocality": "Riohacha",
                "addressRegion": "La Guajira",
                "postalCode": "440001",
                "addressCountry": "CO"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+57-310-653-2932",
                "contactType": "admissions"
              },
              "sameAs": [
                "https://www.facebook.com/gimnasiosimonbolivar",
                "https://www.instagram.com/gimnasiosimonbolivar"
              ]
            }
          `}
        </Script>
      </body>
    </html>
  );
}
