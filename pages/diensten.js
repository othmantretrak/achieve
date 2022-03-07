import Footer from "../layout/footer";
import Header3 from "../layout/header-3";
import { useState } from "react";
import AllServices from "../element/all-services";
import Team from "../element/team";
import Testimonial from "../element/testimonial";
import Link from "next/link";
import Quote from "../element/quote";
import { getAllFaq, getAllServices, getAllSiteInfo } from "../lib/api";
import Banner2 from "../element/banner2";
import Header from "../layout/header";
import Cta from "../element/cta";
import Accordion_sm from "../element/accordion_sm";

function Services1({ sitInfo, faqs, services }) {
  const [open, setOpen] = useState("p2");
  return (
    <>
      <Header />
      <div className="page-content bg-white">
        {/* <!-- Banner  --> */}
        <Banner2 name="Diensten" />
        {/* <!-- Banner End --> */}

        {/* <!-- Services --> */}
        <AllServices services={services} />

        {/* <!-- Team --> */}
        {/* <Team /> */}

        {/* <!-- Testimonials --> */}
        {/* <Testimonial /> */}

        {/* <!-- Get A Quote --> */}
        {/* <Quote /> */}

        {/* <!-- Call To action --> */}
        {/* <Cta /> */}
      </div>
      <div className="content-inner prt-accordion pt-100px bg-gray">
        <div className="section-head style-3 text-center">
          <h2 className="title">Veelgestelde vragen</h2>
          <div className="dlab-separator style-2 bg-primary"></div>
        </div>
        <Accordion_sm faqs={faqs} />
      </div>
      <Cta />
      <Footer sitInfo={sitInfo} />
    </>
  );
}
export async function getStaticProps({ preview = false }) {
  const sitInfo = await getAllSiteInfo(preview);
  const faqs = await getAllFaq(preview);
  const services = await getAllServices(preview);
  console.log({ services });
  return {
    props: { sitInfo, faqs, services },
    revalidate: 1,
  };
}
export default Services1;
