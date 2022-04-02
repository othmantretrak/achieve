import React from "react";
import CustomBtn from "../element/CustomBtn";

function PriceCard({ name, price, btnColor, service }) {
  const basicCheck = name === "Basic";
  const standardCheck = name === "Standard";
  const PremiumCheck = name === "Premium";
  const Allservices = [
    service[0]?.service1,
    service[0]?.service2,
    service[0]?.service3,
    service[0]?.service4,
    service[0]?.service5,
    service[0]?.service6,
    service[0]?.service7,
  ];

  //console.log({ Allservices });

  return (
    <div className="col-lg-4 col-sm-6">
      <div className="single-pricing-table left-align">
        <div className="pricing-header">
          <h3>{name}</h3>
        </div>
        <div className="price">
          <sup>€</sup>
          {price} <sub>/ Maandelijks</sub>
        </div>
        <ul className="pricing-features">
          {Allservices.map((serv) => {
            //console.log({ serv });
            if (serv) {
              return (
                <li key={serv.title} className="">
                  {basicCheck && serv.seb && (
                    <i className="fa-solid fa-circle-check"></i>
                  )}
                  {basicCheck && !serv.seb && (
                    <i
                      style={{ color: "#c41354" }}
                      className="fa-solid fa-circle-xmark"
                    ></i>
                  )}
                  {standardCheck && serv.ses && (
                    <i className="fa-solid fa-circle-check"></i>
                  )}
                  {standardCheck && !serv.ses && (
                    <i
                      style={{ color: "#c41354" }}
                      className="fa-solid fa-circle-xmark"
                    ></i>
                  )}
                  {PremiumCheck && serv.sep && (
                    <i className="fa-solid fa-circle-check"></i>
                  )}
                  {PremiumCheck && !serv.sep && (
                    <i
                      style={{ color: "#c41354" }}
                      className="fa-solid fa-circle-xmark"
                    ></i>
                  )}

                  {serv.title}
                </li>
              );
            }
          })}
          {/* <li className="">
            <i className="fa-solid fa-circle-check"></i>Soort advertentie
          </li>
           <li className="">
            <i className="fa-solid fa-circle-check"></i>Advertentiegroepen
          </li>
          <li className="">
            <i className="fa-solid fa-circle-check"></i>Maandelijkse rapportage
          </li>
          <li className="">
            <i className="fa-solid fa-circle-check"></i>Remarketing
          </li>
          <li className="">
            <i className="fa-solid fa-circle-check"></i>Minimaal advertentie
            budget
          </li>
          <li className="">
            <i className="fa-solid fa-circle-check"></i>Geschatte opstartkosten
          </li>
          <li className="">
            <i className="fa-solid fa-circle-check"></i>Mobile + Desktop Apps
          </li>
          <li className="">
            <i className="fa-solid fa-circle-check"></i>Quick Responses
          </li>
          <li className="">
            <i className="fa-solid fa-circle-check"></i> Drag &amp; Drop Widgets
          </li>
          <li className="">
            <i
              style={{ color: "#c41354" }}
              className="fa-solid fa-circle-xmark"
            ></i>
            Visitor Notes
          </li>
          <li className="">
            <i
              style={{ color: "#c41354" }}
              className="fa-solid fa-circle-xmark"
            ></i>{" "}
            Google Analytics
          </li> */}
        </ul>
        <CustomBtn />
      </div>
    </div>
  );
}

export default PriceCard;
