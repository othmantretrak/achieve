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

function PricingTable3({ sitInfo }) {
  const [open, setOpen] = useState("p2");

  return (
    <>
      <Header3 />
      <div className="page-content bg-gray">
        {/* <!-- Banner  --> */}
        <div
          className="dlab-bnr-inr style-1 bg-primary"
          style={{
            backgroundImage: "url(images/banner/bnr2.png), var(--gradient-sec)",
            backgroundSize: "cover, 200%",
          }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Pricing Table</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row style-1">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Pricing Table
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
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
