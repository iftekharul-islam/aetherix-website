'use client';
import { useState } from 'react';
import { ChevronRight, Home, Menu, X, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import blog1 from '@/assets/blog1.jpg';
import team4 from '@/assets/team4.jpg';
import Image from 'next/image';
import Link from 'next/link';
function BlogDetails({ blog }) {
    return (
        <>
            {/* Main Content */}
            <div className='container py:10 md:py-20'>
                {/* Featured Image */}
                <div className='mb-8'>
                    <Image
                        src={blog1}
                        alt='Business professionals consulting'
                        className='w-full h-full object-cover  rounded-xl shadow-lg'
                        width={400}
                        height={280}
                    />
                </div>

                <section>
                    <div className='text-gray-600 leading-relaxed mb-8'>
                        Home is where the heart is, and your decor should reflect your personality
                        and create a welcoming atmosphere. Whether you're moving into a new place or
                        just looking to refresh your existing space, there are countless ways to
                        infuse style and comfort into your home. Here are some tips to elevate your
                        decor and make your home feel uniquely yours.
                    </div>

                    <div className='text-2xl font-bold text-gray-900 mb-4'>
                        1. Choose a Color Palette
                    </div>
                    <div className='text-gray-600 leading-relaxed mb-6'>
                        The first step in creating a cohesive look is selecting a color palette.
                        Start with a base color and then choose complementary hues. Soft neutrals
                        can create a calming environment, while bold colors can add vibrancy.
                        Consider the mood you want to create in each room; for instance, soft blues
                        and greens are perfect for bedrooms, while warm reds and yellows can
                        energize a living room.
                    </div>

                    <div className='text-2xl font-bold text-gray-900 mb-4'>2. Mix Textures</div>
                    <div className='text-gray-600 leading-relaxed mb-6'>
                        Incorporating a variety of textures adds depth and interest to your decor.
                        Combine smooth, sleek surfaces with rougher materials. Think of a plush
                        velvet sofa paired with a rustic wooden coffee table, or a soft knit throw
                        draped over a leather chair. Textures can also be introduced through
                        decorative pillows, rugs, and curtains, creating a layered look that feels
                        inviting.
                    </div>

                    <div className='text-2xl font-bold text-gray-900 mb-4'>
                        3. Incorporate Personal Touches
                    </div>
                    <div className='text-gray-600 leading-relaxed mb-6'>
                        Your home should tell your story. Incorporate personal items that reflect
                        your interests and experiences, such as framed photographs, travel
                        souvenirs, or handcrafted art pieces. Displaying these items not only adds
                        character to your space but also creates conversation starters for guests.
                    </div>

                    <div className='text-2xl font-bold text-gray-900 mb-4'>
                        4. Create Functional Spaces
                    </div>
                    <div className='text-gray-600 leading-relaxed mb-6'>
                        As we spend more time at home, creating functional spaces is essential.
                        Designate areas for work, relaxation, and hobbies. If you're working from
                        home, ensure your workspace is inspiring and organized. Use stylish
                        organizers, add greenery, and incorporate good lighting to make your home
                        office a productive haven.
                    </div>

                    <div className='text-2xl font-bold text-gray-900 mb-4'>
                        5. Invest in Key Pieces
                    </div>
                    <div className='text-gray-600 leading-relaxed mb-6'>
                        While it's tempting to fill your space with trendy decor, investing in a few
                        quality key pieces can elevate your home's overall aesthetic. Consider a
                        statement sofa, an eye-catching coffee table, or a unique piece of art.
                        These focal points can set the tone for the entire room and provide a
                        timeless appeal.
                    </div>

                    <div className='text-2xl font-bold text-gray-900 mb-4'>Conclusion</div>
                    <div className='text-gray-600 leading-relaxed mb-8'>
                        Home decor is a beautiful journey of self-expression and creativity. By
                        implementing these tips, you can transform your space into a stylish and
                        inviting sanctuary. Remember, it's not just about aesthetics; it's about
                        creating a home that feels good to live in. Happy decorating!
                    </div>
                </section>

                <div className='flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-gray-200'>
                    <div className='flex flex-wrap gap-2 mb-4 md:mb-0 items-center'>
                        <span className='text-sm font-bold text-black mr-2'>TAGS</span>
                        <span className='px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 cursor-pointer transition-colors'>
                            Home Decor
                        </span>
                        <span className='px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 cursor-pointer transition-colors'>
                            Furniture
                        </span>
                        <span className='px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 cursor-pointer transition-colors'>
                            Interior Design
                        </span>
                        <span className='px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 cursor-pointer transition-colors'>
                            Style
                        </span>
                    </div>

                    <div className='flex items-center space-x-3'>
                        <span className='text-sm text-sm font-bold text-black'>SHARE</span>
                        <div className='flex space-x-2'>
                            <Link
                                href='#'
                                className='p-2 bg-secondary text-white rounded-full hover:bg-blue-700 transition-colors cursor-pointer'
                            >
                                <Facebook size={16} />
                            </Link>
                            <Link
                                href='#'
                                className='p-2 bg-secondary text-white rounded-full hover:bg-sky-600 transition-colors cursor-pointer'
                            >
                                <X size={16} />
                            </Link>
                            <Link
                                href='#'
                                className='p-2 bg-secondary text-white rounded-full hover:bg-pink-700 transition-colors cursor-pointer'
                            >
                                <Instagram size={16} />
                            </Link>
                            <Link
                                href='#'
                                className='p-2 bg-secondary text-white rounded-full hover:bg-blue-800 transition-colors cursor-pointer'
                            >
                                <Linkedin size={12} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default BlogDetails;
