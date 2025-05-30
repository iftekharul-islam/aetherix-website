'use client';
import { motion } from 'framer-motion';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import DemoImage from '../../assets/demoimage.jpeg';
import Image from 'next/image';
const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            damping: 18,
            stiffness: 100,
            ease: 'easeOut',
            duration: 0.8,
        },
    },
};

const stagger = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.25,
            delayChildren: 0.1,
        },
    },
};
function HeroSection() {
    return (
        <section className='animated-gradient-diagonal-herosection'>
            <div className='container mx-auto px-4 min-h-screen flex flex-col lg:flex-row justify-between items-center text-white relative overflow-hidden py-16'>
                {/* Left Side */}
                <motion.div
                    className='max-w-xl space-y-6 z-10 text-center lg:text-left mb-10 lg:mb-0'
                    variants={stagger}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <motion.div
                        className='hidden md:flex items-center gap-2 justify-center lg:justify-start'
                        variants={fadeInUp}
                    >
                        <div className='h-0.5 w-8 bg-[#d1d5db] rounded-full'></div>
                        <div className='text-sm text-[#d1d5db] font-bold'>Expert Consulting</div>
                        <div className='h-0.5 w-8 bg-[#d1d5db] rounded-full'></div>
                    </motion.div>

                    <motion.h1
                        className='text-3xl sm:text-4xl md:text-5xl font-bold leading-tight'
                        variants={fadeInUp}
                    >
                        Reliably Guiding Your <br />
                        <span className='bg-[#00e0d0] rounded-xl px-2 py-1 inline-block mt-2'>
                            Business
                        </span>{' '}
                        to Success
                    </motion.h1>

                    <motion.p className='text-sm sm:text-base text-white/80' variants={fadeInUp}>
                        Our highly qualified global team is uniquely qualified to deliver
                        high-performance sustainable landmark buildings through our integrated
                        suite.
                    </motion.p>

                    <motion.div
                        className='flex justify-center lg:justify-start'
                        variants={fadeInUp}
                    >
                        <button className='bg-white text-[#002a57] px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-100 transition-colors'>
                            Contact Us
                            <FontAwesomeIcon icon={faArrowRight} className='w-4 h-4' />
                        </button>
                    </motion.div>
                </motion.div>

                {/* Right Side */}
                <div className='relative space-y-4 z-10 text-center'>
                    <div className='flex flex-col sm:flex-row justify-center gap-4'>
                        <div className='bg-white rounded-xl p-4 text-center shadow-md w-40'>
                            <Image
                                src='https://placehold.co/80x80'
                                className='rounded-full mx-auto mb-2'
                                height={80}
                                width={80}
                                alt='FPS Global'
                                unoptimized
                            />
                            <p className='text-[#002a57] text-sm font-semibold'>
                                Consulting Services
                            </p>
                            <p className='text-xs text-gray-500'>Integrated services</p>
                        </div>
                        <div className='bg-white rounded-xl p-4 text-center shadow-md w-40'>
                            <Image
                                src={DemoImage}
                                className='rounded-full mx-auto mb-2'
                                height={80}
                                width={80}
                                alt='FPS Global'
                            />
                            <p className='text-[#002a57] text-sm font-semibold'>
                                Qualified Global Team
                            </p>
                            <p className='text-xs text-gray-500'>High performance</p>
                        </div>
                    </div>

                    <div className='text-center text-sm mt-2'>
                        <p className='text-white font-semibold'>
                            547+
                            <br />
                            <span className='text-xs'>Smart Businesses growing with us</span>
                        </p>
                    </div>

                    <div className='absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 bg-white rounded-full px-4 py-1 text-[#002a57] text-sm font-medium shadow-lg'>
                        <i className='fas fa-star text-[#facc15]'></i> Our Satisfied Customers
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
