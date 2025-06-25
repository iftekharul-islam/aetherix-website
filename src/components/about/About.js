'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import offer1 from '@/assets/offer1.jpg';
import offer2 from '@/assets/offer2.jpg';
import offer3 from '@/assets/offer3.jpg';
import { Play, X } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const youtubeVideoId = 'sUf2PtEZris'; // Replace with your YouTube video ID

    const handlePlayClick = () => {
        setIsVideoOpen(true);
    };

    const handleCloseVideo = () => {
        setIsVideoOpen(false);
    };

    // Animation variants for the circular motion
    const circleVariants = {
        animate: {
            rotate: 360,
            transition: {
                duration: 10,
                repeat: Infinity,
                ease: 'linear',
            },
        },
    };

    // Animation for the play button (pulse effect)
    const playButtonVariants = {
        hover: {
            scale: 1.1,
            transition: { duration: 0.3 },
        },
        tap: {
            scale: 0.95,
        },
    };

    return (
        <>
            <section className='bg-gradient-to-br from-[#002a57] to-[#0097b2] text-white py-10 md:py-30'>
                <div className='container px-4'>
                    <h1 className='text-3xl md:text-4xl font-bold mb-2'>About Us</h1>
                    <p className='text-sm text-white/80'>Home / About Us</p>
                </div>
            </section>

            <section className='py-10 md:py-20 container'>
                <div className='flex flex-col lg:flex-row gap-6 lg:gap-8'>
                    {/* Images Container - Maintains layout on all screen sizes */}
                    <div className='bg-gray-100 py-4 px-4 sm:py-6 sm:px-8 rounded-2xl flex-shrink-0'>
                        <div className='relative flex flex-row justify-center items-center md:items-end gap-3 sm:gap-4 md:gap-6 pb-16 sm:pb-20 md:pb-28 lg:pb-20'>
                            {/* First Image */}
                            <div className='relative w-32 h-40 sm:w-40 sm:h-52 md:w-52 md:h-64 lg:w-60 lg:h-80 rounded-lg overflow-hidden shadow-md -mt-4 sm:-mt-6 md:-mt-10'>
                                <Image src={offer1} alt='Offer 1' fill className='object-cover' />
                            </div>

                            {/* Second Image with Play Icon */}
                            <div className='flex flex-col md:translate-y-8 lg:translate-y-16'>
                                <div className='flex rounded-lg overflow-hidden mb-2 sm:mb-4 justify-end items-end'>
                                    <Play className='w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 text-primary' />
                                </div>

                                <div className='w-32 h-40 sm:w-40 sm:h-52 md:w-52 md:h-64 lg:w-60 lg:h-80 relative rounded-lg overflow-hidden shadow-md'>
                                    <Image
                                        src={offer2}
                                        alt='Offer 2'
                                        fill
                                        className='object-cover'
                                    />
                                </div>
                            </div>

                            {/* Circular Play Button - Responsive sizing */}
                            <div className='absolute bottom-0 left-1/2 -translate-x-1/2 z-10'>
                                <div className='relative'>
                                    <button
                                        onClick={handlePlayClick}
                                        className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full border-2 sm:border-4 border-white shadow-xl overflow-hidden relative bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer z-20 group'
                                    >
                                        {/* Rotating border text effect - Only show on larger screens */}
                                        <div className='absolute inset-0 rounded-fullblock'>
                                            <svg
                                                className='w-full h-full animate-spin'
                                                style={{ animationDuration: '10s' }}
                                                viewBox='0 0 112 112'
                                            >
                                                <path
                                                    id='circle-text-path'
                                                    d='M 56 56 m -40 0 a 40 40 0 1 1 80 0 a 40 40 0 1 1 -80 0'
                                                    fill='none'
                                                    stroke='none'
                                                />
                                                <text className='text-xs fill-white font-medium uppercase tracking-wider'>
                                                    <textPath
                                                        href='#circle-text-path'
                                                        startOffset='0%'
                                                    >
                                                        • CONSULTING • SERVICES • SOLUTIONS
                                                    </textPath>
                                                </text>
                                            </svg>
                                        </div>

                                        {/* Center Play Icon - Responsive sizing */}
                                        <div className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex items-center justify-center relative z-10'>
                                            <Play color='#fff' className='w-full h-full' />
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className='flex-1 min-w-0'>
                        <div className='bg-white p-6 md:p-8 rounded-2xl shadow-sm'>
                            <h2 className='text-2xl md:text-3xl font-bold text-gray-800 mb-4'>
                                Our Story
                            </h2>
                            <p className='text-gray-600 leading-relaxed mb-6'>
                                We are a team of dedicated professionals committed to delivering
                                exceptional consulting services and innovative solutions. Our
                                expertise spans across various industries, helping businesses
                                achieve their goals through strategic planning and cutting-edge
                                technology.
                            </p>
                            <p className='text-gray-600 leading-relaxed mb-6'>
                                With years of experience in the field, we understand the challenges
                                that modern businesses face. Our approach combines industry best
                                practices with creative problem-solving to deliver results that
                                exceed expectations.
                            </p>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8'>
                                <div className='text-center p-4 bg-gray-50 rounded-lg'>
                                    <div className='text-2xl font-bold text-primary mb-2'>500+</div>
                                    <div className='text-sm text-gray-600'>Projects Completed</div>
                                </div>
                                <div className='text-center p-4 bg-gray-50 rounded-lg'>
                                    <div className='text-2xl font-bold text-primary mb-2'>50+</div>
                                    <div className='text-sm text-gray-600'>Happy Clients</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Modal */}
            {isVideoOpen && (
                <div className='fixed inset-0 bg-black/80 z-[999] flex items-center justify-center p-4'>
                    <div className='relative w-full max-w-4xl aspect-video'>
                        {/* Close button */}
                        <button
                            onClick={handleCloseVideo}
                            className='absolute -top-10 -right-4 bg-white text-black rounded-full p-1 hover:text-red-500 transition-colors z-10'
                        >
                            <X className='w-6 h-6' />
                        </button>

                        {/* Embedded YouTube Video */}
                        <iframe
                            className='w-full h-full rounded-lg'
                            src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`}
                            title='YouTube video player'
                            frameBorder='0'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </>
    );
};

export default About;
