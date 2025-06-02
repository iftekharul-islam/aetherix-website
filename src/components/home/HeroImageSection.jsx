'use client';
import { motion, useInView, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import DemoImage from '@/assets/demoimage.jpeg';
import IconImage from '@/assets/ideaicon.png';
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
                    className='relative rounded-xl overflow-hidden shadow-xl h-[350px]'
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <Image
                        src={DemoImage}
                        alt='Our Team'
                        fill
                        className='object-cover'
                        quality={100}
                    />
                    <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4'>
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
                        <div className='p-2 rounded-full bg-primary hover:bg-[#f59e0b]'>
                            <Image
                                src={IconImage}
                                alt='Service Icon'
                                height={50}
                                width={50}
                                className='w-[50px] h-[50px] object-contain'
                            />
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
                    className='relative rounded-xl overflow-hidden shadow-xl h-[350px]'
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <Image
                        src={DemoImage}
                        alt='Our Team'
                        fill
                        className='object-cover'
                        quality={100}
                    />
                    <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4'>
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
