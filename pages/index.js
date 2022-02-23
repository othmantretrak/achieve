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
import Quote2 from "../element/quote-2";
import Quote3 from "../element/quote-3";
import Service from "../element/service";
import Slider1 from "../element/slider-1";
import Team from "../element/team";
import Testimonial from "../element/testimonial";
import Testimonial2 from "../element/testimonial-2";
import Testimonial3 from "../element/testimonial-3";
import Footer from "../layout/footer";
import Header from "../layout/header";
import initIsotope from "../common/initIsotope";
import Head from "next/head";
import Header3 from "../layout/header-3";
import Slider3 from "../element/slider-3";
import Slider2 from "../element/slider-2";
import PricingT3 from "../component/pricingTable-3";
function Home() {
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
      </Head>
      <Header />
      <div className="page-content bg-white" id="top">
        <Slider1 />
        {/*  <Slider2 />
        <Slider3 /> */}
        <Clients />
        {/* <Service /> */}
        <AboutUs />
        <Counter />
        <Features />
        <Projects3 />
        {/* <Team /> */}
        {/* <Pricing /> */}
        <PricingT3 />
        <Newsletter />
        <Testimonial2 />
        {/* <Blog /> */}
        <Quote3 />
        <Cta />
      </div>
      <Footer />
    </>
  );
}

export default Home;
