import Link from 'next/link';
import MarqueSection from './MarqueSection';

const Footer = () => {
     const items = [
        'info@global.com ',
        '+01 123 456 789',
        'New York, United States',
       /*  'info@global.com • +01 123 456 789 • Network, United States' */
    ];
    return (
        <footer>
         <MarqueSection items={items}/>

            <div className='bg-[#002a57] text-white text-sm pt-12 pb-6'>
                <div className='flex justify-between flex-wrap gap-10 container'>
                    <div className='max-w-sm'>
                        <h4 className='text-xl font-semibold mb-4'>Logosipsum</h4>
                        <p className='mb-2'>
                            FPC provides highly specialized facility life cycle integrated
                            consulting services for the Built Environment.
                        </p>
                        <p className='mb-2'>info@global.com</p>
                        <p className='mb-2'>+01 123 456 789</p>
                        <div className='flex gap-4 mt-4 text-lg'>
                            <i className='fab fa-facebook-f'></i>
                            <i className='fab fa-twitter'></i>
                            <i className='fab fa-linkedin-in'></i>
                            <i className='fab fa-instagram'></i>
                        </div>
                    </div>

                    <div>
                        <h5 className='font-semibold mb-4'>Menu</h5>
                        <ul className='space-y-2'>
                            <li>
                                <Link href='/'>Home</Link>
                            </li>
                            <li>
                                <Link href='/services'>Services</Link>
                            </li>
                            <li>
                                <Link href='/blogs'>Blog</Link>
                            </li>
                            <li>
                                <Link href='/about'>About</Link>
                            </li>
                            <li>
                                <Link href='/contact'>Contact Us</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h5 className='font-semibold mb-4'>Quick Links</h5>
                        <ul className='space-y-2'>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                            <li>Disclaimer</li>
                            <li>Sitemap</li>
                        </ul>
                    </div>
                </div>

                <div className='mt-12 border-t border-white/20 pt-4 text-center text-white/70'>
                    Copyright © 2025, Global Pvt. Ltd
                </div>
            </div>
        </footer>
    );
};
export default Footer;
