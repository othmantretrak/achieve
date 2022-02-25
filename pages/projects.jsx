import Link from "next/link";
import React from "react";
import Projects2 from "../element/Projects-2";
import Header from "../layout/header";
import Header2 from "../layout/header-2";
import Header3 from "../layout/header-3";

function projects() {
  return (
    <div>
      <Header3 />
      {/* <!-- Banner  --> */}
      <div
        className="dlab-bnr-inr style-1 bg-primary"
        style={{
          backgroundImage: "url(images/banner/bnr2.png), var(--gradient-sec)",
          backgroundSize: "cover, 200%",
        }}
      >
        <div className="container">
          <div className="dlab-bnr-inr-entry">
            <h1>Cases</h1>
            {/* <!-- Breadcrumb Row --> */}
            <nav aria-label="breadcrumb" className="breadcrumb-row style-1">
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Cases
                </li>
              </ul>
            </nav>
            {/* <!-- Breadcrumb Row End --> */}
          </div>
        </div>
      </div>
      {/* <!-- Banner End --> */}

      <Projects2 />
    </div>
  );
}

export default projects;
