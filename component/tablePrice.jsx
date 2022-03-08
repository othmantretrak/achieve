import React from "react";
import CustomBtn from "../element/CustomBtn";

function TablePrice({ service }) {
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
  return (
    <>
      <div className="table-responsive rounded-md">
        <table className=" single-pricing-table table">
          <thead>
            <tr className="">
              <th className="pricing-features" scope="col">
                <h3>Kies jouw pakket</h3>
              </th>
              <th className="pricing-features" scope="col">
                <div className="pricing-header">
                  <h3>Basic</h3>
                </div>
                <div className="price">
                  <sup>€</sup>
                  {service?.b_price}{" "}
                  <sub>
                    {(service?.periodb.eenmalig && "/ Eenmalig") ||
                      (service?.periodb.maandelijks && "/ Maandelijks")}
                    {/*   {service?._id === "8524dc60-fb73-4207-b987-238a7103f83f"
                      ? "/ EENMALIG"
                      : "/ Maandelijks"} */}
                  </sub>
                </div>
              </th>
              <th className="pricing-features" scope="col">
                {" "}
                <div className="pricing-header">
                  <h3>Standard</h3>
                </div>
                <div className="price">
                  <sup>€</sup>
                  {service?.s_price}{" "}
                  <sub>
                    {(service?.periods.eenmalig && "/ EENMALIG") ||
                      (service?.periods.maandelijks && "/ Maandelijks")}
                  </sub>
                </div>
              </th>
              <th className="pricing-features" scope="col">
                <div className="pricing-header">
                  <h3>Premium</h3>
                </div>
                <div className="price">
                  <sup>€</sup>
                  {service?.p_price}{" "}
                  <sub>
                    {(service?.periodp.eenmalig && "/ EENMALIG") ||
                      (service?.periodp.maandelijks && "/ Maandelijks")}
                  </sub>
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
                      {s?.title}
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
                <CustomBtn />
              </td>
              <td>
                <CustomBtn />
              </td>
              <td>
                <CustomBtn />
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
