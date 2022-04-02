import React, { useEffect, useState } from "react";
import Script from "next/script";
import loadingPace from "../loadingPace";
import appData from "../../data/app.json";
import { setCookie, getCookie } from "react-use-cookie";
import { useLoader } from "../../common/useLoader";

const LoadingScreen = () => {
  //const [showLoading, setShowLoading] = useLoader();
  const { showLoading } = useLoader();

  //console.log(showLoading);
  useEffect(() => {
    //const showLoading = getCookie("showLoading");
    let bodyEl = document.querySelector("body");
    if (showLoading === true) {
      loadingPace();
      if (bodyEl.classList.contains("hideX")) {
        bodyEl.classList.remove("hideX");
      }
    } else {
      bodyEl.classList.add("hideX");
    }
  }, [showLoading]);
  return (
    <>
      <div className={`${showLoading === true ? "showX" : "hideX"}`}>
        <div id="preloader">
          <div className="loading-text">Loading</div>
        </div>
      </div>
      {showLoading === true ? (
        <Script
          id="pace"
          strategy="beforeInteractive"
          src="/assets/js/pace.min.js"
        ></Script>
      ) : (
        ""
      )}
    </>
  );
};

export default LoadingScreen;
