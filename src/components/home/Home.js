'use client';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import DemoImage from '../../assets/demoimage.jpeg';

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
const Home = () => {
    const tiles = [
        {
            id: 1,
            title: 'Human Resource',
            category: 'Services',
            image: DemoImage,
            span: 1,
        },
        {
            id: 2,
            title: 'Finance Management',
            category: 'Services',
            image: DemoImage,
            span: 1,
        },
        {
            id: 3,
            title: 'Data Management',
            category: 'Services',
            image: DemoImage,
            span: 1,
        },
        {
            id: 4,
            title: 'Business Management',
            category: 'Services',
            image: DemoImage,
            span: 2,
        },
        {
            id: 5,
            title: 'Lead Management',
            category: 'Services',
            image: DemoImage,
            span: 1,
        },
    ];
    return (
        <>
            <section className='bg-gradient-to-br from-[#002a57] to-[#0097b2]'>
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
                            <div className='text-sm text-[#d1d5db] font-bold'>
                                Expert Consulting
                            </div>
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

                        <motion.p
                            className='text-sm sm:text-base text-white/80'
                            variants={fadeInUp}
                        >
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

            <section className='py-20 bg-white container'>
                <div className='flex   justify-between items-center'>
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
                                        <p className='text-white font-semibold text-sm'>
                                            {tile.title}
                                        </p>
                                        <p className='text-white font-semibold text-sm'>
                                            {tile.category}
                                        </p>
                                    </div>

                                    <div className='px-2 py-0.5 bg-white rounded-full'>
                                        <FontAwesomeIcon
                                            icon={faArrowRight}
                                            className='text-black h-4 w-4'
                                        />
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

            <div className='bg-[#00b3c8]  py-2'>
                <div className='container text-white text-sm  flex flex-wrap gap-4 justify-center'>
                    <span>FPS Global</span>
                    <span>Featured Projects</span>
                    <span>Consulting Services</span>
                    <span>Qualified Global Team</span>
                    <span>FPS Global</span>
                    <span>Featured Projects</span>
                    <span>Consulting Services</span>
                    <span>Qualified Global Team</span>
                </div>
            </div>

            <section className='py-20 container'>
                <p className='text-xs text-[#9ca3af] uppercase font-semibold'>Global</p>
                <h2 className='text-3xl font-bold mb-4'>About Global</h2>
                <div className='flex gap-10'>
                    <div className='flex gap-4'>
                        <img src='https://placehold.co/200x200' className='rounded-xl' />
                        <img src='https://placehold.co/200x200' className='rounded-xl' />
                    </div>
                    <div>
                        <h3 className='text-xl font-semibold mb-2'>Mission and Vision</h3>
                        <p className='text-[#475569] mb-4'>
                            Our purpose is to support our clients in achieving their primary
                            objectives in delivering flexible, healthy, fully tuned and functioning
                            facilities that perform to the highest level for their occupants to
                            allow them to be productive and successful.
                        </p>
                        <button className='px-6 py-3 rounded-full bg-[#002a57] text-white font-semibold'>
                            Read More
                        </button>
                    </div>
                </div>
            </section>

            <section className='py-20 bg-[#f9fafb]'>
                <div className='container'>
                    <p className='text-xs text-[#9ca3af] uppercase font-semibold'>Global</p>
                    <h2 className='text-3xl font-bold mb-4'>What Our Customers Say</h2>
                    <p className='text-[#475569] mb-10'>
                        Our highly qualified global team is uniquely qualified to deliver
                        high-performance sustainable landmark buildings through our integrated suite
                    </p>
                    <div className='bg-white p-10 rounded-xl shadow text-center max-w-4xl mx-auto'>
                        <p className='text-[#334155] italic mb-6'>
                            “Wow, I am truly amazed by the impact [Your Product/Service Name] has
                            had on my life…”
                        </p>
                        <div className='flex justify-center space-x-2 mb-4'>
                            <span className='w-3 h-3 rounded-full bg-gray-300'></span>
                            <span className='w-3 h-3 rounded-full bg-gray-300'></span>
                            <span className='w-3 h-3 rounded-full bg-[#002a57]'></span>
                            <span className='w-3 h-3 rounded-full bg-gray-300'></span>
                        </div>
                        <p className='font-semibold text-[#002a57]'>Sean Smith</p>
                        <p className='text-sm text-gray-500'>Locavore Pvt. Ltd</p>
                    </div>
                </div>
            </section>

            <section className='py-20 container'>
                <p className='text-xs text-[#9ca3af] uppercase font-semibold'>News</p>
                <h2 className='text-3xl font-bold mb-4'>Latest News</h2>
                <p className='text-[#475569] mb-10 max-w-2xl'>
                    Our highly qualified global team is uniquely qualified to deliver
                    high-performance sustainable landmark buildings through our integrated suite
                </p>
                <div className='grid grid-cols-3 gap-6'>
                    <div className='border rounded-xl p-6'>
                        <img src='https://placehold.co/400x200' className='rounded-lg mb-4' />
                        <p className='text-lg font-semibold mb-2'>
                            Understanding the Benefits of Business Consulting
                        </p>
                        <p className='text-sm text-gray-500 mb-2'>by Austin King • 5 Jan, 2023</p>
                        <button className='text-[#002a57] font-semibold'>Read More</button>
                    </div>
                    <div className='border rounded-xl p-6'>
                        <img src='https://placehold.co/400x200' className='rounded-lg mb-4' />
                        <p className='text-lg font-semibold mb-2'>
                            Top 5 Signs Your Business Needs a Consultant
                        </p>
                        <p className='text-sm text-gray-500 mb-2'>by Austin King • 5 Jan, 2023</p>
                        <button className='text-[#002a57] font-semibold'>Read More</button>
                    </div>
                    <div className='border rounded-xl p-6'>
                        <img src='https://placehold.co/400x200' className='rounded-lg mb-4' />
                        <p className='text-lg font-semibold mb-2'>
                            The Role of Business Consultants in Digital Transformation
                        </p>
                        <p className='text-sm text-gray-500 mb-2'>by Austin King • 5 Jan, 2023</p>
                        <button className='text-[#002a57] font-semibold'>Read More</button>
                    </div>
                </div>
                <div className='text-center mt-10'>
                    <button className='px-6 py-3 rounded-full border border-[#002a57] text-[#002a57] font-semibold flex items-center gap-2 mx-auto'>
                        View All <i className='fas fa-arrow-right'></i>
                    </button>
                </div>
            </section>

            <section className='py-12 container bg-white text-center'>
                <h3 className='text-xl font-semibold mb-6'>Our Clients</h3>
                <div className='flex flex-wrap justify-center gap-10 grayscale'>
                    <img src='https://placehold.co/100x40?text=Oracle' />
                    <img src='https://placehold.co/100x40?text=MTN' />
                    <img src='https://placehold.co/100x40?text=Dell' />
                    <img src='https://placehold.co/100x40?text=BCG' />
                    <img src='https://placehold.co/100x40?text=SanchoBBDO' />
                    <img src='https://placehold.co/100x40?text=TATA' />
                </div>
            </section>
        </>
    );
};

export default Home;
