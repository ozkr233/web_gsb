import Image from 'next/image';
import { FaSchool, FaHeart, FaBullseye, FaEye, FaQuoteLeft } from 'react-icons/fa';

export const metadata = {
  title: 'Nosotros',
  description:
    'Conoce la historia, misión, filosofía y servicios educativos del Gimnasio Simón Bolívar en Riohacha: Amor, Sabiduría y Paz en cada etapa escolar.',
  alternates: { canonical: 'https://gimnasiosimonbolivar.edu/nosotros' },
};

const resoluciones = [
  'Resoluciones 303 del 29 de diciembre de 1999',
  'Resolución 146 del 5 de julio de 2001',
  'Resolución 119 del 23 de noviembre de 2003',
  'Resolución 863 del 9 de agosto de 2006',
];

const iconList = [
  {
    icon: FaSchool,
    title: 'Nuestro colegio fue fundado en 1973',
    description: 'por la licenciada Elsa Serrano de Ibarra, mujer visionaria y de profundas bases cristianas, quien durante décadas ha aportado a la formación de ciudadanos integrales.',
  },
  {
    icon: FaHeart,
    title: 'Nuestros valores son',
    description: 'Amor · Temor de Dios · Responsabilidad · Respeto · Solidaridad · Integridad. Los cuales enseñamos con convicción.',
  },
  {
    icon: FaBullseye,
    title: 'Nuestra misión',
    description: 'es promover la enseñanza cristiana gestora de ciudadanos íntegros, con pensamiento crítico, que conocen la realidad social y fomentan la excelencia, la justicia y la convivencia pacífica.',
  },
  {
    icon: FaEye,
    title: 'Nuestra visión',
    description: 'en 2027 seremos reconocidos a nivel distrital como una institución de calidad en todos sus procesos, con el cien por ciento de sus egresados con certificación internacional en nivel B2 de inglés.',
  },
];

export default function NosotrosPage() {
  return (
    <div className="bg-neutral-light">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'Nosotros',
            description: 'Historia, misión y visión del Gimnasio Simón Bolívar.',
            publisher: {
              '@type': 'School',
              name: 'Gimnasio Simón Bolívar',
            },
          }),
        }}
      />
      {/* Hero Section with Curve */}
      <section className="relative w-full bg-neutral-white pb-20">
        <div className="relative h-[500px] w-full overflow-hidden">
          <div className="absolute inset-0 bg-primary-blue/10" />
          <Image
            src="/images/Banners/NUESTRA MAYOR MOTIVACION.jpg"
            alt="Estudiantes y equipo del Gimnasio Simón Bolívar"
            fill
            className="object-cover object-top"
            priority
          />
          {/* Curved Bottom Mask */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-neutral-white" style={{ clipPath: 'ellipse(60% 100% at 50% 100%)' }} />
        </div>

        {/* Quote Section */}
        <div className="relative z-10 mx-auto -mt-8 max-w-4xl px-4 text-center md:px-6">
          <div className="flex flex-col items-center gap-6">
            <FaQuoteLeft className="text-4xl text-primary-blue/20" />
            <h1 className="font-heading text-3xl font-bold leading-tight text-primary-blue md:text-4xl lg:text-5xl">
              Nuestra mayor motivación <br />
              <span className="text-primary-blue/80">es formar hombres y mujeres de bien</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Mission Section (Image Only) */}
      <section className="section-padding bg-neutral-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="relative overflow-hidden rounded-[48px] shadow-card transition hover:shadow-2xl">
            <Image
              src="/images/Banners/mision.jpg"
              alt="Misión del Gimnasio Simón Bolívar"
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* Vision Section (Image Only) */}
      <section className="section-padding bg-neutral-light">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="relative overflow-hidden rounded-[48px] shadow-card transition hover:shadow-2xl">
            <Image
              src="/images/Banners/vision.jpg"
              alt="Visión del Gimnasio Simón Bolívar"
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* Icons List Section */}
      <section className="section-padding bg-neutral-white">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="grid gap-12">
            {iconList.map((item, index) => (
              <div key={index} className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border-2 border-primary-blue text-primary-blue">
                  <item.icon className="h-10 w-10" />
                </div>
                <div className="space-y-2 border-b border-neutral-dark/10 pb-8 md:border-none md:pb-0">
                  <h3 className="font-heading text-xl font-bold text-primary-blue">{item.title}</h3>
                  <p className="text-neutral-dark/80">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resoluciones Section */}
      <section className="bg-primary-blue py-12 text-neutral-white">
        <div className="mx-auto max-w-5xl px-4 text-center md:px-6">
          <p className="mb-6 text-sm opacity-80">
            Educación básica secundaria y media (bachillerato) · Reg. DANE 344001001508 · NIT 900281609-4
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {resoluciones.map((res) => (
              <span key={res} className="rounded-full bg-neutral-white/10 px-4 py-2 text-xs font-semibold backdrop-blur-sm">
                {res}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

