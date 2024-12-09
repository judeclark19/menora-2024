import { useState } from "react";
import menorahState from "../Menorah.state";
import { observer } from "mobx-react-lite";

const ShamashBase = observer(() => {
  const candle = menorahState.candles[8];
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
        points="832.5,480.5 867.5,480.5 874.5,441.2 825.5,441.2   "
      />
      <polygon
        fill="#967444"
        points="827,401.2 873,401.2 882.2,385.6 850,385.6 817.8,385.6   "
      />
      <path
        fill="#AD884D"
        d="M874.9,421.2h-49.7c-2.6,0-4.8,2.1-4.8,4.8v10.4c0,2.6,2.1,4.8,4.8,4.8h49.7c2.6,0,4.8-2.1,4.8-4.8V426    C879.6,423.4,877.5,421.2,874.9,421.2z"
      />
      <path
        fill="#BC9357"
        d="M874.9,401.2h-49.7c-2.6,0-4.8,2.1-4.8,4.8v10.4c0,2.6,2.1,4.8,4.8,4.8h49.7c2.6,0,4.8-2.1,4.8-4.8V406    C879.6,403.4,877.5,401.2,874.9,401.2z"
      />
    </g>
  );
});

export default ShamashBase;
