import Link from 'next/link';
import MarqueSection from './MarqueSection';

const Footer = () => {
     const items = [
        'Aetherix LTD',
        'info@weaetherix.com',
        '+880 152 1466101',
        'Plot#362, Road#5, Avenue#4, Mirpur DOHS, Dhaka-1216',
        '74 E Glenwood Ave Unit #5210, Smyrna, DE 19977'
    ];
    return (
        <footer>
         <MarqueSection items={items}/>

            <div className='bg-[#002a57] text-white text-sm pt-12 pb-6'>
                <div className='flex justify-between flex-wrap gap-10 container'>
                    <div className='max-w-sm'>
                        <h4 className='text-xl font-semibold mb-4'>Aetherix LTD</h4>
                        <p className='mb-2'>
                            Plot#362, Road#5, Avenue#4, Mirpur DOHS, Dhaka-1216
                        </p>
                        <p className='mb-2'>info@weaetherix.com</p>
                        <p className='mb-2'>+880 152 1466101</p>
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
                    Copyright © 2025, Aetherix LTD
                </div>
            </div>
        </footer>
    );
};
export default Footer;
