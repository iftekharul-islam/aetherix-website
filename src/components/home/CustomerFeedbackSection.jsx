import React from 'react';

function CustomerFeedbackSection() {
    return (
        <section className='py-20 bg-[#f9fafb]'>
            <div className='container'>
                <p className='text-xs text-[#9ca3af] uppercase font-semibold'>Global</p>
                <h2 className='text-3xl font-bold mb-4'>What Our Customers Say</h2>
                <p className='text-[#475569] mb-10'>
                    Our highly qualified global team is uniquely qualified to deliver
                    high-performance sustainable landmark buildings through our integrated suite
                </p>
                <div className='bg-white p-10 rounded-xl shadow text-center max-w-4xl mx-auto'>
                    <p className='text-[#334155] italic mb-6'>
                        “Wow, I am truly amazed by the impact [Your Product/Service Name] has had on
                        my life…”
                    </p>
                    <div className='flex justify-center space-x-2 mb-4'>
                        <span className='w-3 h-3 rounded-full bg-gray-300'></span>
                        <span className='w-3 h-3 rounded-full bg-gray-300'></span>
                        <span className='w-3 h-3 rounded-full bg-[#002a57]'></span>
                        <span className='w-3 h-3 rounded-full bg-gray-300'></span>
                    </div>
                    <p className='font-semibold text-[#002a57]'>Sean Smith</p>
                    <p className='text-sm text-gray-500'>Locavore Pvt. Ltd</p>
                </div>
            </div>
        </section>
    );
}

export default CustomerFeedbackSection;
