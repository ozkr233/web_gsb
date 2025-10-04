
import FormularioContacto from '@/components/ui/FormularioContacto';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { PiEnvelopeSimple, PiMapPinLine, PiPhoneCall } from 'react-icons/pi';

export const metadata = {
  title: 'Contacto',
  description: 'Comunícate con el Gimnasio Simón Bolívar en Riohacha. Agenda visitas guiadas y recibe acompañamiento personalizado.',
  alternates: { canonical: 'https://gimnasiosimonbolivar.edu/contacto' },
};

const medios = [
  {
    icon: PiMapPinLine,
    title: 'Dirección',
    detail: 'Calle 9 # 12 – 63, Centro · Riohacha, La Guajira'
  },
  {
    icon: PiPhoneCall,
    title: 'Teléfono',
    detail: '310 653 2932'
  },
  {
    icon: PiEnvelopeSimple,
    title: 'Correo',
    detail: 'contacto@gimbolivar.edu.co'
  },
];

const redes = [
  { icon: FaFacebookF, label: 'Facebook', href: 'https://www.facebook.com/gimnasiosimonbolivar' },
  { icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/gimnasiosimonbolivar' },
  { icon: FaYoutube, label: 'YouTube', href: 'https://www.youtube.com' },
];

export default function ContactoPage() {
  return (
    <div className="bg-neutral-gray">
      <section className="section-padding bg-primary-blue text-neutral-white">
        <div className="mx-auto max-w-5xl px-4 text-center md:px-6">
          <span className="badge mx-auto w-fit bg-neutral-white/10 text-neutral-white">Estamos para ayudarte</span>
          <h1 className="mt-6 font-heading text-4xl font-bold md:text-5xl">Contacto y agendamiento</h1>
          <p className="mt-4 text-lg text-neutral-white/75">
            Escríbenos y agenda una visita para conocer nuestras aulas bilingües, proyectos cristianos y convenios internacionales.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-[0.8fr_1fr] md:px-6">
          <div className="space-y-6 rounded-3xl bg-neutral-white p-6 shadow-card">
            <h2 className="section-heading text-2xl">Información general</h2>
            <ul className="space-y-4 text-sm text-neutral-dark/75">
              {medios.map((medio) => (
                <li key={medio.title} className="flex items-start gap-3">
                  <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary-blue/10 text-primary-blue">
                    <medio.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="font-semibold text-neutral-dark">{medio.title}</p>
                    <p>{medio.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div>
              <p className="text-sm font-semibold text-neutral-dark">Horario de atención</p>
              <p className="text-sm text-neutral-dark/70">Lunes a viernes · 6:00 a.m. a 2:00 p.m.</p>
            </div>
            <div className="flex gap-3">
              {redes.map((red) => (
                <a
                  key={red.label}
                  href={red.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-neutral-gray text-primary-blue transition hover:bg-primary-yellow hover:text-primary-blue"
                  aria-label={red.label}
                >
                  <red.icon className="h-5 w-5" aria-hidden />
                </a>
              ))}
            </div>
          </div>
          <div className="rounded-3xl bg-neutral-white p-6 shadow-card">
            <FormularioContacto />
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="section-heading mb-6 text-center">Encuéntranos</h2>
          <div className="overflow-hidden rounded-[36px] shadow-card">
            <iframe
              title="Ubicación Gimnasio Simón Bolívar"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.382405694671!2d-72.919968!3d11.5442167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8d2fbdede0b68d%3A0x3ba4f843a95e6fcd!2sCalle%209%20%2312-63%2C%20Riohacha%2C%20La%20Guajira!5e0!3m2!1ses-419!2sco!4v1728060000000!5m2!1ses-419!2sco"
              width="100%"
              height="420"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[420px] w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
