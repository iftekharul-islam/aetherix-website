import Contact from '@/components/contact/Contact';
import SEO from '@/components/global/SEO';
import contactpage from '@/seo/contactpage';

const index = () => {
    const seo = contactpage;
    return (
        <>
            <SEO seo={seo} />
            <Contact />
        </>
    );
}
export default index;