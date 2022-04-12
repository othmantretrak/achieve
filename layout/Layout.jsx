import React, { useEffect, useState } from "react";
import { getAllSiteInfo } from "../lib/api";
import Footer from "./footer";
import Header from "./header";

function Layout({ children, sitInfo }) {
  /*  const [siteInfo, setSiteInfo] = useState([]);
  useEffect(() => {
    const getInfo = async () => {
      const sitInfo = await getAllSiteInfo();
      setSiteInfo(sitInfo);
    };
    getInfo();
  }, []);
 */
  return (
    <>
      <Header sitInfo={sitInfo} />
      {children}
      <Footer sitInfo={sitInfo} />
    </>
  );
}

export default Layout;
