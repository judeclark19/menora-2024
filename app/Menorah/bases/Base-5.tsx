import { observer } from "mobx-react-lite";
import menorahState from "../Menorah.state";
import { useState } from "react";

const Base5 = observer(() => {
  const candle = menorahState.candles[5];
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
        points="634.8,578 669.8,578 676.9,538.7 627.8,538.7   "
      />
      <polygon
        fill="#967444"
        points="629.4,498.7 675.3,498.7 684.5,483.1 620.1,483.1   "
      />
      <path
        fill="#AD884D"
        d="M677.2,518.7h-49.7c-2.6,0-4.8,2.1-4.8,4.8V534c0,2.6,2.1,4.8,4.8,4.8h49.7c2.6,0,4.8-2.1,4.8-4.8v-10.4    C682,520.9,679.8,518.7,677.2,518.7z"
      />
      <path
        fill="#BC9357"
        d="M677.2,498.7h-49.7c-2.6,0-4.8,2.1-4.8,4.8V514c0,2.6,2.1,4.8,4.8,4.8h49.7c2.6,0,4.8-2.1,4.8-4.8v-10.4    C682,500.9,679.8,498.7,677.2,498.7z"
      />
    </g>
  );
});

export default Base5;
