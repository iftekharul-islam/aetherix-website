'use client';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import DemoImage from '@/assets/demoimage.jpeg';
import Image from 'next/image';
import RightContent from './HeroImageSection';

const Bubble = ({ size, left, delay, duration }) => {
    return (
        <motion.div
            className='absolute rounded-full bg-white backdrop-blur-sm'
            style={{
                width: size,
                height: size,
                left: `${left}%`,
                bottom: '-10%',
            }}
            initial={{ y: 0, opacity: 0, scaleY: 1, scaleX: 1 }}
            animate={{
                y: -1200,
                opacity: [0, 0.5, 0.5, 0],
                scaleY: [1, 0.8, 1.2, 1],
                scaleX: [1, 1.2, 0.8, 1],
            }}
            transition={{
                duration: duration,
                delay: delay,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'linear',
            }}
        />
    );
};

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
    const [bubbles, setBubbles] = useState([]);

    useEffect(() => {
        const newBubbles = Array.from({ length: 15 }).map((_, i) => ({
            id: i,
            size: Math.random() * 60 + 20, // 20-80px
            left: Math.random() * 100, // 0-100%
            delay: Math.random() * 5, // 0-5s
            duration: Math.random() * 20 + 10, // 10-30s
        }));
        setBubbles(newBubbles);
    }, []);

    return (
        <section className='animated-gradient-diagonal-herosection relative overflow-hidden'>
            <div className='absolute inset-0 overflow-hidden'>
                {bubbles.map((bubble) => (
                    <Bubble
                        key={bubble.id}
                        size={bubble.size}
                        left={bubble.left}
                        delay={bubble.delay}
                        duration={bubble.duration}
                    />
                ))}
            </div>

            <div className='container mx-auto px-4 min-h-screen flex flex-col lg:flex-row justify-between items-center text-white relative z-10 py-16'>
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

                <RightContent />
            </div>
        </section>
    );
}

export default HeroSection;
