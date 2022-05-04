import React, { useEffect, useState } from "react";
import { useLoader } from "../common/useLoader";

import { useRouter } from "next/router";
import Footer from "./footer";
import Header from "./header";

function Layout({ children, sitInfo }) {
  const { showLoading } = useLoader();
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      if (!showLoading) {
        console.log("log from useeffect after cheak");
        let elem = document.getElementById("pace");
        let paceEl = document.querySelector(".pace");
        //let head = document.getElementsByTagName("head")[0];
        elem?.parentElement.removeChild(elem);
        paceEl?.parentElement.removeChild(paceEl);
        //paceEl.classList.add("hideX");
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events, showLoading]);

  /* useEffect(() => {
    let bodyEl = document.querySelector("body");
    let paceEl = document.querySelector(".pace");
    console.log("log from useeffect befor cheak");

    if (!showLoading) {
      console.log("log from useeffect after cheak");
      let elem = document.getElementById("pace");
      //let head = document.getElementsByTagName("head")[0];
      elem.parentElement.removeChild(elem);
      paceEl.classList.add("hideX");
    }
  }, []); */
  return (
    <>
      <Header sitInfo={sitInfo} />
      {children}
      <Footer sitInfo={sitInfo} />
    </>
  );
}

export default Layout;
