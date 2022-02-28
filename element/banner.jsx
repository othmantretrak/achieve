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
  );
}

export default Banner;
