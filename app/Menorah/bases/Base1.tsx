import { observer } from "mobx-react-lite";
import { useState } from "react";
import menorahState from "../Menorah.state";

const Base1 = observer(() => {
  const candle = menorahState.candles[0];
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
      <polygon fill="#967444" points="435,578 470,578 477,538.7 428,538.7   " />
      <polygon
        fill="#967444"
        points="429.5,498.7 475.5,498.7 484.7,483.1 420.3,483.1   "
      />
      <path
        fill="#AD884D"
        d="M477.4,518.7h-49.7c-2.6,0-4.8,2.1-4.8,4.8V534c0,2.6,2.1,4.8,4.8,4.8h49.7c2.6,0,4.8-2.1,4.8-4.8v-10.4    C482.1,520.9,480,518.7,477.4,518.7z"
      />
      <path
        fill="#BC9357"
        d="M477.4,498.7h-49.7c-2.6,0-4.8,2.1-4.8,4.8V514c0,2.6,2.1,4.8,4.8,4.8h49.7c2.6,0,4.8-2.1,4.8-4.8v-10.4    C482.1,500.9,480,498.7,477.4,498.7z"
      />
    </g>
  );
});

export default Base1;
