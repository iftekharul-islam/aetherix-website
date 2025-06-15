'use client';
import SEO from '@/components/global/SEO';
import servicespage from '@/seo/servicespage';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ArrowIcon from '@/assets/arrow.png';
import WebDevImage from '@/assets/smartFactory.png';
import MobileDevImage from '@/assets/roketbus.svg';
import UIDesignImage from '@/assets/shopify.png';
import AIImage from '@/assets/smartFactory.png';

const services = [
    {
        id: 1,
        title: 'Web Application Development',
        description:
            'We build scalable and robust web applications tailored to your business goals using modern technologies.',
        longDescription: [
            'Our web development team specializes in creating high-performance, secure, and scalable web applications that drive business growth. We leverage cutting-edge technologies like React, Next.js, Node.js, and modern CSS frameworks to deliver exceptional digital experiences.',
            'From single-page applications to complex enterprise systems, we architect solutions that are maintainable, extensible, and optimized for performance. Our development process includes rigorous testing, continuous integration, and deployment automation.',
            'We focus on creating web applications that not only look stunning but also provide intuitive user experiences, accessibility compliance, and seamless functionality across all devices and browsers.',
        ],
        features: [
            'Custom web application development',
            'Progressive Web Apps (PWA)',
            'E-commerce solutions',
            'API development & integration',
            'Cloud deployment & optimization',
            'Performance tuning & security hardening',
        ],
        technologies: [
            'React',
            'Next.js',
            'Node.js',
            'TypeScript',
            'Tailwind CSS',
            'GraphQL',
            'MongoDB',
            'PostgreSQL',
        ],
        image: WebDevImage,
        stats: [
            { value: '300+', label: 'Projects Completed' },
            { value: '4.9/5', label: 'Client Satisfaction' },
            { value: '40%', label: 'Faster Load Times' },
        ],
    },
    {
        id: 2,
        title: 'Mobile Application Development',
        description:
            'From iOS to Android, we create mobile apps with excellent performance and intuitive design.',
        longDescription: [
            'Our mobile development team crafts beautiful, high-performance applications for both iOS and Android platforms. We use native and cross-platform technologies to deliver apps that feel at home on any device while maximizing code reuse.',
            'We follow mobile-first design principles and pay special attention to touch interactions, offline capabilities, and device hardware integration. Our apps are optimized for battery efficiency, smooth animations, and instant responsiveness.',
            'From concept to App Store deployment, we handle every aspect of mobile development including push notifications, in-app purchases, analytics integration, and regular updates to keep your app current with platform requirements.',
        ],
        features: [
            'iOS & Android app development',
            'React Native cross-platform apps',
            'Mobile UI/UX design',
            'API integration',
            'Offline-first architecture',
            'App Store optimization',
        ],
        technologies: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Firebase', 'GraphQL'],
        image: MobileDevImage,
        stats: [
            { value: '200+', label: 'Apps Published' },
            { value: '10M+', label: 'Combined Downloads' },
            { value: '4.8/5', label: 'Average Rating' },
        ],
    },
    {
        id: 3,
        title: 'UI/UX Design',
        description:
            'Our design process ensures a seamless user experience that is both beautiful and effective.',
        longDescription: [
            'Our UI/UX design team creates digital experiences that users love. We combine aesthetic excellence with psychological principles to design interfaces that are intuitive, accessible, and delightful to use.',
            'We start with thorough user research, creating personas and journey maps to understand your audience. Our iterative design process includes wireframing, prototyping, and user testing to validate concepts before development begins.',
            'Every pixel is placed with purpose. We design for clarity, efficiency, and emotional connection, ensuring your product stands out in a crowded market while meeting business objectives and user needs.',
        ],
        features: [
            'User research & testing',
            'Wireframing & prototyping',
            'Interaction design',
            'Design systems',
            'Accessibility compliance',
            'Motion design & micro-interactions',
        ],
        technologies: ['Figma', 'Sketch', 'Adobe XD', 'Framer', 'After Effects', 'Webflow'],
        image: UIDesignImage,
        stats: [
            { value: '95%', label: 'Usability Improvement' },
            { value: '3x', label: 'Faster Development' },
            { value: '40%', label: 'Higher Engagement' },
        ],
    },
    {
        id: 4,
        title: 'Artificial Intelligence',
        description:
            'We integrate AI into your systems to enable smart automation and data-driven decisions.',
        longDescription: [
            'Our AI solutions transform businesses by automating complex processes, extracting insights from data, and creating intelligent systems that learn and adapt. We implement practical AI solutions that deliver measurable business value.',
            'From computer vision to natural language processing, our team specializes in applying the latest AI research to real-world problems. We focus on ethical AI development, ensuring our solutions are fair, explainable, and privacy-preserving.',
            'Whether you need predictive analytics, recommendation engines, or fully autonomous systems, we have the expertise to design, develop, and deploy AI solutions tailored to your specific needs and infrastructure.',
        ],
        features: [
            'Machine learning models',
            'Computer vision solutions',
            'Natural language processing',
            'Predictive analytics',
            'AI-powered automation',
            'Data pipeline architecture',
        ],
        technologies: [
            'Python',
            'TensorFlow',
            'PyTorch',
            'OpenCV',
            'Hugging Face',
            'LangChain',
            'LLMs',
        ],
        image: AIImage,
        stats: [
            { value: '70%', label: 'Process Automation' },
            { value: '5x', label: 'Faster Insights' },
            { value: '30%', label: 'Cost Reduction' },
        ],
    },
];

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

