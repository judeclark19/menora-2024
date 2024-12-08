import candleStyles from "../styles/candles.module.css";

const GreenCandle = () => {
  return (
    <g>
      {/* green candle */}
      <path
        className={candleStyles.wick}
        d="M243.8,91.6c-0.3-6.5,1.1-15.3,1.1-15.4l1.4,0.2c0,0.1-1.4,8.7-1.1,15.1L243.8,91.6z"
      />
      <path
        className={candleStyles.flame}
        d="M247.4,41c1.9,0,3.6,20.1,3.6,30.4c0,5.7-2.5,12.5-5.9,12.5c-1.9,0-5.1-1.7-5.1-12.6     C240,60.6,243.8,41,247.4,41z"
      />
      <linearGradient
        id="greenWaxGradient"
        gradientUnits="userSpaceOnUse"
        x1="234.8291"
        y1="208.5701"
        x2="256.0654"
        y2="208.5701"
      >
        <stop offset="0" style={{ stopColor: "#A6CE39" }} />
        <stop offset="7.468915e-03" style={{ stopColor: "#A8CF3A" }} />
        <stop offset="9.174142e-02" style={{ stopColor: "#C0D957" }} />
        <stop offset="0.1588" style={{ stopColor: "#CEDF6C" }} />
        <stop offset="0.2" style={{ stopColor: "#D3E173" }} />
        <stop offset="0.2112" style={{ stopColor: "#D1E070" }} />
        <stop offset="0.3376" style={{ stopColor: "#BAD64F" }} />
        <stop offset="0.4383" style={{ stopColor: "#ACD03D" }} />
        <stop offset="0.5" style={{ stopColor: "#A6CE39" }} />
        <stop offset="0.76" style={{ stopColor: "#D3E173" }} />
        <stop offset="0.8094" style={{ stopColor: "#CEDF6C" }} />
        <stop offset="0.8899" style={{ stopColor: "#C0D957" }} />
        <stop offset="0.991" style={{ stopColor: "#A8CF3A" }} />
        <stop offset="1" style={{ stopColor: "#A6CE39" }} />
      </linearGradient>
      <polygon
        className={candleStyles.greenWax}
        points="256.1,327.2 234.8,327.2 237.6,89.9 253.3,89.9    "
      />
    </g>
  );
};

export default GreenCandle;
