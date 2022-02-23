import { useState } from "react";
import Fire from "./iconCompenents/Fire";
function PricingT3() {
  const [open, setOpen] = useState("p2");
  return (
    <>
      {/* <!-- Pricing Table --> */}
      <section className="content-inner">
        <div className="container">
          <div className="pricingtable-row">
            <div className="row">
              <div
                className="col-lg-4 col-md-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div
                  className={`${
                    open === "p1"
                      ? "pricingtable-wrapper style-1 m-b30 active"
                      : "pricingtable-wrapper style-1 m-b30"
                  }`}
                  onMouseOver={() => setOpen("p1")}
                >
                  <div className="pricingtable-inner">
                    <div className="pricingtable-head">
                      <div className="pricingtable-title">
                        <h3>Basic Plan</h3>
                      </div>
                      <div className="icon-cell">
                        <img src="images/pricingtable/icon1.png" alt="" />
                      </div>
                    </div>
                    <div className="pricingtable-price">
                      <h2 className="pricingtable-bx">
                        €497<small className="pricingtable-type">/MAAND</small>
                      </h2>
                    </div>
                    <ul className="pricingtable-features">
                      <li>
                        <span>Soort advertentie</span>
                        <span className="detail">(Search)</span>
                      </li>
                      <li>
                        <span>Advertentiegroepen</span>
                        <span className="detail">(max. 3)</span>
                      </li>
                      <li>
                        <span>Maandelijkse rapportage</span>
                        <span className="detail">(yes)</span>
                      </li>
                      <li>
                        <span>Remarketing</span>
                        <span className="detail">(no)</span>
                      </li>
                      <li>
                        <span>Minimaal advertentie budget</span>
                        <span className="detail">(€600 per maand)</span>
                      </li>
                      <li>
                        <span>Geschatte opstartkosten</span>
                        <span className="detail">(Eenmalig €497)</span>
                      </li>
                    </ul>
                    <div className="pricingtable-footer">
                      <a
                        href="javascript:void(0);"
                        className="btn btn-corner btn-outline-primary"
                      >
                        <Fire />
                        Start Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <div
                  className={`${
                    open === "p2"
                      ? "pricingtable-wrapper style-1 m-b30 active"
                      : "pricingtable-wrapper style-1 m-b30"
                  }`}
                  onMouseOver={() => setOpen("p2")}
                >
                  <div className="pricingtable-inner">
                    <div className="pricingtable-head">
                      <div className="pricingtable-title">
                        <h3>Standart Plan</h3>
                      </div>
                      <div className="icon-cell">
                        <img src="images/pricingtable/icon2.png" alt="" />
                      </div>
                    </div>
                    <div className="pricingtable-price">
                      <h2 className="pricingtable-bx">
                        €997<small className="pricingtable-type">/MAAND</small>
                      </h2>
                    </div>
                    <ul className="pricingtable-features">
                      <li>
                        <span>Soort advertentie</span>
                        <span className="detail">
                          (max. 4 search en 1 remarketing display)
                        </span>
                      </li>
                      <li>
                        <span>Advertentiegroepen</span>
                        <span className="detail">(max. 5)</span>
                      </li>
                      <li>
                        <span>Maandelijkse rapportage</span>
                        <span className="detail">(yes)</span>
                      </li>
                      <li>
                        <span>Remarketing</span>
                        <span className="detail">(yes)</span>
                      </li>
                      <li>
                        <span>Minimaal advertentie budget</span>
                        <span className="detail">(€1500 per maand)</span>
                      </li>
                      <li>
                        <span>Geschatte opstartkosten</span>
                        <span className="detail">(Eenmalig €997)</span>
                      </li>
                    </ul>
                    <div className="pricingtable-footer">
                      <a
                        href="javascript:void(0);"
                        className="btn btn-corner btn-outline-primary"
                      >
                        <Fire />
                        Start Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.6s"
              >
                <div
                  className={`${
                    open === "p3"
                      ? "pricingtable-wrapper style-1 m-b30 active"
                      : "pricingtable-wrapper style-1 m-b30"
                  }`}
                  onMouseOver={() => setOpen("p3")}
                >
                  <div className="pricingtable-inner">
                    <div className="pricingtable-head">
                      <div className="pricingtable-title">
                        <h3>Premium Plan</h3>
                      </div>
                      <div className="icon-cell">
                        <img src="images/pricingtable/icon3.png" alt="" />
                      </div>
                    </div>
                    <div className="pricingtable-price">
                      <h2 className="pricingtable-bx">
                        €2497<small className="pricingtable-type">/MAAND</small>
                      </h2>
                    </div>
                    <ul className="pricingtable-features">
                      <li>
                        <span>Soort advertentie</span>
                        <span className="detail">
                          (max. 7 search, 1 display en 2 remarketing)
                        </span>
                      </li>
                      <li>
                        <span>Advertentiegroepen</span>
                        <span className="detail">(max. 5)</span>
                      </li>
                      <li>
                        <span>Maandelijkse rapportage</span>
                        <span className="detail">(yes)</span>
                      </li>
                      <li>
                        <span>Remarketing</span>
                        <span className="detail">(yes)</span>
                      </li>
                      <li>
                        <span>Minimaal advertentie budget</span>
                        <span className="detail">(€3000 per maand)</span>
                      </li>
                      <li>
                        <span>Geschatte opstartkosten</span>
                        <span className="detail">(Eenmalig €1497)</span>
                      </li>
                    </ul>
                    <div className="pricingtable-footer">
                      <a
                        href="javascript:void(0);"
                        className="btn btn-corner btn-outline-primary"
                      >
                        <Fire />
                        Start Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PricingT3;
