
import GaleriaHome from '@/components/sections/Galeria';
import { galeria } from '@/data';

export const metadata = {
  title: 'Galería',
  description: 'Recorre la vida estudiantil, eventos y espacios del Gimnasio Simón Bolívar.',
  alternates: { canonical: 'https://gimnasiosimonbolivar.edu/galeria' },
};

export default function GaleriaPage() {
  return (
    <div className="bg-neutral-gray">
      <section className="section-padding">
        <div className="mx-auto max-w-5xl px-4 text-center md:px-6">
          <span className="badge mx-auto w-fit bg-primary-blue/10 text-primary-blue">Memorias</span>
          <h1 className="mt-6 font-heading text-4xl font-bold text-neutral-dark md:text-5xl">Galería fotográfica</h1>
          <p className="mt-4 text-lg text-neutral-dark/70">
            Conoce los espacios, actividades y experiencias que hacen parte de nuestra comunidad.
          </p>
        </div>
      </section>
      <GaleriaHome items={galeria} limit={galeria.length} />
    </div>
  );
}
