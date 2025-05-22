import React from 'react';

function ClientSection() {
    return (
        <section className='py-12 container bg-white text-center'>
            <h3 className='text-xl font-semibold mb-6'>Our Clients</h3>
            <div className='flex flex-wrap justify-center gap-10 grayscale'>
                <img src='https://placehold.co/100x40?text=Oracle' />
                <img src='https://placehold.co/100x40?text=MTN' />
                <img src='https://placehold.co/100x40?text=Dell' />
                <img src='https://placehold.co/100x40?text=BCG' />
                <img src='https://placehold.co/100x40?text=SanchoBBDO' />
                <img src='https://placehold.co/100x40?text=TATA' />
            </div>
        </section>
    );
}

export default ClientSection;
