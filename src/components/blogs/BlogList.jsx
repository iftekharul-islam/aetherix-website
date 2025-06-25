import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { UserRound } from 'lucide-react';
function BlogList({ blogData }) {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {blogData.regular.map((blog) => (
                <div className='bg-white rounded-xl shadow p-4' key={blog.id}>
                    <Image
                        src={blog.image}
                        alt={blog.title}
                        width={400}
                        height={200}
                        className=' object-cover rounded-lg mb-4'
                    />
                    <h3 className='text-base font-semibold mb-1'>
                        Understanding the Benefits of Business Consulting
                    </h3>
                    <p className='text-xs text-[#475569] mb-2 flex items-center gap-1'>
                        <UserRound className='w-3 h-3 text-primary' />
                        {blogData.featured.author}
                        <span className='mx-2'>•</span>
                        {blogData.featured.date}
                    </p>
                    <p className='text-sm text-[#475569] mb-4'>
                        For our July 2023 Employee Spotlight, Stewart Erickson...
                    </p>
                    <Link href={blog.link} className='text-sm font-semibold text-[#002a57]'>
                        Read More
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BlogList;
