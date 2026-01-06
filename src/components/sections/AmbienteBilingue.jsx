
import Image from 'next/image';
import { FaComments, FaPlane, FaGlobeAmericas, FaBookReader } from 'react-icons/fa';

const pilares = [
  {
    icon: FaComments,
    title: 'Inmersión permanente',
    detail: 'Vivimos el inglés en clase, recreos y actividades pastorales para desarrollar fluidez natural.'
  },
  {
    icon: FaPlane,
    title: 'Intercambio con Alemania',
    detail: 'Desde 2012 recibimos voluntarios del programa BMZ y nuestros estudiantes pueden vivir un año académico en Europa.'
  },
  {
    icon: FaGlobeAmericas,
    title: 'Certificación internacional',
    detail: 'Alianzas con YES, I DO y programas Cambridge aseguran alcanzar el nivel B2 antes de graduarse.'
  },
  {
    icon: FaBookReader,
    title: 'Clases de alemán',
    detail: 'Ofrecemos talleres optativos dictados por hablantes nativos que amplían la visión multicultural.'
  }
];

function AmbienteBilingue() {
  return (
    <section id="bilinguismo" className="section-padding bg-neutral-light">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:px-6">
        <div className="relative order-2 md:order-1">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[40px] shadow-2xl">
            <Image
              src="/images/common/bilingue.webp"
              alt="Ambiente bilingüe con estudiantes compartiendo"
              width={640}
              height={480}
              className="h-full w-full object-cover"
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -top-6 -left-6 -z-10 h-32 w-32 rounded-full bg-primary-red/20 blur-2xl" />
        </div>
        <div className="order-1 space-y-8 md:order-2">
          <div>
            <span className="badge w-fit bg-primary-yellow text-primary-blue">Ambiente bilingüe</span>
            <h2 className="section-heading mt-4">English is our passion!</h2>
            <p className="mt-4 text-lg text-neutral-dark/80">
              Nuestro colegio impulsa un bilingüismo real: comunicación cotidiana, pruebas internacionales, voluntarios extranjeros y experiencias de intercambio.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {pilares.map((pilar) => (
              <li key={pilar.title} className="flex flex-col gap-4 rounded-3xl bg-neutral-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-blue/10 text-primary-blue">
                  <pilar.icon className="h-6 w-6" aria-hidden />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-bold text-neutral-dark">{pilar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-dark/70">{pilar.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AmbienteBilingue;
