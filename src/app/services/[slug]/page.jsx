'use client';
import SEO from '@/components/global/SEO';
import servicespage from '@/seo/servicespage';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ArrowIcon from '@/assets/arrow.png';
import DemoImage from '@/assets/smartFactory.png';
import soft from '@/assets/soft.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Pricing from '@/components/global/Pricing';
import ServiceQandA from '@/components/services/ServiceQandA';
import Newsletter from '@/components/global/NewsLetter';

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
        sectionTitles: {
            left: 'Streamline Workforce Management',
            right: 'Boost Employee Engagement',
        },
        detailedText: {
            left: 'Our HR solutions simplify recruitment, onboarding, and compliance tasks, helping HR teams operate more efficiently and focus on strategy.',
            right: 'We empower employees with self-service tools and performance management systems to increase satisfaction and reduce turnover.',
        },
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
        sectionTitles: {
            left: 'Control Your Finances',
            right: 'Gain Real-Time Insights',
        },
        detailedText: {
            left: 'Automate your accounting, track cash flow, and stay compliant with financial regulations through our smart finance tools.',
            right: 'Access up-to-date reports and dashboards that provide a clear picture of your business’s financial health and profitability.',
        },
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
        sectionTitles: {
            left: 'Build a Data-Driven Organization',
            right: 'Ensure Data Accuracy & Governance',
        },
        detailedText: {
            left: 'Our tools help you store, manage, and analyze vast amounts of business data efficiently across departments.',
            right: 'Implement strong data governance policies to maintain consistency, compliance, and decision-ready information.',
        },
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
        sectionTitles: {
            left: 'Optimize Your Operations',
            right: 'Unify Business Processes',
        },
        detailedText: {
            left: 'Reduce operational risks with automated workflows and standardized procedures tailored to your business.',
            right: 'Gain centralized control over projects, inventory, and CRM to increase efficiency and scale confidently.',
        },
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
        sectionTitles: {
            left: 'Drive Innovation with Technology',
            right: 'Tailored Software for Your Needs',
        },
        detailedText: {
            left: 'From web to enterprise solutions, we develop, deploy, and maintain systems that streamline your digital transformation.',
            right: 'We build scalable, custom software applications that align with your business objectives and growth plans.',
        },
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
        sectionTitles: {
            left: 'Capture and Nurture Leads',
            right: 'Convert Prospects into Customers',
        },
        detailedText: {
            left: 'Automatically gather leads from multiple channels and score them intelligently to prioritize your sales efforts.',
            right: 'Use personalized workflows and analytics to engage leads and improve conversion rates throughout the sales pipeline.',
        },
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
    const plans = [
        {
            title: 'Basic Plan',
            price: '$19/mo',
            description: 'Perfect for small teams or individuals.',
            features: ['1 Project', 'Basic Support', 'Community Access'],
        },
        {
            title: 'Pro Plan',
            price: '$49/mo',
            description: 'Ideal for growing businesses.',
            features: ['5 Projects', 'Priority Support', 'Custom Features'],
        },
        {
            title: 'Enterprise Plan',
            price: '$99/mo',
            description: 'For large scale organizations.',
            features: ['Unlimited Projects', 'Dedicated Support', 'Advanced Analytics'],
        },
    ];
    return (
        <>
            <SEO seo={servicespage} />
            <section className='bg-gradient-to-br from-[#002a57] to-[#0097b2] text-white py-10 md:py-30'>
                <div className='container'>
                    <h1 className='text-4xl font-bold mb-2'>{service.title}</h1>
                    <p className='text-sm text-white/80'>Home | Services | {service.title}</p>
                </div>
            </section>
            <div className='container  mb-10'>
                <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-12 py-12'>
                    <div className='w-full lg:w-1/2'>
                        <div className='relative aspect-video lg:aspect-square rounded-lg overflow-hidden shadow-lg'>
                            <Image
                                src={soft}
                                alt='Descriptive alt text'
                                fill
                                className='object-cover'
                                priority
                            />
                        </div>
                    </div>

                    <div className='w-full lg:w-1/2'>
                        <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>
                            {service.title}
                        </h2>
                        <p className='text-lg text-gray-600 mb-6'>{service.description}</p>
                        <ul className='space-y-4 mb-8'>
                            {service.features.map((feature, index) => (
                                <li className='flex items-start' key={index}>
                                    <div className='flex-shrink-0 bg-secondary-400 rounded-full  mr-3'>
                                        <div className='h-6 w-6 flex items-center justify-center bg-secondary-400 rounded-full'>
                                            <svg
                                                className='h-4 w-4 text-white'
                                                viewBox='0 0 20 20'
                                                fill='currentColor'
                                            >
                                                <path
                                                    fillRule='evenodd'
                                                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                    clipRule='evenodd'
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <span className='text-gray-700'>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <button className='bg-primary-700 hover:bg-secondary-500 text-white font-medium py-2 px-6 rounded-full transition duration-300 cursor-pointer'>
                            Contact Us
                            <FontAwesomeIcon icon={faArrowRight} className='w-4 h-4 pl-2' />
                        </button>
                    </div>
                </div>
                <section className='py-12  bg-white'>
                    <div className='flex flex-col lg:flex-row gap-12'>
                        <div className='w-full lg:w-1/2'>
                            <div className='text-2xl font-semibold text-gray-900 mb-4'>
                                {service.sectionTitles?.left}
                            </div>
                            <div className='prose text-gray-600 space-y-4'>
                                {service.detailedText?.left}
                            </div>
                        </div>

                        <div className='w-full lg:w-1/2'>
                            <div className='text-2xl font-semibold text-gray-900 mb-4'>
                                {service.sectionTitles?.right}
                            </div>
                            <div className='prose text-gray-600 space-y-4'>
                                {service.detailedText?.right}
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='flex justify-between flex-col  gap-2 flex-wrap'>
                        <div className='text-xs text-[#9ca3af]  font-semibold'>Our Pricing</div>
                        <div className='text-3xl font-bold '>
                            Discover Clear and Competitive Pricing
                        </div>
                    </div>
                    <Pricing />
                </section>
                <section className='py-10'>
                    <Newsletter />
                </section>
                <section className='flex flex-wrap md:flex-nowrap items-start gap-4 mt-10 w-full'>
                    <div className='w-full md:w-1/3 flex flex-col gap-2'>
                        <div className='text-xs text-[#9ca3af] font-semibold'>Help Center</div>
                        <div className='text-3xl font-bold'>Get Answer to Your Queries Here</div>
                    </div>
                    <div className='w-full md:w-2/3'>
                        <ServiceQandA />
                    </div>
                </section>
            </div>
        </>
    );
}

export default Page;
