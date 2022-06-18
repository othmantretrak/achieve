import Link from "next/link";

import Image from "next/image";
import { imageBuilder } from "../lib/sanity";
import { useTab } from "../common/useTabs";

function Footer({ sitInfo }) {
  const { tab, setTab } = useTab();
  if (!sitInfo?.info) {
    return <></>;
  }
  const sitInfo2 = sitInfo?.info[0]?.address.split(",");

  return (
    <>
      {/* <!-- Footer --> */}
      <footer
        className="site-footer style-1"
        id="footer"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/tretrak/image/upload/v1651468026/achieve/bg10_qtoqh2.png)",
        }}
      >
        <div className="footer-top">
          <div className="container">
            <div
              className="footer-info wow fadeIn"
              data-wow-duration="2s"
              data-wow-delay="0.8s"
            >
              <div className="row align-items-center">
                <div className="col-xl-6 col-md-4">
                  <div className="footer-logo">
                    <Link href="/">
                      <a className="   text-center">
                        <img
                          src="https://res.cloudinary.com/tretrak/image/upload/v1652851337/achieve/achieve-logo_njbari.svg"
                          alt="logo"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-xl-3 col-md-4 col-sm-6">
                  <div className="icon-bx-wraper left m-b10">
                    <div className="icon-lg">
                      <a href="#" className="icon-cell">
                        <img
                          src={imageBuilder(
                            sitInfo?.settings[0].FooterIcons.emailIcon
                          )?.url()}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="icon-content">
                      <p>
                        <a className="text-white" href={`tel: 0031854016590`}>
                          {sitInfo?.info[0].phone}
                        </a>
                        <br />
                        <a
                          className="text-white"
                          href={`mailto: ${sitInfo?.info[0].email}`}
                        >
                          {sitInfo?.info[0].email}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-4 col-sm-6">
                  <div className="icon-bx-wraper left m-b10">
                    <div className="icon-lg">
                      <a href="#" className="icon-cell">
                        <img
                          src={imageBuilder(
                            sitInfo?.settings[0].FooterIcons.addressIcon
                          )?.url()}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="icon-content">
                      <p style={{ marginBottom: "0" }}>{sitInfo2[0]}</p>
                      <p style={{ marginBottom: "0", fontSize: "14px" }}>
                        {sitInfo2[2] + " " + sitInfo2[1]}
                      </p>
                      {/*    <p style={{ marginBottom: "0" }}>{sitInfo2[1]}</p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-xl-3 col-lg-3 col-sm-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div className="widget widget_about">
                  {/*  <h5 className="footer-title">About Us</h5> */}
                  <p>
                    ‘’What the mind can conceive and believe, it can achieve.’’
                    <br className="no-visible-mobile" />
                    <span> - Napoleon Hill</span>
                  </p>
                  <div className="dlab-social-icon">
                    <ul>
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          className="fa-brands fa-facebook"
                          href={sitInfo?.info[0].facebook}
                        ></a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          className="fa-brands fa-instagram"
                          href={sitInfo?.info[0].instagram}
                        ></a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          className="fa-brands fa-linkedin"
                          href={sitInfo?.info[0].linkedin}
                        ></a>
                      </li>
                      {/*  <li>
                        <a
                          className="fa-brands fa-twitter"
                          href={sitInfo[0].twitter}
                        ></a>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-3 col-sm-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <div className="widget widget_services">
                  <h5 className="footer-title">Menu</h5>
                  <ul>
                    <li>
                      <Link href="/">
                        <a>Home</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/over-ons">
                        <a>Over ons</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/diensten">
                        <a>Diensten</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/cases">
                        <a>Cases</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/tarieven">
                        <a>Tarieven</a>
                      </Link>
                    </li>

                    <li>
                      <Link href="/contact">
                        <a>Contact</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-3 col-sm-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.6s"
              >
                <div className="widget widget_services">
                  <h5 className="footer-title">Onze diensten</h5>
                  <ul>
                    <li>
                      <Link href="/diensten#46f8f6b9-9a20-4ff2-b7c3-092d845efb5d">
                        <a
                          onClick={() =>
                            setTab("46f8f6b9-9a20-4ff2-b7c3-092d845efb5d")
                          }
                        >
                          Branding
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/diensten#07a26140-baad-4b7e-bb4c-b405ee254a9a">
                        <a
                          onClick={() =>
                            setTab("07a26140-baad-4b7e-bb4c-b405ee254a9a")
                          }
                        >
                          Web Development
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/diensten#5620aa90-a452-49b2-b1d2-a8c6fcb746eb">
                        <a
                          onClick={() =>
                            setTab("5620aa90-a452-49b2-b1d2-a8c6fcb746eb")
                          }
                        >
                          Content Creation
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/diensten#af06528f-7c23-4c52-811e-927003a4a7a3">
                        <a
                          onClick={() =>
                            setTab("af06528f-7c23-4c52-811e-927003a4a7a3")
                          }
                        >
                          Email Marketing
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/diensten#8c970907-4e9b-4741-8749-ab16696270ef">
                        <a
                          onClick={() =>
                            setTab("8c970907-4e9b-4741-8749-ab16696270ef")
                          }
                        >
                          Social Advertising{" "}
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/diensten#2dee630c-afe0-4756-89e7-66562d68672e">
                        <a
                          onClick={() =>
                            setTab("2dee630c-afe0-4756-89e7-66562d68672e")
                          }
                        >
                          Search Engine Advertising
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-3 col-sm-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.8s"
              >
                <div className="widget widget_services">
                  <h5 className="footer-title">Over Achieve</h5>
                  <ul>
                    <li>
                      <Link href="/veelgestelde-vragen">
                        <a>Veelgestelde vragen</a>
                      </Link>
                    </li>

                    <li>
                      <Link href="/privacy-policy">
                        <a>Privacy policy</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/algemene-voorwaarden">
                        <a>Algemene voorwaarden</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        <a>Contact</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- footer bottom part --> */}
        <div
          className="footer-bottom wow fadeIn"
          data-wow-duration="2s"
          data-wow-delay="0.2s"
        >
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                <span className="copyright-text">
                  Copyright © 2022 <a>Achieve</a>. All rights reserved.
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* <!-- Footer End --> */}
    </>
  );
}

export default Footer;
