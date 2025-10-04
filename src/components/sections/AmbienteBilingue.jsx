
import Image from 'next/image';
import { PiChatsCircle, PiAirplaneTiltBold, PiGlobeHemisphereWestLight, PiBookOpenTextLight } from 'react-icons/pi';

const pilares = [
  {
    icon: PiChatsCircle,
    title: 'Inmersión permanente',
    detail: 'Vivimos el inglés en clase, recreos y actividades pastorales para desarrollar fluidez natural.'
  },
  {
    icon: PiAirplaneTiltBold,
    title: 'Intercambio con Alemania',
    detail: 'Desde 2012 recibimos voluntarios del programa BMZ y nuestros estudiantes pueden vivir un año académico en Europa.'
  },
  {
    icon: PiGlobeHemisphereWestLight,
    title: 'Certificación internacional',
    detail: 'Alianzas con YES, I DO y programas Cambridge aseguran alcanzar el nivel B2 antes de graduarse.'
  },
  {
    icon: PiBookOpenTextLight,
    title: 'Clases de alemán',
    detail: 'Ofrecemos talleres optativos dictados por hablantes nativos que amplían la visión multicultural.'
  }
];

function AmbienteBilingue() {
  return (
    <section id="bilinguismo" className="section-padding">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:px-6">
        <div className="relative order-2 md:order-1">
          <div className="overflow-hidden rounded-[36px] border border-primary-blue/20 bg-neutral-white p-6 shadow-card">
            <Image
              src="/images/common/bilingue.svg"
              alt="Ambiente bilingüe con estudiantes compartiendo"
              width={640}
              height={480}
              className="h-auto w-full"
            />
          </div>
        </div>
        <div className="order-1 space-y-6 md:order-2">
          <span className="badge w-fit bg-primary-yellow text-primary-blue">Ambiente bilingüe</span>
          <h2 className="section-heading">English is our passion!</h2>
          <p className="text-neutral-dark/80">
            Nuestro colegio impulsa un bilingüismo real: comunicación cotidiana, pruebas internacionales, voluntarios extranjeros y experiencias de intercambio.
          </p>
          <ul className="space-y-4">
            {pilares.map((pilar) => (
              <li key={pilar.title} className="flex gap-4 rounded-3xl bg-neutral-white p-5 shadow-card">
                <span className="mt-1 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-blue/15 text-primary-blue">
                  <pilar.icon className="h-6 w-6" aria-hidden />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-neutral-dark">{pilar.title}</h3>
                  <p className="text-sm text-neutral-dark/80">{pilar.detail}</p>
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
