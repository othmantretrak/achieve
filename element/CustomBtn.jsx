import React from "react";
import Hot from "../component/iconCompenents/Hot";

function CustomBtn({ onClick }) {
  return (
    <div className="custom-box">
      <button onClick={onClick} className="default-btn" href="/login/">
        <Hot />
        Aanvragen <span></span>
      </button>
    </div>
  );
}

export default CustomBtn;
