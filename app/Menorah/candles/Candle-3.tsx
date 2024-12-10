import { observer } from "mobx-react-lite";
import { useState } from "react";
import menorahState from "../Menorah.state";

const Candle3 = observer(() => {
  const [isHovered, setIsHovered] = useState(false);
  const candle = menorahState.candles[3];
  return (
    <g
      style={{
        transform: `translate(0, ${candle.isVisible ? 0 : -1000}px)`,
        transition: "transform 1s ease"
      }}
      onClick={() => {
        candle.setIsLit(!candle.isLit);
      }}
    >
      <g style={candle.flameStyles}>
        <path
          fill="#FEFEDE"
          d="M934.6,317.2l9.5-23.3c1.6-4,7.3-4,8.9,0l9.5,23.3c1.8,4.5,0.8,9.7-2.7,13.1l-2.7,2.7      c-4.7,4.7-12.4,4.7-17.2,0l-2.7-2.7C933.8,326.9,932.7,321.7,934.6,317.2z"
        />
        <path
          fill="#F0CF85"
          d="M949.1,332.2c1.1-0.1,2.2-0.7,3-1.5l3.1-3.1c1.4-1.4,1.8-3.5,1.1-5.3l-6.3-15.5c-0.5-1.3-2.4-1.3-3,0      l-6.3,15.5c-0.7,1.8-0.3,3.9,1.1,5.3l3.2,3.2C946.1,331.9,947.6,332.4,949.1,332.2z"
        />
      </g>

      <g
        style={{
          cursor: "pointer",
          pointerEvents: "all",
          stroke: isHovered ? "white" : "none",
          strokeWidth: isHovered ? 3 : 0
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <path
          fill="#9AC5E3"
          d="M933,342.3h31c5,0,9,4,9,9v131.8H924V351.3C924,346.3,928,342.3,933,342.3z"
        />
      </g>
      <path
        fill="#504B42"
        d="M948.5,324.4L948.5,324.4c1,0,1.8,0.8,1.8,1.8v16h-3.7v-16C946.7,325.3,947.5,324.4,948.5,324.4z"
      />
      <g style={candle.coronaStyles}>
        <circle opacity="0.1" fill="#FEFEDE" cx="948.5" cy="319" r="115.7" />
        <circle opacity="0.1" fill="#FEFEDE" cx="950.3" cy="319" r="79.7" />
        <circle opacity="0.1" fill="#FEFEDE" cx="950.3" cy="319" r="47.2" />
      </g>
    </g>
  );
});

export default Candle3;
