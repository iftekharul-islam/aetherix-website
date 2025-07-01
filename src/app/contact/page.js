import Contact from '@/components/contact/Contact';
import HeaderSection from '@/components/global/HeaderSecton';
import SEO from '@/components/global/SEO';
import contactpage from '@/seo/contactpage';

const index = () => {
    const seo = contactpage;
    return (
        <>
            <SEO seo={seo} />
            <HeaderSection />
            <Contact />
        </>
    );
};
export default index;
