
import { PiHeartBold, PiBookOpenTextBold, PiAirplaneTiltBold, PiLightbulbFilamentBold } from 'react-icons/pi';

const pilares = [
  {
    icon: PiHeartBold,
    title: 'Amor, Sabiduría y Paz',
    description: 'La fe cristiana guía cada decisión pedagógica para formar ciudadanos íntegros y servidores.'
  },
  {
    icon: PiBookOpenTextBold,
    title: 'Pedagogía activa',
    description: 'Metodologías “aprendiendo y haciendo” con enfoque Dewey/Piaget y evaluación tipo Saber.'
  },
  {
    icon: PiAirplaneTiltBold,
    title: 'Bilingüismo internacional',
    description: 'Certificación YES, I DO + intercambios con voluntarios alemanes y alianzas globales.'
  },
  {
    icon: PiLightbulbFilamentBold,
    title: 'Proyección profesional',
    description: 'Mentorías, orientación vocacional y clubes de emprendimiento desde grados medios.'
  },
];

function ModeloEducativo() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-10 text-center">
          <h2 className="section-heading">Nuestro modelo educativo</h2>
          <p className="mt-4 text-neutral-dark/70">
            Un camino que integra fe, excelencia académica e inmersión cultural para servir a Colombia y al mundo.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {pilares.map((pilar) => (
            <article key={pilar.title} className="card-underline flex h-full flex-col gap-3 rounded-3xl bg-neutral-white p-6 shadow-card">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-blue/10 text-primary-blue">
                <pilar.icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="font-heading text-xl font-semibold text-neutral-dark">{pilar.title}</h3>
              <p className="text-sm text-neutral-dark/70">{pilar.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ModeloEducativo;
