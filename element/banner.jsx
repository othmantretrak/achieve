import Link from "next/link";
import React from "react";

function Banner({ name }) {
  return (
    <div
      className="dlab-bnr-inr overlay-primary-dark"
      style={{ backgroundImage: "url(images/banner/bnr1.jpg)" }}
    >
      <div className="container">
        <div className="dlab-bnr-inr-entry">
          <h1>{name}</h1>
        </div>
      </div>
    </div>
  );
}

export default Banner;
