'use client';
import SEO from '@/components/global/SEO';
import servicespage from '@/seo/servicespage';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ArrowIcon from '@/assets/arrow.png';
import DemoImage from '@/assets/smartFactory.png';

const services = [
    {
        slug: 'human-resource',
        title: 'Human Resource',
        description:
            'Comprehensive HR solutions to manage your workforce effectively and efficiently.',
        longDescription: [
            'Our Human Resource services provide end-to-end solutions for all your workforce management needs. From recruitment and onboarding to performance management and employee engagement, we offer tools and expertise to streamline your HR processes.',
            'We implement modern HR technologies that automate routine tasks, reduce paperwork, and provide actionable insights about your workforce. Our solutions help you attract top talent, retain valuable employees, and maintain compliance with labor regulations.',
            'With our HR services, you can focus on strategic initiatives while we handle the operational aspects of human resource management, creating a more productive and satisfied workforce.',
        ],
        features: [
            'Recruitment and onboarding',
            'Performance management',
            'Employee self-service portal',
            'Payroll integration',
            'Compliance management',
            'Workforce analytics',
        ],
        technologies: ['BambooHR', 'Workday', 'ADP', 'Zenefits', 'Paycom', 'SuccessFactors'],
        image: DemoImage,
        stats: [
            { value: '50%', label: 'Faster Hiring' },
            { value: '30%', label: 'Reduced Turnover' },
            { value: '4.8/5', label: 'Employee Satisfaction' },
        ],
    },
    {
        slug: 'finance-management',
        title: 'Finance Management',
        description:
            'Advanced financial tools to optimize your accounting, budgeting, and financial reporting.',
        longDescription: [
            'Our Finance Management services provide comprehensive solutions for all your financial operations. We offer tools for accounting, budgeting, financial reporting, and analysis that give you complete visibility into your financial health.',
            'We implement systems that automate financial processes, reduce errors, and provide real-time insights into your cash flow, expenses, and revenue. Our solutions help you make data-driven financial decisions and maintain compliance with accounting standards.',
            'From small businesses to large enterprises, our financial management services scale with your needs, providing the right level of sophistication and automation for your organization.',
        ],
        features: [
            'General ledger accounting',
            'Accounts payable/receivable',
            'Budgeting and forecasting',
            'Financial reporting',
            'Tax compliance',
            'Cash flow management',
        ],
        technologies: ['QuickBooks', 'Xero', 'Sage', 'NetSuite', 'FreshBooks', 'Zoho Books'],
        image: DemoImage,
        stats: [
            { value: '40%', label: 'Faster Reporting' },
            { value: '99%', label: 'Accuracy Rate' },
            { value: '25%', label: 'Cost Savings' },
        ],
    },
    {
        slug: 'data-management',
        title: 'Data Management',
        description:
            'Robust data solutions to collect, store, process, and analyze your business information.',
        longDescription: [
            'Our Data Management services help you harness the power of your business data. We provide solutions for data collection, storage, processing, and analysis that turn raw data into actionable insights.',
            'We implement data governance frameworks that ensure data quality, security, and compliance. Our solutions help you break down data silos, integrate disparate systems, and create a single source of truth for your organization.',
            'Whether you need simple data warehousing or advanced analytics capabilities, our data management services provide the foundation for data-driven decision making across your organization.',
        ],
        features: [
            'Data warehousing',
            'ETL processes',
            'Data quality management',
            'Master data management',
            'Data governance',
            'Business intelligence',
        ],
        technologies: [
            'Snowflake',
            'SQL Server',
            'Oracle',
            'Talend',
            'Informatica',
            'Tableau',
            'Power BI',
        ],
        image: DemoImage,
        stats: [
            { value: '10x', label: 'Faster Insights' },
            { value: '90%', label: 'Data Accuracy' },
            { value: '60%', label: 'Process Automation' },
        ],
    },
    {
        slug: 'risk-management',
        title: 'Risk Management',
        description:
            'End-to-end business solutions to streamline operations and drive organizational growth.',
        longDescription: [
            'Our Business Management services provide comprehensive tools to run your entire operation more efficiently. We integrate all aspects of your business - from operations to customer relations - into a unified system that provides complete visibility and control.',
            'We implement business process automation that eliminates redundant tasks, reduces errors, and accelerates workflows. Our solutions help you standardize operations, improve collaboration, and scale your business effectively.',
            'Whether you need to manage projects, track inventory, or automate workflows, our business management services provide the tools and expertise to optimize your operations and drive growth.',
        ],
        features: [
            'Process automation',
            'Project management',
            'Inventory control',
            'CRM integration',
            'Workflow management',
            'Business analytics',
        ],
        technologies: ['SAP', 'Microsoft Dynamics', 'Odoo', 'Salesforce', 'Zoho One', 'ERPNext'],
        image: DemoImage,
        stats: [
            { value: '35%', label: 'Efficiency Gain' },
            { value: '50%', label: 'Faster Processes' },
            { value: '4.7/5', label: 'User Satisfaction' },
        ],
    },
    {
        slug: 'software-services',
        title: 'IT/Softeware Services',
        description:
            'End-to-end business solutions to streamline operations and drive organizational growth.',
        longDescription: [
            'Our Business Management services provide comprehensive tools to run your entire operation more efficiently. We integrate all aspects of your business - from operations to customer relations - into a unified system that provides complete visibility and control.',
            'We implement business process automation that eliminates redundant tasks, reduces errors, and accelerates workflows. Our solutions help you standardize operations, improve collaboration, and scale your business effectively.',
            'Whether you need to manage projects, track inventory, or automate workflows, our business management services provide the tools and expertise to optimize your operations and drive growth.',
        ],
        features: [
            'Process automation',
            'Project management',
            'Inventory control',
            'CRM integration',
            'Workflow management',
            'Business analytics',
        ],
        technologies: ['SAP', 'Microsoft Dynamics', 'Odoo', 'Salesforce', 'Zoho One', 'ERPNext'],
        image: DemoImage,
        stats: [
            { value: '35%', label: 'Efficiency Gain' },
            { value: '50%', label: 'Faster Processes' },
            { value: '4.7/5', label: 'User Satisfaction' },
        ],
    },
    {
        slug: 'lead-management',
        title: 'Lead Management',
        description:
            'Complete lead lifecycle solutions to capture, nurture, and convert prospects into customers.',
        longDescription: [
            'Our Lead Management services help you optimize your sales pipeline from first contact to closed deal. We provide tools to capture leads from multiple sources, score them based on engagement, and route them to the appropriate sales channels.',
            'We implement lead nurturing workflows that keep prospects engaged with personalized content and timely follow-ups. Our solutions help you shorten sales cycles, improve conversion rates, and maximize the value of your marketing efforts.',
            'From small businesses to enterprise sales teams, our lead management services provide the automation and intelligence you need to turn more prospects into paying customers.',
        ],
        features: [
            'Lead capture forms',
            'Automated lead scoring',
            'CRM integration',
            'Email nurturing',
            'Sales pipeline management',
            'Conversion analytics',
        ],
        technologies: ['HubSpot', 'Salesforce', 'Marketo', 'Pardot', 'Zoho CRM', 'Freshsales'],
        image: DemoImage,
        stats: [
            { value: '40%', label: 'Higher Conversion' },
            { value: '30%', label: 'Shorter Sales Cycle' },
            { value: '5x', label: 'ROI on Marketing' },
        ],
    },
];

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

function Page() {
    const params = useParams();
    const slug = params?.slug;

    if (!slug) return <div className='flex justify-center items-center h-screen'>Loading...</div>;

    const service = services.find((s) => s.slug === slug);

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
                                        Comprehensive solution for {feature.toLowerCase()} as part
                                        of our {service.title.toLowerCase()} services.
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
