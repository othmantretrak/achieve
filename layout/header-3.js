import Link from "next/link";
import { useState } from "react";
import Hot from "../component/iconCompenents/Hot";
function Header3() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState("home");
  return (
    <>
      {/* <!-- Header --> */}
      <header
        className="site-header header-transparent mo-left"
        id="fix-header"
      >
        {/* <!-- Main Header --> */}
        <div className="sticky-header main-bar-wraper navbar-expand-lg">
          <div className="main-bar clearfix ">
            <div className="container clearfix">
              {/* <!-- Website Logo --> */}
              <div className="logo-header mostion logo-dark">
                <Link href="/">
                  <a>
                    <img
                      className="custom-logo-white"
                      src="images/Achieve-Logo.png"
                      alt=""
                    />
                    <img
                      className="custom-logo"
                      src="images/Achieve-Logo.png"
                      alt=""
                    />
                  </a>
                </Link>
              </div>
              {/* <!-- Nav Toggle Button --> */}
              <button
                className={`navbar-toggler collapsed navicon justify-content-end ${
                  show ? "open" : ""
                }`}
                onClick={() => setShow(!show)}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
              {/* <!-- Extra Nav --> */}
              <div className="extra-nav">
                <div className="extra-cell">
                  <Link href="contact-us-1">
                    <a className="btn btn-corner btn-primary">
                      <Hot />
                      Gratis intake
                    </a>
                  </Link>
                </div>
              </div>
              <div
                className={`header-nav navbar-collapse collapse justify-content-end ${
                  show ? "show" : ""
                }`}
                id="navbarNavDropdown"
              >
                <div className="logo-header">
                  <Link href="/">
                    <a>
                      <img src="images/Achieve-Logo.png" alt="" />
                    </a>
                  </Link>
                </div>
                <ul className="nav navbar-nav navbar">
                  <li>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className={`${open === "services" ? "open" : ""}`}>
                    <Link href="/about-us-1">
                      <a>Over ons</a>
                    </Link>
                  </li>
                  <li className={`${open === "services" ? "open" : ""}`}>
                    <Link href="/services-1">
                      <a>Diensten </a>
                    </Link>
                  </li>
                  <li className={`${open === "services" ? "open" : ""}`}>
                    <Link href="/pricing-table-3">
                      <a>Tarieven</a>
                    </Link>
                  </li>
                  <li className={`${open === "services" ? "open" : ""}`}>
                    <Link href="/projects">
                      <a>Cases </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-us-3">
                      <a>Contact</a>
                    </Link>
                  </li>
                </ul>
                <div className="dlab-social-icon">
                  <ul>
                    <Link href="https://www.facebook.com/achieve.nl/">
                      <a className="fa-brands fa-facebook"></a>
                    </Link>
                    <Link href="https://twitter.com/">
                      <a className="fa-brands fa-twitter"></a>
                    </Link>
                    <Link href="www.instagram.com/achieve.nl/">
                      <a className="fa-brands fa-instagram"></a>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Main Header End --> */}
      </header>
      {/* <!-- Header End --> */}
    </>
  );
}

export default Header3;
