'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const clients = [
  { name: 'Oracle', src: 'https://placehold.co/100x40?text=Oracle' },
  { name: 'MTN', src: 'https://placehold.co/100x40?text=MTN' },
  { name: 'Dell', src: 'https://placehold.co/100x40?text=Dell' },
  { name: 'BCG', src: 'https://placehold.co/100x40?text=BCG' },
  { name: 'SanchoBBDO', src: 'https://placehold.co/100x40?text=SanchoBBDO' },
  { name: 'TATA', src: 'https://placehold.co/100x40?text=TATA' },
  { name: 'Microsoft', src: 'https://placehold.co/100x40?text=Microsoft' },
  { name: 'Amazon', src: 'https://placehold.co/100x40?text=Amazon' },
  { name: 'Meta', src: 'https://placehold.co/100x40?text=Meta' },
  { name: 'Google', src: 'https://placehold.co/100x40?text=Google' },
  { name: 'Netflix', src: 'https://placehold.co/100x40?text=Netflix' },
];

function ClientSection() {
  return (
    <section className='py-12 bg-white text-center'>
      <div className='container mx-auto px-4'>
        <h3 className='text-xl font-semibold mb-6'>Our Clients</h3>

        <div className='relative pb-10'> {/* Add padding-bottom for spacing below slider */}
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination-clients',
            }}
            navigation={true}
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
              1280: { slidesPerView: 6 },
            }}
            className='grayscale '
          >
            {clients.map((client, index) => (
              <SwiperSlide key={index}>
                <img
                  src={client.src}
                  alt={client.name}
                  className='mx-auto w-full h-auto object-contain'
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Move pagination here */}
          <div className='swiper-pagination-clients mt-4 flex justify-center' />
        </div>
      </div>
    </section>
  );
}

export default ClientSection;
