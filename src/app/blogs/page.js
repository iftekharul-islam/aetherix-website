import Blogs from '@/components/blogs/Blogs';
import SEO from '@/components/global/SEO';
import aboutpage from '@/seo/aboutpage';

const index = () => {
    const seo = aboutpage;
    return (
        <>
            <SEO seo={seo} />
            <Blogs />
        </>
    );
}
export default index;