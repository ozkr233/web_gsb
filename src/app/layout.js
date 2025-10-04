import Script from "next/script";
import { Manrope, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
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
      </body>
    </html>
  );
}
