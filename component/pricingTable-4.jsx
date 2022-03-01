import { useState } from "react";
import Fire from "./iconCompenents/Fire";
import PriceCard from "./PriceCard";
import Tabs from "./Tabs";
function PricingT4({ prices }) {
  const [tab, setTab] = useState(1);
  const handleClick = (p) => {
    console.log(p);
    setTab(p);
  };
  console.log(prices);
  return (
    <>
      {/* <!-- Pricing Table --> */}
      <section className="content-inner">
        <div className="container">
          <Tabs onclickTab={handleClick} tab={tab} />
          {tab === 1 && (
            <div className="row">
              <PriceCard name="Basic" price="497" />
              <PriceCard name="Standard" price="997" />
              <PriceCard name="Premium" price="2497" />
            </div>
          )}
          {tab === 2 && (
            <div className="row">
              <PriceCard name="Basic" price="397" />
              <PriceCard name="Standard" price="997" />
              <PriceCard name="Premium" price="2497" />
            </div>
          )}
          {tab === 3 && (
            <div className="row">
              <PriceCard name="Basic" price="997" />
              <PriceCard name="Standard" price="1097" />
              <PriceCard name="Premium" price="2497" />
            </div>
          )}
          {tab === 4 && (
            <div className="row">
              <PriceCard name="Basic" price="2097" />
              <PriceCard name="Standard" price="3097" />
              <PriceCard name="Premium" price="5497" />
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default PricingT4;
