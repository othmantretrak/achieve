import { useState } from "react";
import Collapse from "@kunukn/react-collapse";

function Colapsed({ children }) {
  const [collapse, setCollapse] = useState(false);
  const toggleAction = () => {
    console.log("clicked", collapse);
    setCollapse(!collapse);
  };
  return (
    <div>
      <Collapse
        collapseHeight="100px"
        transition={`height 290ms cubic-bezier(.4, 0, .2, 1)`}
        isOpen={collapse}
      >
        <div>{children}</div>
      </Collapse>
      <div
        style={{
          color: "#896eff",
          borderRadius: "5px",
          fontSize: "15px",
          fontWeight: "500",
          cursor: "pointer",
          zIndex: "100",
        }}
        onClick={() => toggleAction()}
      >
        {collapse ? "Lees minder" : "Lees meer…"}
      </div>
    </div>
  );
}

export default Colapsed;
