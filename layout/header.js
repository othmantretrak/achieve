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
                    <img src="images/achieve-logo2.png" alt="" />
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
                      <img src="images/achieve-logo2.png" alt="" />
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
                    <Link href="/over-ons">
                      <a
                        className={
                          router.pathname == "/over-ons" ? "active" : ""
                        }
                      >
                        Over ons
                      </a>
                    </Link>
                  </li>
                  <li className={`${open === "services" ? "open" : ""}`}>
                    <Link href="/diensten">
                      <a
                        className={
                          router.pathname == "/diensten" ? "active" : ""
                        }
                      >
                        Diensten{" "}
                      </a>
                    </Link>
                  </li>
                  <li className={`${open === "services" ? "open" : ""}`}>
                    <Link href="/cases">
                      <a
                        className={router.pathname == "/cases" ? "active" : ""}
                      >
                        Cases
                      </a>
                    </Link>
                  </li>
                  <li className={`${open === "services" ? "open" : ""}`}>
                    <Link href="/tarieven">
                      <a
                        className={
                          router.pathname == "/tarieven" ? "active" : ""
                        }
                      >
                        Tarieven
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/contact">
                      <a
                        className={
                          router.pathname == "/contact" ? "active" : ""
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
