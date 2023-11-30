import { useState } from "react";
import "./App.css";
import BetterMap from "./components/BetterMap";
import Tooltip from "./components/Tooltip";

function App() {
  const [tooltipPosition, setTooltipPosition] = useState([0, 0]);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const handleMapMouseClick = (e: React.MouseEvent) => {
    const { pageX, pageY } = e;
    setTooltipVisible(true);
    setTooltipPosition([pageX, pageY]);
  }
  
  const handleOtherClick = () => {
    setTooltipVisible(false);
  }

  const [content, setContent] = useState(<>hi</>);
  return (
    <div onMouseDown={handleOtherClick}>
      <Tooltip position={tooltipPosition} visible={tooltipVisible}>{content}</Tooltip>
      <div className="large">
        <BetterMap setTooltip={setContent} onMouseClick={handleMapMouseClick}></BetterMap>
      </div>
    </div>
  );
}

export default App;
