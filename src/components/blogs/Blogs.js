import Link from 'next/link';
import Image from 'next/image';
import offer1 from '@/assets/offer1.jpg';
import offer2 from '@/assets/offer2.jpg';
import offer3 from '@/assets/offer3.jpg';
import offer4 from '@/assets/offer4.png';
import offer5 from '@/assets/offer5.jpeg';
import offer6 from '@/assets/offer6.jpeg';
import offer7 from '@/assets/offer7.jpg';
import offer8 from '@/assets/offer8.jpg';
import BlogList from './BlogList';
const Blogs = () => {
    const blogData = {
        featured: {
            id: 1,
            title: 'Understanding the Benefits of Business Consulting',
            author: 'Austin King',
            date: '15 Jan, 2023',
            excerpt:
                "For our July 2023 Employee Spotlight, Stewart Erickson, a Senior Technical Project Manager, talks about his career and some of the exciting projects he's worked on during his time at the company.",
            image: offer1,
            link: '/blogs/business-consulting',
        },
        regular: [
            {
                id: 2,
                title: 'Digital Transformation Strategies for 2023',
                author: 'Sarah Johnson',
                date: '22 Feb, 2023',
                excerpt:
                    'Explore the latest trends in digital transformation and how businesses can adapt to stay competitive in the coming year.',
                image: offer2,
                link: '/blogs/digital-transformation',
            },
            {
                id: 3,
                title: 'The Future of Remote Work Post-Pandemic',
                author: 'Michael Chen',
                date: '5 Mar, 2023',
                excerpt:
                    'How companies are adapting their workplace policies as we move into a new era of hybrid work environments.',
                image: offer3,
                link: '/blogs/remote-work',
            },
            {
                id: 4,
                title: 'Sustainable Business Practices in 2023',
                author: 'Emma Wilson',
                date: '18 Apr, 2023',
                excerpt:
                    'Discover how leading companies are implementing eco-friendly initiatives while maintaining profitability.',
                image: offer8,
                link: '/blogs/sustainable-business',
            },
            {
                id: 5,
                title: 'AI and Machine Learning: Business Applications',
                author: 'David Kim',
                date: '2 May, 2023',
                excerpt:
                    'Practical applications of artificial intelligence that are transforming industries today.',
                image: offer5,
                link: '/blogs/ai-applications',
            },
            {
                id: 6,
                title: 'Customer Experience Trends to Watch',
                author: 'Lisa Rodriguez',
                date: '14 Jun, 2023',
                excerpt:
                    'The most important CX trends that will define successful businesses this year.',
                image: offer8,
                link: '/blogs/customer-experience',
            },
            {
                id: 7,
                title: 'Financial Planning in Uncertain Times',
                author: 'James Peterson',
                date: '28 Jul, 2023',
                excerpt:
                    'Strategies for maintaining financial stability during economic fluctuations.',
                image: offer7,
                link: '/blogs/financial-planning',
            },
        ],
    };
    return (
        <>
            <section className='bg-gradient-to-br from-[#002a57] to-[#0097b2] text-white py-10 md:py-30'>
                <div className='container'>
                    <h1 className='text-4xl font-bold mb-2'>Blog</h1>
                    <p className='text-sm text-white/80'>Home / Blog</p>
                </div>
            </section>

            <section className='py-20 container'>
                <div className='flex flex-col md:flex-row gap-8'>
                    <div className='md:w-1/2 flex flex-col'>
                        <div className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex-1 flex flex-col'>
                            <div className='p-6 flex flex-col flex-1'>
                                <Image
                                    src={blogData.featured.image}
                                    alt={blogData.featured.title}
                                    width={800}
                                    height={440}
                                    className='rounded-lg mb-4 w-full'
                                />
                                <h3 className='text-xl font-semibold mb-2 text-[#002a57]'>
                                    {blogData.featured.title}
                                </h3>
                                <p className='text-sm text-[#475569] mb-2'>
                                    <i className='fas fa-user mr-1 text-[#00b3c8]'></i>{' '}
                                    {blogData.featured.author} <span className='mx-2'>•</span>{' '}
                                    {blogData.featured.date}
                                </p>
                                <p className='text-base text-[#475569] mb-4 flex-grow'>
                                    {blogData.featured.excerpt}
                                </p>
                                <Link
                                    href={blogData.featured.link}
                                    className='text-sm font-semibold text-[#002a57] hover:text-[#00b3c8] transition-colors mt-auto'
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className='md:w-1/2 flex flex-col gap-6'>
                        {blogData.regular.slice(0, 3).map((blog) => (
                            <div
                                key={blog.id}
                                className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col sm:flex-row flex-1 p-6'
                            >
                                <div className='sm:w-1/2 h-48 sm:h-auto '>
                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        width={400}
                                        height={220}
                                        className='w-full h-full object-cover rounded-lg'
                                    />
                                </div>
                                <div className='p-4 sm:w-1/2 flex flex-col'>
                                    <h3 className='text-base font-semibold mb-1 text-[#002a57]'>
                                        {blog.title}
                                    </h3>
                                    <p className='text-xs text-[#475569] mb-2'>
                                        <i className='fas fa-user mr-1 text-[#00b3c8]'></i>{' '}
                                        {blog.author} <span className='mx-2'>•</span> {blog.date}
                                    </p>
                                    <p className='text-sm text-[#475569] mb-3 line-clamp-2 flex-grow'>
                                        {blog.excerpt}
                                    </p>
                                    <Link
                                        href={blog.link}
                                        className='text-xs font-semibold text-[#002a57] hover:text-[#00b3c8] transition-colors'
                                    >
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className='pb-20 container'>
                <h2 className='text-2xl font-bold mb-10'>Featured Blogs</h2>
                <BlogList blogData={blogData} />
            </section>
        </>
    );
};

export default Blogs;
