import About from '@/components/about/About';
import Team from '@/components/about/Team';
import SEO from '@/components/global/SEO';
import CustomerFeedbackSection from '@/components/home/CustomerFeedbackSection';
import FeaturesServiceSection from '@/components/home/FeaturesServiceSection';
import aboutpage from '@/seo/aboutpage';

const index = () => {
    const seo = aboutpage;
    return (
        <>
            <SEO seo={seo} />
            <About />
            <FeaturesServiceSection />
            <CustomerFeedbackSection />
            <Team />
        </>
    );
};
export default index;
