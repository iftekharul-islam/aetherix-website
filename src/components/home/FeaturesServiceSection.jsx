import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
function FeaturesServiceSection() {
    const items = [
        'FPS Global',
        'Featured Projects',
        'Consulting Services',
        'Qualified Global Team',
        'Consulting Services',
        'Qualified Global Team',
        'FPS Global',
        'Qualified Global Team',
        'Consulting Services',
        'Qualified Global Team',
        'FPS Global',
    ];
    const repeatedItems = [...items, ...items, ...items]; // Repeat for seamless loop

    return (
        <div className='bg-[#00b3c8] py-4 overflow-hidden'>
            <div className='marquee-container'>
                <div className='marquee-track'>
                    {[...items, ...items, ...items].map((text, index) => (
                        <span className='marquee-item' key={index}>
                            <FontAwesomeIcon icon={faStar} className='w-4 h-4' /> {text}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FeaturesServiceSection;
