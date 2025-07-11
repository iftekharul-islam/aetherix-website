import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
function MarqueSection({items}) {
    const repeatedItems = [...items, ...items, ...items];
  return (
      <div className='bg-[#00b3c8] py-4 overflow-hidden'>
              <div className='marquee-container'>
                  <div className='marquee-track flex gap-4 items-center'>
                      {repeatedItems.map((text, index) => (
                          <React.Fragment key={index}>
                              <span className='marquee-item text-white text-2xl font-bold'>
                                  {text}
                              </span>
                              <FontAwesomeIcon icon={faStar} className='text-white w-4 h-4' />
                          </React.Fragment>
                      ))}
                  </div>
              </div>
          </div>
  )
}

export default MarqueSection