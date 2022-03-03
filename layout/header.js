import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Fire from "../component/iconCompenents/Fire";
import Hot from "../component/iconCompenents/Hot";
function Header() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState("home");
  const router = useRouter();
  return (
    <>
      {/* <!-- Header --> */}
      <header
        className="site-header header-transparent text-black mo-left"
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
                    <img src="images/Achieve-Logo.png" alt="" />
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
                  <Link href="/contact-us-3">
                    <a className="btn btn-corner  btn-primary">
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
                      <a className={router.pathname == "/" ? "active" : ""}>
                        Home
                      </a>
                    </Link>
                  </li>
                  <li className={`${open === "services" ? "open" : ""}`}>
                    <Link href="/about-us-1">
                      <a
                        className={
                          router.pathname == "/about-us-1" ? "active" : ""
                        }
                      >
                        Over ons
                      </a>
                    </Link>
                  </li>
                  <li className={`${open === "services" ? "open" : ""}`}>
                    <Link href="/services-1">
                      <a
                        className={
                          router.pathname == "/services-1" ? "active" : ""
                        }
                      >
                        Diensten{" "}
                      </a>
                    </Link>
                  </li>
                  <li className={`${open === "services" ? "open" : ""}`}>
                    <Link href="/pricing-table-3">
                      <a
                        className={
                          router.pathname == "/pricing-table-3" ? "active" : ""
                        }
                      >
                        Tarieven
                      </a>
                    </Link>
                  </li>
                  <li className={`${open === "services" ? "open" : ""}`}>
                    <Link href="/projects">
                      <a
                        className={
                          router.pathname == "/projects" ? "active" : ""
                        }
                      >
                        Cases{" "}
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-us-3">
                      <a
                        className={
                          router.pathname == "/contact-us-3" ? "active" : ""
                        }
                      >
                        Contact
                      </a>
                    </Link>
                  </li>
                </ul>
                <div className="dlab-social-icon">
                  <ul>
                    <Link href="https://www.facebook.com/achieve.nl/">
                      <a className="fa-brands fa-facebook"></a>
                    </Link>
                    <Link href="https://www.instagram.com/achieve.nl/">
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

export default Header;
