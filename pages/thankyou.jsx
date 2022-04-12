import React from "react";
import Banner2 from "../element/banner2";
import Footer from "../layout/footer";
import Header from "../layout/header";
import { getAllSiteInfo } from "../lib/api";

function thankyou({ sitInfo }) {
  return (
    <>
      <div className="page-content bg-white">
        {/* <!-- Banner  --> */}
        <Banner2 name="Thank you" />
        {/* <!-- About Us --> */}
        <section className="content-inner pt-100px">
          <div className="container">
            <div className="row align-items-center">
              <div
                className=" m-b30 wow fadeInRight"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <div className="section-head style-1 mb-4">
                  <h6 className="sub-title bgl-primary m-b20 text-primary">
                    thank you for contacting us
                  </h6>
                </div>
                <div>
                  <h3>thank you for contacting us</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const sitInfo = await getAllSiteInfo(preview);
  //console.log({ cases });
  return {
    props: { sitInfo },
    revalidate: 1,
  };
}

export default thankyou;
