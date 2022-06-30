import Script from "next/script";
import React from "react";

function Stratigie() {
  return (
    <div className="e-lottie__container">
      <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></Script>
      <lottie-player
        src="https://assets9.lottiefiles.com/packages/lf20_e7mogzsq.json"
        background="transparent"
        speed="1"
        style={{ width: "220px", margin: "auto" }}
        loop
        autoplay
      ></lottie-player>
    </div>
  );
}

export default Stratigie;
