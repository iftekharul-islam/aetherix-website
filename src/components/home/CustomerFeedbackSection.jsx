'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const CustomerFeedbackSection = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseX.set((clientX - centerX) / 20);
      mouseY.set((clientY - centerY) / 20);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

   const testimonials = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "CEO, TechVision",
      rating: 5,
      content: "This product completely transformed our workflow. The attention to detail is unmatched, and customer support is phenomenal.",
      companyLogo: "/logos/techvision.svg"
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Marketing Director, GrowthHack",
      rating: 4,
      content: "We've tried many solutions but none compare to this. The ROI was evident within the first month of implementation.",
      companyLogo: "/logos/growthhack.svg"
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      role: "CTO, InnovateX",
      rating: 5,
      content: "The customization options allowed us to tailor the platform perfectly to our needs. Game-changing technology!",
      companyLogo: "/logos/innovatex.svg"
    },
    {
      id: 4,
      name: "Emily Wilson",
      role: "Product Lead, ScaleFast",
      rating: 5,
      content: "Implementation was seamless and the results exceeded our expectations. Our team couldn't be happier with the decision.",
      companyLogo: "/logos/scalefast.svg"
    }
  ];

  return (
    <div className="relative bg-white py-24 px-4 overflow-hidden">
      {/* Subtle animated dots */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gray-800"
            style={{
              width: Math.random() * 10 + 2,
              height: Math.random() * 10 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 100],
              y: [0, (Math.random() - 0.5) * 100],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join 10,000+ businesses experiencing transformative results
          </p>
        </motion.div>

        {/* Testimonials Swiper */}
        <div className="relative py-8">
          <Swiper
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 0,
              stretch: -40,
              depth: 120,
              modifier: 2,
              slideShadows: false,
            }}
            pagination={{ 
              clickable: true, 
              dynamicBullets: true,
              dynamicMainBullets: 3
            }}
            navigation={{
              nextEl: '.testimonial-next',
              prevEl: '.testimonial-prev',
            }}
            autoplay={{ 
              delay: 6000, 
              pauseOnMouseEnter: true 
            }}
            loop
            className="customer-feedback-slider !pb-16"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id} className="!w-[300px] md:!w-[360px] !h-auto py-6">
                <motion.div
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: useMotionTemplate`perspective(1000px) rotateX(${mouseY}deg) rotateY(${mouseX}deg)`,
                  }}
                  whileHover={{ 
                    scale: 1.03,
                    zIndex: 10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                  }}
                  className="bg-white p-8 rounded-xl shadow-md border border-gray-200 flex flex-col h-full transition-all duration-300 relative hover:shadow-lg"
                >
                  <img src={t.companyLogo} alt={t.name} className="h-10 mb-6 object-contain opacity-90" />

                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <motion.svg
                        key={i}
                        whileHover={{ scale: 1.1 }}
                        className={`w-5 h-5 mr-1 ${i < t.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </motion.svg>
                    ))}
                  </div>

                  <p className="text-gray-600 italic text-base mb-6 flex-grow">
                    "{t.content}"
                  </p>

                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <p className="font-semibold text-gray-900">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <button className="testimonial-prev absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-50 text-gray-800 p-3 rounded-full shadow-md -ml-4 transition-all border border-gray-200 hover:scale-110 hover:shadow-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="testimonial-next absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-50 text-gray-800 p-3 rounded-full shadow-md -mr-4 transition-all border border-gray-200 hover:scale-110 hover:shadow-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerFeedbackSection;