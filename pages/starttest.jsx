import { useState } from "react";
import { useRouter } from "next/router";
//import ModalVideo from "react-modal-video";

import Image from "next/image";
//import { getAllCases, getAllSiteInfo, getOneCase } from "../../lib/api";
import Banner2 from "../element/banner2";
//import { imageBuilder } from "../../lib/sanity";
//import PostBody from "../../component/post-body";
import Cta from "../element/cta";
import Faq3 from "../component/faq3";
import MetaTags from "../layout/MetaTags";
import Slider1 from "../element/slider-1";
import Clients from "../element/clients";
import AboutUs from "../element/aboutUs";
import Service from "../element/service";
import Works from "../component/works";
import PricingT4 from "../component/pricingTable-4";
import Testimonial2 from "../element/testimonial-2";
import OurPromises from "../component/OurPromises";
import {
  getAllCases,
  getAllCategories,
  getAllCompanies,
  getAllFaq,
  getAllFaqCategories,
  getAllOverOns,
  getAllPrice,
  getAllServices,
  getAllSiteInfo,
  getAllTeams,
  getAllTestimonials,
} from "../lib/api";
import StartSlider from "../element/startPge/startSlider";
import StartService from "../element/startPge/startService";
import StartProblem from "../element/startPge/startProblem";
import StartQuote from "../element/startPge/startQuote";
import StartPersonal from "../element/startPge/startPrsonal";
import StartAboutUs from "../element/startPge/StartAboutUs";
import StartSteps from "../element/startPge/startSteps";
import StartWhatYouGet from "../element/startPge/StartWhatYouGet";
import Quote4 from "../element/quote-4";

function StartTest({
  testimonials,
  preview,
  faqs,
  sitInfo,
  overOns,
  categories,
  faqCategories,
  cases,
  prices,
  services,
  companies,
}) {
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <MetaTags
        title="Groeien op basis van data en de kracht van creativiteit."
        keywords="media agency, ads management"
        desc="Groeien op basis van data en de kracht van creativiteit."
      />

      <>
        <div
          className="page-content homepage-container bg-gray start-page"
          id="top"
        >
          <StartSlider />
          <StartService />
          <StartProblem />
          <StartQuote />
          <StartPersonal />
          <StartAboutUs />
          <StartSteps />
          <OurPromises overOns={overOns} />
          <Testimonial2 testimonials={testimonials} />
          <StartWhatYouGet />
          <PricingT4 prices={prices} />
          <Clients companies={companies} />
          <Quote4 />
          <Cta />
        </div>
      </>
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
  const overOns = await getAllOverOns(preview);
  const companies = await getAllCompanies(preview);
  return {
    props: {
      testimonials,
      preview,
      faqs,
      overOns,
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
export default StartTest;
