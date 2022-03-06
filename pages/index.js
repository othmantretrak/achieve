import { useEffect } from "react";
import AboutUs from "../element/aboutUs";
import Blog from "../element/blog";
import Clients from "../element/clients";
import Counter from "../element/counter";
import Cta from "../element/cta";
import Newsletter from "../element/newsletter";
import Features from "../element/our-features";
import Pricing from "../element/pricing";
import Projects2 from "../element/Projects-2";
import Projects3 from "../element/Projects-3";
import Quote from "../element/quote";
import Accordion from "../element/accordion";
import Accordion_sm from "../element/accordion_sm";
import Quote2 from "../element/quote-2";
import Quote3 from "../element/quote-3";
import Service from "../element/service";
import Slider1 from "../element/slider-1";
import Team from "../element/team";
import Testimonial from "../element/testimonial";
import Testimonial2 from "../element/testimonial-2";
import Testimonial3 from "../element/testimonial-3";
import Footer from "../layout/footer";
import Footer3 from "../layout/footer-3";
import Header from "../layout/header";
import initIsotope from "../common/initIsotope";
import Head from "next/head";
import Header3 from "../layout/header-3";
import Slider3 from "../element/slider-3";
import Slider2 from "../element/slider-2";
import PricingT3 from "../component/pricingTable-3";
import PricingT4 from "../component/pricingTable-4";
import {
  getAllCases,
  getAllCategories,
  getAllCompanies,
  getAllFaq,
  getAllPostsForHome,
  getAllPrice,
  getAllServices,
  getAllSiteInfo,
  getAllTeams,
  getAllTestimonials,
} from "../lib/api";
import googleMap from "../component/googleMap";
import Services from "../element/service";
function Home({
  testimonials,
  faqs,
  sitInfo,
  categories,
  cases,
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
      <div className="page-content bg-gray" id="top">
        <Slider1 />
        {/*  <Slider2 />
        <Slider3 /> */}
        <Clients companies={companies} />
        <AboutUs />
        <Service services={services} />
        {/* <Counter /> */}
        {/* <Features /> */}
        <Projects3 categories={categories} cases={cases} />
        {/* <Team /> */}
        {/* <Pricing /> */}
        <PricingT4 prices={prices} />
        {/* <Newsletter /> */}
        <Testimonial2 testimonials={testimonials} />
        <div className="container  bg-gray">
          <div className="section-head style-3 text-center">
            <h2 className="title">Veelgestelde vragen</h2>
            <div className="dlab-separator style-2 bg-primary"></div>
          </div>
          <Accordion_sm faqs={faqs} />
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
      cases,
      prices,
      services,
      companies,
    },
    revalidate: 1,
  };
}
export default Home;
