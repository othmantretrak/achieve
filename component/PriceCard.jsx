import React from "react";
import CustomBtn from "../element/CustomBtn";

function PriceCard({ name, price, btnColor, arry }) {
  return (
    <div className="col-lg-4 col-sm-6">
      <div className="single-pricing-table left-align">
        <div className="pricing-header">
          <h3>{name}</h3>
        </div>
        <div className="price">
          <sup>$</sup>
          {price} <sub>/ monthly</sub>
        </div>
        <ul className="pricing-features">
          <li className="">
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
          </li>
        </ul>
        <CustomBtn />
      </div>
    </div>
  );
}

export default PriceCard;
