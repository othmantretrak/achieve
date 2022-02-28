import Link from "next/link";
import React from "react";
import Banner from "../element/banner";
import Banner2 from "../element/banner2";
import Projects2 from "../element/Projects-2";
import Header from "../layout/header";
import Header2 from "../layout/header-2";
import Header3 from "../layout/header-3";

function projects() {
  return (
    <div>
      <Header />
      {/* <!-- Banner  --> */}
      <Banner2 name="Over Ons" />
      {/* <!-- Banner End --> */}

      <Projects2 />
    </div>
  );
}

export default projects;
