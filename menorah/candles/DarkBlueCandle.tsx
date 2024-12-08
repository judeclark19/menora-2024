import candleStyles from "../styles/candles.module.css";

const DarkBlueCandle = () => {
  return (
    <g>
      {/* dark blue candle */}
      <path
        className={candleStyles.wick}
        d="M421.8,91.6c-0.3-6.5,1.1-15.3,1.1-15.4l1.4,0.2c0,0.1-1.4,8.7-1.1,15.1L421.8,91.6z"
      />
      <path
        className={candleStyles.flame}
        d="M425.3,41c1.9,0,3.6,20.1,3.6,30.4c0,5.7-2.5,12.5-5.9,12.5c-1.9,0-5.1-1.7-5.1-12.6     C418,60.6,421.8,41,425.3,41z"
      />
      <linearGradient
        id="darkBlueWaxGradient"
        gradientUnits="userSpaceOnUse"
        x1="412.8223"
        y1="208.5701"
        x2="434.0586"
        y2="208.5701"
      >
        <stop offset="6.060610e-03" style={{ stopColor: "#0072BC" }} />
        <stop offset="6.737965e-02" style={{ stopColor: "#008BD1" }} />
        <stop offset="0.1203" style={{ stopColor: "#009DE1" }} />
        <stop offset="0.1622" style={{ stopColor: "#00A8EA" }} />
        <stop offset="0.1879" style={{ stopColor: "#00AEEF" }} />
        <stop offset="0.2901" style={{ stopColor: "#0093D8" }} />
        <stop offset="0.3782" style={{ stopColor: "#0081C8" }} />
        <stop offset="0.4481" style={{ stopColor: "#0076BF" }} />
        <stop offset="0.4909" style={{ stopColor: "#0072BC" }} />
        <stop offset="0.7333" style={{ stopColor: "#00AEEF" }} />
        <stop offset="0.771" style={{ stopColor: "#00A8EA" }} />
        <stop offset="0.8325" style={{ stopColor: "#009DE1" }} />
        <stop offset="0.9101" style={{ stopColor: "#008BD1" }} />
        <stop offset="1" style={{ stopColor: "#0072BC" }} />
      </linearGradient>
      <polygon
        className={candleStyles.darkBlueWax}
        points="434.1,327.2 412.8,327.2 415.6,89.9 431.3,89.9    "
      />
    </g>
  );
};

export default DarkBlueCandle;
