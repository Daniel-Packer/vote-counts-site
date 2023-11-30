import { useState } from "react";
import "./App.css";
import BetterMap from "./components/BetterMap";
// import { Tooltip } from "react-tooltip";
import Tooltip from "./components/Tooltip";

function App() {
  const [tooltipPosition, setTooltipPosition] = useState([0, 0]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    setTooltipPosition([clientX, clientY]);
  };
  const [content, setContent] = useState(<>hi</>);
  return (
    <div onMouseMove={handleMouseMove}>
      <Tooltip position={tooltipPosition}>{content}</Tooltip>
      <div className="large">
        <BetterMap setTooltip={setContent}></BetterMap>
      </div>
    </div>
  );
}

export default App;
