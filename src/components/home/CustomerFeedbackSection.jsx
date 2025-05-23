'use client';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import DemoImage from '../../assets/demoimage.jpeg';
function CustomerFeedbackSection() {
    const swiperRef = useRef(null);
    const testimonials = [
        {
            id: 1,
            content:
                "Wow, I am truly amazed by the impact [Your Product/Service Name] has had on my life. It completely transformed the way I manage my tasks and time. The intuitive interface and powerful features have made me more productive than ever before. I can't imagine my life without it now! [Your Product/Service Name] exceeded all my expectations! As someone who struggled with [Specific Problem], I had tried numerous solutions with little success. But then I discovered [Your Product/Service Name], and it's been a game-changer. I've seen incredible results, and I'm so grateful for the positive change it has brought into my life.",
            author: 'Sean Smith',
            company: 'Locomotive Plc, Ltd',
            phone: '+1 (555) 123-4567',
            image: DemoImage, // Replace with your image path
        },
        {
            id: 2,
            content: 'Another amazing testimonial would go here with similar structure and length.',
            author: 'Jane Doe',
            company: 'Tech Corp Inc.',
            phone: '+1 (555) 987-6543',
            image: '/images/customer2.jpg',
        },
        {
            id: 3,
            content:
                "Wow, I am truly amazed by the impact [Your Product/Service Name] has had on my life. It completely transformed the way I manage my tasks and time. The intuitive interface and powerful features have made me more productive than ever before. I can't imagine my life without it now! [Your Product/Service Name] exceeded all my expectations! As someone who struggled with [Specific Problem], I had tried numerous solutions with little success. But then I discovered [Your Product/Service Name], and it's been a game-changer. I've seen incredible results, and I'm so grateful for the positive change it has brought into my life.",
            author: 'Sean Smith',
            company: 'Locomotive Plc, Ltd',
            phone: '+1 (555) 123-4567',
            image: '/images/customer1.jpg',
        },
        {
            id: 4,
            content: 'Another amazing testimonial would go here with similar structure and length.',
            author: 'Jane Doe',
            company: 'Tech Corp Inc.',
            phone: '+1 (555) 987-6543',
            image: '/images/customer2.jpg',
        },
    ];

    return (
        <section className='container'>
            <div className='flex justify-between items-center gap-2 flex-wrap py-10'>
                <div>
                    <p className='text-xs text-[#9ca3af] uppercase font-semibold'>Global</p>
                    <h2 className='text-3xl font-bold mb-2'>What Our Customer Say</h2>
                </div>
                <div className='text-[#475569] max-w-2xl'>
                    Our highly qualified global team is uniquely qualified to deliver
                    high-performance sustainable landmark buildings through our integrated suite
                </div>
            </div>
            <div className='relative py-12 border border-gray-200 rounded-lg shadow-initial'>
                {/* Feedback Content */}
                <Swiper
                    ref={swiperRef}
                    modules={[Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation={{
                        nextEl: '.testimonial-next',
                        prevEl: '.testimonial-prev',
                    }}
                    pagination={{
                        clickable: true,
                        el: '.customer-pagination',
                        renderBullet: (index, className) => {
                            const testimonial = testimonials[index];
                            return `
                            <div class="${className} flex flex-col items-center">
                                <img 
                                    src="${testimonial.image}" 
                                    alt="${testimonial.author}" 
                                    class="w-16 h-16 rounded-full object-cover border-4 border-transparent transition-all duration-300"
                                />
                                <div class="info-container hidden mt-2 text-center">
                                    <p class="text-sm font-medium">${testimonial.author}</p>
                                    <p class="text-xs text-gray-500">${testimonial.phone}</p>
                                </div>
                            </div>
                        `;
                        },
                    }}
                    loop={true}
                    className='w-full mb-8 '
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className='bg-white  px-20 py-8 h-full '>
                                <div className='text-gray-600 text-lg leading-relaxed mb-6'>
                                    {testimonial.content}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Customer Images Navigation with Side Arrows */}
                <div className='flex items-center justify-center mt-8 gap-4'>
                    {/* Left Arrow */}
                    <button className='testimonial-prev bg-gray-200 hover:bg-gray-300 rounded-full p-2 transition-colors duration-200'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-6 w-6 text-gray-600'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M15 19l-7-7 7-7'
                            />
                        </svg>
                    </button>

                    {/* Customer Images Pagination */}
                    <div className='customer-pagination flex items-center'></div>

                    {/* Right Arrow */}
                    <button className='testimonial-next bg-gray-200 hover:bg-gray-300 rounded-full p-2 transition-colors duration-200'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-6 w-6 text-gray-600'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M9 5l7 7-7 7'
                            />
                        </svg>
                    </button>
                </div>

                {/* Custom CSS for the pagination */}
                <style jsx global>{`
                    .customer-pagination {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .customer-pagination .swiper-pagination-bullet {
                        width: auto;
                        height: auto;
                        background: transparent;
                        opacity: 0.7;
                        margin: 0 8px !important;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                    }
                    .customer-pagination .swiper-pagination-bullet-active {
                        opacity: 1;
                    }
                    .customer-pagination .swiper-pagination-bullet-active img {
                        border-color: #3b82f6 !important;
                        transform: scale(1.1);
                    }
                    .customer-pagination .swiper-pagination-bullet-active .info-container {
                        display: block;
                    }
                `}</style>
            </div>
        </section>
    );
}

export default CustomerFeedbackSection;
