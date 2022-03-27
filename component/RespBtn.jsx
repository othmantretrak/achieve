import { useRouter } from "next/router";
import React from "react";
import Hot from "../component/iconCompenents/Hot";

function RespBtn({ title, to, callBack = true, width = "27", iconH = "24" }) {
  const router = useRouter();
  const handleIntake = () => {
    if (callBack) {
      Calendly.initPopupWidget({ url: "https://calendly.com/gratisintake" });
      return false;
    }
    router.push(to);
  };
  return (
    <div className="extra-nav cta">
      <div className="extra-cell">
        <button onClick={handleIntake} className="btn btn-corner btn-primary">
          <div
            style={{
              width: width,
            }}
            className="wrap-service"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={iconH}
              height={iconH}
              style={{
                marginBottom: "5px",
                marginRight: "5px",
              }}
              preserveAspectRatio="xMidYMin"
              viewBox="0 0 24 24"
            >
              <path d="M16.5,8c0,1.5-0.5,3.5-2.9,4.3c0.7-1.7,0.8-3.4,0.3-5c-0.7-2.1-3-3.7-4.6-4.6C8.9,2.4,8.2,2.8,8.3,3.4c0,1.1-0.3,2.7-2,4.4  C4.1,10,3,12.3,3,14.5C3,17.4,5,21,9,21c-4-4-1-7.5-1-7.5c0.8,5.9,5,7.5,7,7.5c1.7,0,5-1.2,5-6.4c0-3.1-1.3-5.5-2.4-6.9  C17.3,7.2,16.6,7.5,16.5,8"></path>
            </svg>
          </div>

          {title}
        </button>
      </div>
    </div>
  );
}

export default RespBtn;
