'use client';
import React from 'react';

const Newsletter = () => {
    return (
        <div className='rounded-2xl shadow-xl overflow-hidden bg-gradient-to-r from-[#1a4b6d] to-[#00b4d8] px-4 py-4'>
            <div className='flex flex-col md:flex-row'>
                <div className='p-4  md:w-1/2'>
                    <h2 className='text-3xl font-bold text-white mb-4'>Book a Free Consultation</h2>
                    <div className='text-white mb-6 text-sm'>
                        Schedule a free consultation with our experts to discuss your project needs
                        and how we can help you achieve your goals.
                    </div>
                    <div className='mt-2'>
                        <button className='bg-white text-primary font-medium px-6 py-2 rounded-full hover:bg-secondary hover:text-white transition duration-300 whitespace-nowrap cursor-pointer'>
                            Book a Chat
                        </button>
                    </div>
                </div>

                <div className='p-4  md:w-1/2'>
                    <div className='bg-white rounded-2xl h-full p-8'>
                        <div className='flex h-full'>
                            <div className='w-1/2 pr-4 flex flex-col justify-center'>
                                <div className='text-lg font-semibold text-primary mb-2'>
                                    Our Email
                                </div>
                                <div className='text-gray-600 text-sm'>example@mail.com</div>
                                <div className='text-gray-600 text-sm'>www.example.com</div>
                            </div>

                            <div className='relative'>
                                <div className='absolute inset-y-0 left-0 flex items-center'>
                                    <div className='h-3/4 w-px bg-gray-200'></div>
                                </div>
                            </div>

                            <div className='w-1/2 pl-4 flex flex-col justify-center'>
                                <div className='text-lg font-semibold text-primary mb-2'>
                                    Contact
                                </div>
                                <div className='text-gray-600 text-sm space-y-1'>
                                    +880-17*********
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
