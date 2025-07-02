import React from 'react';
import CircularImageSection from '../global/CircularImageSection';
import offer1 from '@/assets/offer1.jpg';
import offer2 from '@/assets/offer2.jpg';
import { MoveRight } from 'lucide-react';
function GlobalSection() {
    const youtubeVideoId = 'Hu4Yvq-g7_Y';
    return (
        <>
            <section className='py-10 md:py-20 container'>
                <div className='flex justify-between items-center gap-2 flex-wrap'>
                    <div>
                        <p className='text-xs text-[#9ca3af] uppercase font-semibold'>Global</p>
                        <h2 className='text-3xl font-bold mb-2'>About Global</h2>
                    </div>
                    <div className='text-[#475569] max-w-2xl'>
                        Our highly qualified global team is uniquely qualified to deliver
                        high-performance sustainable landmark buildings through our integrated suite
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row gap-6 lg:gap-8 items-center'>
                    {/* Images Container - Maintains layout on all screen sizes */}
                    <CircularImageSection
                        youtubeVideoId={youtubeVideoId}
                        image1={offer1}
                        image2={offer2}
                    />

                    {/* Content Section - Now centered */}
                    <div className='flex-1 min-w-0 flex'>
                        <div className='bg-white p-6 md:p-8 rounded-2xl max-w-2xl w-full'>
                            <div className='text-2xl md:text-3xl font-bold text-gray-800 mb-4 '>
                                Mission and Vision
                            </div>
                            <div className='text-gray-600 leading-relaxed mb-6 '>
                                We are a team of dedicated professionals committed to delivering
                                exceptional consulting services and innovative solutions. Our
                                expertise spans across various industries, helping businesses
                                achieve their goals through strategic planning and cutting-edge
                                technology.
                            </div>
                            <div className='text-center mt-10'>
                                <button className='px-6 py-3 rounded-full border text-white bg-[#002a57] font-normal flex items-center gap-2 cursor-pointer hover:bg-[#004a7f] transition-colors'>
                                    Read More
                                    <MoveRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default GlobalSection;
