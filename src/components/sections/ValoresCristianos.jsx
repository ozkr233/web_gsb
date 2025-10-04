
import Image from 'next/image';
import { PiHeartBold, PiStudentBold, PiHandshakeBold } from 'react-icons/pi';

const pilares = [
  {
    icon: PiHeartBold,
    title: 'Amor que cuida',
    description: 'Acompañamos a cada familia para que los niños crezcan con la presencia de Dios en su vida cotidiana.'
  },
  {
    icon: PiStudentBold,
    title: 'Sabiduría que inspira',
    description: 'Integramos la Palabra con los saberes científicos, fortaleciendo pensamiento crítico y disciplina académica.'
  },
  {
    icon: PiHandshakeBold,
    title: 'Paz que transforma',
    description: 'Promovemos la reconciliación, el servicio y la convivencia pacífica dentro y fuera del aula.'
  }
];

function ValoresCristianos() {
  return (
    <section id="valores" className="section-padding relative overflow-hidden">
      <div className="values-decor pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:px-6">
        <div className="space-y-6">
          <span className="badge w-fit">Valores Cristianos</span>
          <h2 className="section-heading">Educación con el corazón de Jesús</h2>
          <p className="text-neutral-dark/80">
            El Gimnasio Simón Bolívar nace con una identidad bíblica y bolivariana. Inspiramos Amor, Sabiduría y Paz para que cada estudiante impacte su familia y comunidad.
          </p>
          <ul className="space-y-4">
            {pilares.map((valor) => (
              <li key={valor.title} className="flex items-start gap-4 rounded-2xl bg-neutral-white p-4 shadow-card">
                <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary-yellow/30 text-primary-blue">
                  <valor.icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold">{valor.title}</h3>
                  <p className="text-sm text-neutral-dark/80">{valor.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -left-10 -top-10 h-24 w-24 rounded-full border-4 border-primary-yellow/60" aria-hidden />
          <div className="absolute -right-8 -bottom-8 h-20 w-20 rounded-full border border-primary-yellow/40" aria-hidden />
          <div className="overflow-hidden rounded-[36px] border border-primary-yellow/40 bg-neutral-white p-6 shadow-card">
            <Image
              src="/images/common/valores.svg"
              alt="Estudiantes viviendo valores cristianos"
              width={640}
              height={480}
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ValoresCristianos;
