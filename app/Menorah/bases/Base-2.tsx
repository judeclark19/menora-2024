import { observer } from "mobx-react-lite";
import menorahState from "../Menorah.state";
import { useState } from "react";

const Base2 = observer(() => {
  const candle = menorahState.candles[2];
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
        points="1065.2,578 1030.2,578 1023.1,538.7 1072.2,538.7   "
      />
      <polygon
        fill="#967444"
        points="1070.6,498.7 1024.7,498.7 1015.5,483.1 1079.9,483.1   "
      />
      <path
        fill="#AD884D"
        d="M1022.8,518.7h49.7c2.6,0,4.8,2.1,4.8,4.8V534c0,2.6-2.1,4.8-4.8,4.8h-49.7c-2.6,0-4.8-2.1-4.8-4.8v-10.4    C1018,520.9,1020.2,518.7,1022.8,518.7z"
      />
      <path
        fill="#BC9357"
        d="M1022.8,498.7h49.7c2.6,0,4.8,2.1,4.8,4.8V514c0,2.6-2.1,4.8-4.8,4.8h-49.7c-2.6,0-4.8-2.1-4.8-4.8v-10.4    C1018,500.9,1020.2,498.7,1022.8,498.7z"
      />
    </g>
  );
});

export default Base2;
