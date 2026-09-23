
import Hero from '@/components/sections/Hero';
import PropuestaValor from '@/components/sections/PropuestaValor';
import ValoresCristianos from '@/components/sections/ValoresCristianos';
import AmbienteBilingue from '@/components/sections/AmbienteBilingue';
import ModeloEducativo from '@/components/sections/ModeloEducativo';
import Testimonios from '@/components/sections/Testimonios';
import GaleriaHome from '@/components/sections/Galeria';
import CTA from '@/components/sections/CTA';
import { galeria, testimonios } from '@/data';
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, SCHOOL_ID, SITE_URL, pageMetadata } from '@/lib/seo';

export const dynamic = 'force-static';

export const metadata = pageMetadata({
  absoluteTitle: DEFAULT_TITLE,
  description: `${DEFAULT_DESCRIPTION} Agenda tu visita.`,
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: DEFAULT_TITLE,
            description: DEFAULT_DESCRIPTION,
            url: SITE_URL,
            inLanguage: 'es-CO',
            about: { '@id': SCHOOL_ID },
            publisher: { '@id': SCHOOL_ID },
          }),
        }}
      />

      <Hero />
      <PropuestaValor />
      <ValoresCristianos />
      <AmbienteBilingue />
      <GaleriaHome items={galeria} />
      <ModeloEducativo />
      {/* <Testimonios items={testimonios} /> */}
      <CTA />
    </>
  );
}
