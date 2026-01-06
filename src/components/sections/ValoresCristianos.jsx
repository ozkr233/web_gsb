
import Image from 'next/image';
import { FaHeart, FaBookOpen, FaHandshake } from 'react-icons/fa';

const pilares = [
  {
    icon: FaHeart,
    title: 'Amor que cuida',
    description: 'Acompañamos a cada familia para que los niños crezcan con la presencia de Dios en su vida cotidiana.'
  },
  {
    icon: FaBookOpen,
    title: 'Sabiduría que inspira',
    description: 'Integramos la Palabra con los saberes científicos, fortaleciendo pensamiento crítico y disciplina académica.'
  },
  {
    icon: FaHandshake,
    title: 'Paz que transforma',
    description: 'Promovemos la reconciliación, el servicio y la convivencia pacífica dentro y fuera del aula.'
  }
];

function ValoresCristianos() {
  return (
    <section id="valores" className="section-padding relative overflow-hidden bg-neutral-white">
      <div className="values-decor pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:px-6">
        <div className="space-y-8">
          <div>
            <span className="badge w-fit bg-primary-yellow/20 text-primary-blue">Valores Cristianos</span>
            <h2 className="section-heading mt-4">Educación con el corazón de Jesús</h2>
            <p className="mt-4 text-lg text-neutral-dark/80">
              El Gimnasio Simón Bolívar nace con una identidad bíblica y bolivariana. Inspiramos Amor, Sabiduría y Paz para que cada estudiante impacte su familia y comunidad.
            </p>
          </div>
          <ul className="space-y-4">
            {pilares.map((valor) => (
              <li key={valor.title} className="group flex items-start gap-5 rounded-3xl border border-neutral-gray bg-neutral-white p-5 transition hover:border-primary-yellow/50 hover:shadow-lg">
                <span className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-blue text-neutral-white transition group-hover:bg-primary-yellow group-hover:text-primary-blue">
                  <valor.icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-bold text-primary-blue">{valor.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-dark/80">{valor.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[40px] shadow-2xl">
            <Image
              src="/images/common/valores.webp"
              alt="Estudiantes viviendo valores cristianos"
              width={640}
              height={480}
              className="h-full w-full object-cover"
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-6 -right-6 -z-10 h-32 w-32 rounded-full bg-primary-yellow/30 blur-2xl" />
        </div>
      </div>
    </section>
  );
}

export default ValoresCristianos;
