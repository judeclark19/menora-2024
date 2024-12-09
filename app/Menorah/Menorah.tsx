import { observer } from "mobx-react-lite";
import Base1 from "./bases/Base1";
import Base2 from "./bases/Base2";
import Base3 from "./bases/Base3";
import Base4 from "./bases/Base4";
import Base5 from "./bases/Base5";
import Base6 from "./bases/Base6";
import Base7 from "./bases/Base7";
import Base8 from "./bases/Base8";
import ShamashBase from "./bases/ShamashBase";
import Candle1 from "./candles/Candle1";
import Candle2 from "./candles/Candle2";
import Candle3 from "./candles/Candle3";
import Candle4 from "./candles/Candle4";
import Candle5 from "./candles/Candle5";
import Candle6 from "./candles/Candle6";
import Candle7 from "./candles/Candle7";
import Candle8 from "./candles/Candle8";
import Shamash from "./candles/Shamash";
import Loops from "./Loops";
import Stem from "./Stem";

const Menorah = observer(() => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      //   xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      id="Layer_1"
      x="0px"
      y="0px"
      viewBox="0 0 1700 1400"
      enableBackground="new 0 0 1700 1400"
      //   xml:space="preserve"
      style={{
        pointerEvents: "none",
        minHeight: "300px"
        // maxWidth: "100%"
      }}
    >
      <g>
        <g>
          <rect x="832.5" y="480.5" fill="#DDAB6F" width="35" height="22.6" />
          <rect x="832.5" y="1131.4" fill="#BC9357" width="35" height="22.6" />
          <Loops />
          <Base1 />
          <Base2 />
          <Base3 />
          <Base4 />
          <ShamashBase />
          <Base5 />
          <Base6 />
          <Base7 />
          <Base8 />

          <Stem />
          <Candle1 />
          <Candle2 />
          <Candle3 />
          <Candle4 />
          <Shamash />
          <Candle5 />
          <Candle6 />
          <Candle7 />
          <Candle8 />
        </g>
      </g>
    </svg>
  );
});

export default Menorah;
