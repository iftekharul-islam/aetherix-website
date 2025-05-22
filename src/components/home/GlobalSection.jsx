import React from 'react';

function GlobalSection() {
    return (
        <section className='py-20 container'>
            <p className='text-xs text-[#9ca3af] uppercase font-semibold'>Global</p>
            <h2 className='text-3xl font-bold mb-4'>About Global</h2>
            <div className='flex gap-10'>
                <div className='flex gap-4'>
                    <img src='https://placehold.co/200x200' className='rounded-xl' />
                    <img src='https://placehold.co/200x200' className='rounded-xl' />
                </div>
                <div>
                    <h3 className='text-xl font-semibold mb-2'>Mission and Vision</h3>
                    <p className='text-[#475569] mb-4'>
                        Our purpose is to support our clients in achieving their primary objectives
                        in delivering flexible, healthy, fully tuned and functioning facilities that
                        perform to the highest level for their occupants to allow them to be
                        productive and successful.
                    </p>
                    <button className='px-6 py-3 rounded-full bg-[#002a57] text-white font-semibold'>
                        Read More
                    </button>
                </div>
            </div>
        </section>
    );
}

export default GlobalSection;
