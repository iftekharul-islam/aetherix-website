import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import offer1 from '@/assets/offer1.jpg';
import offer2 from '@/assets/offer2.jpg';
import offer3 from '@/assets/offer3.jpg';
import offer4 from '@/assets/offer4.png';
import offer5 from '@/assets/offer5.jpeg';
import { MoveUpRight } from 'lucide-react';
function OfferSection() {
    const tiles = [
        {
            id: 1,
            title: 'Human Resource',
            category: 'Services',
            image: offer1,
            span: 1,
        },
        {
            id: 2,
            title: 'Finance Management',
            category: 'Services',
            image: offer2,
            span: 1,
        },
        {
            id: 3,
            title: 'Data Management',
            category: 'Services',
            image: offer3,
            span: 1,
        },
        {
            id: 4,
            title: 'Business Management',
            category: 'Services',
            image: offer4,
            span: 2,
        },
        {
            id: 5,
            title: 'Lead Management',
            category: 'Services',
            image: offer5,
            span: 1,
        },
    ];
    return (
        <section className='py-20 bg-white container'>
            <div className='flex justify-between items-center gap-2 flex-wrap'>
                <div>
                    <p className='text-xs text-[#9ca3af] uppercase font-semibold'>Global</p>
                    <h2 className='text-3xl font-bold mb-2'>What We Offer</h2>
                </div>
                <div className='text-[#475569] max-w-2xl'>
                    Our highly qualified global team is uniquely qualified to deliver
                    high-performance sustainable landmark buildings through our integrated suite
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                {tiles.map((tile) => (
                    <div
                        key={tile.id}
                        className={`relative rounded-xl overflow-hidden h-[280px] ${
                            tile.span === 2 ? 'sm:col-span-2' : ''
                        }`}
                    >
                        <Image
                            src={tile.image}
                            alt={tile.title}
                            className='w-full h-full object-cover'
                            width={400}
                            height={280}
                        />
                        <div className='absolute bottom-4 left-4 right-4'>
                            <div className='w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3 flex items-center justify-between'>
                                <div className='flex flex-col gap-1'>
                                    <p className='text-white font-semibold text-sm'>{tile.title}</p>
                                    <p className='text-white font-semibold text-sm'>
                                        {tile.category}
                                    </p>
                                </div>

                                <div className='px-2 py-2 bg-white rounded-full'>
                                    <MoveUpRight size={20} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='text-center mt-10'>
                <button className='px-6 py-3 rounded-full border text-white bg-[#002a57] font-normal flex items-center gap-2 mx-auto'>
                    View All
                    <FontAwesomeIcon icon={faArrowRight} className='w-4 h-4' />
                </button>
            </div>
        </section>
    );
}

export default OfferSection;
