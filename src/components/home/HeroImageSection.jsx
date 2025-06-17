'use client';
import { motion, useInView, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import DemoImage from '@/assets/tsimage.png';
import IconImage from '@/assets/ideaicon.png';
import DemoImage2 from '@/assets/tsimage2.png';
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
    return (
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
        </motion.div>
    );
};

export default RightSection;
