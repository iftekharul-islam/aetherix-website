import {
    Facebook,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    MoveRight,
    Phone,
    X
} from 'lucide-react';
import Link from 'next/link';

const Contact = () => {
    return (
        <>
            <section className='container py-10 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20'>
                <div>
                    <h2 className='text-2xl font-bold text-black mb-4'>Contact Us</h2>
                    <p className='text-gray-600 text-sm mb-8'>
                        We love to hear from you, so if there is anything you would like to ask us,
                        we are right here and ready to help in every way we can.
                    </p>
                    <form className='space-y-4'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div>
                                <label
                                    htmlFor='name'
                                    className='block text-sm font-semibold text-black mb-1'
                                >
                                    Name
                                </label>
                                <input
                                    id='name'
                                    type='text'
                                    placeholder='Enter Your Name'
                                    className='border border-gray-300 rounded-md p-3 w-full text-sm'
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor='email'
                                    className='block text-sm font-semibold text-black mb-1'
                                >
                                    Email
                                </label>
                                <input
                                    id='email'
                                    type='email'
                                    placeholder='Enter Your Email'
                                    className='border border-gray-300 rounded-md p-3 w-full text-sm'
                                />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div>
                                <label
                                    htmlFor='phone'
                                    className='block text-sm font-semibold text-black mb-1'
                                >
                                    Phone Number
                                </label>
                                <input
                                    id='phone'
                                    type='text'
                                    placeholder='Enter Your Phone Number'
                                    className='border border-gray-300 rounded-md p-3 w-full text-sm'
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor='subject'
                                    className='block text-sm font-semibold text-black mb-1'
                                >
                                    Subject
                                </label>
                                <input
                                    id='subject'
                                    type='text'
                                    placeholder='Enter Your Subject'
                                    className='border border-gray-300 rounded-md p-3 w-full text-sm'
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor='message'
                                className='block text-sm font-semibold text-black mb-1'
                            >
                                Message
                            </label>
                            <textarea
                                id='message'
                                placeholder='Write Your Message Here'
                                className='border border-gray-300 rounded-md p-3 w-full h-32 resize-none text-sm'
                            ></textarea>
                        </div>

                        <div className='text-center '>
                            <button className='px-6 py-3 rounded-full border text-white bg-[#002a57] font-normal flex items-center gap-2 cursor-pointer hover:bg-[#004a7f] transition-colors w-full justify-center'>
                                Submit
                                <MoveRight />
                            </button>
                        </div>
                    </form>
                </div>
                <div className='space-y-8 '>
                    <div>
                        <h3 className='text-lg font-semibold mb-2 uppercase'>Working Hours</h3>
                        <p className='text-gray-700 font-light text-sm'>
                            Monday to Friday, 9:00am - 5:00pm
                        </p>
                    </div>
                    <div className=' border-t border-gray-200' />
                    <div className='space-y-4 text-sm text-gray-700'>
                    <h3 className='text-lg font-semibold mb-2 uppercase'>Office 1</h3>
                        <div className='flex items-center'>
                            <Mail className='w-4 h-4 mr-2 text-[#00b3c8]' />{' '}
                            <span>info@weaetherix.com</span>
                        </div>
                        <div className='flex items-center'>
                            <Phone className='w-4 h-4 mr-2 text-[#00b3c8]' />{' '}
                            <span>+880 152 1466101</span>
                        </div>
                        <div className='flex items-center'>
                            <MapPin className='w-4 h-4 mr-2 text-[#00b3c8]' />{' '}
                            <span>74 E Glenwood Ave Unit #5210, Smyrna, DE 19977</span>
                        </div>
                    </div>
                    <div className=' border-t border-gray-200' />
                    <div className='space-y-4 text-sm text-gray-700'>
                    <h3 className='text-lg font-semibold mb-2 uppercase'>Office 2</h3>
                        <div className='flex items-center'>
                            <Mail className='w-4 h-4 mr-2 text-[#00b3c8]' />{' '}
                            <span>info@weaetherix.com</span>
                        </div>
                        <div className='flex items-center'>
                            <Phone className='w-4 h-4 mr-2 text-[#00b3c8]' />{' '}
                            <span>+880 152 1466101</span>
                        </div>
                        <div className='flex items-center'>
                            <MapPin className='w-4 h-4 mr-2 text-[#00b3c8]' />{' '}
                            <span>Plot#362, Road#5, Avenue#4, Mirpur DOHS, Dhaka-1216</span>
                        </div>
                    </div>
                    <div className=' border-t border-gray-200' />
                    <div>
                        <h3 className='text-lg font-semibold mb-2'>JOIN US</h3>
                        <p className='text-gray-700 text-sm mb-3'>
                            We are happily open now for collaboration. You can ask any questions and
                            offer problems by phone, email, Instagram or Facebook.
                        </p>
                        <div className='flex items-center space-x-3'>
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
            </section>

            <section className='container pb-10 lg:pb-20'>
                <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3087.261448587642!2d-75.60938901078718!3d39.30499674860647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c771375d1ae6c5%3A0x2b42722885c0c376!2s74%20E%20Glenwood%20Ave%20%235210%2C%20Smyrna%2C%20DE%2019977%2C%20USA!5e0!3m2!1sen!2sbd!4v1752175112448!5m2!1sen!2sbd'
                    width='100%'
                    height='400'
                    style={{ border: 0 }}
                    allowFullScreen=''
                    loading='lazy'
                    className='rounded-xl'
                ></iframe>
            </section>
        </>
    );
};

export default Contact;