function Page() {
    const params = useParams();
    const id = params?.id ? parseInt(String(params.id)) : null;

    if (!id) return <div className='flex justify-center items-center h-screen'>Loading...</div>;

    const service = services.find((s) => s.id === id);

    if (!service) return <p className='text-center mt-20'>Service not found</p>;

    return (
        <>
            <SEO seo={servicespage} />
            {/* Hero Section */}
            <motion.section
                initial='hidden'
                animate='visible'
                variants={fadeIn}
                transition={{ duration: 0.6 }}
                className='relative bg-gradient-to-br from-primary to-secondary text-white py-20 overflow-hidden'
            >
                <div className='absolute inset-0 opacity-20'>
                    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,transparent)]"></div>
                </div>

                <div className='container mx-auto px-6 relative z-10'>
                    <div className='flex flex-col lg:flex-row items-center'>
                        <div className='lg:w-1/2 mb-10 lg:mb-0'>
                            <motion.button
                                whileHover={{ x: -5 }}
                                onClick={() => window.history.back()}
                                className='flex items-center mb-8 text-primary-200 hover:text-white transition-colors'
                            >
                                <Image
                                    src={ArrowIcon}
                                    alt='Back'
                                    className='mr-2 rotate-180'
                                    width={16}
                                    height={16}
                                />
                                Back to Services
                            </motion.button>

                            <motion.h1
                                variants={fadeIn}
                                transition={{ delay: 0.2 }}
                                className='text-4xl md:text-5xl font-bold mb-6 leading-tight'
                            >
                                {service.title}
                            </motion.h1>

                            <motion.p
                                variants={fadeIn}
                                transition={{ delay: 0.3 }}
                                className='text-xl text-primary-100 mb-8 max-w-2xl'
                            >
                                {service.description}
                            </motion.p>

                            <motion.div
                                variants={fadeIn}
                                transition={{ delay: 0.4 }}
                                className='flex flex-wrap gap-4 mb-8'
                            >
                                {service.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className='px-3 py-1 bg-gradient-to-br from-primary to-secondary bg-opacity-50 rounded-full text-sm'
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </motion.div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className='bg-white text-primary px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all cursor-pointer'
                            >
                                Get Started
                            </motion.button>
                        </div>

                        <div className='lg:w-1/2 lg:pl-12'>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className='relative rounded-2xl overflow-hidden shadow-2xl'
                            >
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    width={800}
                                    height={600}
                                    className='w-full h-auto object-cover'
                                    priority
                                />
                                <div className='absolute inset-0  bg-gradient-to-t from-secondary/70 to-transparent'></div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Stats Section */}
            <section className='py-16 bg-gray-50'>
                <div className='container mx-auto px-6'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        {service.stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial='hidden'
                                whileInView='visible'
                                variants={fadeIn}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className='bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow'
                            >
                                <h3 className='text-4xl font-bold text-primary mb-2'>
                                    {stat.value}
                                </h3>
                                <p className='text-gray-600'>{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Detailed Description */}
            <section className='py-20'>
                <div className='container mx-auto px-6'>
                    <motion.div
                        initial='hidden'
                        whileInView='visible'
                        variants={fadeIn}
                        viewport={{ once: true }}
                        className='max-w-4xl mx-auto'
                    >
                        <h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
                            About Our {service.title}
                        </h2>

                        <div className='space-y-6 text-lg text-gray-700'>
                            {service.longDescription.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
            {/* Features Section */}
            <section className='py-20 bg-gray-50'>
                <div className='container mx-auto px-6'>
                    <motion.div
                        initial='hidden'
                        whileInView='visible'
                        variants={fadeIn}
                        viewport={{ once: true }}
                    >
                        <h2 className='text-3xl font-bold text-gray-900 mb-12 text-center'>
                            Key Features
                        </h2>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                            {service.features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeIn}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className='bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all'
                                >
                                    <div className='w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4'>
                                        <svg
                                            className='w-6 h-6 text-primary-600'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth='2'
                                                d='M5 13l4 4L19 7'
                                            ></path>
                                        </svg>
                                    </div>
                                    <h3 className='text-xl font-semibold mb-2 text-gray-800'>
                                        {feature}
                                    </h3>
                                    <p className='text-gray-600'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                        do eiusmod tempor incididunt.
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
            {/* CTA Section */}
            <section className='py-20 bg-gradient-to-br from-primary to-secondary text-white'>
                <div className='container mx-auto px-6 text-center'>
                    <motion.div
                        initial='hidden'
                        whileInView='visible'
                        variants={fadeIn}
                        viewport={{ once: true }}
                        className='max-w-3xl mx-auto'
                    >
                        <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                            Ready to Transform Your Business?
                        </h2>
                        <p className='text-xl text-primary-100 mb-8'>
                            Let's discuss how our {service.title.toLowerCase()} services can help
                            you achieve your goals.
                        </p>

                        <div className='flex flex-col sm:flex-row justify-center gap-4'>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className='bg-white text-primary px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all cursor-pointer'
                            >
                                Get a Free Consultation
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className='bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all cursor-pointer'
                            >
                                View Case Studies
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}

export default Page;
