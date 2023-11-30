import { useState } from "react";
import "./App.css";
import BetterMap from "./components/BetterMap";
import Tooltip from "./components/Tooltip";

function App() {
  const [tooltipPosition, setTooltipPosition] = useState([0, 0]);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    setTooltipPosition([clientX, clientY]);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  }
  
  const handleMouseEnter = () => {
    setTooltipVisible(true);
  }

  const [content, setContent] = useState(<>hi</>);
  return (
    <div>
      <Tooltip position={tooltipPosition} visible={tooltipVisible}>{content}</Tooltip>
      <div className="large">
        <BetterMap setTooltip={setContent} onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></BetterMap>
      </div>
    </div>
  );
}

export default App;
