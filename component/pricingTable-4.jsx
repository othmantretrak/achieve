import { useEffect, useRef } from "react";
import { useState } from "react";
import Fire from "./iconCompenents/Fire";
import PriceCard from "./PriceCard";
import TablePrice from "./tablePrice";
import Tabs from "./Tabs";
import useOnScreen from "../common/useOnScreen";
function PricingT4({ prices }) {
  const [tab, setTab] = useState(prices[0]._id);
  const [tabName, setTabName] = useState(prices[0].name);
  const [showHand, setShowHand] = useState(false);
  const handleClick = (p, name) => {
    //console.log(p);
    setTab(p);
    setTabName(name);
  };
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  useEffect(() => {
    isVisible && setShowHand(true);

    setTimeout(() => {
      setShowHand(false);
    }, "8000");
  }, [isVisible]);

  return (
    <>
      {/* <!-- Pricing Table --> */}
      <section ref={ref} className="content-inner m-t100 bg-gray pricing-table">
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
        {showHand && (
          <div id="container-div">
            <div>
              <img
                id="hand"
                src="https://res.cloudinary.com/tretrak/image/upload/v1655529351/achieve/1093252_tql41u.png"
              />
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default PricingT4;
