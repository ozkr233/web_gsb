
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';
import Button from '@/components/ui/Button';

const container = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
};

const quickLinks = [
  { href: '/nosotros', label: 'Nuestro Colegio', variant: 'primary' },
  { href: '/bilinguismo', label: 'Bilingüe', variant: 'secondary' },
  { href: '/contacto', label: 'Contacto', variant: 'primary' },
];

function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary-blue">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 md:grid-cols-[1.2fr_1fr] md:py-24 lg:gap-20 md:px-6">
        <div className="flex flex-col justify-center gap-8 text-neutral-white">
          <motion.span
            className="badge w-fit inline-block rounded-full bg-primary-yellow/20 px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Fe · Excelencia · Propósito
          </motion.span>

          <div className="space-y-6">
            <motion.h1
              className="font-heading text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Educamos hacia un mundo
              <span className="block text-primary-yellow">Bilingüe</span>
            </motion.h1>
            <motion.p
              className="max-w-xl text-lg text-neutral-white/80"
              variants={container}
              initial="hidden"
              animate="visible"
              custom={0.35}
            >
              Formamos líderes con pensamiento global, corazón cristiano y vocación de servicio. Una comunidad educativa que inspira confianza en cada etapa escolar.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-wrap items-center gap-4"
            variants={container}
            initial="hidden"
            animate="visible"
            custom={0.45}
          >
            <Button href="/contacto" icon={HiOutlineArrowUpRight}>
              Agenda una visita
            </Button>
            <Button href="/nosotros" variant="secondary">
              Conoce nuestra misión
            </Button>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-3"
            variants={container}
            initial="hidden"
            animate="visible"
            custom={0.55}
          >
            {quickLinks.map((link) => (
              <Button
                key={link.label}
                href={link.href}
                variant={link.variant}
                className={link.variant === 'secondary' ? 'bg-primary-yellow text-primary-blue hover:bg-primary-yellow/90' : ''}
              >
                {link.label}
              </Button>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9, ease: 'easeOut' }}
        >
          <div className="hero-blob absolute inset-0 -z-10 rounded-[48px] opacity-70 blur-3xl" />
          <div className="relative overflow-hidden rounded-[48px] border border-neutral-white/10 bg-primary-blue/40 p-6 backdrop-blur">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[36px] bg-neutral-white/10">
              <Image
                src="/images/hero/estudiantes.svg"
                alt="Estudiantes sonrientes del Gimnasio Simón Bolívar"
                fill
                sizes="(min-width: 1024px) 40vw, 80vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="mt-6 grid gap-3 rounded-2xl bg-neutral-white/10 p-4 text-sm text-neutral-white">
              <p className="font-heading text-lg font-semibold">Excelencia bilingüe</p>
              <p className="text-neutral-white/80">
                92% de nuestros estudiantes alcanzan certificaciones Cambridge con nivel B2 o superior.
              </p>
              <Link
                href="/bilinguismo"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary-yellow hover:text-neutral-white"
              >
                Conoce el programa
                <HiOutlineArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'120\' height=\'120\' viewBox=\'0 0 120 120\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'dots\' x=\'0\' y=\'0\' width=\'20\' height=\'20\' patternUnits=\'userSpaceOnUse\'%3E%3Ccircle cx=\'2\' cy=\'2\' r=\'2\' fill=\'%23ffffff1a\' /%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'120\' height=\'120\' fill=\'url(%23dots)\' /%3E%3C/svg%3E')] opacity-20" />
    </section>
  );
}

export default Hero;
