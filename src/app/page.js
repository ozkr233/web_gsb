
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

export default function HomePage() {
  return (
    <>
      <Hero />
      <PropuestaValor />
      <ValoresCristianos />
      <AmbienteBilingue />
      <ModeloEducativo />
      <Testimonios items={testimonios} />
      <GaleriaHome items={galeria} />
      <CTA />
    </>
  );
}
