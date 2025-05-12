import SEO from "@/components/global/SEO";
import Home from "@/components/home/Home";
import homepage from "@/seo/homepage";

export default async function index() {
  // const seo = await seoService.homepageInfo();
  const seo = homepage;
  return (
    <>
      <SEO seo={seo} />
      <Home />
    </>
  );
}
