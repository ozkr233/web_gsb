
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
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 top-[80px] z-30 bg-neutral-dark/40 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
              />
              {/* Menu */}
              <motion.ul
                id="mobile-menu"
                className="absolute right-0 top-16 z-40 min-w-[280px] max-w-[calc(100vw-2rem)] origin-top-right gap-2 rounded-3xl bg-neutral-white p-4 shadow-2xl ring-1 ring-neutral-dark/5"
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {navItems.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={handleNavigate}
                        className={cn(
                          'flex items-center justify-between rounded-2xl px-5 py-4 text-base font-bold transition',
                          active
                            ? 'bg-primary-blue text-neutral-white shadow-md'
                            : 'text-neutral-dark hover:bg-neutral-light',
                        )}
                      >
                        {item.label}
                        {active && (
                          <span className="text-[10px] uppercase tracking-wider text-neutral-white/70">
                            Estás aquí
                          </span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </motion.ul>
            </>
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
