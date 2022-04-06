import { useEffect } from "react";
import AboutUs from "../element/aboutUs";
import Clients from "../element/clients";
import Cta from "../element/cta";
import Accordion_sm from "../element/accordion_sm";
import Service from "../element/service";
import Slider1 from "../element/slider-1";
import Testimonial2 from "../element/testimonial-2";
import Footer from "../layout/footer";
import Header from "../layout/header";
import initIsotope from "../common/initIsotope";
import Head from "next/head";
import PricingT4 from "../component/pricingTable-4";
//import Works1 from "../components/Works1";
import {
  getAllCases,
  getAllCategories,
  getAllCompanies,
  getAllFaq,
  getAllFaqCategories,
  getAllPostsForHome,
  getAllPrice,
  getAllServices,
  getAllSiteInfo,
  getAllTeams,
  getAllTestimonials,
} from "../lib/api";
import Works from "../component/works";
import Faq3 from "../component/faq3";
function Home({
  testimonials,
  faqs,
  sitInfo,
  categories,
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
      <Head>
        {/* <link rel="stylesheet" href="/assets/css/style.css" /> */}
        {/* <link rel="stylesheet" href="/assets/css/style.css" /> */}
        <title>
          Achieve – Groeien op basis van data en de kracht van creativiteit.
        </title>
      </Head>
      <Header />
      <div className="page-content homepage-container bg-gray" id="top">
        <Slider1 />
        {/*  <Slider2 />
        <Slider3 /> */}
        <Clients companies={companies} />
        <AboutUs />
        <Service services={services} />
        {/* <Counter /> */}
        {/* <Features /> */}
        <Works />
        {/*  <Projects3 categories={categories} cases={cases} /> */}
        {/* <Team /> */}
        {/* <Pricing /> */}
        <PricingT4 prices={prices} />
        {/* <Newsletter /> */}
        <Testimonial2 testimonials={testimonials} />
        <div className="container homepagefaq-container bg-gray">
          <div className="section-head style-3 text-center">
            <h2 className="title">Veelgestelde vragen</h2>
            <div className="dlab-separator style-2 bg-primary"></div>
          </div>
          <Faq3 categories={faqCategories} faqs={faqs} />
          {/* <Accordion_sm faqs={faqs} /> */}
        </div>
        {/* <Blog /> */}
        {/* <Quote3 /> */}
        <Cta />
      </div>
      {/* <googleMap isMarkerShown /> */}
      {/*  <googleMap
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      /> */}
      <Footer sitInfo={sitInfo} />
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
  //console.log({ team });
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
