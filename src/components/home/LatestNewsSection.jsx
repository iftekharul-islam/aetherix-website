import React from 'react';
import BlogList from '../blogs/BlogList';
import offer1 from '@/assets/offer1.jpg';
import offer2 from '@/assets/offer2.jpg';
import offer3 from '@/assets/offer3.jpg';
import offer4 from '@/assets/offer4.png';
import offer5 from '@/assets/offer5.jpeg';
import offer6 from '@/assets/offer6.jpeg';
import offer7 from '@/assets/offer7.jpg';
import offer8 from '@/assets/offer8.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
function LatestNewsSection() {
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
        <section className='py-20 container'>
            <div className='flex justify-between items-center gap-2 flex-wrap'>
                <div>
                    <div className='text-xs text-[#9ca3af] uppercase font-semibold'>Lates News</div>
                    <div className='text-3xl font-bold mb-2'>What We Offer</div>
                </div>
                <div className='text-[#475569] max-w-2xl'>
                    Our highly qualified global team is uniquely qualified to deliver
                    high-performance sustainable landmark buildings through our integrated suite
                </div>
            </div>
            <section>
                <BlogList blogData={blogData} />
            </section>
            <div className='text-center mt-10'>
                <button className='px-6 py-3 rounded-full border text-white bg-[#002a57] font-normal flex items-center gap-2 mx-auto cursor-pointer'>
                    View All
                    <FontAwesomeIcon icon={faArrowRight} className='w-4 h-4' />
                </button>
            </div>
        </section>
    );
}

export default LatestNewsSection;
