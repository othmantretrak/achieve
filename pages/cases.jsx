import React from "react";
import Banner2 from "../element/banner2";
import Cta from "../element/cta";
import Projects2 from "../element/Projects-2";
import Projects3 from "../element/Projects-3";
import Testimonial2 from "../element/testimonial-2";
import Footer from "../layout/footer";
import Header from "../layout/header";
import {
  getAllCases,
  getAllCategories,
  getAllSiteInfo,
  getAllTestimonials,
} from "../lib/api";

function projects({ sitInfo, testimonials, cases, categories }) {
  return (
    <div className="cases">
      <Header />
      {/* <!-- Banner  --> */}
      <Banner2 name="Cases" />
      {/* <!-- Banner End --> */}

      {/* <Projects2 /> */}
      <Projects3 categories={categories} cases={cases} />
      <Testimonial2 testimonials={testimonials} />
      <Cta />
      <Footer sitInfo={sitInfo} />
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
export default projects;
