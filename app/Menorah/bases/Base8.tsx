import { observer } from "mobx-react-lite";
import { useState } from "react";
import menorahState from "../Menorah.state";

const Base8 = observer(() => {
  const candle = menorahState.candles[7];
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
        points="1265,578 1230,578 1223,538.7 1272,538.7   "
      />
      <polygon
        fill="#967444"
        points="1270.5,498.7 1224.5,498.7 1215.3,483.1 1279.7,483.1   "
      />
      <path
        fill="#AD884D"
        d="M1222.6,518.7h49.7c2.6,0,4.8,2.1,4.8,4.8V534c0,2.6-2.1,4.8-4.8,4.8h-49.7c-2.6,0-4.8-2.1-4.8-4.8v-10.4    C1217.9,520.9,1220,518.7,1222.6,518.7z"
      />
      <path
        fill="#BC9357"
        d="M1222.6,498.7h49.7c2.6,0,4.8,2.1,4.8,4.8V514c0,2.6-2.1,4.8-4.8,4.8h-49.7c-2.6,0-4.8-2.1-4.8-4.8v-10.4    C1217.9,500.9,1220,498.7,1222.6,498.7z"
      />
    </g>
  );
});

export default Base8;
