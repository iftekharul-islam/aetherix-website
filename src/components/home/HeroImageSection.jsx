'use client';
import { motion, useInView, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import DemoImage from '@/assets/tsimage.png';
import IconImage from '@/assets/ideaicon.png';
import DemoImage2 from '@/assets/tsimage2.png';
import { Play, Leaf, X } from 'lucide-react';
import { createPortal } from 'react-dom';

// Add this at the top of your component
const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return createPortal(
        <div className='fixed inset-0 bg-black/80 z-[999] flex items-center justify-center p-4'>
            {children}
        </div>,
        document.body
    );
};

const RightSection = () => {
    const countRef = useRef(null);
    const isInView = useInView(countRef, { once: true });
    const [displayCount, setDisplayCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        const controls = animate(0, 547, {
            duration: 3,
            onUpdate(value) {
                setDisplayCount(Math.floor(value));
            },
        });

        return () => controls.stop();
    }, [isInView]);
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const youtubeVideoId = 'Hu4Yvq-g7_Y';
    const handlePlayClick = () => {
        setIsVideoOpen(true);
    };

    const handleCloseVideo = () => {
        setIsVideoOpen(false);
    };
    return (
        <>
            <motion.div
                className='relative w-full max-w-xl h-[600px] flex gap-4 z-10'
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.2,
                            delayChildren: 0.3,
                        },
                    },
                }}
            >
                <div className='flex-1 flex flex-col h-full justify-end gap-4'>
                    <motion.div
                        className='relative rounded-xl overflow-hidden shadow-xl h-[350px] bg-[#00e0d0]'
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <Image
                            src={DemoImage}
                            alt='Our Team'
                            fill
                            className='object-fill'
                            quality={100}
                        />
                        <div className='absolute bottom-0 left-0 right-0  p-4'>
                            <div className=' bg-white p-4 rounded-2xl'>
                                <div className='text-primary text-lg font-bold '>
                                    {' '}
                                    Consulting Services
                                </div>
                                <div className='text-black text-sm font-medium '>
                                    {' '}
                                    Immediate Consulting Services{' '}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className='bg-white rounded-xl shadow-lg p-4'
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <div className='flex items-center justify-center space-x-[-10px] '>
                            {[1, 2, 3, 4, 5].map((item, index) => (
                                <div
                                    key={index}
                                    className='w-8 h-8 rounded-full overflow-hidden border-2 border-white'
                                >
                                    <Image
                                        src={DemoImage}
                                        alt={`Customer ${index + 1}`}
                                        width={32}
                                        height={32}
                                        className='object-cover w-full h-full'
                                    />
                                </div>
                            ))}

                            <div className='w-8 h-8 rounded-full bg-[#00e0d0] text-white text-xs font-medium flex items-center justify-center border-2 border-white'>
                                +6
                            </div>
                        </div>
                        <div className='flex justify-center items-center text-black font-normal text-sm mt-2'>
                            Our Satisfied Customers
                        </div>
                    </motion.div>
                </div>

                <div className='flex-1 flex flex-col h-full justify-end gap-4'>
                    <motion.div
                        className='bg-white rounded-xl shadow-lg p-4'
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <div className='flex justify-end mb-2'>
                            <div className='p-2 rounded-full bg-[#001F3F] hover:bg-[#f59e0b]'>
                                <svg
                                    width='50'
                                    height='50'
                                    viewBox='0 0 200 200'
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='white'
                                >
                                    <path
                                        d='M44.8,-68.2C57.6,-60.1,67.9,-48.4,72.1,-35.5C76.4,-22.7,74.6,-8.8,71.6,4.7C68.6,18.3,64.5,31.5,56.3,41.2C48.1,51,35.9,57.3,23.2,64.6C10.6,72,-2.6,80.3,-14.4,77C-26.3,73.6,-36.8,58.6,-46.6,45C-56.5,31.3,-65.8,19.1,-66.7,6C-67.6,-7.1,-60.1,-21,-51.2,-30.4C-42.4,-39.9,-32.3,-44.8,-22.3,-52.5C-12.4,-60.3,-2.7,-70.9,9.1,-82.3C20.9,-93.6,41.8,-105.7,44.8,-68.2Z'
                                        transform='translate(100 100)'
                                    />
                                </svg>
                            </div>
                        </div>

                        <div
                            className='flex items-center text-4xl text-secondary font-bold min-h-[48px]'
                            ref={countRef}
                        >
                            {isInView ? `${displayCount}+` : '0+'}
                        </div>

                        <div className='text-black text-sm'>Smart Businesses growing with us</div>
                    </motion.div>

                    <motion.div
                        className='relative rounded-xl overflow-hidden shadow-xl h-[350px] bg-[#00e0d0]'
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <Image
                            src={DemoImage2}
                            alt='Our Team'
                            fill
                            className='object-cover'
                            quality={100}
                        />
                        <div className='absolute bottom-0 left-0 right-0 p-4'>
                            <div className=' bg-white p-4 rounded-2xl'>
                                <div className='text-primary text-lg font-bold '>
                                    {' '}
                                    Qualified Global Team{' '}
                                </div>
                                <div className='text-black text-sm font-medium '>
                                    {' '}
                                    Deliver High Quality Services{' '}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className='absolute bottom-[3%] left-0 top-[50%] sm:top-[55%] md:top-[78%] lg:top-auto -translate-x-1/2 z-10 hidden md:block'>
                    <div className='relative'>
                        <button
                            onClick={handlePlayClick}
                            className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full border-2 sm:border-4 border-white shadow-xl overflow-hidden relative bg-primary-600 flex items-center justify-center hover:bg-primary-700 transition-colors cursor-pointer z-20 group'
                        >
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
                                        <textPath href='#circle-text-path' startOffset='0%'>
                                            • CONSULTING • SERVICES • SOLUTIONS
                                        </textPath>
                                    </text>
                                </svg>
                            </div>
                            <div className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex items-center justify-center relative z-10'>
                                <Play color='#fff' className='w-full h-full' />
                            </div>
                        </button>
                    </div>
                </div>
            </motion.div>
            {isVideoOpen && (
                <Modal isOpen={isVideoOpen} onClose={handleCloseVideo}>
                    <div className='relative w-full max-w-4xl aspect-video'>
                        <button
                            onClick={handleCloseVideo}
                            className='absolute -top-10 -right-4 bg-white text-black rounded-full p-1 hover:text-red-500 transition-colors z-10'
                        >
                            <X className='w-6 h-6' />
                        </button>
                        <iframe
                            className='w-full h-full rounded-lg'
                            src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`}
                            title='YouTube video player'
                            frameBorder='0'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen
                        ></iframe>
                    </div>
                </Modal>
            )}
        </>
    );
};

export default RightSection;
