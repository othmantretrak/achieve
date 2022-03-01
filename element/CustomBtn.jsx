import React from "react";
import Hot from "../component/iconCompenents/Hot";

function CustomBtn() {
  return (
    <div className="custom-box">
      <a className="default-btn" href="/login/">
        <Hot />
        Aanvragen <span></span>
      </a>
    </div>
  );
}

export default CustomBtn;
