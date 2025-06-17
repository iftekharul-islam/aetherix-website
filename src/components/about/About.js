import React from 'react';
import Head from 'next/head';

const About = () => {
    return (
        <>
            <Head>
                <title>About Us | Company Name</title>
                <meta
                    name='description'
                    content='Learn about our mission, vision, and what drives us to deliver exceptional solutions.'
                />
            </Head>

            <div className='min-h-screen bg-gradient-to-b from-gray-50 to-white'>
                {/* Hero Section */}
                <section className='relative py-20 md:py-32 overflow-hidden bg-[#1e3a8a]'>
                    <div className='absolute inset-0 bg-black opacity-30'></div>
                    <div className="absolute inset-0 bg-[url('/images/about-hero-pattern.svg')] bg-cover opacity-10"></div>
                    <div className='container mx-auto px-6 relative z-10'>
                        <div className='max-w-4xl mx-auto text-center'>
                            <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
                                Building the Future, <span className='text-[#0097b2]'>Today</span>
                            </h1>
                            <p className='text-xl md:text-2xl text-[#d7defa] mb-10'>
                                We are a team of innovators, thinkers, and creators dedicated to
                                delivering exceptional digital experiences.
                            </p>
                            <button className='px-8 py-3 bg-[#0097b2] hover:bg-[#007a8e] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg'>
                                Meet Our Team
                            </button>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className='py-16 bg-white'>
                    <div className='container mx-auto px-6'>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
                            <div className='p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-[#d7defa]'>
                                <div className='text-4xl font-bold text-[#1e3a8a] mb-2'>150+</div>
                                <div className='text-gray-600'>Projects Completed</div>
                            </div>
                            <div className='p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-[#d7defa]'>
                                <div className='text-4xl font-bold text-[#1e3a8a] mb-2'>50+</div>
                                <div className='text-gray-600'>Happy Clients</div>
                            </div>
                            <div className='p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-[#d7defa]'>
                                <div className='text-4xl font-bold text-[#1e3a8a] mb-2'>10+</div>
                                <div className='text-gray-600'>Years Experience</div>
                            </div>
                            <div className='p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-[#d7defa]'>
                                <div className='text-4xl font-bold text-[#1e3a8a] mb-2'>24/7</div>
                                <div className='text-gray-600'>Support Available</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision Section */}
                <section className='py-20 bg-[#f8fafc]'>
                    <div className='container mx-auto px-6'>
                        <div className='max-w-4xl mx-auto text-center mb-16'>
                            <h2 className='text-3xl md:text-4xl font-bold text-[#1a2130] mb-4'>
                                Our <span className='text-[#0097b2]'>Core</span> Values
                            </h2>
                            <p className='text-xl text-[#243466]'>
                                What drives us to deliver exceptional solutions every day
                            </p>
                        </div>

                        <div className='grid md:grid-cols-2 gap-12'>
                            {/* Mission Card */}
                            <div className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-[#1e3a8a]'>
                                <div className='flex items-center mb-6'>
                                    <div className='p-3 bg-[#d7defa] rounded-lg mr-4'>
                                        <svg
                                            className='w-8 h-8 text-[#1e3a8a]'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth='2'
                                                d='M13 10V3L4 14h7v7l9-11h-7z'
                                            ></path>
                                        </svg>
                                    </div>
                                    <h3 className='text-2xl font-bold text-[#1a2130]'>
                                        Our Mission
                                    </h3>
                                </div>
                                <p className='text-[#243466] mb-6'>
                                    To empower businesses with innovative digital solutions that
                                    drive growth, efficiency, and competitive advantage through
                                    cutting-edge technology and exceptional user experiences.
                                </p>
                                <ul className='space-y-3'>
                                    <li className='flex items-center'>
                                        <svg
                                            className='w-5 h-5 text-[#0097b2] mr-2'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth='2'
                                                d='M5 13l4 4L19 7'
                                            ></path>
                                        </svg>
                                        <span className='text-[#1a2130]'>
                                            Deliver exceptional value
                                        </span>
                                    </li>
                                    <li className='flex items-center'>
                                        <svg
                                            className='w-5 h-5 text-[#0097b2] mr-2'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth='2'
                                                d='M5 13l4 4L19 7'
                                            ></path>
                                        </svg>
                                        <span className='text-[#1a2130]'>Foster innovation</span>
                                    </li>
                                    <li className='flex items-center'>
                                        <svg
                                            className='w-5 h-5 text-[#0097b2] mr-2'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth='2'
                                                d='M5 13l4 4L19 7'
                                            ></path>
                                        </svg>
                                        <span className='text-[#1a2130]'>
                                            Build lasting partnerships
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            {/* Vision Card */}
                            <div className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-[#0097b2]'>
                                <div className='flex items-center mb-6'>
                                    <div className='p-3 bg-[#b3e5f1] rounded-lg mr-4'>
                                        <svg
                                            className='w-8 h-8 text-[#0097b2]'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth='2'
                                                d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                                            ></path>
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth='2'
                                                d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                                            ></path>
                                        </svg>
                                    </div>
                                    <h3 className='text-2xl font-bold text-[#1a2130]'>
                                        Our Vision
                                    </h3>
                                </div>
                                <p className='text-[#243466] mb-6'>
                                    To be the most trusted digital transformation partner globally,
                                    recognized for our technical excellence, customer-centric
                                    approach, and ability to turn complex challenges into seamless
                                    solutions.
                                </p>
                                <ul className='space-y-3'>
                                    <li className='flex items-center'>
                                        <svg
                                            className='w-5 h-5 text-[#0097b2] mr-2'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth='2'
                                                d='M5 13l4 4L19 7'
                                            ></path>
                                        </svg>
                                        <span className='text-[#1a2130]'>
                                            Global technology leader
                                        </span>
                                    </li>
                                    <li className='flex items-center'>
                                        <svg
                                            className='w-5 h-5 text-[#0097b2] mr-2'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth='2'
                                                d='M5 13l4 4L19 7'
                                            ></path>
                                        </svg>
                                        <span className='text-[#1a2130]'>
                                            Sustainable innovation
                                        </span>
                                    </li>
                                    <li className='flex items-center'>
                                        <svg
                                            className='w-5 h-5 text-[#0097b2] mr-2'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth='2'
                                                d='M5 13l4 4L19 7'
                                            ></path>
                                        </svg>
                                        <span className='text-[#1a2130]'>
                                            Positive global impact
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Video Section */}
                <section className='py-20 bg-white'>
                    <div className='container mx-auto px-6'>
                        <div className='max-w-4xl mx-auto text-center mb-16'>
                            <h2 className='text-3xl md:text-4xl font-bold text-[#1a2130] mb-4'>
                                Our <span className='text-[#0097b2]'>Story</span> in Motion
                            </h2>
                            <p className='text-xl text-[#243466]'>
                                Watch how we are shaping the future of digital experiences
                            </p>
                        </div>

                        <div className='relative rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto border-4 border-[#1e3a8a]'>
                            <div className='aspect-w-16 aspect-h-9'>
                                <iframe
                                    className='w-full h-[500px]'
                                    src='https://www.youtube.com/embed/your-video-id'
                                    title='Our Company Story'
                                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 hover:bg-opacity-10 transition-all duration-300'>
                                <button className='p-4 bg-[#0097b2] hover:bg-[#007a8e] rounded-full transition-all duration-300 transform hover:scale-110 shadow-xl'>
                                    <svg
                                        className='w-10 h-10 text-white'
                                        fill='none'
                                        stroke='currentColor'
                                        viewBox='0 0 24 24'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth='2'
                                            d='M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z'
                                        ></path>
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth='2'
                                            d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className='py-20 bg-[#f8fafc]'>
                    <div className='container mx-auto px-6'>
                        <div className='max-w-4xl mx-auto text-center mb-16'>
                            <h2 className='text-3xl md:text-4xl font-bold text-[#1a2130] mb-4'>
                                Our <span className='text-[#0097b2]'>Guiding</span> Principles
                            </h2>
                            <p className='text-xl text-[#243466]'>
                                The foundation of everything we do
                            </p>
                        </div>

                        <div className='grid md:grid-cols-3 gap-8'>
                            {[
                                {
                                    title: 'Innovation',
                                    icon: (
                                        <svg
                                            className='w-8 h-8 text-[#1e3a8a]'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth='2'
                                                d='M13 10V3L4 14h7v7l9-11h-7z'
                                            ></path>
                                        </svg>
                                    ),
                                    description:
                                        'We constantly push boundaries to deliver cutting-edge solutions that set new standards.',
                                },
                                {
                                    title: 'Integrity',
                                    icon: (
                                        <svg
                                            className='w-8 h-8 text-[#1e3a8a]'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth='2'
                                                d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                                            ></path>
                                        </svg>
                                    ),
                                    description:
                                        'We uphold the highest ethical standards in all our interactions and decisions.',
                                },
                                {
                                    title: 'Excellence',
                                    icon: (
                                        <svg
                                            className='w-8 h-8 text-[#1e3a8a]'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth='2'
                                                d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
                                            ></path>
                                        </svg>
                                    ),
                                    description:
                                        'We strive for perfection in every detail, delivering only the highest quality work.',
                                },
                                {
                                    title: 'Collaboration',
                                    icon: (
                                        <svg
                                            className='w-8 h-8 text-[#1e3a8a]'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth='2'
                                                d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                                            ></path>
                                        </svg>
                                    ),
                                    description:
                                        'We believe great things happen when diverse minds work together toward a common goal.',
                                },
                                {
                                    title: 'Customer Focus',
                                    icon: (
                                        <svg
                                            className='w-8 h-8 text-[#1e3a8a]'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth='2'
                                                d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                                            ></path>
                                        </svg>
                                    ),
                                    description:
                                        'We listen deeply to understand needs and deliver solutions that exceed expectations.',
                                },
                                {
                                    title: 'Sustainability',
                                    icon: (
                                        <svg
                                            className='w-8 h-8 text-[#1e3a8a]'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth='2'
                                                d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
                                            ></path>
                                        </svg>
                                    ),
                                    description:
                                        'We build solutions that create lasting value for our clients and the planet.',
                                },
                            ].map((value, index) => (
                                <div
                                    key={index}
                                    className='bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-[#d7defa]'
                                >
                                    <div className='p-3 bg-[#d7defa] rounded-lg inline-block mb-4'>
                                        {value.icon}
                                    </div>
                                    <h3 className='text-xl font-bold text-[#1a2130] mb-3'>
                                        {value.title}
                                    </h3>
                                    <p className='text-[#243466]'>{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className='py-20 bg-[#1e3a8a]'>
                    <div className='container mx-auto px-6 text-center'>
                        <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
                            Ready to transform your digital presence?
                        </h2>
                        <p className='text-xl text-[#d7defa] mb-8 max-w-2xl mx-auto'>
                            Lets build something amazing together. Our team is ready to bring your
                            vision to life.
                        </p>
                        <div className='flex flex-col sm:flex-row justify-center gap-4'>
                            <button className='px-8 py-3 bg-[#0097b2] hover:bg-[#007a8e] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg'>
                                Get Started
                            </button>
                            <button className='px-8 py-3 border-2 border-white hover:bg-[#2e479f] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105'>
                                Contact Us
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default About;
