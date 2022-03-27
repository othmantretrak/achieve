import Link from "next/link";
import React from "react";
import Hot from "../component/iconCompenents/Hot";

function PremaryBtn({ title }) {
  const handleIntake = () => {
    Calendly.initPopupWidget({ url: "https://calendly.com/gratisintake" });
    return false;
  };
  return (
    <div className="extra-nav cta">
      <div className="extra-cell">
        <button onClick={handleIntake} className="btn btn-corner btn-primary">
          <Hot />

          {title}
        </button>
      </div>
    </div>
  );
}

export default PremaryBtn;
