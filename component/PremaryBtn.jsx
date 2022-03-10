import Link from "next/link";
import React from "react";
import Hot from "../component/iconCompenents/Hot";

function PremaryBtn({ title }) {
  return (
    <div className="extra-nav cta">
      <div className="extra-cell">
        <Link href="/tarieven">
          <a className="btn btn-corner btn-primary">
            <Hot />

            {title}
          </a>
        </Link>
      </div>
    </div>
  );
}

export default PremaryBtn;
