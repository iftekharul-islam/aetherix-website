'use client';
import { useState } from 'react';
import FlipCard from './FlipCard';
import DemoImage from '@/assets/demoimage.jpeg';
import Roketbus from '@/assets/roketbus.svg';
import Shopify from '@/assets/shopify.png';
import Uplify from '@/assets/uplify.png';
import SamrtFactory from '@/assets/smartFactory.png';
const portfolioData = {
    portfolioProjects: [
        {
            imageSrc: Roketbus,
            title: 'RoketBus',
            subtitle: 'Project Management SaaS',
            backContent:
                'A comprehensive project management solution with agile workflows, time tracking, and team collaboration features. Built with React, Node.js, and MongoDB. Helped clients improve team productivity by 35%.',
            technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
            client: 'Various SMEs',
            year: 2023,
        },
        {
            imageSrc: Shopify,
            title: 'Shopify',
            subtitle: 'E-commerce Platform',
            backContent:
                'Custom e-commerce solution with AI-powered recommendations, multi-vendor support, and seamless payment integration. Processed over $2M in transactions in first 6 months.',
            technologies: ['Vue.js', 'Laravel', 'PostgreSQL', 'Redis'],
            client: 'Retail Group Inc.',
            year: 2022,
        },
        {
            imageSrc: Uplify,
            title: 'UplifyHealth',
            subtitle: 'Healthcare Management System',
            backContent:
                'HIPAA-compliant patient management system with telemedicine capabilities, prescription tracking, and IoT device integration. Reduced administrative workload by 40% for healthcare providers.HIPAA-compliant patient management system with telemedicine capabilities, prescription tracking, and IoT device integration. Reduced administrative workload by 40% for healthcare providers.HIPAA-compliant patient management system with telemedicine capabilities, prescription tracking, and IoT device integration. Reduced administrative workload by 40% for healthcare providers.HIPAA-compliant patient management system with telemedicine capabilities, prescription tracking, and IoT device integration. Reduced administrative workload by 40% for healthcare providers.HIPAA-compliant patient management system with telemedicine capabilities, prescription tracking, and IoT device integration. Reduced administrative workload by 40% for healthcare providers.',
            technologies: ['Angular', 'Python/Django', 'MySQL', 'Docker'],
            client: 'Regional Healthcare Network',
            year: 2023,
        },
        {
            imageSrc: SamrtFactory,
            title: 'SmartFactory',
            subtitle: 'Industrial IoT Solution',
            backContent:
                'Real-time equipment monitoring system for manufacturing plants with predictive maintenance alerts and production analytics. Decreased downtime by 28% for our manufacturing clients.',
            technologies: ['React', 'Kafka', 'TimeScaleDB', 'Kubernetes'],
            client: 'Industrial Solutions Corp.',
            year: 2021,
        },
    ],
};

export default function PortFolioPage() {
    const [activeTab, setActiveTab] = useState('Tab1');

    const renderTabContent = () => {
        switch (activeTab) {
            case 'Tab1':
                return (
                    <>
                        <div className=''>
                            {/*   <div className='text-3xl font-bold text-center mb-10'>
                                Web Application Development
                            </div> */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                {portfolioData.portfolioProjects.map((project, idx) => (
                                    <FlipCard
                                        key={idx}
                                        imageSrc={project.imageSrc}
                                        title={project.title}
                                        subtitle={project.subtitle}
                                        backContent={project.backContent}
                                        client={project.client}
                                        year={project.year}
                                        technologies={project.technologies}
                                        href={`/portfolio/${project.title
                                            .toLowerCase()
                                            .replace(/\s+/g, '-')}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </>
                );
            case 'Tab2':
                return (
                    <>
                        <div className=''>
                            {/*  <div className='text-3xl font-bold text-center mb-10'>
                                Mobile Application Development
                            </div> */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                {portfolioData.portfolioProjects.map((project, idx) => (
                                    <FlipCard
                                        key={idx}
                                        imageSrc={project.imageSrc}
                                        title={project.title}
                                        subtitle={project.subtitle}
                                        backContent={project.backContent}
                                        client={project.client}
                                        year={project.year}
                                        technologies={project.technologies}
                                        href={`/portfolio/${project.title
                                            .toLowerCase()
                                            .replace(/\s+/g, '-')}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </>
                );
            case 'Tab3':
                return (
                    <>
                        <div className=''>
                            {/*  <div className='text-3xl font-bold text-center mb-10'>UI/UX Design</div> */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                {portfolioData.portfolioProjects.map((project, idx) => (
                                    <FlipCard
                                        key={idx}
                                        imageSrc={project.imageSrc}
                                        title={project.title}
                                        subtitle={project.subtitle}
                                        backContent={project.backContent}
                                        client={project.client}
                                        year={project.year}
                                        technologies={project.technologies}
                                        href={`/portfolio/${project.title
                                            .toLowerCase()
                                            .replace(/\s+/g, '-')}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className='container py-10 md:py-20'>
            {/* <div className='flex justify-center items-center flex-col flex-wrap gap-4 pb-6'>
                <div className='px-3 py-1 bg-secondary/75 rounded-full text-white text-sm font-light'>
                    Our Portfolio
                </div>

                <div className='text-4xl font-bold flex flex-col items-center gap-0'>
                    <div className='text-black'>Transformative Solutions</div>
                    <div className='text-secondary'>That Drive Impact</div>
                </div>

                <div className='text-center text-gray-600 text-lg max-w-2xl'>
                    Explore our portfolio of cutting-edge software solutions that have helped
                    businesses increase efficiency by 40%, boost revenue by 35%, and enhance
                    customer satisfaction. Each project represents our commitment to innovation and
                    measurable results.
                </div>
            </div> */}
            <div className='flex justify-between items-center gap-2 flex-wrap pb-6'>
                <div>
                    <p className='text-xs text-[#9ca3af] uppercase font-semibold'>Portfolio</p>
                    <h2 className='text-3xl font-bold mb-2'>Our Portfolio</h2>
                </div>
                <div className='text-[#475569] max-w-2xl'>
                    Explore our portfolio of cutting-edge software solutions that have helped
                    businesses increase efficiency by 40%, boost revenue by 35%, and enhance
                    customer satisfaction. Each project represents our commitment to innovation and
                    measurable results.
                </div>
            </div>
            <div className='flex space-x-4 justify-center items-center'>
                <button
                    onClick={() => setActiveTab('Tab1')}
                    className={`py-2 px-4 rounded-md transition-all duration-200 cursor-pointer
            ${
                activeTab === 'Tab1'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
                >
                    Web Development
                </button>
                <button
                    onClick={() => setActiveTab('Tab2')}
                    className={`py-2 px-4 rounded-md transition-all duration-200 cursor-pointer
            ${
                activeTab === 'Tab2'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
                >
                    Mobile Development
                </button>
                <button
                    onClick={() => setActiveTab('Tab3')}
                    className={`py-2 px-4 rounded-md transition-all duration-200 cursor-pointer
            ${
                activeTab === 'Tab3'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
                >
                    UI/UX Design
                </button>
            </div>

            <div className='py-12'>{renderTabContent()}</div>
        </div>
    );
}
