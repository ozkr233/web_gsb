
const resoluciones = [
  'Resoluciones 303 del 29 de diciembre de 1999',
  'Resolución 146 del 5 de julio de 2001',
  'Resolución 119 del 23 de noviembre de 2003',
  'Resolución 863 del 9 de agosto de 2006',
];

const actividades = [
  {
    titulo: 'Ambiente Bilingüe',
    descripcion:
      'Fomentamos la comunicación inglés-español durante toda la jornada: clases, recreos, salidas pedagógicas y devocionales. English is our passion!',
  },
  {
    titulo: 'Valores Cristianos',
    descripcion:
      'Vivimos Amor, Sabiduría y Paz mientras aprendemos. Cada asignatura integra la Palabra de Dios para formar corazón y mente.',
  },
  {
    titulo: 'Intercambio escolar',
    descripcion:
      'Nuestros egresados pueden vivir un año en Alemania con apoyo del gobierno alemán. Desde 2012 recibimos voluntarios internacionales.',
  },
  {
    titulo: 'Clases de alemán',
    descripcion:
      'Voluntarios nativos dictan clases optativas del idioma con la meta de que nuestros estudiantes digan “Ich spreche Deutsch”.',
  },
];

const servicios = [
  {
    titulo: 'Saberes',
    descripcion:
      'Preparamos para las Pruebas Saber con asignaturas diseñadas tipo examen (matemáticas, ciencias, inglés, lectura crítica) y escenarios reales de aplicación.',
  },
  {
    titulo: 'Proyecto bilingüe',
    descripcion:
      'En convenio con YES, I DO certificamos bilingüismo hasta nivel B2 antes de grado décimo. Docentes certificados MCER acompañan el proceso.',
  },
  {
    titulo: 'Convenio con Alemania',
    descripcion:
      'Acuerdo con el Ministerio Federal de Cooperación Económica y Desarrollo (BMZ) para intercambio de voluntarios y experiencias internacionales.',
  },
  {
    titulo: 'Jornada continua',
    descripcion:
      'Horario de lunes a viernes de 6:00 a.m. a 2:00 p.m., con acompañamiento espiritual y académico permanente.',
  },
];

const cursos = ['Sexto', 'Séptimo', 'Octavo', 'Noveno', 'Décimo', 'Once'];

export const metadata = {
  title: 'Nosotros',
  description:
    'Conoce la historia, misión, filosofía y servicios educativos del Gimnasio Simón Bolívar en Riohacha: Amor, Sabiduría y Paz en cada etapa escolar.',
  alternates: { canonical: 'https://gimnasiosimonbolivar.edu/nosotros' },
};

