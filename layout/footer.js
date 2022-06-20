import Link from "next/link";

import Image from "next/image";
import { imageBuilder } from "../lib/sanity";
import { useTab } from "../common/useTabs";
import { menu } from "../data/footerOnzediensten";
import { useRouter } from "next/router";

function Footer({ sitInfo }) {
  const { tab, setTab } = useTab();
  const router = useRouter();
  if (!sitInfo?.info) {
    return <></>;
  }
  const sitInfo2 = sitInfo?.info[0]?.address.split(",");
  const setTabtab = (tab, href) => {
    router.push(href, undefined, { scroll: false });
    setTab(tab);
    const errorElement = document.getElementById(tab);
    if (errorElement) {
      errorElement.scrollIntoView({ behavior: "smooth" });
    }
  };

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
                    {menu.map((item) => (
                      <li key={item.id}>
                        <button onClick={() => setTabtab(item.id, item.href)}>
                          {item.title}
                        </button>
                      </li>
                    ))}
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
