import React from "react";

function Tabs({ onclickTab, tab, prices }) {
  // console.log({ prices });
  return (
    <div className="pricing-list-tab">
      <ul className="tabs">
        {prices?.map((p) => (
          <li
            key={p._id}
            onClick={() => onclickTab(p._id, p.name)}
            className={`${tab === p._id ? "current" : ""}`}
          >
            <span>{p.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tabs;
