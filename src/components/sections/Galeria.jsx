
import Image from 'next/image';

function GaleriaHome({ items = [], limit = 6 }) {
  const fallbackItems = items.slice(0, limit);

  return (
    <section className="section-padding bg-neutral-white" id="galeria">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="section-heading">Galería oficial</h2>
            <p className="mt-3 text-neutral-dark/70">
              Disfruta de nuestros momentos más recientes directamente desde Instagram @gimnasiosimonbolivar.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-primary-blue/15 shadow-card">
          <iframe
            src="https://www.instagram.com/gimnasiosimonbolivar/embed"
            title="Instagram Gimnasio Simón Bolívar"
            className="h-[600px] w-full"
            allowtransparency="true"
            frameBorder="0"
            scrolling="no"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default GaleriaHome;
