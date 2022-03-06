import React from "react";
import Banner2 from "../element/banner2";
import Footer from "../layout/footer";
import Header from "../layout/header";

function thankyou() {
  return (
    <>
      <Header />
      <div className="page-content bg-gray pricing-tablee">
        {/* <!-- Banner  --> */}
        <Banner2 name="Tarieven" />
        {/* <!-- Banner End --> */}
        <h2>thank you for contacting us</h2>
      </div>
      <Footer sitInfo={sitInfo} />
    </>
  );
}

export default thankyou;
