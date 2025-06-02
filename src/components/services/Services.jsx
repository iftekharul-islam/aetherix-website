import ServiceCategory from './ServiceCategory';

const Services = () => {
    return (
        <>
            <section className='bg-gradient-to-br from-[#002a57] to-[#0097b2] text-white py-10 md:py-30'>
                <div className='container'>
                    <h1 className='text-4xl font-bold mb-2'>Services</h1>
                    <p className='text-sm text-white/80'>Home / Services</p>
                </div>
            </section>
            <div className='container mt-10 mb-10'>
                <div className='flex justify-center items-center flex-col flex-wrap gap-4 mb-10'>
                    <div className='px-3 py-1 bg-secondary/75 rounded-full text-white text-sm font-light'>
                        Our Services
                    </div>
                    <div className=' text-4xl font-bold flex flex-col items-center gap-0'>
                        <div className='text-black'>Solutions Crafted for</div>
                        <div className='text-secondary'>Success</div>
                    </div>
                    <div className='text-center text-gray-600 text-lg max-w-2xl'>
                        Innovative technology solutions tailored to your business challenges and
                        growth objectives
                    </div>
                </div>
                <ServiceCategory />
            </div>
        </>
    );
};

export default Services;
