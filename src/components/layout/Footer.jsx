
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import Button from '@/components/ui/Button';

const links = [
  { href: '/nosotros', label: 'Nuestro Colegio' },
  { href: '/bilinguismo', label: 'Programa Bilingüe' },

  { href: '/contacto', label: 'Contacto' },
];

function Footer() {
  return (
    <footer className="bg-primary-blue text-neutral-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-2 lg:grid-cols-4 md:px-6">
        <div className="space-y-4">
          <h3 className="font-heading text-2xl font-semibold">Gimnasio Simón Bolívar</h3>
          <p className="text-sm text-neutral-white/80">
            Amor, Sabiduría y Paz al servicio de Riohacha desde 1973. Educación básica secundaria y media (bachillerato) con enfoque cristiano y bilingüe.
          </p>
          <Button href="/contacto" variant="secondary" className="transition hover:-translate-y-1">
            Agendar visita
          </Button>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Explora</h4>
          <ul className="grid gap-3 text-sm text-neutral-white/80">
            {links.map((item) => (
              <li key={item.href}>
                <Link className="transition hover:text-primary-yellow" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Datos institucionales</h4>
          <p className="text-sm text-neutral-white/80">
            Dirección: Calle 9 # 12 – 63 · Riohacha
            <br />
            Teléfono: 310 653 2932
            <br />
            Facebook: @gimnasiosimonbolivar
            <br />
            Instagram: @gimnasiosimonbolivar
          </p>
          <a
            href="/documents/reglamento.pdf"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-yellow hover:text-neutral-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reglamento institucional
          </a>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Síguenos</h4>
          <p className="text-sm text-neutral-white/80">Historias y logros de nuestra comunidad educativa.</p>
          <div className="flex gap-3">
            <a
              className="flex h-11 w-11 items-center justify-center rounded-full bg-neutral-white/10 transition hover:bg-primary-yellow hover:text-primary-blue"
              href="https://www.facebook.com/gimnasiosimonbolivar"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="h-5 w-5" aria-hidden />
            </a>
            <a
              className="flex h-11 w-11 items-center justify-center rounded-full bg-neutral-white/10 transition hover:bg-primary-yellow hover:text-primary-blue"
              href="https://www.instagram.com/gimnasiosimonbolivar"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="h-5 w-5" aria-hidden />
            </a>
            <a
              className="flex h-11 w-11 items-center justify-center rounded-full bg-neutral-white/10 transition hover:bg-primary-yellow hover:text-primary-blue"
              href="https://www.youtube.com"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="h-5 w-5" aria-hidden />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-white/20 py-6">
        <p className="mx-auto max-w-7xl px-4 text-xs uppercase tracking-[0.35em] text-neutral-white/60 md:px-6">
          © {new Date().getFullYear()} Gimnasio Simón Bolívar · Educamos hacia un futuro bilingüe
        </p>
      </div>
    </footer>
  );
}

export default Footer;
