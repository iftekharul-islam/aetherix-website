import HeroSection from './HeroSection';
import OfferSection from './OfferSection';
import FeaturesServiceSection from './FeaturesServiceSection';
import GlobalSection from './GlobalSection';
import CustomerFeedbackSection from './CustomerFeedbackSection';
import LatestNewsSection from './LatestNewsSection';
import ClientSection from './ClientSection';
import PortFolioSection from './PortFolioSection';
import ServiceSection from './ServiceSection';

const Home = () => {
    return (
        <>
            <HeroSection />
            <OfferSection />
            <FeaturesServiceSection />
            <PortFolioSection />
            <ServiceSection/>
            <ClientSection />
            {/*    <GlobalSection /> */}
            <CustomerFeedbackSection />
            <LatestNewsSection />
        </>
    );
};

export default Home;
