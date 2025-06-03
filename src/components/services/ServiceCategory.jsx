'use client';
import React from 'react';
import ArrowIcon from '@/assets/arrow.png';
import Image from 'next/image';
import Link from 'next/link';

function ServiceCategory() {
    const services = [
        {
            id: 1,
            title: ['Web Application', 'Development'],
            description: 'Tailored software solutions to meet your unique business needs.',
            icon: require('@/assets/ideaicon.png'),
            link: '#',
        },
        {
            id: 2,
            title: ['Mobile Application', 'Development'],
            description: 'Tailored software solutions to meet your unique business needs.',
            icon: require('@/assets/ideaicon.png'),
            link: '#',
        },
        {
            id: 3,
            title: ['UI/UX', 'Design'],
            description: 'Tailored software solutions to meet your unique business needs.',
            icon: require('@/assets/ideaicon.png'),
            link: '#',
        },
        {
            id: 4,
            title: ['Artificial', 'Intelligence'],
            description: 'Tailored software solutions to meet your unique business needs.',
            icon: require('@/assets/ideaicon.png'),
            link: '#',
        },
    ];

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {services.map((service, index) => (
                <Link href={`/services/${service.id}`} className='block' key={service.id}>
                    <div className='bg-white hover:bg-secondary p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200'>
                        <div className='p-2 rounded-full group-hover:bg-[#f59e0b] inline-block my-6'>
                            <Image src={service.icon} alt='Service Image' height={50} width={50} />
                        </div>
                        <div className='text-2xl font-bold mb-2 group-hover:text-white pb-6'>
                            {service.title.map((line, i) => (
                                <span className='block' key={i}>
                                    {line}
                                </span>
                            ))}
                        </div>
                        <div className='text-gray-600 group-hover:text-gray-200 pb-6'>
                            {service.description}
                        </div>
                        <div className='flex justify-end items-center'>
                            <button className='group-hover:text-white group-hover:bg-[#f59e0b] group-hover:rounded-full px-4 py-3 cursor-pointer'>
                                <Image
                                    src={ArrowIcon}
                                    alt='Arrow Icon'
                                    height={20}
                                    width={20}
                                    className='inline-block'
                                />
                            </button>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default ServiceCategory;
