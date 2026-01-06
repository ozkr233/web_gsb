
import Link from 'next/link';
import { HiOutlineArrowRightCircle } from 'react-icons/hi2';
import { FaHandHoldingHeart } from 'react-icons/fa';

function PropuestaValor() {
  return (
    <section className="section-padding bg-neutral-light">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="flex flex-col items-center rounded-[40px] bg-neutral-white px-6 py-10 text-center shadow-card md:p-16">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary-blue/10 text-4xl text-primary-blue">
            <FaHandHoldingHeart />
          </div>
          <h2 className="section-heading mb-6 max-w-3xl">Amor, Sabiduría y Paz para transformar la sociedad</h2>
          <p className="mb-8 max-w-3xl text-lg text-neutral-dark/80">
            Formamos personas críticas, libres y comprometidas con la justicia. Más de 50 años acompañando a Riohacha con excelencia académica, fe genuina e inmersión bilingüe.
          </p>
          <Link
            href="/nosotros"
            className="inline-flex items-center gap-2 rounded-full bg-primary-blue px-8 py-4 text-lg font-bold text-neutral-white shadow-lg transition hover:-translate-y-1 hover:bg-primary-blue/90 hover:shadow-xl"
          >
            Conoce nuestra historia
            <HiOutlineArrowRightCircle className="h-6 w-6" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PropuestaValor;
