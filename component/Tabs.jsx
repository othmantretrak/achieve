import React from "react";

function Tabs({ onclickTab, tab }) {
  return (
    <div className="pricing-list-tab">
      <ul className="tabs">
        <li
          onClick={() => onclickTab(1)}
          className={`${tab === 1 ? "current" : ""}`}
        >
          <span>
            <i className="bx bxs-calendar-check"></i> Search Engine Advertising
          </span>
        </li>
        <li
          onClick={() => onclickTab(2)}
          className={`${tab === 2 ? "current" : ""}`}
        >
          <span>
            <i className="bx bxs-calendar-check"></i> Social Advertising
          </span>
        </li>
        <li
          onClick={() => onclickTab(3)}
          className={`${tab === 3 ? "current" : ""}`}
        >
          <span>
            <i className="bx bxs-calendar-check"></i> Website
          </span>
        </li>
        <li
          onClick={() => onclickTab(4)}
          className={`${tab === 4 ? "current" : ""}`}
        >
          <span>
            <i className="bx bxs-calendar-check"></i> Huisstijl Handboek
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Tabs;
