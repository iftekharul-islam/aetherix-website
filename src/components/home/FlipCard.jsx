'use client';
import Image from 'next/image';
import Link from 'next/link';
export default function FlipCard({ imageSrc, title, subtitle, backContent, href = '#' }) {
    return (
        <Link href={href} className='block w-full h-80 group'>
            <div className='flip-card w-full h-full'>
                <div className='flip-card-inner w-full h-full transition-transform duration-500 transform-style-preserve-3d hover:rotate-y-180'>
                    <div className='flip-card-front absolute w-full h-full backface-hidden rounded-lg overflow-hidden shadow-lg'>
                        <Image src={imageSrc} alt={title} fill className='object-cover' />
                        <div className='absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white px-4 py-2'>
                            <h3 className='text-lg font-semibold'>{title}</h3>
                            <p className='text-sm'>{subtitle}</p>
                        </div>
                    </div>

                    <div className='flip-card-back absolute w-full h-full backface-hidden rotate-y-180 bg-primary text-white rounded-lg flex items-center justify-center p-4 text-center shadow-lg'>
                        <p>{backContent}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}
