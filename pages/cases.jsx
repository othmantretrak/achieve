import Link from "next/link";
import React from "react";
import Banner from "../element/banner";
import Banner2 from "../element/banner2";
import Cta from "../element/cta";
import Projects2 from "../element/Projects-2";
import Footer from "../layout/footer";
import Header from "../layout/header";
import Header2 from "../layout/header-2";
import Header3 from "../layout/header-3";
import { getAllSiteInfo } from "../lib/api";

function projects({ sitInfo }) {
  return (
    <div>
      <Header />
      {/* <!-- Banner  --> */}
      <Banner2 name="Cases" />
      {/* <!-- Banner End --> */}

      <Projects2 />
      <Cta />
      <Footer sitInfo={sitInfo} />
    </div>
  );
}
export async function getStaticProps({ preview = false }) {
  const sitInfo = await getAllSiteInfo(preview);
  //console.log({ services });
  return {
    props: { sitInfo },
    revalidate: 1,
  };
}
export default projects;
