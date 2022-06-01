import { useEffect, useState } from "react";
import Collapse from "@kunukn/react-collapse";
import PremaryBtn from "../PremaryBtn";
import RespBtn from "../RespBtn";
import { useTab } from "../../common/useTabs";

function Colapsed({ children, id }) {
  const [collapse, setCollapse] = useState(false);
  const { tab } = useTab();

  const toggleAction = () => {
    setCollapse(!collapse);
  };
  useEffect(() => {
    if (tab == id) {
      setCollapse(true);
    } else {
      setCollapse(false);
    }
  }, [tab, id]);
  return (
    <div>
      <Collapse
        collapseHeight="100px"
        transition={`height 290ms cubic-bezier(.4, 0, .2, 1)`}
        isOpen={collapse}
      >
        <div>{children}</div>
        {collapse && (
          <div className="less-bottons">
            <RespBtn title="Gratis intake" width="20" iconH="18" />
            <RespBtn
              title="Tarieven"
              to="/tarieven"
              callBack={false}
              width="20"
              iconH="18"
            />
          </div>
        )}
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
