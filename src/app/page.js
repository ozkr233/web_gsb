
import Hero from '@/components/sections/Hero';
import PropuestaValor from '@/components/sections/PropuestaValor';
import ValoresCristianos from '@/components/sections/ValoresCristianos';
import AmbienteBilingue from '@/components/sections/AmbienteBilingue';
import ModeloEducativo from '@/components/sections/ModeloEducativo';
import Testimonios from '@/components/sections/Testimonios';
import GaleriaHome from '@/components/sections/Galeria';
import CTA from '@/components/sections/CTA';
import { galeria, testimonios } from '@/data';

export const dynamic = 'force-static';

export const metadata = {
  title: 'Inicio | Educación Bilingüe y Cristiana',
  description: 'Bienvenidos al Gimnasio Simón Bolívar. Formamos líderes con valores cristianos y excelencia académica en Riohacha, La Guajira.',
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Inicio',
            description: 'Página principal del Gimnasio Simón Bolívar',
            publisher: {
              '@type': 'School',
              name: 'Gimnasio Simón Bolívar',
            },
          }),
        }}
      />

      <Hero />
      <PropuestaValor />
      <ValoresCristianos />
      <AmbienteBilingue />
      <ModeloEducativo />
      {/* <Testimonios items={testimonios} /> */}
      <GaleriaHome items={galeria} />
      <CTA />
    </>
  );
}
