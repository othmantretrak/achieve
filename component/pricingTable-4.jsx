import { useState } from "react";
import Fire from "./iconCompenents/Fire";
import PriceCard from "./PriceCard";
import Tabs from "./Tabs";
function PricingT4({ prices }) {
  const [tab, setTab] = useState(1);
  const handleClick = (p) => {
    //console.log(p);
    setTab(p);
  };
  //console.log(prices);
  const tab1 = prices?.filter(
    (p) => p._id === "5ca77eb8-669c-42fa-9f45-65b742d420c0"
  );
  const tab2 = prices?.filter(
    (p) => p._id === "336ea946-3412-4f19-bedf-966dace4b6b4"
  );
  const tab3 = prices?.filter(
    (p) => p._id === "e57740b4-82d2-4f46-a1b8-860a62beea67"
  );
  const tab4 = prices?.filter(
    (p) => p._id === "8524dc60-fb73-4207-b987-238a7103f83f"
  );
  console.log(tab1);
  return (
    <>
      {/* <!-- Pricing Table --> */}
      <section className="content-inner">
        <div className="container">
          <Tabs onclickTab={handleClick} tab={tab} />
          {tab === 1 && (
            <div className="row">
              <PriceCard service={tab1} name="Basic" price={tab1[0].b_price} />
              <PriceCard
                service={tab1}
                name="Standard"
                price={tab1[0].s_price}
              />
              <PriceCard
                service={tab1}
                name="Premium"
                price={tab1[0].p_price}
              />
            </div>
          )}
          {tab === 2 && (
            <div className="row">
              <PriceCard service={tab2} name="Basic" price={tab2[0].b_price} />
              <PriceCard
                service={tab2}
                name="Standard"
                price={tab2[0].s_price}
              />
              <PriceCard
                service={tab2}
                name="Premium"
                price={tab2[0].p_price}
              />
            </div>
          )}
          {tab === 3 && (
            <div className="row">
              <PriceCard service={tab3} name="Basic" price={tab3[0].b_price} />
              <PriceCard
                service={tab3}
                name="Standard"
                price={tab3[0].s_price}
              />
              <PriceCard
                service={tab3}
                name="Premium"
                price={tab3[0].p_price}
              />
            </div>
          )}
          {tab === 4 && (
            <div className="row">
              <PriceCard service={tab4} name="Basic" price={tab4[0].b_price} />
              <PriceCard
                service={tab4}
                name="Standard"
                price={tab4[0].s_price}
              />
              <PriceCard
                service={tab4}
                name="Premium"
                price={tab4[0].p_price}
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default PricingT4;