export default function NosotrosPage() {
  return (
    <div className="bg-neutral-gray">
      <section className="section-padding">
        <div className="mx-auto max-w-5xl px-4 text-center md:px-6">
          <span className="badge mx-auto w-fit bg-primary-blue/10 text-primary-blue">Gimnasio Simón Bolívar S.A.S.</span>
          <h1 className="mt-4 font-heading text-4xl font-bold text-neutral-dark md:text-5xl">
            Amor, Sabiduría y Paz
          </h1>
          <p className="mt-2 text-lg text-neutral-dark/75">
            Educación básica secundaria y media (bachillerato) · Reg. DANE 344001001508 · NIT 900281609-4
          </p>
          <p className="mt-2 text-sm text-neutral-dark/60">
            Resoluciones vigentes que avalan nuestro servicio educativo integral:
          </p>
          <ul className="mt-4 flex flex-wrap justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-blue/70">
            {resoluciones.map((item) => (
              <li key={item} className="rounded-full bg-neutral-white px-3 py-2 shadow-card">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-neutral-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:px-6">
          <div className="space-y-6">
            <div>
              <h2 className="section-heading">Misión</h2>
              <p className="mt-3 text-neutral-dark/75">
                Promovemos la enseñanza cristiana gestora de hombres útiles en toda buena obra con el fin de formar personas críticas, conocedoras de la realidad social, libres, y que fomenten la paz, la justicia y la convivencia pacífica.
              </p>
            </div>
            <div>
              <h2 className="section-heading">Visión 2027</h2>
              <p className="mt-3 text-neutral-dark/75">
                En 2027 el colegio Gimnasio Simón Bolívar será reconocido a nivel distrital como una institución de calidad en todos sus procesos, con el cien por ciento de sus egresados con certificación internacional en nivel B2 de inglés, con excelentes resultados en las Pruebas Saber 11, y con un alto sentido en valores cristianos, comprometidos con la transformación de su sociedad.
              </p>
            </div>
          </div>
          <div className="space-y-6 rounded-3xl bg-neutral-gray p-6 shadow-card">
            <h3 className="font-heading text-2xl font-semibold text-neutral-dark">Filosofía institucional</h3>
            <p className="text-sm text-neutral-dark/75">
              Nuestros principios toman como modelo educativo - en primera instancia - los fundamentos enmarcados en la doctrina de Jesucristo como maestro, como miembro de familia, como ciudadano y como verdadero ejemplo de amor y vida. En segunda instancia, recoge el pensamiento bolivariano de la libertad, autonomía y unidad. Trabajamos basados en los planteamientos de la pedagogía activa ‘aprendiendo y haciendo’ de John Dewey en relación con el desarrollo de los procesos cognitivos de Jean Piaget.
          </p>
            <p className="text-sm text-neutral-dark/75">
              Trabajamos para que cada estudiante viva Amor, Sabiduría y Paz en un ambiente seguro que fortalece el aprendizaje significativo y la formación espiritual.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="section-heading mb-8">Actividades extracurriculares</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {actividades.map((item) => (
              <article key={item.titulo} className="rounded-3xl bg-neutral-white p-6 shadow-card">
                <h3 className="font-heading text-xl font-semibold text-neutral-dark">{item.titulo}</h3>
                <p className="mt-3 text-sm text-neutral-dark/75">{item.descripcion}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="section-heading mb-8">Servicios educativos</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {servicios.map((servicio) => (
              <article key={servicio.titulo} className="rounded-3xl border border-primary-blue/10 bg-neutral-gray p-6 shadow-card">
                <h3 className="font-heading text-xl font-semibold text-neutral-dark">{servicio.titulo}</h3>
                <p className="mt-3 text-sm text-neutral-dark/75">{servicio.descripcion}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 rounded-3xl bg-primary-blue p-6 text-neutral-white shadow-card">
            <h3 className="font-heading text-xl font-semibold">Cursos que ofrecemos</h3>
            <p className="mt-4 text-sm text-neutral-white/80">
              Educación Básica Secundaria y Media en jornada continua. Acompañamos cada grado con mentorías espirituales, académicas y orientación profesional.
            </p>
            <ul className="mt-4 flex flex-wrap gap-3 text-sm font-semibold uppercase tracking-[0.2em]">
              {cursos.map((curso) => (
                <li key={curso} className="rounded-full bg-neutral-white/15 px-4 py-2">{curso}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="section-heading mb-6">Historia</h2>
          <p className="text-neutral-dark/75">
            La institución fue fundada en 1973 por la licenciada Elsa Serrano de Ibarra y, tras décadas de servicio, hoy concentra todos sus esfuerzos en la educación básica secundaria y media (bachillerato) con firmes bases morales y académicas.
          </p>
          <p className="mt-4 text-neutral-dark/75">
            Hoy seguimos proyectando estudiantes hacia un mundo global, con conciencia social, bilingüismo y un profundo compromiso cristiano. Como lo expresó nuestra fundadora: “Educar niños es una misión tan noble y dulce, que alegra el alma y vivifica el espíritu...”.
          </p>
        </div>
      </section>

      <section className="section-padding bg-neutral-white">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="section-heading mb-6">Proceso de admisión</h2>
          <p className="text-neutral-dark/75">
            Nuestro proceso de admisión es cercano y colaborativo: diligencia el formulario de inscripción, programa una reunión con coordinación, comparte tu historial académico y recomendaciones, realiza una prueba diagnóstica y dialoga con la dirección. Buscamos niños y jóvenes emprendedores, curiosos, amantes del aprendizaje y la vida con propósito.
          </p>
        </div>
      </section>
    </div>
  );
}
