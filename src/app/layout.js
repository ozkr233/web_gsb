import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { Manrope, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  SITE_NAME,
  SITE_URL,
  schoolJsonLd,
  socialMetadata,
} from "@/lib/seo";

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
const GOOGLE_SITE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

// No canonical here: each page sets its own so the 404 page doesn't point at the home page.
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  ...socialMetadata({ title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION }),
  applicationName: SITE_NAME,
  keywords: [
    "colegio en Riohacha",
    "colegios en Riohacha",
    "colegio bilingüe Riohacha",
    "colegios La Guajira",
    "colegio cristiano Riohacha",
    "bachillerato Riohacha",
    "Gimnasio Simón Bolívar",
  ],
  ...(GOOGLE_SITE_VERIFICATION ? { verification: { google: GOOGLE_SITE_VERIFICATION } } : {}),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/logo.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/images/logo.svg",
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
        <Analytics />
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schoolJsonLd) }}
        />
      </body>
    </html>
  );
}
