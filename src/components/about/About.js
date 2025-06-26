import CircularImageSection from '../global/CircularImageSection';
import { MoveRight } from 'lucide-react';
const About = () => {
    const youtubeVideoId = 'sUf2PtEZris';

    return (
        <>
            <section className='bg-gradient-to-br from-[#002a57] to-[#0097b2] text-white py-10 md:py-30'>
                <div className='container px-4'>
                    <h1 className='text-3xl md:text-4xl font-bold mb-2'>About Us</h1>
                    <p className='text-sm text-white/80'>Home / About Us</p>
                </div>
            </section>

            <section className='py-10 md:py-20 container'>
                <div className='flex flex-col lg:flex-row gap-6 lg:gap-8 items-center'>
                    {/* Images Container - Maintains layout on all screen sizes */}
                    <CircularImageSection youtubeVideoId={youtubeVideoId} />

                    {/* Content Section - Now centered */}
                    <div className='flex-1 min-w-0 flex'>
                        <div className='bg-white p-6 md:p-8 rounded-2xl max-w-2xl w-full'>
                            <div className='text-2xl md:text-3xl font-bold text-gray-800 mb-4 '>
                                Mission and Vision
                            </div>
                            <div className='text-gray-600 leading-relaxed mb-6 '>
                                We are a team of dedicated professionals committed to delivering
                                exceptional consulting services and innovative solutions. Our
                                expertise spans across various industries, helping businesses
                                achieve their goals through strategic planning and cutting-edge
                                technology.
                            </div>
                            <div className='text-center mt-10'>
                                <button className='px-6 py-3 rounded-full border text-white bg-[#002a57] font-normal flex items-center gap-2 cursor-pointer hover:bg-[#004a7f] transition-colors'>
                                    Read More
                                    <MoveRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
