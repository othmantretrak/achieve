function Footer2() {
  return (
    <>
      {/* <!-- Footer --> */}
      <footer
        className="site-footer style-2"
        id="footer"
        style={{ backgroundImage: "url(images/background/bg4.png)" }}
      >
        <div className="container">
          <div
            className="dlab-subscribe style-1 wow fadeInUp"
            data-wow-duration="2s"
            data-wow-delay="0.2s"
          >
            <div className="row align-items-center">
              <div className="col-lg-7">
                <h2 className="title">
                  Subscribe To Our Newsletter For Latest Update
                </h2>
              </div>
              <div className="col-lg-5">
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
                        placeholder="Your Email Address"
                      />
                      <div className="input-group-addon">
                        <button
                          name="submit"
                          value="Submit"
                          type="submit"
                          className="btn btn-primary gradient fa fa-paper-plane-o"
                        ></button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div
                className="col-xl-3 col-lg-4 col-sm-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div className="widget widget_about">
                  <div className="footer-logo">
                    <a>
                      <img src="images/Achieve-Logo.png" alt="" />
                    </a>
                  </div>
                  <div className="widget widget_getintuch">
                    <ul>
                      <li>
                        <i className="fa fa-phone gradient"></i>
                        <span>
                          +31 85 4016590
                          <br />
                          +31 85 4016590
                        </span>
                      </li>
                      <li>
                        <i className="fa fa-envelope gradient"></i>
                        <span>
                          info@achieve.nl <br />
                          info@achieve.nl
                        </span>
                      </li>
                      <li>
                        <i className="fa fa-map-marker gradient"></i>
                        <span>Zuidplein 54, Rotterdam</span>
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
                  <h5 className="footer-title">Our links</h5>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="#">Team</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
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
                  <h5 className="footer-title">Our Services</h5>
                  <ul>
                    <li>
                      <a href="#">Strategy & Research</a>
                    </li>
                    <li>
                      <a href="#">Web Development</a>
                    </li>
                    <li>
                      <a href="#">Web Solution</a>
                    </li>
                    <li>
                      <a href="#">Digital Marketing</a>
                    </li>
                    <li>
                      <a href="#">App Design </a>
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
                  <h5 className="footer-title">Other links</h5>
                  <ul>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      <a href="#">Portfolio</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Terms & Conditions</a>
                    </li>
                    <li>
                      <a href="#">Support </a>
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
              <div className="col-lg-6 col-md-7 text-left">
                <span className="copyright-text">
                  Copyright © 2021 <a>ACHIEVE</a>. All rights reserved.
                </span>
              </div>
              <div className="col-lg-6 col-md-5 text-right">
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
          </div>
        </div>
      </footer>
      {/* <!-- Footer End --></footer> */}
    </>
  );
}

export default Footer2;
