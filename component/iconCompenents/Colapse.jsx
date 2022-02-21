import { useState } from "react";

function Colapse({ children }) {
  const [collapse, setCollapse] = useState(true);
  const toggleAction = () => {
    setCollapse((state) => !state);
  };
  return (
    <span>
      <div
        style={{
          display: `block`,
          overflow: collapse ? `hidden` : `auto`,
          maxHeight: collapse ? `100px` : "fit-content",
        }}
      >
        {children}
      </div>
      <div
        style={{
          color: "#896eff",
          borderRadius: "5px",
          fontSize: "15px",
          fontWeight: "500",
        }}
        onClick={toggleAction}
      >
        {collapse ? "Lees Meer…" : "Lees minder"}
      </div>
    </span>
  );
}

export default Colapse;
