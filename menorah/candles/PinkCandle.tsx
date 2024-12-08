import candleStyles from "../styles/candles.module.css";

const PinkCandle = () => {
  return (
    <g>
      {/* pink candle */}
      <path
        className={candleStyles.wick}
        d="M541,91.6c-0.3-6.5,1.1-15.3,1.1-15.4l1.4,0.2c0,0.1-1.4,8.7-1.1,15.1L541,91.6z"
      />
      <path
        className={candleStyles.flame}
        d="M544.6,41c1.9,0,3.6,20.1,3.6,30.4c0,5.7-2.5,12.5-5.9,12.5c-1.9,0-5.1-1.7-5.1-12.6     C537.2,60.6,541,41,544.6,41z"
      />
      <linearGradient
        id="pinkWaxGradient"
        gradientUnits="userSpaceOnUse"
        x1="532.0566"
        y1="208.5701"
        x2="553.2939"
        y2="208.5701"
      >
        <stop offset="0" style={{ stopColor: "#EC008C" }} />
        <stop offset="5.434438e-02" style={{ stopColor: "#ED3193" }} />
        <stop offset="0.1445" style={{ stopColor: "#EF519D" }} />
        <stop offset="0.2" style={{ stopColor: "#EF5BA1" }} />
        <stop offset="0.2807" style={{ stopColor: "#EE4799" }} />
        <stop offset="0.4146" style={{ stopColor: "#ED1F8F" }} />
        <stop offset="0.497" style={{ stopColor: "#EC008C" }} />
        <stop offset="0.7455" style={{ stopColor: "#EF5BA1" }} />
        <stop offset="0.8161" style={{ stopColor: "#EF519D" }} />
        <stop offset="0.9308" style={{ stopColor: "#ED3193" }} />
        <stop offset="1" style={{ stopColor: "#EC008C" }} />
      </linearGradient>
      <polygon
        className={candleStyles.pinkWax}
        points="553.3,327.2 532.1,327.2 534.8,89.9 550.5,89.9    "
      />
    </g>
  );
};

export default PinkCandle;
