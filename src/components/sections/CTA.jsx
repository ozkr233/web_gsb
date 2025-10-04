
import Link from 'next/link';
import Button from '@/components/ui/Button';

function CTA() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[48px] border border-primary-blue/20 bg-primary-blue text-neutral-white">
        <div className="relative grid gap-10 bg-[url('/images/common/cta-background.svg')] bg-cover bg-center px-8 py-16 md:grid-cols-[1.4fr_1fr] md:px-12">
          <div className="space-y-6">
            <span className="badge bg-neutral-white/10 text-neutral-white">Agenda una visita</span>
            <h2 className="font-heading text-3xl font-semibold leading-tight md:text-4xl">
              Queremos conocerte a ti y a tu familia
            </h2>
            <p className="text-neutral-white/80 md:max-w-xl">
              Escríbenos para coordinar un recorrido por nuestras instalaciones en Riohacha y resolver todas tus dudas sobre el proceso educativo.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contacto">Hablar con nosotros</Button>
              <Button href="/nosotros" variant="secondary" className="bg-neutral-white text-primary-blue hover:bg-neutral-white/90">
                Descubrir más
              </Button>
            </div>
          </div>
          <div className="rounded-[32px] bg-neutral-white/10 p-6 text-sm text-neutral-white/80">
            <h3 className="font-heading text-xl font-semibold text-neutral-white">Información rápida</h3>
            <ul className="mt-6 space-y-4">
              <li>
                <p className="text-primary-yellow font-semibold">Dirección</p>
                <p>Calle 9 # 12 – 63 · Centro de Riohacha.</p>
              </li>
              <li>
                <p className="text-primary-yellow font-semibold">Horario</p>
                <p>Lunes a viernes · 6:00 a.m. a 2:00 p.m.</p>
              </li>
              <li>
                <Link href="https://www.instagram.com/gisibol" className="inline-flex items-center gap-2 text-primary-yellow hover:text-neutral-white" target="_blank" rel="noopener noreferrer">
                  Síguenos en @gisibol
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
