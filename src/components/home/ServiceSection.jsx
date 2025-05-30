import React from 'react';
import DemoImage from '@/assets/ideaicon.png';
import ArrowIcon from '@/assets/arrow.png';
import Image from 'next/image';
import Link from 'next/link';
function ServiceSection() {
    return (
        <div className='container'>
            <div className='flex justify-center items-center flex-col flex-wrap gap-4'>
                <div className='px-3 py-1 bg-secondary/75 rounded-full text-white text-sm font-light'>
                    Our Services
                </div>
                <div className=' text-4xl font-bold flex flex-col items-center gap-0'>
                    <div className='text-black'>Solutions Crafted for</div>
                    <div className='text-secondary'>Success</div>
                </div>
                <div className='text-center text-gray-600 text-lg max-w-2xl'>
                    Innovative technology solutions tailored to your business challenges and growth
                    objectives
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10'>
                <div className='bg-white hover:bg-secondary p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200'>
                    <div className='p-2 rounded-full group-hover:bg-[#f59e0b] inline-block my-6'>
                        <Image src={DemoImage} alt='Service Image' height={50} width={50} />
                    </div>
                    <div className='text-2xl font-bold mb-2 group-hover:text-white pb-6'>
                        <span className='block'>Web Application</span>
                        <span className='block'>Development</span>
                    </div>
                    <div className='text-gray-600 group-hover:text-gray-200 pb-6'>
                        Tailored software solutions to meet your unique business needs.
                    </div>
                    <div className='flex justify-end items-center'>
                        <Link
                            href='#'
                            className='group-hover:text-white group-hover:bg-[#f59e0b] group-hover:rounded-full px-4 py-3 cursor-pointer'
                        >
                            <Image
                                src={ArrowIcon}
                                alt='Arrow Icon'
                                height={20}
                                width={20}
                                className='inline-block'
                            />
                        </Link>
                    </div>
                </div>
                <div className='bg-white hover:bg-secondary p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200'>
                    <div className='p-2 rounded-full group-hover:bg-[#f59e0b] inline-block my-6'>
                        <Image src={DemoImage} alt='Service Image' height={50} width={50} />
                    </div>
                    <div className='text-2xl font-bold mb-2 group-hover:text-white pb-6'>
                        <span className='block'>Mobile Application</span>
                        <span className='block'>Development</span>
                    </div>
                    <div className='text-gray-600 group-hover:text-gray-200 pb-6'>
                        Tailored software solutions to meet your unique business needs.
                    </div>
                    <div className='flex justify-end items-center'>
                        <Link
                            href='#'
                            className='group-hover:text-white group-hover:bg-[#f59e0b] group-hover:rounded-full px-4 py-3 cursor-pointer'
                        >
                            <Image
                                src={ArrowIcon}
                                alt='Arrow Icon'
                                height={20}
                                width={20}
                                className='inline-block'
                            />
                        </Link>
                    </div>
                </div>
                <div className='bg-white hover:bg-secondary p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200'>
                    <div className='p-2 rounded-full group-hover:bg-[#f59e0b] inline-block my-6'>
                        <Image src={DemoImage} alt='Service Image' height={50} width={50} />
                    </div>
                    <div className='text-2xl font-bold mb-2 group-hover:text-white pb-6'>
                        <span className='block'>UI/UX</span>
                        <span className='block'>Design</span>
                    </div>
                    <div className='text-gray-600 group-hover:text-gray-200 pb-6'>
                        Tailored software solutions to meet your unique business needs.
                    </div>
                    <div className='flex justify-end items-center'>
                        <Link
                            href='#'
                            className='group-hover:text-white group-hover:bg-[#f59e0b] group-hover:rounded-full px-4 py-3 cursor-pointer'
                        >
                            <Image
                                src={ArrowIcon}
                                alt='Arrow Icon'
                                height={20}
                                width={20}
                                className='inline-block'
                            />
                        </Link>
                    </div>
                </div>
                <div className='bg-white hover:bg-secondary p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200'>
                    <div className='p-2 rounded-full group-hover:bg-[#f59e0b] inline-block my-6'>
                        <Image src={DemoImage} alt='Service Image' height={50} width={50} />
                    </div>
                    <div className='text-2xl font-bold mb-2 group-hover:text-white pb-6'>
                        <span className='block'>Artificial</span>
                        <span className='block'>Inteligence</span>
                    </div>
                    <div className='text-gray-600 group-hover:text-gray-200 pb-6'>
                        Tailored software solutions to meet your unique business needs.
                    </div>
                    <div className='flex justify-end items-center'>
                        <Link
                            href='#'
                            className='group-hover:text-white group-hover:bg-[#f59e0b] group-hover:rounded-full px-4 py-3 cursor-pointer'
                        >
                            <Image
                                src={ArrowIcon}
                                alt='Arrow Icon'
                                height={20}
                                width={20}
                                className='inline-block'
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceSection;
