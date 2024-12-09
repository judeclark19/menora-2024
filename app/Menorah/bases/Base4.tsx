import { observer } from "mobx-react-lite";
import menorahState from "../Menorah.state";
import { useState } from "react";

const Base4 = observer(() => {
  const candle = menorahState.candles[3];
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
        points="734.8,578 769.8,578 776.9,538.7 727.8,538.7   "
      />
      <polygon
        fill="#967444"
        points="729.4,498.7 775.3,498.7 784.5,483.1 720.1,483.1   "
      />
      <path
        fill="#AD884D"
        d="M777.2,518.7h-49.7c-2.6,0-4.8,2.1-4.8,4.8V534c0,2.6,2.1,4.8,4.8,4.8h49.7c2.6,0,4.8-2.1,4.8-4.8v-10.4    C782,520.9,779.8,518.7,777.2,518.7z"
      />
      <path
        fill="#BC9357"
        d="M777.2,498.7h-49.7c-2.6,0-4.8,2.1-4.8,4.8V514c0,2.6,2.1,4.8,4.8,4.8h49.7c2.6,0,4.8-2.1,4.8-4.8v-10.4    C782,500.9,779.8,498.7,777.2,498.7z"
      />
    </g>
  );
});

export default Base4;
