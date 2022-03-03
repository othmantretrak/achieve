import { useState } from "react";
import Fire from "./iconCompenents/Fire";
import TablePrice from "./tablePrice";
function PricingT3() {
  const [open, setOpen] = useState("p2");
  return (
    <>
      {/* <!-- Pricing Table --> */}
      <section className="content-inner">
        <div className="container">
          <div className="pricingtable-row">
            <div className="row">
              <TablePrice />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PricingT3;
