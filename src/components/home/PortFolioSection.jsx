'use client';
import { useState } from 'react';
import FlipCard from './FlipCard';
import DemoImage from '../../assets/demoimage.jpeg';
const cardsData = [
    {
        imageSrc: DemoImage,
        title: 'PortFolio 1',
        subtitle: 'PortFolio 1 Subtitle',
        backContent:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        imageSrc: DemoImage,
        title: 'PortFolio 2',
        subtitle: 'PortFolio 2 Subtitle',
        backContent:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        imageSrc: DemoImage,
        title: 'PortFolio 3',
        subtitle: 'PortFolio 3 Subtitle',
        backContent:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        imageSrc: DemoImage,
        title: 'PortFolio 4',
        subtitle: 'PortFolio 4 Subtitle',
        backContent:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
];

export default function HomePage() {
    const [activeTab, setActiveTab] = useState('Tab1');

    const renderTabContent = () => {
        switch (activeTab) {
            case 'Tab1':
                return (
                    <>
                        <div className=''>
                            <h1 className='text-3xl font-bold text-center mb-10'>Tab1 Title</h1>
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
