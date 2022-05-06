import React from "react";
import CustomBtn from "../element/CustomBtn";

function TablePrice({ service, tab }) {
  //console.log({ service });
  const Allservices = [
    service?.service1,
    service?.service2,
    service?.service3,
    service?.service4,
    service?.service5,
    service?.service6,
    service?.service7,
    service?.service8,
    service?.service9,
    service?.service10,
    service?.service11,
    service?.service12,
  ];
  /* let ff =
    (service?.periodb.eenmalig && "EENMALIG") ||
    (service?.periodb.maandelijks && "Maandelijks");
  console.log({ ff }); */
  const printText = (s) => {
    if (s === "yes") {
      return <i className="fa-solid fa-circle-check"></i>;
    } else if (s === "no") {
      return (
        <i
          style={{ color: "#c41354" }}
          className="fa-solid fa-circle-xmark"
        ></i>
      );
    } else {
      return s;
    }
  };
  const selectedPlan = (plan, price) => {
    Calendly.initPopupWidget({
      url: `https://calendly.com/gratisintake/achieve?a1=${tab}&a2=${plan}&a3=${price}`,
    });
    return false;
    //console.log({ selected: { tab, plan, price } });
  };
  //let va = service?.b_price.split("/")[1]
  let vaB = service?.b_price.split("/")[1];
  let priceNumberB = service?.b_price.split("/")[0];
  let vaP = service?.p_price.split("/")[1];
  let priceNumberP = service?.p_price.split("/")[0];
  let vaS = service?.s_price.split("/")[1];
  let priceNumberS = service?.s_price.split("/")[0];
  let [ab, bb, cb] = priceNumberB.split(".");
  let [ap, bp, cp] = priceNumberP.split(".");
  let [as, bs, cs] = priceNumberS.split(".");
  return (
    <>
      <div className="table-responsive table-price rounded-md">
        <table className=" single-pricing-table table">
          <thead>
            <tr className="">
              <th className="pricing-features jouw" scope="col">
                <h3>Kies jouw pakket</h3>
              </th>
              <th className="pricing-features" scope="col">
                <div className="pricing-header">
                  <h3>{service?.b_name}</h3>
                </div>
                <div className="price">
                  {!vaB ? (
                    <>
                      <sub>{`${ab}.${bb}. `} </sub>
                      <sup className="partir">€</sup>
                      {cb}
                    </>
                  ) : (
                    <>
                      <sup>€</sup>
                      {priceNumberB}
                    </>
                  )}
                  {vaB && <sub>{"/" + vaB}</sub>}
                </div>
              </th>
              <th className="pricing-features" scope="col">
                {" "}
                <div className="pricing-header">
                  <h3>{service?.s_name}</h3>
                </div>
                <div className="price">
                  {!vaS ? (
                    <>
                      <sub> {`${as}.${bs}. `}</sub>{" "}
                      <sup className="partir">€</sup>
                      {cs}
                    </>
                  ) : (
                    <>
                      <sup>€</sup>
                      {priceNumberS}
                    </>
                  )}
                  {vaS && <sub>{"/" + vaS}</sub>}
                </div>
              </th>
              <th className="pricing-features" scope="col">
                <div className="pricing-header">
                  <h3>{service?.p_name}</h3>
                </div>
                <div className="price">
                  {!vaP ? (
                    <>
                      <sub>{`${ap}.${bp}. `} </sub>{" "}
                      <sup className="partir">€</sup>
                      {cp}
                    </>
                  ) : (
                    <>
                      <sup>€</sup>
                      {priceNumberP}
                    </>
                  )}
                  {vaP && <sub>{"/" + vaP}</sub>}
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {Allservices.map(
              (s) =>
                s && (
                  <tr key={s?.title}>
                    <th className="pricing-features" scope="row">
                      <span>{s?.title}</span>
                      {s?.info && (
                        <div className="tooltips fa-solid fa-circle-info">
                          <span className="tooltiptext ">{s?.info}</span>
                        </div>
                      )}
                    </th>
                    <td>{s && printText(s?.seb)}</td>
                    <td>{s && printText(s?.ses)}</td>
                    <td>{s && printText(s?.sep)}</td>
                  </tr>
                )
            )}
            <tr>
              <th></th>
              <td>
                <CustomBtn
                  title="Meer informatie"
                  onClick={() => selectedPlan("Basic", service.b_price)}
                />
              </td>
              <td>
                <CustomBtn
                  title="Meer informatie"
                  onClick={() => selectedPlan("Standard", service.s_price)}
                />
              </td>
              <td>
                <CustomBtn
                  title="Meer informatie"
                  onClick={() => selectedPlan("Premium", service.p_price)}
                />
              </td>
            </tr>
            {/*  <tr>
              <th className="pricing-features" scope="row">
                Soort advertentie
              </th>
              <td>Search</td>
              <td>max. 4 search en 1 remarketing display</td>
              <td>max. 7 search, 1 display en 2 remarketing</td>
            </tr>
            <tr>
              <th className="pricing-features" scope="row">
                Advertentiegroepen
              </th>
              <td>max. 3</td>
              <td>max. 5</td>
              <td>max. 5</td>
            </tr>
            <tr>
              <th className="pricing-features" scope="row">
                Maandelijkse rapportage
              </th>
              <td>
                <i className="fa-solid fa-circle-check"></i>
              </td>
              <td>
                <i className="fa-solid fa-circle-check"></i>
              </td>
              <td>
                <i className="fa-solid fa-circle-check"></i>
              </td>
            </tr>
            <tr>
              <th className="pricing-features" scope="row">
                Remarketing
              </th>
              <td>
                {" "}
                <i
                  style={{ color: "#c41354" }}
                  className="fa-solid fa-circle-xmark"
                ></i>
              </td>
              <td>
                <i className="fa-solid fa-circle-check"></i>
              </td>
              <td>
                <i className="fa-solid fa-circle-check"></i>
              </td>
            </tr>
            <tr>
              <th className="pricing-features" scope="row">
                Minimaal advertentie budget
              </th>
              <td>€600 per maand</td>
              <td>€600 per maand</td>
              <td>€3000 per maand</td>
            </tr>
            <tr>
              <th className="pricing-features" scope="row">
                Geschatte opstartkosten
              </th>
              <td>Eenmalig €497</td>
              <td>Eenmalig €997</td>
              <td>Eenmalig €1497</td>
            </tr> */}
          </tbody>
        </table>
      </div>
      {/*   <div className="col-md-3 col-sm-6">
        <div className="single-pricing-table left-align">
          <div className="pricing-header">
            <h3>Diensten</h3>
          </div>

          <ul className="pricing-features">
            <li className="">
              <i className="fa-solid fa-circle-check"></i>
              Soort advertentie
            </li>
            <li className="">
              <i className="fa-solid fa-circle-check"></i>
              Advertentiegroepen
            </li>
            <li className="">
              <i className="fa-solid fa-circle-check"></i>
              Maandelijkse rapportage
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="single-pricing-table left-align">
          <div className="pricing-header">
            <h3>Basic</h3>
          </div>
          <div className="price">
            <sup>€</sup>
            100 <sub>/ Maandelijks</sub>
          </div>
          <ul className="pricing-features">
            <li className="">
              <i className="fa-solid fa-circle-check"></i>
              Search
            </li>
            <li className="">
              <i className="fa-solid fa-circle-check"></i>
              max. 3
            </li>
            <li className="">
              <i className="fa-solid fa-circle-check"></i>
            </li>
          </ul>
          <CustomBtn />
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="single-pricing-table left-align">
          <div className="pricing-header">
            <h3>Standard</h3>
          </div>
          <div className="price">
            <sup>€</sup>
            100 <sub>/ Maandelijks</sub>
          </div>
          <ul className="pricing-features">
            <li className="">
              <i className="fa-solid fa-circle-check"></i>
              max. 4 search en 1 remarketing display
            </li>
            <li className="">
              <i className="fa-solid fa-circle-check"></i>
              max. 5
            </li>
            <li className="">
              <i className="fa-solid fa-circle-check"></i>
            </li>
          </ul>
          <CustomBtn />
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="single-pricing-table left-align">
          <div className="pricing-header">
            <h3>Premium</h3>
          </div>
          <div className="price">
            <sup>€</sup>
            100 <sub>/ Maandelijks</sub>
          </div>
          <ul className="pricing-features">
            <li className="">
              <i className="fa-solid fa-circle-check"></i>
              max. 7 search, 1 display en 2 remarketing
            </li>
            <li className="">
              <i className="fa-solid fa-circle-check"></i>
              max. 5
            </li>
            <li className="">
              <i className="fa-solid fa-circle-check"></i>
            </li>
          </ul>
          <CustomBtn />
        </div>
      </div> */}
    </>
  );
}

export default TablePrice;
