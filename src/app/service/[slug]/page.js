import SEO from "@/components/global/SEO";
import Service from "@/components/service/Services";
import servicespage from "@/seo/servicespage";

const index = () => {
    const seo = servicespage
    return (
        <>
            <SEO seo={seo} />
            <Service />
        </>
    );
}

export default index;