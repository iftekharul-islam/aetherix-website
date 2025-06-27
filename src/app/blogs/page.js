import Blogs from '@/components/blogs/Blogs';
import HeaderSection from '@/components/global/HeaderSecton';
import SEO from '@/components/global/SEO';
import aboutpage from '@/seo/aboutpage';

const index = () => {
    const seo = aboutpage;
    return (
        <>
            <SEO seo={seo} />
            <HeaderSection />
            <Blogs />
        </>
    );
};
export default index;
