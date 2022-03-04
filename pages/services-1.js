import Footer from "../layout/footer";
import Header3 from "../layout/header-3";
import { useState } from "react";
import AllServices from "../element/all-services";
import Team from "../element/team";
import Testimonial from "../element/testimonial";
import Link from "next/link";
import Quote from "../element/quote";
import { getAllSiteInfo } from "../lib/api";
import Banner2 from "../element/banner2";
import Header from "../layout/header";
import Cta from "../element/cta";

function Services1({ sitInfo }) {
  const [open, setOpen] = useState("p2");
  return (
    <>
      <Header />
      <div className="page-content bg-white">
        {/* <!-- Banner  --> */}
        <Banner2 name="Diensten" />
        {/* <!-- Banner End --> */}

        {/* <!-- Services --> */}
        <AllServices />

        {/* <!-- Team --> */}
        {/* <Team /> */}

        {/* <!-- Testimonials --> */}
        {/* <Testimonial /> */}

        {/* <!-- Get A Quote --> */}
        {/* <Quote /> */}

        {/* <!-- Call To action --> */}
        {/* <Cta /> */}
      </div>
      <Footer sitInfo={sitInfo} />
    </>
  );
}
export async function getStaticProps({ preview = false }) {
  const sitInfo = await getAllSiteInfo(preview);
  //console.log({ cases });
  return {
    props: { sitInfo },
    revalidate: 1,
  };
}
export default Services1;
