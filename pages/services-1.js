import Footer from "../layout/footer";
import Header3 from "../layout/header-3";
import { useState } from "react";
import AllServices from "../element/all-services";
import Team from "../element/team";
import Testimonial from "../element/testimonial";
import Link from "next/link";
import Quote from "../element/quote";
import { getAllSiteInfo } from "../lib/api";
import Banner2 from "../element/banner2";
import Header from "../layout/header";
import Cta from "../element/cta";

function Services1({ sitInfo }) {
  const [open, setOpen] = useState("p2");
  return (
    <>
      <Header />
      <div className="page-content bg-white">
        {/* <!-- Banner  --> */}
        <Banner2 name="Onze Diensten" />
        {/* <!-- Banner End --> */}

        {/* <!-- Services --> */}
        <AllServices />

        {/* <!-- Newsletter --> */}
        {/*  <section
          className="content-inner-3 bg-primary"
          style={{
            backgroundImage: "url(images/background/bg13.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div
                className="col-lg-4 col-md-6 wow fadeInLeft"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div className="dlab-media m-b30">
                  <img src="images/about/img9.png" className="move-2" alt="" />
                </div>
              </div>
              <div
                className="col-lg-8 col-md-6 wow fadeInRight"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <div className="section-head style-1 text-white">
                  <h6 className="sub-title bgl-light m-b20">Newsletter</h6>
                  <h2 className="title m-b30">
                    Subscribe To Our Newsletter For Latest Update Of Finanical
                    Services{" "}
                  </h2>
                  <p>
                    Curabitur eleifend nibh sit amet ex posuere, vel malesuada
                    turpis pretium. Quisque et tincidunt risus, a tempor massa.
                    Cras tempor egestas libero, eu laoreet enim pharetra non.
                  </p>
                </div>
                <div className="dlab-subscribe style-2 max-w500">
                  <form
                    className="dzSubscribe"
                    action="script/mailchamp.php"
                    method="post"
                  >
                    <div className="dzSubscribeMsg"></div>
                    <div className="form-group">
                      <div className="input-group">
                        <input
                          name="dzEmail"
                          required="required"
                          type="email"
                          className="form-control"
                          placeholder="Email Address"
                        />
                        <div className="input-group-addon">
                          <button
                            name="submit"
                            value="Submit"
                            type="submit"
                            className="btn rounded-xl shadow btn-primary"
                          >
                            Subscribe Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* <!-- Fetures --> */}
        {/*  <section className="content-inner-2">
          <div className="container">
            <div className="row align-items-center">
              <div
                className="col-xl-6 col-lg-7 wow fadeInLeft"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div className="section-head style-1">
                  <h6 className="sub-title bgl-primary m-b20 text-primary">
                    Fetures
                  </h6>
                  <h2 className="title">
                    Our Working Process To Help Your Boost Your Business
                  </h2>
                </div>
                <div className="section-wraper-one">
                  <div className="icon-bx-wraper style-2 left m-b30">
                    <div className="icon-bx-md radius bg-white text-red">
                      <a href="javascript:void(0);" className="icon-cell">
                        <i className="flaticon-idea"></i>
                      </a>
                    </div>
                    <div className="icon-content">
                      <h4 className="dlab-title">Idea & Analysis Gathering</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                  <div className="icon-bx-wraper style-2 left m-b30">
                    <div className="icon-bx-md radius bg-white text-yellow">
                      <a href="javascript:void(0);" className="icon-cell">
                        <i className="flaticon-line-graph"></i>
                      </a>
                    </div>
                    <div className="icon-content">
                      <h4 className="dlab-title">Designing & Developing</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et.
                      </p>
                    </div>
                  </div>
                  <div className="icon-bx-wraper style-2 left m-b30">
                    <div className="icon-bx-md radius bg-white text-green">
                      <a href="javascript:void(0);" className="icon-cell">
                        <i className="flaticon-rocket"></i>
                      </a>
                    </div>
                    <div className="icon-content">
                      <h4 className="dlab-title">Testing & Lunching</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-5 wow fadeInRight"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <div className="dlab-media">
                  <img src="images/about/img5.png" className="move-2" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* <!-- Team --> */}
        <Team />

        {/* <!-- Testimonials --> */}
        {/* <Testimonial /> */}

        {/* <!-- Get A Quote --> */}
        {/* <Quote /> */}

        {/* <!-- Call To action --> */}
        {/* <Cta /> */}
      </div>
      <Footer sitInfo={sitInfo} />
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
export default Services1;
