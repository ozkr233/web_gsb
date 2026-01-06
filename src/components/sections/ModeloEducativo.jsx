
import { FaHeart, FaBook, FaPlane, FaLightbulb } from 'react-icons/fa';

const pilares = [
  {
    icon: FaHeart,
    title: 'Amor, Sabiduría y Paz',
    description: 'La fe cristiana guía cada decisión pedagógica para formar ciudadanos íntegros y servidores.'
  },
  {
    icon: FaBook,
    title: 'Pedagogía activa',
    description: 'Metodologías “aprendiendo y haciendo” con enfoque Dewey/Piaget y evaluación tipo Saber.'
  },
  {
    icon: FaPlane,
    title: 'Bilingüismo internacional',
    description: 'Certificación YES, I DO + intercambios con voluntarios alemanes y alianzas globales.'
  },
  {
    icon: FaLightbulb,
    title: 'Proyección profesional',
    description: 'Mentorías, orientación vocacional y clubes de emprendimiento desde grados medios.'
  },
];

function ModeloEducativo() {
  return (
    <section className="section-padding bg-neutral-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="section-heading">Nuestro modelo educativo</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-dark/70">
            Un camino que integra fe, excelencia académica e inmersión cultural para servir a Colombia y al mundo.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {pilares.map((pilar) => (
            <article key={pilar.title} className="group flex h-full flex-col items-start gap-4 rounded-[32px] border border-neutral-gray bg-neutral-light p-8 transition hover:-translate-y-1 hover:border-primary-blue/20 hover:shadow-xl">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-blue text-2xl text-neutral-white shadow-lg group-hover:bg-primary-yellow group-hover:text-primary-blue">
                <pilar.icon />
              </span>
              <h3 className="font-heading text-xl font-bold text-primary-blue">{pilar.title}</h3>
              <p className="text-sm leading-relaxed text-neutral-dark/70">{pilar.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ModeloEducativo;
