import { useState } from "react";
import menorahState from "../Menorah.state";
import { observer } from "mobx-react-lite";

const Shamash = observer(() => {
  const [isHovered, setIsHovered] = useState(false);
  const candle = menorahState.candles[8];
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
          d="M864,219.6l-9.5-23.3c-1.6-4-7.3-4-8.9,0l-9.5,23.3c-1.8,4.5-0.8,9.7,2.7,13.1l2.7,2.7      c4.7,4.7,12.4,4.7,17.2,0l2.7-2.7C864.8,229.3,865.8,224.2,864,219.6z"
        />
        <path
          fill="#F0CF85"
          d="M849.4,234.7c-1.1-0.1-2.2-0.7-3-1.5l-3.1-3.1c-1.4-1.4-1.8-3.5-1.1-5.3l6.3-15.5c0.5-1.3,2.4-1.3,3,0      l6.3,15.5c0.7,1.8,0.3,3.9-1.1,5.3l-3.2,3.2C852.5,234.4,851,234.9,849.4,234.7z"
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
          d="M865.6,244.8h-31c-5,0-9,4-9,9v131.8h49.1V253.8C874.6,248.8,870.6,244.8,865.6,244.8z"
        />
      </g>
      <path
        fill="#504B42"
        d="M850.1,226.9L850.1,226.9c-1,0-1.8,0.8-1.8,1.8v16h3.7v-16C851.9,227.8,851.1,226.9,850.1,226.9z"
      />
      <g style={candle.coronaStyles}>
        <circle opacity="0.1" fill="#FEFEDE" cx="850.1" cy="221.5" r="115.7" />
        <circle opacity="0.1" fill="#FEFEDE" cx="848.2" cy="221.5" r="79.7" />
        <circle opacity="0.1" fill="#FEFEDE" cx="848.2" cy="221.5" r="47.2" />
      </g>
    </g>
  );
});

export default Shamash;
