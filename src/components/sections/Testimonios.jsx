
'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { HiMiniStar } from 'react-icons/hi2';

function Testimonios({ items = [] }) {
  return (
    <section className="section-padding" id="testimonios">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-10 flex flex-col items-start gap-4 text-center md:text-left">
          <span className="badge bg-primary-blue/10 text-primary-blue">Historias reales</span>
          <h2 className="section-heading">Familias que confían en nosotros</h2>
          <p className="text-neutral-dark/70 md:max-w-3xl">
            Padres, estudiantes y egresados comparten cómo el Gimnasio Simón Bolívar ha impactado sus vidas.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={24}
          autoplay={{ delay: 8000 }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
        >
          {items.map((testimonio) => (
            <SwiperSlide key={testimonio.id}>
              <article className="testimonial-card h-full">
                <div className="flex items-center gap-4">
                  <span className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-primary-blue/40 bg-primary-blue/10">
                    <Image
                      src={testimonio.imagen}
                      alt={`Retrato de ${testimonio.nombre}`}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </span>
                  <div>
                    <p className="font-heading text-lg font-semibold text-neutral-dark">{testimonio.nombre}</p>
                    <p className="text-sm text-primary-blue/80">{testimonio.rol}</p>
                  </div>
                </div>
                <p className="mt-6 text-sm text-neutral-dark/80">“{testimonio.mensaje}”</p>
                <div className="mt-6 flex items-center gap-1 text-primary-yellow">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <HiMiniStar
                      key={index}
                      className={`h-5 w-5 ${index + 1 <= Math.round(testimonio.calificacion) ? '' : 'opacity-30'}`}
                      aria-hidden
                    />
                  ))}
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonios;
