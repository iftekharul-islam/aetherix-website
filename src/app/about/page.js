import About from '@/components/about/About';
import SEO from '@/components/global/SEO';
import aboutpage from '@/seo/aboutpage';

const index = () => {
    const seo = aboutpage;
    return (
        <>
            <SEO seo={seo} />
            <About />
        </>
    );
}
export default index;