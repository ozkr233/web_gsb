import Image from 'next/image';
import {
  FaProjectDiagram,
  FaChalkboardTeacher,
  FaClipboardCheck,
  FaMicrophone,
  FaGlobeAmericas,
  FaPlane,
  FaPray,
  FaCheckCircle,
  FaStar,
  FaClock
} from 'react-icons/fa';

const metodologias = [
  {
    icon: FaProjectDiagram,
    titulo: 'Aprendizaje basado en proyectos',
    descripcion: 'Integración de STEAM y lenguaje en inglés en todos los grados de bachillerato con rúbricas Cambridge.'
  },
  {
    icon: FaChalkboardTeacher,
    titulo: 'Co-teaching nativo',
    descripcion: 'Docentes internacionales acompañan clases core para fortalecer pronunciación y cultura.'
  },
  {
    icon: FaClipboardCheck,
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
  { icon: FaMicrophone, text: 'Spelling Bee, Public Speaking y Model UN desde sexto a once.' },
  { icon: FaProjectDiagram, text: 'STEM Fair, Model United Nations y clubes de debate.' }, // Using ProjectDiagram as placeholder for Science/STEM if specific icon not perfect
  { icon: FaPlane, text: 'Viajes de inmersión cultural a Toronto y Orlando.' },
  { icon: FaPray, text: 'Club de adoración bilingüe y misiones cortas.' }
];

const horarios = [
  { bloque: 'Bachillerato', horas: '80% de la jornada', enfoque: 'AP English, talleres universitarios y preparación C1.' },
];

export const metadata = {
  title: 'Programa Bilingüe',
  description: 'Descubre la metodología, certificaciones y resultados del programa bilingüe del Gimnasio Simón Bolívar.',
  alternates: { canonical: 'https://gimnasiosimonbolivar.edu/bilinguismo' },
};

export default function BilinguismoPage() {
  return (
    <div className="bg-neutral-light">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'EducationalOccupationalProgram',
            name: 'Programa Bilingüe',
            description: 'Programa de inmersión en inglés con certificación Cambridge.',
            provider: {
              '@type': 'School',
              name: 'Gimnasio Simón Bolívar',
            },
            educationalCredentialAwarded: 'Certificación B2/C1',
          }),
        }}
      />
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[500px] w-full overflow-hidden">
        <Image
          src="/images/Banners/1.png"
          alt="Estudiantes en clase bilingüe"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary-blue/60 mix-blend-multiply" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-neutral-white">
          <span className="mb-4 rounded-full bg-neutral-white/20 px-4 py-2 text-sm font-bold uppercase tracking-wider backdrop-blur-sm">
            Programa Bilingüe
          </span>
          <h1 className="font-heading text-4xl font-bold md:text-7xl">English is our passion!</h1>
          <p className="mt-6 max-w-2xl text-lg text-neutral-white/90 md:text-xl">
            Acompañamos a cada estudiante en un viaje de inmersión lingüística con propósito, cultura y fe.
          </p>
        </div>
      </section>

      {/* Metodología Section */}
      <section className="section-padding bg-neutral-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="section-heading">Metodología de enseñanza</h2>
            <p className="mt-4 text-neutral-dark/70">Nuestro enfoque pedagógico garantiza resultados reales</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {metodologias.map((item) => (
              <article key={item.titulo} className="group relative flex flex-col items-center rounded-3xl bg-neutral-light p-8 text-center shadow-card transition hover:-translate-y-1 hover:shadow-2xl">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-blue text-3xl text-neutral-white shadow-lg group-hover:bg-primary-yellow group-hover:text-primary-blue">
                  <item.icon />
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold text-primary-blue">{item.titulo}</h3>
                <p className="text-sm leading-relaxed text-neutral-dark/75">{item.descripcion}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Certificaciones y Resultados */}
      <section className="section-padding bg-neutral-light">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2 md:px-6">
          {/* Certificaciones */}
          <div className="space-y-8">
            <div>
              <h2 className="section-heading mb-6">Certificaciones</h2>
              <ul className="space-y-4">
                {certificaciones.map((item, index) => (
                  <li key={index} className="flex items-start gap-4 rounded-2xl bg-neutral-white p-4 shadow-sm transition hover:shadow-md">
                    <FaCheckCircle className="mt-1 shrink-0 text-xl text-primary-green" style={{ color: '#2ecc71' }} />
                    <span className="text-neutral-dark/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Horarios / Intensidad */}
            <div>
              <h3 className="mb-6 font-heading text-2xl font-bold text-primary-blue">Intensidad Horaria</h3>
              <div className="space-y-4">
                {horarios.map((item) => (
                  <div key={item.bloque} className="rounded-2xl border border-primary-blue/10 bg-neutral-white p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-primary-blue">{item.bloque}</h4>
                      <span className="flex items-center gap-2 rounded-full bg-primary-yellow/20 px-3 py-1 text-xs font-bold text-primary-blue">
                        <FaClock /> {item.horas}
                      </span>
                    </div>
                    <p className="text-sm text-neutral-dark/70">{item.enfoque}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Resultados Card */}
          <div className="relative overflow-hidden rounded-[40px] bg-primary-blue p-8 text-neutral-white shadow-2xl md:p-12">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary-yellow/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary-red/20 blur-3xl" />

            <div className="relative z-10 h-full flex flex-col justify-center">
              <div className="mb-6 flex items-center gap-3">
                <FaStar className="text-4xl text-primary-yellow" />
                <h3 className="font-heading text-3xl font-bold">Resultados 2024</h3>
              </div>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-white/20 font-bold">1</span>
                  <div>
                    <strong className="block text-xl text-primary-yellow">92%</strong>
                    <span className="text-neutral-white/80">Estudiantes con nivel B2 o superior.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-white/20 font-bold">2</span>
                  <div>
                    <strong className="block text-xl text-primary-yellow">100%</strong>
                    <span className="text-neutral-white/80">Aprobación Cambridge B1 Preliminary.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-white/20 font-bold">3</span>
                  <div>
                    <strong className="block text-xl text-primary-yellow">45+</strong>
                    <span className="text-neutral-white/80">Intercambios internacionales en la última década.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Actividades Section */}
      <section className="section-padding bg-neutral-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="section-heading mb-10 text-center">Actividades en inglés</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {actividades.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 rounded-3xl bg-neutral-light border border-neutral-gray/50 hover:border-primary-yellow/50 transition duration-300">
                <div className="mb-4 text-4xl text-primary-red opacity-80">
                  <item.icon />
                </div>
                <p className="font-medium text-neutral-dark/80">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beca GSB Section */}
      <section className="section-padding bg-neutral-gray">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <h2 className="section-heading mb-8">Beca GSB Alemania</h2>
          <div className="mb-10 overflow-hidden rounded-3xl shadow-card transition hover:shadow-2xl">
            <Image
              src="/images/Banners/REQUISITOS PARA BECA GSB ALEMANIA.jpg"
              alt="Requisitos para Beca GSB Alemania"
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto w-full"
            />
          </div>
          <a
            href="https://forms.office.com/pages/responsepage.aspx?id=1zdjf0U630aNoMu4efDs09WLsQRKjgdKveKYpRLHYiNURVRXN1gwNUFJRUdXVTkwMTA4MjEyRlNDRi4u&origin=lprLink&route=shorturl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-primary-red px-8 py-4 text-lg font-bold text-neutral-white shadow-lg transition hover:bg-primary-red/90 hover:scale-105"
          >
            Aplicar a la Beca
          </a>
        </div>
      </section>
    </div>
  );
}
