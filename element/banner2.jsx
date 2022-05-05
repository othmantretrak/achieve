import Link from "next/link";
import React from "react";

//import pic2 from "./images/main-slider/slider1/pic2.png";

function Banner2({ name }) {
  return (
    <>
      <div
        className="banner-one"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/tretrak/image/upload/v1651464605/achieve/pic2_eyr13d.png)",
          height: "210px",
        }}
      >
        <div className="container">
          <div className="banner-inner">
            <div className="img1">
              <img
                src="https://res.cloudinary.com/tretrak/image/upload/v1651464604/achieve/pic3_dcdbdc.png"
                alt=""
              />
            </div>
            <div className="img2">
              <img
                src="https://res.cloudinary.com/tretrak/image/upload/v1651464604/achieve/pic4_x8fin9.png"
                alt=""
              />
            </div>
            <div className="dlab-bnr-inr-entry">
              <h1>{name}</h1>
            </div>
          </div>
        </div>

        <div className="shape22">
          <img
            src="https://res.cloudinary.com/tretrak/image/upload/v1651464334/achieve/shape21_l90uqd.png"
            alt="image"
          />
        </div>
        <div className="shape23">
          <img
            src="https://hepro-react.envytheme.com/images/shape/shape22.svg"
            alt="image"
          />
        </div>
        <div className="shape24">
          <img
            src="https://res.cloudinary.com/tretrak/image/upload/v1651464334/achieve/shape23_ygdtix.png"
            alt="image"
          />
        </div>
        <div className="shape26">
          <img
            src="https://res.cloudinary.com/tretrak/image/upload/v1651464334/achieve/shape25_k6db7h.png"
            alt="image"
          />
        </div>
      </div>
    </>
  );
}

export default Banner2;
