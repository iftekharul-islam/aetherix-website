import React from 'react';

function LatestNewsSection() {
    const blogPosts = [
        {
            id: 1,
            title: 'Understanding the Benefits of Business Consulting',
            author: 'Austin King',
            date: '5 Jan, 2023',
            image: 'https://placehold.co/400x200',
        },
        {
            id: 2,
            title: 'Top 5 Signs Your Business Needs a Consultant',
            author: 'Austin King',
            date: '5 Jan, 2023',
            image: 'https://placehold.co/400x200',
        },
        {
            id: 3,
            title: 'The Role of Business Consultants in Digital Transformation',
            author: 'Austin King',
            date: '5 Jan, 2023',
            image: 'https://placehold.co/400x200',
        },
    ];
    return (
        <section className='py-20 container'>
            <p className='text-xs text-[#9ca3af] uppercase font-semibold'>News</p>
            <h2 className='text-3xl font-bold mb-4'>Latest News</h2>
            <p className='text-[#475569] mb-10 max-w-2xl'>
                Our highly qualified global team is uniquely qualified to deliver high-performance
                sustainable landmark buildings through our integrated suite
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4'>
                {blogPosts.map((post) => (
                    <div
                        key={post.id}
                        className='border rounded-xl p-6 bg-white shadow hover:shadow-md transition'
                    >
                        <img
                            src={post.image}
                            alt={post.title}
                            className='rounded-lg mb-4 w-full h-auto object-cover'
                        />
                        <p className='text-lg font-semibold mb-2'>{post.title}</p>
                        <p className='text-sm text-gray-500 mb-2'>
                            by {post.author} • {post.date}
                        </p>
                        <button className='text-[#002a57] font-semibold hover:underline'>
                            Read More
                        </button>
                    </div>
                ))}
            </div>
            <div className='text-center mt-10'>
                <button className='px-6 py-3 rounded-full border border-[#002a57] text-[#002a57] font-semibold flex items-center gap-2 mx-auto'>
                    View All <i className='fas fa-arrow-right'></i>
                </button>
            </div>
        </section>
    );
}

export default LatestNewsSection;
