'use client';

import { usePathname } from 'next/navigation';

const HeaderSection = ({ title }) => {
    const pathname = usePathname();
    if (pathname === '/') return null;

    // Generate title from last segment if not manually passed
    const autoTitle = pathname
        .split('/')
        .filter(Boolean)
        .pop()
        ?.replace(/-/g, ' ')
        .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize each word

    const finalTitle = title || autoTitle;

    // Generate breadcrumb from path
    const breadcrumb = pathname
        .split('/')
        .filter(Boolean)
        .map((segment) => segment.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase()))
        .join(' / ');

    return (
        <section className='animated-gradient-diagonal-herosection overflow-hidden text-white py-10 md:py-30'>
            <div className='container px-4'>
                <h1 className='text-3xl md:text-4xl font-bold mb-2'>{finalTitle}</h1>
                <p className='text-sm text-white/80'>Home / {breadcrumb}</p>
            </div>
        </section>
    );
};

export default HeaderSection;
