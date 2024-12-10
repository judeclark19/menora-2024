import { observer } from "mobx-react-lite";
import menorahState from "../Menorah.state";
import { useState } from "react";

const Base3 = observer(() => {
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
        points="965.2,578 930.2,578 923.1,538.7 972.2,538.7   "
      />
      <polygon
        fill="#967444"
        points="970.6,498.7 924.7,498.7 915.5,483.1 979.9,483.1   "
      />
      <path
        fill="#AD884D"
        d="M922.8,518.7h49.7c2.6,0,4.8,2.1,4.8,4.8V534c0,2.6-2.1,4.8-4.8,4.8h-49.7c-2.6,0-4.8-2.1-4.8-4.8v-10.4    C918,520.9,920.2,518.7,922.8,518.7z"
      />
      <path
        fill="#BC9357"
        d="M922.8,498.7h49.7c2.6,0,4.8,2.1,4.8,4.8V514c0,2.6-2.1,4.8-4.8,4.8h-49.7c-2.6,0-4.8-2.1-4.8-4.8v-10.4    C918,500.9,920.2,498.7,922.8,498.7z"
      />
    </g>
  );
});

export default Base3;
