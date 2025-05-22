import Link from 'next/link';

const Blogs = () => {
    return (
        <>
            <section className='bg-gradient-to-br from-[#002a57] to-[#0097b2] text-white py-10 md:py-30'>
                <div className='container'>
                    <h1 className='text-4xl font-bold mb-2'>Blog</h1>
                    <p className='text-sm text-white/80'>Home / Blog</p>
                </div>
            </section>

            <section className='py-20 container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <div className='col-span-1 bg-white rounded-xl shadow p-4'>
                        <img src='https://placehold.co/400x220' className='rounded-lg mb-4' />
                        <h3 className='text-base font-semibold mb-1'>
                            Understanding the Benefits of Business Consulting
                        </h3>
                        <p className='text-sm text-[#475569] mb-2'>
                            <i className='fas fa-user mr-1 text-[#00b3c8]'></i> Austin King{' '}
                            <span className='mx-2'>•</span> 15 Jan, 2023
                        </p>
                        <p className='text-sm text-[#475569] mb-4'>
                            For our July 2023 Employee Spotlight, Stewart Erickson, a Senior
                            Technical Project Manager, talks about his career and some ...
                        </p>
                        <Link href='/blogs/test' className='text-sm font-semibold text-[#002a57]'>
                            Read More
                        </Link>
                    </div>
                    <div className='col-span-1 bg-white rounded-xl shadow p-4'>
                        <img src='https://placehold.co/400x180' className='rounded-lg mb-4' />
                        <h3 className='text-base font-semibold mb-1'>
                            Top 5 Signs Your Business Needs a Consultant
                        </h3>
                        <p className='text-sm text-[#475569] mb-2'>
                            <i className='fas fa-user mr-1 text-[#00b3c8]'></i> Austin King{' '}
                            <span className='mx-2'>•</span> 15 Jan, 2023
                        </p>
                        <p className='text-sm text-[#475569] mb-4'>
                            For our July 2023 Employee Spotlight, Stewart Erickson...
                        </p>
                        <Link href='/blog/test' className='text-sm font-semibold text-[#002a57]'>
                            Read More
                        </Link>
                    </div>
                    <div className='col-span-1 bg-white rounded-xl shadow p-4'>
                        <img src='https://placehold.co/400x180' className='rounded-lg mb-4' />
                        <h3 className='text-base font-semibold mb-1'>
                            The Role of Business Consultants in Digital Transformation
                        </h3>
                        <p className='text-sm text-[#475569] mb-2'>
                            <i className='fas fa-user mr-1 text-[#00b3c8]'></i> Austin King{' '}
                            <span className='mx-2'>•</span> 15 Jan, 2023
                        </p>
                        <p className='text-sm text-[#475569] mb-4'>
                            For our July 2023 Employee Spotlight, Stewart Erickson...
                        </p>
                        <Link href='/blog/test' className='text-sm font-semibold text-[#002a57]'>
                            Read More
                        </Link>
                    </div>
                </div>
            </section>

            <section className='pb-20 container'>
                <h2 className='text-2xl font-bold mb-10'>Featured Blogs</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <div className='bg-white rounded-xl shadow p-4'>
                        <img src='https://placehold.co/400x200' className='rounded-lg mb-4' />
                        <h3 className='text-base font-semibold mb-1'>
                            Understanding the Benefits of Business Consulting
                        </h3>
                        <p className='text-sm text-[#475569] mb-2'>
                            <i className='fas fa-user mr-1 text-[#00b3c8]'></i> Austin King{' '}
                            <span className='mx-2'>•</span> 15 Jan, 2023
                        </p>
                        <p className='text-sm text-[#475569] mb-4'>
                            For our July 2023 Employee Spotlight, Stewart Erickson...
                        </p>
                        <Link href='/blog/test' className='text-sm font-semibold text-[#002a57]'>
                            Read More
                        </Link>
                    </div>
                    <div className='bg-white rounded-xl shadow p-4'>
                        <img src='https://placehold.co/400x200' className='rounded-lg mb-4' />
                        <h3 className='text-base font-semibold mb-1'>
                            Top 5 Signs Your Business Needs a Consultant
                        </h3>
                        <p className='text-sm text-[#475569] mb-2'>
                            <i className='fas fa-user mr-1 text-[#00b3c8]'></i> Austin King{' '}
                            <span className='mx-2'>•</span> 15 Jan, 2023
                        </p>
                        <p className='text-sm text-[#475569] mb-4'>
                            For our July 2023 Employee Spotlight, Stewart Erickson...
                        </p>
                        <Link href='/blog/test' className='text-sm font-semibold text-[#002a57]'>
                            Read More
                        </Link>
                    </div>
                    <div className='bg-white rounded-xl shadow p-4'>
                        <img src='https://placehold.co/400x200' className='rounded-lg mb-4' />
                        <h3 className='text-base font-semibold mb-1'>
                            How to Choose the Right Business Consultant
                        </h3>
                        <p className='text-sm text-[#475569] mb-2'>
                            <i className='fas fa-user mr-1 text-[#00b3c8]'></i> Austin King{' '}
                            <span className='mx-2'>•</span> 15 Jan, 2023
                        </p>
                        <p className='text-sm text-[#475569] mb-4'>
                            For our July 2023 Employee Spotlight, Stewart Erickson...
                        </p>
                        <Link href='/blog/test' className='text-sm font-semibold text-[#002a57]'>
                            Read More
                        </Link>
                    </div>
                    <div className='bg-white rounded-xl shadow p-4'>
                        <img src='https://placehold.co/400x200' className='rounded-lg mb-4' />
                        <h3 className='text-base font-semibold mb-1'>
                            The Role of Business Consultants in Digital Transformation
                        </h3>
                        <p className='text-sm text-[#475569] mb-2'>
                            <i className='fas fa-user mr-1 text-[#00b3c8]'></i> Austin King{' '}
                            <span className='mx-2'>•</span> 15 Jan, 2023
                        </p>
                        <p className='text-sm text-[#475569] mb-4'>
                            For our July 2023 Employee Spotlight, Stewart Erickson...
                        </p>
                        <Link href='/blog/test' className='text-sm font-semibold text-[#002a57]'>
                            Read More
                        </Link>
                    </div>
                    <div className='bg-white rounded-xl shadow p-4'>
                        <img src='https://placehold.co/400x200' className='rounded-lg mb-4' />
                        <h3 className='text-base font-semibold mb-1'>
                            Navigating Change Management with Professional Guidance
                        </h3>
                        <p className='text-sm text-[#475569] mb-2'>
                            <i className='fas fa-user mr-1 text-[#00b3c8]'></i> Austin King{' '}
                            <span className='mx-2'>•</span> 15 Jan, 2023
                        </p>
                        <p className='text-sm text-[#475569] mb-4'>
                            For our July 2023 Employee Spotlight, Stewart Erickson...
                        </p>
                        <Link href='/blog/test' className='text-sm font-semibold text-[#002a57]'>
                            Read More
                        </Link>
                    </div>
                    <div className='bg-white rounded-xl shadow p-4'>
                        <img src='https://placehold.co/400x200' className='rounded-lg mb-4' />
                        <h3 className='text-base font-semibold mb-1'>
                            Financial Health Check: When to Consult an Expert
                        </h3>
                        <p className='text-sm text-[#475569] mb-2'>
                            <i className='fas fa-user mr-1 text-[#00b3c8]'></i> Austin King{' '}
                            <span className='mx-2'>•</span> 15 Jan, 2023
                        </p>
                        <p className='text-sm text-[#475569] mb-4'>
                            For our July 2023 Employee Spotlight, Stewart Erickson...
                        </p>
                        <Link href='/blog/test' className='text-sm font-semibold text-[#002a57]'>
                            Read More
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blogs;
