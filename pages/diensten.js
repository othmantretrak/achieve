import AllServices from "../element/all-services";
import {
  getAllFaq,
  getAllFaqCategories,
  getAllServices,
  getAllSiteInfo,
} from "../lib/api";
import Banner2 from "../element/banner2";
import Cta from "../element/cta";
import Faq3 from "../component/faq3";
import MetaTags from "../layout/MetaTags";

function Services1({ sitInfo, faqs, services, faqCategories }) {
  return (
    <>
      <MetaTags title="Diensten" keywords="Diensten" desc="Achieve Diensten" />
      <div className="page-content bg-gray">
        <Banner2 name="Diensten" />
        <AllServices services={services} />
        <div className="container diensten-container">
          <div className="section-head style-3 text-center">
            <h2 className="title">Veelgestelde vragen</h2>
            <div className="dlab-separator style-2 bg-primary"></div>
          </div>
          <Faq3 categories={faqCategories} faqs={faqs} />
        </div>
        <Cta />
      </div>
    </>
  );
}
export async function getStaticProps({ preview = false }) {
  const sitInfo = await getAllSiteInfo(preview);
  const faqs = await getAllFaq(preview);
  const faqCategories = await getAllFaqCategories(preview);
  const services = await getAllServices(preview);
  //console.log({ services });
  return {
    props: { sitInfo, faqCategories, faqs, services },
    revalidate: 1,
  };
}
export default Services1;
