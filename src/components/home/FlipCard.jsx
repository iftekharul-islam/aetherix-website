'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function FlipCard({
    imageSrc,
    title,
    subtitle,
    backContent,
    technologies = [],
    client,
    year,
    href = '#',
}) {
    return (
        <Link href={href} className='block w-full h-80 group [perspective:1000px]'>
            <div className='relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
                {/* Front Side */}
                <div className='absolute w-full h-full backface-hidden rounded-lg overflow-hidden shadow-lg'>
                    <Image src={imageSrc} alt={title} fill className='object-cover' />
                    <div className='absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white px-4 py-2'>
                        <h3 className='text-lg font-semibold'>{title}</h3>
                        <p className='text-sm'>{subtitle}</p>
                    </div>
                </div>

                {/* Back Side */}
                <div className='absolute w-full h-full backface-hidden [transform:rotateY(180deg)] animated-gradient-diagonal-herosection to-gray-800 text-white rounded-lg shadow-lg overflow-hidden flex flex-col'>
                    {/* Fixed Header */}
                    <div className='p-4 backdrop-blur-sm'>
                        <h3 className='text-xl font-bold mb-1'>{title}</h3>
                        <div className='flex items-center gap-4 text-sm text-gray-300'>
                            {client && <span>Client: {client}</span>}
                            {year && <span>Year: {year}</span>}
                        </div>
                    </div>

                    {/* Scrollable Content */}
                    <div className='flex-grow overflow-y-auto p-4 custom-scrollbar'>
                        <p className='text-gray-100 leading-relaxed'>{backContent}</p>
                    </div>

                    {/* Fixed Tech Stack at Bottom */}
                    {technologies.length > 0 && (
                        <div className='p-4 backdrop-blur-sm'>
                            <h4 className='font-semibold mb-2 text-sm text-gray-300'>TECH STACK</h4>
                            <div className='flex flex-wrap gap-2'>
                                {technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className='text-xs text-indigo-100 px-3 py-1 rounded-full border border-indigo-400/20 bg-indigo-300/10 backdrop-blur-md shadow-md'
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Link>
    );
}
