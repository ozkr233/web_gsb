
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { HiOutlineArrowRight } from 'react-icons/hi2';
import Button from '@/components/ui/Button';

function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero/Estudiantes.jpg"
        alt="Estudiantes del Gimnasio Simón Bolívar"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-neutral-dark/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/90 via-primary-blue/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-neutral-white md:px-6">
        <motion.span
          className="mb-6 inline-block rounded-full bg-neutral-white/20 px-6 py-2 text-sm font-bold uppercase tracking-widest backdrop-blur-sm border border-neutral-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Amor · Sabiduría · Paz
        </motion.span>

        <motion.h1
          className="max-w-4xl font-heading text-4xl font-bold leading-tight md:text-6xl lg:text-7xl drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Educamos hacia un mundo <span className="text-primary-yellow">Bilingüe</span>
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl text-lg text-neutral-white/95 md:text-xl drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Formamos líderes con pensamiento global, corazón cristiano y vocación de servicio. Una comunidad educativa que inspira confianza en cada etapa escolar.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button href="/contacto" variant="primary" className="bg-primary-red hover:bg-primary-red/90 border-none shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
            Agenda una visita
          </Button>
          <Button href="/nosotros" variant="white" className="border-none transition-all">
            Conoce más
            <HiOutlineArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
