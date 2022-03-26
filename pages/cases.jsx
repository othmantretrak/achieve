import React from "react";
import Banner2 from "../element/banner2";
import Cta from "../element/cta";
import Projects2 from "../element/Projects-2";
import Testimonial2 from "../element/testimonial-2";
import Footer from "../layout/footer";
import Header from "../layout/header";
import { getAllSiteInfo, getAllTestimonials } from "../lib/api";

function projects({ sitInfo, testimonials }) {
  return (
    <div>
      <Header />
      {/* <!-- Banner  --> */}
      <Banner2 name="Cases" />
      {/* <!-- Banner End --> */}

      <Projects2 />
      <Testimonial2 testimonials={testimonials} />
      <Cta />
      <Footer sitInfo={sitInfo} />
    </div>
  );
}
export async function getStaticProps({ preview = false }) {
  const sitInfo = await getAllSiteInfo(preview);
  const testimonials = await getAllTestimonials(preview);
  //console.log({ services });
  return {
    props: { sitInfo, testimonials },
    revalidate: 1,
  };
}
export default projects;
