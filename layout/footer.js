import Link from "next/link";

function Footer({ sitInfo }) {
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
                      <a href="#" className="icon-cell">
                        <i className="flaticon-email"></i>
                      </a>
                    </div>
                    <div className="icon-content">
                      <p>
                        {sitInfo[0].phone}
                        <br />
                        {sitInfo[0].email}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-4 col-sm-6">
                  <div className="icon-bx-wraper left m-b10">
                    <div className="icon-lg">
                      <a href="#" className="icon-cell">
                        <i className="flaticon-location"></i>
                      </a>
                    </div>
                    <div className="icon-content">
                      <p>{sitInfo[0].address}</p>
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
                          target="_blank"
                          rel="noreferrer"
                          className="fa-brands fa-facebook"
                          href={sitInfo[0].facebook}
                        ></a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          className="fa-brands fa-instagram"
                          href={sitInfo[0].instagram}
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
                      <a href="#">Branding</a>
                    </li>
                    <li>
                      <a href="#">Web Development</a>
                    </li>
                    <li>
                      <a href="#">Content Creation</a>
                    </li>
                    <li>
                      <a href="#">Email Marketing</a>
                    </li>
                    <li>
                      <a href="#">Social Advertising </a>
                    </li>
                    <li>
                      <a href="#">Search Engine Advertising</a>
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
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">Privacy</a>
                    </li>
                    <li>
                      <a href="#">Algemene voorwaarden</a>
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
