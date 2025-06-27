import BlogDetails from '@/components/blogs/BlogDetails';
import HeaderSection from '@/components/global/HeaderSecton';
import React from 'react';
import { blogDetails } from '@/data/blogDetails';
function BlogId({ params }) {
    const { slug } = params;
    const blogData = blogDetails[slug];

    if (!blogData) {
        return <div>Blog post not found</div>;
    }

    return (
        <div>
            <HeaderSection />
            <BlogDetails blog={blogData} />
        </div>
    );
}

export default BlogId;
