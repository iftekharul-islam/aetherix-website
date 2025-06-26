import CircularImageSection from '../global/CircularImageSection';
import { MoveRight, Brain, Shrub, Radar, Handshake } from 'lucide-react';
import offer1 from '@/assets/offer1.jpg';
import offer2 from '@/assets/offer2.jpg';
import offer3 from '@/assets/offer3.jpg';
import offer4 from '@/assets/offer4.png';
import offer5 from '@/assets/offer5.jpeg';
import offer6 from '@/assets/offer6.jpeg';
const About = () => {
    const youtubeVideoId = 'sUf2PtEZris';

    return (
        <>
            <section className='pb-10 md:pb-20 container'>
                <div className='flex flex-col lg:flex-row gap-6 lg:gap-8 items-center'>
                    {/* Images Container - Maintains layout on all screen sizes */}
                    <CircularImageSection
                        youtubeVideoId={youtubeVideoId}
                        image1={offer1}
                        image2={offer2}
                    />

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
            <section className='container'>
                <div className='flex flex-col lg:flex-row gap-6 lg:gap-8 items-center'>
                    {/* Content Section - Now centered */}
                    <div className='flex-1 min-w-0 flex'>
                        <div className='bg-white p-6 md:p-8 rounded-2xl max-w-2xl w-full'>
                            <div className='text-2xl md:text-3xl font-bold text-gray-800 mb-4 '>
                                Values
                            </div>
                            <div className='text-gray-600 leading-relaxed mb-6 '>
                                We are driven by innovation, integrity, and a deep commitment to
                                excellence. We prioritize our clients needs through a
                                customer-centric approach, foster collaboration within diverse teams
                                .
                            </div>
                            <div className='flex gap-4'>
                                <div className='flex flex-row flex-nowrap  items-center bg-gray-200 p-4 gap-2 rounded-3xl w-full'>
                                    <div className='p-2 bg-white rounded-full'>
                                        <Brain className='text-secondary' />
                                    </div>
                                    <div className='font-semibold text-sm'>Intigrity</div>
                                </div>
                                <div className='flex flex-row flex-nowrap  items-center bg-secondary-100 p-4 gap-2 rounded-3xl w-full'>
                                    <div className='p-2 bg-white rounded-full'>
                                        <Shrub className='text-secondary' />
                                    </div>
                                    <div className='font-semibold text-sm'>
                                        Diverse and Inclusive
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-4 py-4'>
                                <div className='flex flex-row flex-nowrap  items-center bg-secondary-100  p-4 gap-2 rounded-3xl w-full'>
                                    <div className='p-2 bg-white rounded-full'>
                                        <Handshake className='text-secondary' />
                                    </div>
                                    <div className='font-semibold text-sm'>Collaborative</div>
                                </div>
                                <div className='flex flex-row flex-nowrap  items-center  bg-gray-200 p-4 gap-2 rounded-3xl w-full'>
                                    <div className='p-2 bg-white rounded-full'>
                                        <Radar className='text-secondary' />
                                    </div>
                                    <div className='font-semibold text-sm'>Effective</div>
                                </div>
                            </div>
                            <div className='text-center mt-10'>
                                <button className='px-6 py-3 rounded-full border text-white bg-[#002a57] font-normal flex items-center gap-2 cursor-pointer hover:bg-[#004a7f] transition-colors'>
                                    Read More
                                    <MoveRight />
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Images Container - Maintains layout on all screen sizes */}
                    <CircularImageSection
                        youtubeVideoId={youtubeVideoId}
                        image1={offer3}
                        image2={offer4}
                    />
                </div>
            </section>
            <section className='pb-10 md:pb-20 container'>
                <div className='flex flex-col lg:flex-row gap-6 lg:gap-8 items-center'>
                    {/* Images Container - Maintains layout on all screen sizes */}
                    <CircularImageSection
                        youtubeVideoId={youtubeVideoId}
                        image1={offer5}
                        image2={offer6}
                    />

                    {/* Content Section - Now centered */}
                    <div className='flex-1 min-w-0 flex'>
                        <div className='bg-white p-6 md:p-8 rounded-2xl max-w-2xl w-full'>
                            <div className='text-2xl md:text-3xl font-bold text-gray-800 mb-4 '>
                                Corporate Governance
                            </div>
                            <div className='text-gray-600 leading-relaxed mb-6 '>
                                We uphold the highest standards of corporate governance to ensure
                                transparency, accountability, and ethical conduct in all aspects of
                                our business
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
