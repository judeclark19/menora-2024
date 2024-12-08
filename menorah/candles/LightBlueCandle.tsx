import candleStyles from "../styles/candles.module.css";

const LightBlueCandle = () => {
  return (
    <g>
      {/* light blue candle */}
      <path
        className={candleStyles.wick}
        d="M362.4,91.6c-0.3-6.5,1.1-15.3,1.1-15.4l1.4,0.2c0,0.1-1.4,8.7-1.1,15.1L362.4,91.6z"
      />

      <path
        className={candleStyles.flame}
        d="M366,41c1.9,0,3.6,20.1,3.6,30.4c0,5.7-2.5,12.5-5.9,12.5c-1.9,0-5.1-1.7-5.1-12.6     C358.6,60.6,362.5,41,366,41z"
      />
      <linearGradient
        id="lightBlueWaxGradient"
        gradientUnits="userSpaceOnUse"
        x1="353.4912"
        y1="208.5701"
        x2="374.7275"
        y2="208.5701"
      >
        <stop offset="0" style={{ stopColor: "#00AEEF" }} />
        <stop offset="6.540677e-02" style={{ stopColor: "#00BAF2" }} />
        <stop offset="0.1218" style={{ stopColor: "#31C5F4" }} />
        <stop offset="0.1665" style={{ stopColor: "#61CDF6" }} />
        <stop offset="0.1939" style={{ stopColor: "#6DCFF6" }} />
        <stop offset="0.2972" style={{ stopColor: "#00BFF3" }} />
        <stop offset="0.3862" style={{ stopColor: "#00B5F1" }} />
        <stop offset="0.4567" style={{ stopColor: "#00AFF0" }} />
        <stop offset="0.5" style={{ stopColor: "#00AEEF" }} />
        <stop offset="0.7515" style={{ stopColor: "#6DCFF6" }} />
        <stop offset="0.7866" style={{ stopColor: "#61CDF6" }} />
        <stop offset="0.8439" style={{ stopColor: "#31C5F4" }} />
        <stop offset="0.9162" style={{ stopColor: "#00BAF2" }} />
        <stop offset="1" style={{ stopColor: "#00AEEF" }} />
      </linearGradient>
      <polygon
        className={candleStyles.lightBlueWax}
        points="374.7,327.2 353.5,327.2 356.3,89.9 371.9,89.9    "
      />
    </g>
  );
};

export default LightBlueCandle;
