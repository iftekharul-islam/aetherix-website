'use client';
import SEO from '@/components/global/SEO';
import servicespage from '@/seo/servicespage';
import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import ArrowIcon from '@/assets/arrow.png';
import DemoImage from '@/assets/ideaicon.png';

const services = [
    {
        id: 1,
        title: 'Web Application Development',
        description:
            'We build scalable and robust web applications tailored to your business goals using modern technologies.',
        image: DemoImage,
    },
    {
        id: 2,
        title: 'Mobile Application Development',
        description:
            'From iOS to Android, we create mobile apps with excellent performance and intuitive design.',
        image: DemoImage,
    },
    {
        id: 3,
        title: 'UI/UX Design',
        description:
            'Our design process ensures a seamless user experience that is both beautiful and effective.',
        image: DemoImage,
    },
    {
        id: 4,
        title: 'Artificial Intelligence',
        description:
            'We integrate AI into your systems to enable smart automation and data-driven decisions.',
        image: DemoImage,
    },
];

function Page() {
    const seo = servicespage;
    const params = useParams();
    const id = params?.id ? parseInt(params.id) : null;

    if (!id) return null; // or loading spinner

    const service = services.find((s) => s.id === id);

    if (!service) return <p className='text-center mt-20'>Service not found</p>;

    return (
        <>
            <SEO seo={seo} />
            <div className='container mx-auto px-4 py-8'>
                <button
                    onClick={() => window.history.back()}
                    className='flex items-center mb-6 text-blue-600 hover:text-blue-800'
                >
                    <Image
                        src={ArrowIcon}
                        alt='Back'
                        className='mr-2 rotate-180'
                        width={20}
                        height={20}
                    />
                    Back to Services
                </button>
                <div className='flex flex-col md:flex-row gap-8'>
                    <div className='md:w-1/3'>
                        <Image
                            src={service.image}
                            alt={service.title}
                            width={400}
                            height={300}
                            className='rounded-lg object-cover'
                        />
                    </div>
                    <div className='md:w-2/3'>
                        <h1 className='text-3xl font-bold mb-4'>{service.title}</h1>
                        <p className='text-gray-700 mb-6'>{service.description}</p>
                        <button className='bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition'>
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page;
