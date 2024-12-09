import { observer } from "mobx-react-lite";
import menorahState from "../Menorah.state";
import { useState } from "react";

const Base2 = observer(() => {
  const candle = menorahState.candles[1];
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
        points="535.7,578 570.7,578 577.7,538.7 528.6,538.7   "
      />
      <polygon
        fill="#967444"
        points="530.2,498.7 576.1,498.7 585.4,483.1 521,483.1   "
      />
      <path
        fill="#AD884D"
        d="M578,518.7h-49.7c-2.6,0-4.8,2.1-4.8,4.8V534c0,2.6,2.1,4.8,4.8,4.8H578c2.6,0,4.8-2.1,4.8-4.8v-10.4    C582.8,520.9,580.7,518.7,578,518.7z"
      />
      <path
        fill="#BC9357"
        d="M578,498.7h-49.7c-2.6,0-4.8,2.1-4.8,4.8V514c0,2.6,2.1,4.8,4.8,4.8H578c2.6,0,4.8-2.1,4.8-4.8v-10.4    C582.8,500.9,580.7,498.7,578,498.7z"
      />
    </g>
  );
});

export default Base2;
