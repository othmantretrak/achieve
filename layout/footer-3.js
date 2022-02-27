import Link from "next/link";

function Footer3({ sitInfo }) {
  return (
    <>
      {/* <!-- Footer --> */}
      <footer
        className="site-footer style-3"
        id="footer"
        style={{
          backgroundImage:
            "url(images/background/bg11.png), var(--gradient-sec)",
          backgroundSize: "cover, 200%",
        }}
      >
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div
                className="col-xl-3 col-lg-12 col-md-4 col-sm-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div className="widget widget_about">
                  <div className="footer-logo">
                    <a>
                      <img src="images/Achieve-Logo.png" alt="" />
                    </a>
                  </div>
                  <p>
                    ‘’What the mind can conceive and believe it can achieve.’’ -
                    Napoleon Hill
                  </p>
                  <div className="dlab-social-icon">
                    <ul>
                      <li>
                        <a
                          className="fa-brands fa-facebook"
                          href={sitInfo[0].facebook}
                        ></a>
                      </li>
                      <li>
                        <a
                          className="fa-brands fa-instagram"
                          href={sitInfo[0].instagram}
                        ></a>
                      </li>
                      <li>
                        <a
                          className="fa-brands fa-twitter"
                          href={sitInfo[0].twitter}
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-3 col-md-4  col-sm-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <div className="widget widget_services style-1">
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
                className="col-xl-2 col-lg-3 col-md-4  col-sm-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.6s"
              >
                <div className="widget widget_services style-1">
                  <h5 className="footer-title">Onze diensten</h5>
                  <ul>
                    <li>
                      <a href="#">Branding</a>
                    </li>
                    <li>
                      <a href="#">Web Development</a>
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
                className="col-xl-2 col-lg-3 col-md-4  col-sm-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.8s"
              >
                <div className="widget widget_services style-1">
                  <h5 className="footer-title">Over Achieve</h5>
                  <ul>
                    <li>
                      <Link href="/faq-1">
                        <a>FAQ</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact-us-3">
                        <a>Contact</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/privacy-policy">
                        <a>Privacy</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/algemene-voorwaarden">
                        <a>Algemene voorwaarden</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-3 col-md-4  col-sm-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="1.0s"
              >
                <div className="widget widget_getintuch">
                  <h5 className="footer-title">Contact Us</h5>
                  <ul>
                    <li>
                      <i className="fa fa-phone gradient"></i>
                      <span>
                        {sitInfo[0].phone}
                        <br />
                        {sitInfo[0].phone}
                      </span>
                    </li>
                    <li>
                      <i className="fa fa-envelope gradient"></i>
                      <span>
                        {sitInfo[0].email} <br />
                        {sitInfo[0].email}
                      </span>
                    </li>
                    <li>
                      <i className="fa fa-map-marker gradient"></i>
                      <span> {sitInfo[0].address}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- footer bottom part --> */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12 text-center">
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

export default Footer3;
