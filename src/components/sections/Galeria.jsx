
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
            allowTransparency
            frameBorder="0"
            scrolling="no"
            loading="lazy"
          />
        </div>

        {fallbackItems.length ? (
          <div className="mt-12">
            <h3 className="mb-6 text-lg font-semibold text-primary-blue">Galería institucional</h3>
            <div className="gallery-grid">
              {fallbackItems.map((item) => (
                <div key={item.id} className="overflow-hidden rounded-3xl border border-primary-blue/10 bg-neutral-gray shadow-card">
                  <div className="relative h-56 w-full">
                    <Image
                      src={item.imagen}
                      alt={item.titulo}
                      fill
                      sizes="(min-width:1024px) 30vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-2 p-5">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-blue/70">{item.categoria}</span>
                    <h4 className="font-heading text-lg font-semibold text-neutral-dark">{item.titulo}</h4>
                    <p className="text-sm text-neutral-dark/70">{item.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default GaleriaHome;
