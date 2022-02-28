import { useState } from "react";
import PricingT3 from "../component/pricingTable-3";
import Footer3 from "../layout/footer-3";
import Header3 from "../layout/header-3";
import Link from "next/link";
import PriceCard from "../component/PriceCard";
import Tabs from "../component/Tabs";
import PricingT4 from "../component/pricingTable-4";
import Footer from "../layout/footer";
import { getAllSiteInfo } from "../lib/api";
import Banner from "../element/banner";
import Banner2 from "../element/banner2";
import Header from "../layout/header";

function PricingTable3({ sitInfo }) {
  const [open, setOpen] = useState("p2");

  return (
    <>
      <Header />
      <div className="page-content bg-gray">
        {/* <!-- Banner  --> */}
        <Banner2 name="Over Ons" />
        {/* <!-- Banner End --> */}
        <PricingT4 />
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

export default PricingTable3;
