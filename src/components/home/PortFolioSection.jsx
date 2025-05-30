'use client';
import { useState } from 'react';
import FlipCard from './FlipCard';
import DemoImage from '../../assets/demoimage.jpeg';
const portfolioData = {
    portfolioProjects: [
        {
            imageSrc: DemoImage,
            title: 'RoketBus',
            subtitle: 'Project Management SaaS',
            backContent:
                'A comprehensive project management solution with agile workflows, time tracking, and team collaboration features. Built with React, Node.js, and MongoDB. Helped clients improve team productivity by 35%.',
            technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
            client: 'Various SMEs',
            year: 2023,
        },
        {
            imageSrc: DemoImage,
            title: 'Shopify',
            subtitle: 'E-commerce Platform',
            backContent:
                'Custom e-commerce solution with AI-powered recommendations, multi-vendor support, and seamless payment integration. Processed over $2M in transactions in first 6 months.',
            technologies: ['Vue.js', 'Laravel', 'PostgreSQL', 'Redis'],
            client: 'Retail Group Inc.',
            year: 2022,
        },
        {
            imageSrc: DemoImage,
            title: 'UplifyHealth',
            subtitle: 'Healthcare Management System',
            backContent:
                'HIPAA-compliant patient management system with telemedicine capabilities, prescription tracking, and IoT device integration. Reduced administrative workload by 40% for healthcare providers.HIPAA-compliant patient management system with telemedicine capabilities, prescription tracking, and IoT device integration. Reduced administrative workload by 40% for healthcare providers.HIPAA-compliant patient management system with telemedicine capabilities, prescription tracking, and IoT device integration. Reduced administrative workload by 40% for healthcare providers.HIPAA-compliant patient management system with telemedicine capabilities, prescription tracking, and IoT device integration. Reduced administrative workload by 40% for healthcare providers.HIPAA-compliant patient management system with telemedicine capabilities, prescription tracking, and IoT device integration. Reduced administrative workload by 40% for healthcare providers.',
            technologies: ['Angular', 'Python/Django', 'MySQL', 'Docker'],
            client: 'Regional Healthcare Network',
            year: 2023,
        },
        {
            imageSrc: DemoImage,
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

export default function HomePage() {
    const [activeTab, setActiveTab] = useState('Tab1');

    const renderTabContent = () => {
        switch (activeTab) {
            case 'Tab1':
                return (
                    <>
                        <div className=''>
                            <h1 className='text-3xl font-bold text-center mb-10'>Tab1 Title</h1>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                {portfolioData.portfolioProjects.map((project, idx) => (
                                    <FlipCard
                                        key={idx}
                                        imageSrc={project.imageSrc}
                                        title={project.title}
                                        subtitle={project.subtitle}
                                        backContent={project.backContent}
                                        client={project.client} // Pass client name
                                        year={project.year} // Pass year
                                        technologies={project.technologies} // Pass technologies array
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
                            <h1 className='text-3xl font-bold text-center mb-10'>Tab2 Title</h1>
                            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto'>
                                {cardsData.map((card, idx) => (
                                    <FlipCard
                                        key={idx}
                                        imageSrc={card.imageSrc}
                                        title={card.title}
                                        subtitle={card.subtitle}
                                        backContent={card.backContent}
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
                            <h1 className='text-3xl font-bold text-center mb-10'>Tab3 Title</h1>
                            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto'>
                                {cardsData.map((card, idx) => (
                                    <FlipCard
                                        key={idx}
                                        imageSrc={card.imageSrc}
                                        title={card.title}
                                        subtitle={card.subtitle}
                                        backContent={card.backContent}
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
        <div className='container py-12'>
            <div className='flex justify-center text-lg py-4 font-semibold'>Our Portfolio</div>
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
                    Tab1
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
                    Tab2
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
                    Tab3
                </button>
            </div>

            <div className='mt-6 p-4 bg-white border border-gray-200 rounded-md shadow'>
                {renderTabContent()}
            </div>
        </div>
    );
}
