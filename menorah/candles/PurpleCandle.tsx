import candleStyles from "../styles/candles.module.css";

const PurpleCandle = () => {
  return (
    <g>
      {/* purple candle */}
      <path
        className={candleStyles.wick}
        d="M481.1,91.6c-0.3-6.5,1.1-15.3,1.1-15.4l1.4,0.2c0,0.1-1.4,8.7-1.1,15.1L481.1,91.6z"
      />

      <path
        className={candleStyles.flame}
        d="M484.7,41c1.9,0,3.6,20.1,3.6,30.4c0,5.7-2.5,12.5-5.9,12.5c-1.9,0-5.1-1.7-5.1-12.6     C477.3,60.6,481.1,41,484.7,41z"
      />
      <linearGradient
        id="purpleWaxGradient"
        gradientUnits="userSpaceOnUse"
        x1="472.1533"
        y1="208.5701"
        x2="493.3896"
        y2="208.5701"
      >
        <stop offset="0" style={{ stopColor: "#92278F" }} />
        <stop offset="7.016261e-03" style={{ stopColor: "#932B90" }} />
        <stop offset="8.618143e-02" style={{ stopColor: "#9E4E9E" }} />
        <stop offset="0.1492" style={{ stopColor: "#A661A7" }} />
        <stop offset="0.1879" style={{ stopColor: "#A967AA" }} />
        <stop offset="0.1992" style={{ stopColor: "#A865A9" }} />
        <stop offset="0.3269" style={{ stopColor: "#9B469A" }} />
        <stop offset="0.4285" style={{ stopColor: "#943092" }} />
        <stop offset="0.4909" style={{ stopColor: "#92278F" }} />
        <stop offset="0.7333" style={{ stopColor: "#A967AA" }} />
        <stop offset="0.7882" style={{ stopColor: "#A661A7" }} />
        <stop offset="0.8777" style={{ stopColor: "#9E4E9E" }} />
        <stop offset="0.99" style={{ stopColor: "#932B90" }} />
        <stop offset="1" style={{ stopColor: "#92278F" }} />
      </linearGradient>
      <polygon
        className={candleStyles.purpleWax}
        points="493.4,327.2 472.2,327.2 474.9,89.9 490.6,89.9    "
      />
    </g>
  );
};

export default PurpleCandle;
