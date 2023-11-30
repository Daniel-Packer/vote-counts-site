import { useState } from "react";
import "./App.css";
import BasicMap from "./components/BasicMap";
import BetterMap from "./components/BetterMap";

function App() {
  const [content, setContent] = useState(<></>);
  var tooltipSpan = document.getElementById("tooltip-span");

  // window.onmousemove = function (e) {
  //   var x = e.clientX,
  //     y = e.clientY;
  //   tooltipSpan.style.top = y + 20 + "px";
  //   tooltipSpan.style.left = x + 20 + "px";
  // };
  return (
    <>
      <div className="tooltip">
        {content}
      </div>
      <div className="large">
        <BetterMap setTooltip={setContent}></BetterMap>
      </div>
    </>
  );
}

export default App;
