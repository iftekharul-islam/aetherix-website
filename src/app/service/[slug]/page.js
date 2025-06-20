import SEO from "@/components/global/SEO";
import Services from "@/components/services/Services";
import servicespage from "@/seo/servicespage";

const index = () => {
    const seo = servicespage
    return (
        <>
            <SEO seo={seo} />
            <Services />
        </>
    );
}

export default index;