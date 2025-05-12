import Blog from '@/components/blog/Blog';
import SEO from '@/components/global/SEO';
import aboutpage from '@/seo/aboutpage';

const index = () => {
    const seo = aboutpage;
    return (
        <>
            <SEO seo={seo} />
            <Blog />
        </>
    );
}
export default index;