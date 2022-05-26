import { useState } from "react";
import Fire from "./iconCompenents/Fire";
import PriceCard from "./PriceCard";
import TablePrice from "./tablePrice";
import Tabs from "./Tabs";
function PricingT4({ prices }) {
  const [tab, setTab] = useState(prices[0]._id);
  const [tabName, setTabName] = useState(prices[0].name);
  const handleClick = (p, name) => {
    //console.log(p);
    setTab(p);
    setTabName(name);
  };
  //console.log({ prices });

  return (
    <>
      {/* <!-- Pricing Table --> */}
      <section className="content-inner pt-100px bg-gray">
        <div className="container">
          <div className="section-head style-3 text-center">
            <h2 className="title">Selecteer één van onze diensten</h2>
            <div className="dlab-separator style-2 bg-primary"></div>
          </div>
          <Tabs onclickTab={handleClick} tab={tab} prices={prices} />
          {prices?.map((p) => (
            <div key={p._id} className="row">
              {tab === p._id && <TablePrice service={p} tab={tabName} />}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default PricingT4;
