import Link from "next/link";

function Footer() {
  return (
    <>
      {/* <!-- Footer --> */}
      <footer
        className="site-footer style-1"
        id="footer"
        style={{ backgroundImage: "url(images/background/bg10.png)" }}
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
                    <a>
                      <img src="images/Achieve-Logo.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-xl-3 col-md-4 col-sm-6">
                  <div className="icon-bx-wraper left m-b10">
                    <div className="icon-lg">
                      <a href="javascript:void(0);" className="icon-cell">
                        <i className="flaticon-email"></i>
                      </a>
                    </div>
                    <div className="icon-content">
                      <p>
                        +31 85 4016590
                        <br />
                        info@achieve.nl
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-4 col-sm-6">
                  <div className="icon-bx-wraper left m-b10">
                    <div className="icon-lg">
                      <a href="javascript:void(0);" className="icon-cell">
                        <i className="flaticon-location"></i>
                      </a>
                    </div>
                    <div className="icon-content">
                      <p>Zuidplein 54, 3083 CW Rotterdam</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-xl-3 col-lg-4 col-sm-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div className="widget widget_about">
                  {/*  <h5 className="footer-title">About Us</h5> */}
                  <p>
                    ‘’What the mind can conceive and believe it can achieve.’’ -
                    Napoleon Hill
                  </p>
                  <div className="dlab-social-icon">
                    <ul>
                      <li>
                        <a
                          className="fa-brands fa-facebook"
                          href="https://www.facebook.com/achieve.nl/"
                        ></a>
                      </li>
                      <li>
                        <a
                          className="fa-brands fa-instagram"
                          href="www.instagram.com/achieve.nl/"
                        ></a>
                      </li>
                      <li>
                        <a
                          className="fa-brands fa-twitter"
                          href="https://twitter.com"
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-2 col-sm-6 wow fadeIn"
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
                      <Link href="/about-us-1">
                        <a>Over ons</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services-1">
                        <a>Diensten</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/pricing-table-3">
                        <a>Tarieven</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/projects">
                        <a>Cases</a>
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
                      <a href="javascript:void(0);">Branding</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Web Development</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Email Marketing</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Social Advertising </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        Search Engine Advertising
                      </a>
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
                      <a href="javascript:void(0);">FAQ</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Contact</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Privacy</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Algemene voorwaarden</a>
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
                  Copyright © 2021 <a>ACHIEVE</a>. All rights reserved.
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
