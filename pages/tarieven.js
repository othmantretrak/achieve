import { useState } from "react";
import PricingT3 from "../component/pricingTable-3";
import Footer3 from "../layout/footer-3";
import Header3 from "../layout/header-3";
import Link from "next/link";
import PriceCard from "../component/PriceCard";
import Tabs from "../component/Tabs";
import PricingT4 from "../component/pricingTable-4";
import Footer from "../layout/footer";
import { getAllCompanies, getAllPrice, getAllSiteInfo } from "../lib/api";
import Banner from "../element/banner";
import Banner2 from "../element/banner2";
import Header from "../layout/header";
import Cta from "../element/cta";
import Clients from "../element/clients";

function PricingTable3({ sitInfo, prices, companies }) {
  const [open, setOpen] = useState("p2");

  return (
    <>
      <Header />
      <div className="page-content bg-gray pricing-tablee">
        {/* <!-- Banner  --> */}
        <Banner2 name="Tarieven" />
        {/* <!-- Banner End --> */}
        <PricingT4 prices={prices} />
        <Clients companies={companies} />
      </div>
      <Cta />
      <Footer sitInfo={sitInfo} />
    </>
  );
}
export async function getStaticProps({ preview = false }) {
  const sitInfo = await getAllSiteInfo(preview);

  const prices = await getAllPrice(preview);
  const companies = await getAllCompanies(preview);
  //console.log({ prices });
  return {
    props: { sitInfo, prices, companies },
    revalidate: 1,
  };
}

export default PricingTable3;
