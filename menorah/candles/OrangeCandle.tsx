import candleStyles from "../styles/candles.module.css";

const OrangeCandle = () => {
  return (
    <g>
      {/* orange candle */}
      <path
        className={candleStyles.wick}
        d="M125.1,91.6c-0.3-6.5,1.1-15.3,1.1-15.4l1.4,0.2c0,0.1-1.4,8.7-1.1,15.1L125.1,91.6z"
      />

      <path
        className={candleStyles.flame}
        d="M128.7,41c1.9,0,3.6,20.1,3.6,30.4c0,5.7-2.5,12.5-5.9,12.5c-1.9,0-5.1-1.7-5.1-12.6     C121.3,60.6,125.2,41,128.7,41z"
      />

      <linearGradient
        id="orangeWaxGradient"
        gradientUnits="userSpaceOnUse"
        x1="116.167"
        y1="208.5701"
        x2="137.4033"
        y2="208.5701"
      >
        <stop offset="0" style={{ stopColor: "#F58220" }} />
        <stop offset="7.468915e-03" style={{ stopColor: "#F58422" }} />
        <stop offset="9.174142e-02" style={{ stopColor: "#F89742" }} />
        <stop offset="0.1588" style={{ stopColor: "#F9A357" }} />
        <stop offset="0.2" style={{ stopColor: "#FAA85F" }} />
        <stop offset="0.2112" style={{ stopColor: "#F9A65C" }} />
        <stop offset="0.3376" style={{ stopColor: "#F79239" }} />
        <stop offset="0.4383" style={{ stopColor: "#F68625" }} />
        <stop offset="0.5" style={{ stopColor: "#F58220" }} />
        <stop offset="0.76" style={{ stopColor: "#FAA85F" }} />
        <stop offset="0.8094" style={{ stopColor: "#F9A357" }} />
        <stop offset="0.8899" style={{ stopColor: "#F89742" }} />
        <stop offset="0.991" style={{ stopColor: "#F58422" }} />
        <stop offset="1" style={{ stopColor: "#F58220" }} />
      </linearGradient>
      <polygon
        className={candleStyles.orangeWax}
        points="137.4,327.2 116.2,327.2 119,89.9 134.6,89.9    "
      />
    </g>
  );
};

export default OrangeCandle;
