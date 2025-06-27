import ServiceCategory from './ServiceCategory';

const Services = () => {
    return (
        <>
            <div className='container  mb-10'>
                {/*  <div className='flex justify-center items-center flex-col flex-wrap gap-4 mb-10'>
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
                </div> */}
                <ServiceCategory />
            </div>
        </>
    );
};

export default Services;
