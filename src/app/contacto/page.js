import Image from 'next/image';
import FormularioContacto from '@/components/ui/FormularioContacto';
import { FaFacebookF, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export const metadata = {
  title: 'Contacto',
  description: 'Comunícate con el Gimnasio Simón Bolívar en Riohacha. Agenda visitas guiadas y recibe acompañamiento personalizado.',
  alternates: { canonical: 'https://gimnasiosimonbolivar.edu/contacto' },
};

const medios = [
  {
    icon: FaMapMarkerAlt,
    title: 'Dirección',
    detail: 'Calle 9 # 12 – 63, Centro',
    subdetail: 'Riohacha, La Guajira'
  },
  {
    icon: FaPhoneAlt,
    title: 'Teléfono',
    detail: '310 653 2932',
    subdetail: 'Atención personalizada'
  },
  {
    icon: FaEnvelope,
    title: 'Correo electrónico',
    detail: 'contacto@gimbolivar.edu.co',
    subdetail: 'Respuesta en 24 horas'
  },
];

const redes = [
  { icon: FaFacebookF, label: 'Facebook', href: 'https://www.facebook.com/gimnasiosimonbolivar' },
  { icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/gimnasiosimonbolivar' },
  { icon: FaYoutube, label: 'YouTube', href: 'https://www.youtube.com' },
];

export default function ContactoPage() {
  return (
    <div className="bg-neutral-light">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contacto',
            description: 'Canales de atención del Gimnasio Simón Bolívar.',
            publisher: {
              '@type': 'School',
              name: 'Gimnasio Simón Bolívar',
            },
            mainEntity: {
              '@type': 'School',
              name: 'Gimnasio Simón Bolívar',
              telephone: '+57-310-653-2932',
              email: 'contacto@gimbolivar.edu.co',
            },
          }),
        }}
      />
      {/* Hero Section */}
      <section className="relative w-full bg-neutral-white pb-20">
        <div className="relative h-[400px] w-full overflow-hidden md:h-[500px]">
          <div className="absolute inset-0 bg-primary-blue/20" />
          <Image
            src="/images/Banners/3.jpg"
            alt="Contacto Gimnasio Simón Bolívar"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Curved Bottom Mask */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-neutral-light md:h-24" style={{ clipPath: 'ellipse(60% 100% at 50% 100%)' }} />
        </div>

        {/* Header Content */}
        <div className="relative z-10 mx-auto -mt-12 max-w-4xl px-4 text-center md:-mt-16 md:px-6">
          <div className="inline-flex items-center justify-center rounded-full bg-neutral-white px-6 py-2 shadow-lg">
            <span className="text-sm font-bold uppercase tracking-widest text-primary-blue">Estamos para servirte</span>
          </div>
          <h1 className="mt-6 font-heading text-4xl font-bold leading-tight text-primary-blue md:text-5xl lg:text-6xl">
            Contáctanos
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-dark/70 md:text-xl">
            Visítanos, llámanos o escríbenos. Queremos escucharte y ser parte de la formación de tus hijos.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="section-padding pt-0">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-2 lg:gap-12 md:px-6">

          {/* Left Column: Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6 rounded-[32px] bg-neutral-white p-8 shadow-card">
              <h2 className="font-heading text-2xl font-bold text-primary-blue">Información de contacto</h2>
              <div className="grid gap-6">
                {medios.map((medio) => (
                  <div key={medio.title} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-blue/5 text-primary-blue transition hover:bg-primary-blue hover:text-neutral-white">
                      <medio.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-dark">{medio.title}</h3>
                      <p className="text-lg font-medium text-primary-blue">{medio.detail}</p>
                      {medio.subdetail && <p className="text-sm text-neutral-dark/60">{medio.subdetail}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] bg-primary-blue p-8 text-neutral-white shadow-card">
              <h3 className="font-heading text-xl font-bold">Horario de atención</h3>
              <p className="mt-2 text-primary-yellow">Secretaría y Rectoría</p>
              <p className="mt-4 text-2xl font-semibold">Lunes a Viernes</p>
              <p className="text-lg opacity-90">6:00 a.m. — 2:00 p.m.</p>
            </div>

            <div className="rounded-[32px] bg-neutral-white p-8 shadow-card">
              <h3 className="font-heading text-xl font-bold text-primary-blue">Síguenos en redes</h3>
              <p className="mt-2 text-neutral-dark/70">Mantente al día con nuestras actividades y noticias.</p>
              <div className="mt-6 flex gap-3">
                {redes.map((red) => (
                  <a
                    key={red.label}
                    href={red.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-gray text-primary-blue transition hover:bg-primary-yellow hover:text-primary-blue hover:scale-110"
                    aria-label={red.label}
                  >
                    <red.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:mt-0">
            <FormularioContacto />
          </div>

        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-neutral-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-0 overflow-hidden rounded-[48px] shadow-2xl">
            <iframe
              title="Ubicación Gimnasio Simón Bolívar"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.382405694671!2d-72.919968!3d11.5442167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8d2fbdede0b68d%3A0x3ba4f843a95e6fcd!2sCalle%209%20%2312-63%2C%20Riohacha%2C%20La%20Guajira!5e0!3m2!1ses-419!2sco!4v1728060000000!5m2!1ses-419!2sco"
              width="100%"
              height="500"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[400px] w-full border-none md:h-[500px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
