
import Link from 'next/link';
import { HiOutlineArrowRightCircle } from 'react-icons/hi2';

function PropuestaValor() {
  return (
    <section className="section-padding bg-neutral-gray">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="section-heading mb-6">Amor, Sabiduría y Paz para transformar la sociedad</h2>
        <p className="mb-8 text-lg text-neutral-dark/80">
          Formamos personas críticas, libres y comprometidas con la justicia. Más de 50 años acompañando a Riohacha con excelencia académica, fe genuina e inmersión bilingüe.
        </p>
        <Link
          href="/nosotros"
          className="btn-secondary inline-flex items-center gap-2 bg-neutral-white shadow-card hover:-translate-y-1"
        >
          Conoce nuestra historia
          <HiOutlineArrowRightCircle className="h-5 w-5" aria-hidden />
        </Link>
      </div>
    </section>
  );
}

export default PropuestaValor;
