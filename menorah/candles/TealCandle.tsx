import candleStyles from "../styles/candles.module.css";

const TealCandle = () => {
  return (
    <g>
      {/* teal candle */}
      <path
        className={candleStyles.wick}
        d="M303.1,91.6c-0.3-6.5,1.1-15.3,1.1-15.4l1.4,0.2c0,0.1-1.4,8.7-1.1,15.1L303.1,91.6z"
      />
      <path
        className={candleStyles.flame}
        d="M306.7,41c1.9,0,3.6,20.1,3.6,30.4c0,5.7-2.5,12.5-5.9,12.5c-1.9,0-5.1-1.7-5.1-12.6     C299.3,60.6,303.1,41,306.7,41z"
      />
      <linearGradient
        id="tealWaxGradient"
        gradientUnits="userSpaceOnUse"
        x1="294.1602"
        y1="208.5701"
        x2="315.3965"
        y2="208.5701"
      >
        <stop offset="0" style={{ stopColor: "#00A99D" }} />
        <stop offset="6.745087e-02" style={{ stopColor: "#00B6AE" }} />
        <stop offset="0.1256" style={{ stopColor: "#50C2BC" }} />
        <stop offset="0.1717" style={{ stopColor: "#70CAC5" }} />
        <stop offset="0.2" style={{ stopColor: "#7ACCC8" }} />
        <stop offset="0.3012" style={{ stopColor: "#22BBB4" }} />
        <stop offset="0.3884" style={{ stopColor: "#00B1A7" }} />
        <stop offset="0.4576" style={{ stopColor: "#00ABA0" }} />
        <stop offset="0.5" style={{ stopColor: "#00A99D" }} />
        <stop offset="0.76" style={{ stopColor: "#7ACCC8" }} />
        <stop offset="0.7939" style={{ stopColor: "#70CAC5" }} />
        <stop offset="0.8492" style={{ stopColor: "#50C2BC" }} />
        <stop offset="0.9191" style={{ stopColor: "#00B6AE" }} />
        <stop offset="1" style={{ stopColor: "#00A99D" }} />
      </linearGradient>
      <polygon
        className={candleStyles.tealWax}
        points="315.4,327.2 294.2,327.2 296.9,89.9 312.6,89.9    "
      />
    </g>
  );
};

export default TealCandle;
