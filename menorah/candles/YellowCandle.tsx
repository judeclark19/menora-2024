import candleStyles from "../styles/candles.module.css";

const YellowCandle = () => {
  return (
    <g>
      {/* yellow candle */}
      <path
        className={candleStyles.wick}
        d="M184.5,91.6c-0.3-6.5,1.1-15.3,1.1-15.4l1.4,0.2c0,0.1-1.4,8.7-1.1,15.1L184.5,91.6z"
      />

      <path
        className={candleStyles.flame}
        d="M188,41c1.9,0,3.6,20.1,3.6,30.4c0,5.7-2.5,12.5-5.9,12.5c-1.9,0-5.1-1.7-5.1-12.6     C180.6,60.6,184.5,41,188,41z"
      />
      <linearGradient
        id="yellowWaxGradient"
        gradientUnits="userSpaceOnUse"
        x1="175.498"
        y1="208.5701"
        x2="196.7344"
        y2="208.5701"
      >
        <stop offset="0" style={{ stopColor: "#FFCB05" }} />
        <stop offset="7.468915e-03" style={{ stopColor: "#FFCD0C" }} />
        <stop offset="9.174142e-02" style={{ stopColor: "#FFE146" }} />
        <stop offset="0.1588" style={{ stopColor: "#FFEE63" }} />
        <stop offset="0.2" style={{ stopColor: "#FFF56D" }} />
        <stop offset="0.2112" style={{ stopColor: "#FFF169" }} />
        <stop offset="0.3376" style={{ stopColor: "#FFDC3A" }} />
        <stop offset="0.4383" style={{ stopColor: "#FFD016" }} />
        <stop offset="0.5" style={{ stopColor: "#FFCB05" }} />
        <stop offset="0.76" style={{ stopColor: "#FFF56D" }} />
        <stop offset="0.8094" style={{ stopColor: "#FFEE63" }} />
        <stop offset="0.8899" style={{ stopColor: "#FFE146" }} />
        <stop offset="0.991" style={{ stopColor: "#FFCD0C" }} />
        <stop offset="1" style={{ stopColor: "#FFCB05" }} />
      </linearGradient>
      <polygon
        className={candleStyles.yellowWax}
        points="196.7,327.2 175.5,327.2 178.3,89.9 193.9,89.9    "
      />
    </g>
  );
};

export default YellowCandle;
