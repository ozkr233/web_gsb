
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HiMiniBars3, HiMiniXMark } from 'react-icons/hi2';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Inicio' },
  { href: '/nosotros', label: 'Nuestro Colegio' },
  { href: '/bilinguismo', label: 'Programa Bilingüe' },
  { href: '/galeria', label: 'Galería' },
  { href: '/contacto', label: 'Contacto' },
];

function Navigation({ className, orientation = 'horizontal', onNavigate, scheme = 'light' }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) {
      return undefined;
    }
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  const handleNavigate = () => {
    onNavigate?.();
    setOpen(false);
  };

  const isDarkScheme = scheme === 'dark';

  if (orientation === 'vertical') {
    const label = open ? 'Cerrar menú' : 'Abrir menú';
    return (
      <nav className={cn('relative', className)} aria-label="Navegación móvil">
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-white text-primary-blue shadow-card transition hover:bg-primary-blue hover:text-neutral-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-yellow"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <HiMiniXMark className="h-6 w-6" aria-hidden /> : <HiMiniBars3 className="h-6 w-6" aria-hidden />}
          <span className="sr-only">{label}</span>
        </button>
        <AnimatePresence>
          {open ? (
            <motion.ul
              id="mobile-menu"
              className="absolute left-0 right-0 top-16 z-40 mx-4 grid gap-4 rounded-3xl bg-neutral-white p-6 shadow-2xl"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
            >
              {navItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={handleNavigate}
                      className={cn(
                        'flex items-center justify-between rounded-2xl px-4 py-3 text-lg font-semibold transition',
                        active
                          ? 'bg-primary-blue text-neutral-white shadow-card'
                          : 'text-neutral-dark hover:bg-primary-blue/10',
                      )}
                    >
                      {item.label}
                      <span className="text-xs uppercase tracking-wide text-primary-blue/60">
                        {active ? 'Ahora' : 'Ir'}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </motion.ul>
          ) : null}
        </AnimatePresence>
      </nav>
    );
  }

  return (
    <nav className={cn('hidden items-center gap-2 lg:flex', className)} aria-label="Navegación principal">
      {navItems.map((item) => {
        const active = pathname === item.href;
        const baseClasses = isDarkScheme
          ? 'text-neutral-white/80 hover:bg-neutral-white/15 hover:text-neutral-white'
          : 'text-primary-blue/80 hover:bg-primary-blue/10 hover:text-primary-blue';
        const activeClasses = isDarkScheme
          ? 'bg-neutral-white text-primary-blue shadow-card'
          : 'bg-primary-blue text-neutral-white shadow-card';

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn('rounded-full px-4 py-2 text-sm font-semibold transition', active ? activeClasses : baseClasses)}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export default Navigation;
