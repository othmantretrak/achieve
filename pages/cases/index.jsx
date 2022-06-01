import React from "react";
import Works from "../../component/works";
import Banner2 from "../../element/banner2";
import Cta from "../../element/cta";
import Projects2 from "../../element/Projects-2";
import Projects3 from "../../element/Projects-3";
import Testimonial2 from "../../element/testimonial-2";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import MetaTags from "../../layout/MetaTags";
import {
  getAllCases,
  getAllCategories,
  getAllSiteInfo,
  getAllTestimonials,
} from "../../lib/api";

function Projects({ sitInfo, testimonials, cases, categories }) {
  return (
    <div className="cases">
      <MetaTags title="Cases" keywords="Cases" desc="Achieve Cases" />
      <Banner2 name="Cases" />
      {/* <Projects3 categories={categories} cases={cases} /> */}
      <Works classn="case-index" cases={cases} />
      <Testimonial2 testimonials={testimonials} />
      <Cta />
    </div>
  );
}
export async function getStaticProps({ preview = false }) {
  const sitInfo = await getAllSiteInfo(preview);
  const testimonials = await getAllTestimonials(preview);
  const categories = await getAllCategories(preview);
  const cases = await getAllCases(preview);
  //console.log({ services });
  return {
    props: { sitInfo, testimonials, cases, categories },
    revalidate: 1,
  };
}
export default Projects;
