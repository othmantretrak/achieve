import Link from "next/link";
import React from "react";

//import pic2 from "./images/main-slider/slider1/pic2.png";

function Banner2({ name }) {
  return (
    <>
      <div
        className="banner-one"
        style={{
          backgroundImage: "url(../images/main-slider/slider1/pic2.png)",
          height: "210px",
        }}
      >
        <div className="container">
          <div className="banner-inner">
            <div className="img1">
              <img src="../images/main-slider/slider1/pic3.png" alt="" />
            </div>
            <div className="img2">
              <img src="../images/main-slider/slider1/pic4.png" alt="" />
            </div>
            <div className="dlab-bnr-inr-entry">
              <h1>{name}</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {name}
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>

        <div className="shape19">
          <img src="../images/shape/shape18.png" alt="image" />
        </div>
        <div className="shape22">
          <img src="../images/shape/shape21.png" alt="image" />
        </div>
        <div className="shape23">
          <img
            src="https://hepro-react.envytheme.com/images/shape/shape22.svg"
            alt="image"
          />
        </div>
        <div className="shape24">
          <img src="/images/shape/shape23.png" alt="image" />
        </div>
        <div className="shape26">
          <img src="/images/shape/shape25.png" alt="image" />
        </div>
      </div>
    </>
  );
}

export default Banner2;
