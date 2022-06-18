import { useEffect } from "react";
import AboutUs from "../element/aboutUs";
import Clients from "../element/clients";
import Cta from "../element/cta";
import Service from "../element/service";
import Slider1 from "../element/slider-1";
import Testimonial2 from "../element/testimonial-2";
import initIsotope from "../common/initIsotope";
import PricingT4 from "../component/pricingTable-4";
import {
  getAllCases,
  getAllCategories,
  getAllCompanies,
  getAllFaq,
  getAllFaqCategories,
  getAllPrice,
  getAllServices,
  getAllSiteInfo,
  getAllTeams,
  getAllTestimonials,
} from "../lib/api";
import Works from "../component/works";
import Faq3 from "../component/faq3";
import Layout from "../layout/Layout";
import MetaTags from "../layout/MetaTags";
function Home({
  testimonials,
  faqs,
  cases,
  faqCategories,
  prices,
  services,
  companies,
}) {
  useEffect(() => {
    document.querySelector("body").setAttribute("color", "color_1");
  }, []);
  useEffect(() => {
    document.querySelector("body").classList.add("index3");
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);
  return (
    <>
      <MetaTags
        title="Groeien op basis van data en de kracht van creativiteit."
        keywords="media agency, ads management"
        desc="Groeien op basis van data en de kracht van creativiteit."
      />

      <Layout>
        <div className="page-content homepage-container bg-gray" id="top">
          <Slider1 />
          <Clients companies={companies} />
          <AboutUs />
          <Service services={services} />
          <Works cases={cases} title="Case studies" />
          <PricingT4 prices={prices} />
          <Testimonial2 testimonials={testimonials} />
          <div className="container homepagefaq-container bg-gray">
            <div className="section-head style-3 text-center">
              <h2 className="title">Veelgestelde vragen</h2>
              <div className="dlab-separator style-2 bg-primary"></div>
            </div>
            <Faq3 categories={faqCategories} faqs={faqs} />
          </div>
          <Cta />
        </div>
      </Layout>
    </>
  );
}
export async function getStaticProps({ preview = false }) {
  const testimonials = await getAllTestimonials(preview);
  const faqs = await getAllFaq(preview);
  const prices = await getAllPrice(preview);
  const sitInfo = await getAllSiteInfo(preview);
  const categories = await getAllCategories(preview);
  const faqCategories = await getAllFaqCategories(preview);
  const cases = await getAllCases(preview);
  const team = await getAllTeams(preview);
  const services = await getAllServices(preview);
  const companies = await getAllCompanies(preview);
  return {
    props: {
      testimonials,
      preview,
      faqs,
      sitInfo,
      categories,
      faqCategories,
      cases,
      prices,
      services,
      companies,
    },
    revalidate: 1,
  };
}
export default Home;
