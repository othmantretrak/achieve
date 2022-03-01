import Link from "next/link";
import React from "react";
import Hot from "../component/iconCompenents/Hot";

function PricingBtn({ title }) {
  return (
    <div className="extra-nav">
      <div className="extra-cell">
        <Link href="/contact-us-3">
          <a className="btn btn-corner btn-primary">
            <Hot />

            {title}
          </a>
        </Link>
      </div>
    </div>
  );
}

export default PricingBtn;
