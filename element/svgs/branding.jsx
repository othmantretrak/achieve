import Script from "next/script";
import React from "react";

function Branding() {
  return (
    <div className="e-lottie__container">
      <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></Script>
      <lottie-player
        src="https://assets6.lottiefiles.com/packages/lf20_80wbqkl0.json"
        background="transparent"
        speed="1"
        style={{ width: "220px", margin: "auto" }}
        loop
        autoplay
      ></lottie-player>
    </div>
  );
}

export default Branding;
