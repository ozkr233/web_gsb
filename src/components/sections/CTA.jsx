import Link from 'next/link';
import Button from '@/components/ui/Button';
import { HiOutlineArrowRight } from 'react-icons/hi2';

function CTA() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[48px] shadow-2xl">
        <div className="relative grid gap-12 bg-[url('/images/common/cta-background.jpg')] bg-cover bg-center px-8 py-16 md:grid-cols-[1.4fr_1fr] md:gap-16 md:px-16 md:py-20">
          {/* Overlay */}
          <div className="absolute inset-0 bg-neutral-dark/60" aria-hidden />

          <div className="relative z-10 flex flex-col justify-center space-y-8">
            <span className="w-fit rounded-full bg-primary-yellow px-4 py-1.5 text-sm font-bold text-primary-blue uppercase tracking-wider">
              Agenda una visita
            </span>
            <h2 className="font-heading text-3xl font-bold leading-tight text-neutral-white md:text-4xl lg:text-5xl">
              Queremos conocerte a ti y a tu familia
            </h2>
            <p className="text-lg text-neutral-white/90 md:max-w-xl leading-relaxed">
              Escríbenos para coordinar un recorrido por nuestras instalaciones en Riohacha y resolver todas tus dudas
              sobre el proceso educativo.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button href="/contacto" className="bg-primary-red hover:bg-primary-red/90 border-none shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                Hablar con nosotros
              </Button>
              <Button href="/nosotros" variant="secondary" className="bg-neutral-white text-primary-blue hover:bg-neutral-light border-none shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                Descubrir más
                <HiOutlineArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="relative z-10 flex flex-col justify-center rounded-[32px] bg-neutral-white p-8 text-neutral-dark shadow-xl md:p-10">
            <h3 className="font-heading text-2xl font-bold text-primary-blue mb-2">Información rápida</h3>
            <div className="h-1 w-12 bg-primary-yellow rounded-full mb-6"></div>
            <ul className="space-y-8">
              <li className="flex items-start gap-4">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-blue/5 text-primary-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-primary-blue/60 uppercase tracking-wider text-xs mb-1">Dirección</p>
                  <p className="text-lg font-medium leading-snug">Calle 9 # 12 – 63 <br /><span className="text-base text-neutral-dark/70">Centro de Riohacha</span></p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-blue/5 text-primary-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-primary-blue/60 uppercase tracking-wider text-xs mb-1">Horario de Atención</p>
                  <p className="text-lg font-medium leading-snug">Lunes a viernes <br /><span className="text-base text-neutral-dark/70">6:00 a.m. a 2:00 p.m.</span></p>
                </div>
              </li>
              <li className="pt-2">
                <Link
                  href="https://www.instagram.com/gimnasiosimonbolivar"
                  className="group inline-flex items-center gap-2 font-semibold text-primary-red transition-colors hover:text-primary-red/80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="border-b-2 border-primary-red/20 group-hover:border-primary-red transition-colors">Síguenos en @gimnasiosimonbolivar</span>
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
