import { useState } from "react";
import Fire from "./iconCompenents/Fire";
import PriceCard from "./PriceCard";
import TablePrice from "./tablePrice";
import Tabs from "./Tabs";
function PricingT4({ prices }) {
  const [tab, setTab] = useState(prices[0]._id);
  const handleClick = (p) => {
    //console.log(p);
    setTab(p);
  };
  console.log({ prices });
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

  return (
    <>
      {/* <!-- Pricing Table --> */}
      <section className="content-inner bg-gray">
        <div className="container">
          <Tabs onclickTab={handleClick} tab={tab} prices={prices} />
          {prices?.map((p) => (
            <div key={p._id} className="row">
              {tab === p._id && <TablePrice service={p} />}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default PricingT4;
