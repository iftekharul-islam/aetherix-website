import HeroSection from './HeroSection';
import OfferSection from './OfferSection';
import FeaturesServiceSection from './FeaturesServiceSection';
import GlobalSection from './GlobalSection';
import CustomerFeedbackSection from './CustomerFeedbackSection';
import LatestNewsSection from './LatestNewsSection';
import ClientSection from './ClientSection';

const Home = () => {
    return (
        <>
            <HeroSection />
            <OfferSection />
            <FeaturesServiceSection />
            <ClientSection />
         {/*    <GlobalSection /> */}
            <CustomerFeedbackSection />
            <LatestNewsSection />
            
        </>
    );
};

export default Home;
