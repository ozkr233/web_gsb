
const metodologias = [
  {
    titulo: 'Aprendizaje basado en proyectos',
    descripcion: 'Integración de STEAM y lenguaje en inglés en todos los grados de bachillerato con rúbricas Cambridge.'
  },
  {
    titulo: 'Co-teaching nativo',
    descripcion: 'Docentes internacionales acompañan clases core para fortalecer pronunciación y cultura.'
  },
  {
    titulo: 'Evaluación continua',
    descripcion: 'Uso de Cambridge Progress Tests y portafolios digitales para medir desempeño comunicativo.'
  }
];

const certificaciones = [
  'Cambridge English Qualifications (Starters a C1 Advanced).',
  'Convenio con Duolingo English Test para grados superiores.',
  'Formación para docentes con TESOL y ACSI.'
];

const actividades = [
  'Spelling Bee, Public Speaking y Model UN desde sexto a once.',
  'STEM Fair, Model United Nations y clubes de debate.',
  'Viajes de inmersión cultural a Toronto y Orlando.',
  'Club de adoración bilingüe y misiones cortas.'
];

const horarios = [
  { bloque: 'Preescolar', horas: '4 horas diarias', enfoque: 'Rutinas, phonics, centros creativos, devocionales.' },
  { bloque: 'Primaria', horas: '70% de la jornada', enfoque: 'Science, Math, Social Studies, Bible en inglés.' },
  { bloque: 'Bachillerato', horas: '80% de la jornada', enfoque: 'AP English, talleres universitarios y preparación C1.' },
];

export const metadata = {
  title: 'Programa Bilingüe',
  description: 'Descubre la metodología, certificaciones y resultados del programa bilingüe del Gimnasio Simón Bolívar.',
  alternates: { canonical: 'https://gimnasiosimonbolivar.edu/bilinguismo' },
};

export default function BilinguismoPage() {
  return (
    <div className="bg-neutral-white">
      <section className="section-padding bg-primary-blue text-neutral-white">
        <div className="mx-auto max-w-5xl px-4 text-center md:px-6">
          <span className="badge mx-auto w-fit bg-neutral-white/10 text-neutral-white">Programa bilingüe</span>
          <h1 className="mt-6 font-heading text-4xl font-bold md:text-5xl">English is our passion!</h1>
          <p className="mt-4 text-lg text-neutral-white/80">
            Acompañamos a cada estudiante en un viaje de inmersión lingüística con propósito, cultura y fe.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="section-heading mb-8">Metodología de enseñanza</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {metodologias.map((item) => (
              <article key={item.titulo} className="flex flex-col gap-3 rounded-3xl bg-neutral-gray p-5 shadow-card">
                <h3 className="font-heading text-xl font-semibold text-neutral-dark">{item.titulo}</h3>
                <p className="text-sm text-neutral-dark/75">{item.descripcion}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-gray">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-[1.2fr_1fr] md:px-6">
          <div className="space-y-6">
            <h2 className="section-heading">Certificaciones y resultados</h2>
            <ul className="space-y-4 text-sm text-neutral-dark/75">
              {certificaciones.map((item) => (
                <li key={item} className="rounded-3xl bg-neutral-white p-4 shadow-card">{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-primary-blue p-6 text-neutral-white shadow-card">
            <h3 className="font-heading text-xl font-semibold">Resultados 2024</h3>
            <ul className="mt-4 space-y-3 text-sm text-neutral-white/80">
              <li>• 92% estudiantes con nivel B2 o superior.</li>
              <li>• 100% aprobación Cambridge B1 Preliminary.</li>
              <li>• 45 intercambios internacionales en la última década.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="section-heading mb-8">Horarios de inmersión</h2>
          <div className="overflow-hidden rounded-3xl border border-primary-blue/10 bg-neutral-white shadow-card">
            <table className="w-full text-sm">
              <thead className="bg-primary-blue text-neutral-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Nivel</th>
                  <th className="px-6 py-4 text-left font-semibold">Intensidad</th>
                  <th className="px-6 py-4 text-left font-semibold">Enfoque</th>
                </tr>
              </thead>
              <tbody>
                {horarios.map((fila) => (
                  <tr key={fila.bloque} className="odd:bg-neutral-gray/40">
                    <td className="px-6 py-4 font-semibold text-primary-blue">{fila.bloque}</td>
                    <td className="px-6 py-4 text-neutral-dark/80">{fila.horas}</td>
                    <td className="px-6 py-4 text-neutral-dark/80">{fila.enfoque}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-gray">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="section-heading mb-6">Actividades en inglés</h2>
          <ul className="grid gap-4 md:grid-cols-2">
            {actividades.map((actividad) => (
              <li key={actividad} className="rounded-3xl border border-primary-blue/10 bg-neutral-white p-4 text-sm text-neutral-dark/75 shadow-card">
                {actividad}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
