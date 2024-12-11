import { observer } from "mobx-react-lite";
import Base7 from "./bases/Base-7";
import Base6 from "./bases/Base-6";
import Base5 from "./bases/Base-5";
import Base4 from "./bases/Base-4";
import Base3 from "./bases/Base-3";
import Base2 from "./bases/Base-2";
import Base1 from "./bases/Base-1";
import Base0 from "./bases/Base-0";
import ShamashBase from "./bases/ShamashBase";
import Candle7 from "./candles/Candle-7";
import Candle6 from "./candles/Candle-6";
import Candle5 from "./candles/Candle-5";
import Candle4 from "./candles/Candle-4";
import Candle3 from "./candles/Candle-3";
import Candle2 from "./candles/Candle-2";
import Candle1 from "./candles/Candle-1";
import Candle0 from "./candles/Candle-0";
import Shamash from "./candles/Shamash";
import Loops from "./Loops";
import Stem from "./Stem";

const Menorah = observer(() => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      id="Layer_1"
      x="0px"
      y="0px"
      viewBox="0 0 1700 1400"
      enableBackground="new 0 0 1700 1400"
      style={{
        pointerEvents: "none",
        minHeight: "300px"
      }}
    >
      <g>
        <g>
          <rect x="832.5" y="480.5" fill="#DDAB6F" width="35" height="22.6" />
          <rect x="832.5" y="1131.4" fill="#BC9357" width="35" height="22.6" />
          <Loops />

          <Base7 />
          <Base6 />
          <Base5 />
          <Base4 />
          <ShamashBase />
          <Base3 />
          <Base2 />
          <Base1 />
          <Base0 />

          <Stem />

          <Candle7 />
          <Candle6 />
          <Candle5 />
          <Candle4 />
          <Shamash />
          <Candle3 />
          <Candle2 />
          <Candle1 />
          <Candle0 />
        </g>
      </g>
    </svg>
  );
});

export default Menorah;
