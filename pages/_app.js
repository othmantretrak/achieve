import { useEffect, useState } from "react";
import "react-rangeslider/lib/index.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import useScrollPosition from "use-scroll-position";
import "../css/style.css";
import "../css/skin/skin-1.css";
import "../styles/globals.css";
import "../styles/switcher.css";
import { AuthProvider } from "../common/useLoader";
import Layout from "../layout/Layout";
import { getAllSettings, getAllSiteInfo } from "../lib/api";
import { TabProvider } from "../common/useTabs";

let siteInfo;

function MyApp({ Component, pageProps, navigationProps }) {
  const [toggle1, setToggle1] = useState(false);
  const [body_, setbody_] = useState();
  const [header, setHeader] = useState("fixed");
  const [header_, setHeader_] = useState();

  useEffect(() => {
    setbody_(document.querySelector("body"));
    setHeader_(document.getElementsByClassName("main-bar-wraper"));
  }, []);

  let scrollPosition = useScrollPosition();
  function toggle() {
    setToggle1(!toggle1);
  }

  const chageHeader = (value) => {
    setHeader(value);
    if (value === "fixed") {
      header_[0].classList.add("sticky-header");
      header_[0].classList.remove("sticky-no");
    } else {
      header_[0].classList.add("sticky-no");
      header_[0].classList.remove("sticky-header");
      header_[0].classList.remove("is-fixed");
    }
  };

  const onChange = (value) => {
    //console.log({ window });
    window.scrollTo(0, 0);
  };

  header === "fixed" && scrollPosition > 10
    ? header_ && header_[0].classList.add("is-fixed")
    : header_ && header_[0].classList.remove("is-fixed");

  useEffect(() => {
    siteInfo = navigationProps;
  }, []);
  return (
    <>
      <div className="page-wraper">
        <AuthProvider>
          <TabProvider>
            <Layout sitInfo={navigationProps}>
              <Component {...pageProps} />
            </Layout>
          </TabProvider>
        </AuthProvider>
      </div>

      <button
        className="scroltop icon-up"
        type="button"
        style={{ display: "inline-block" }}
        onClick={onChange}
      >
        <i className="fa fa-arrow-up" />
      </button>
    </>
  );
}
MyApp.getInitialProps = async () => {
  if (siteInfo) {
    return { navigationProps: siteInfo };
  }

  //const res = await fetch("http://localhost:3000/api/navigation");
  const info = await getAllSiteInfo();
  const settings = await getAllSettings();
  let navigationProps = { info, settings };
  //const navigationProps = await res.json()
  siteInfo = navigationProps;

  return { navigationProps };
};

export default MyApp;
