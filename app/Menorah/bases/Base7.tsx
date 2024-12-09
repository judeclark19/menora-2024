import { observer } from "mobx-react-lite";
import menorahState from "../Menorah.state";
import { useState } from "react";

const Base7 = observer(() => {
  const candle = menorahState.candles[6];
  const [isHovered, setIsHovered] = useState(false);
  return (
    <g
      style={{
        cursor: "pointer",
        pointerEvents: "all",
        stroke: isHovered ? "white" : "none",
        strokeWidth: isHovered ? 3 : 0
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        candle.setIsVisible(!candle.isVisible);
      }}
    >
      <polygon
        fill="#967444"
        points="1164.3,578 1129.3,578 1122.3,538.7 1171.4,538.7   "
      />
      <polygon
        fill="#967444"
        points="1169.8,498.7 1123.9,498.7 1114.6,483.1 1179,483.1   "
      />
      <path
        fill="#AD884D"
        d="M1122,518.7h49.7c2.6,0,4.8,2.1,4.8,4.8V534c0,2.6-2.1,4.8-4.8,4.8H1122c-2.6,0-4.8-2.1-4.8-4.8v-10.4    C1117.2,520.9,1119.3,518.7,1122,518.7z"
      />
      <path
        fill="#BC9357"
        d="M1122,498.7h49.7c2.6,0,4.8,2.1,4.8,4.8V514c0,2.6-2.1,4.8-4.8,4.8H1122c-2.6,0-4.8-2.1-4.8-4.8v-10.4    C1117.2,500.9,1119.3,498.7,1122,498.7z"
      />
    </g>
  );
});

export default Base7;
