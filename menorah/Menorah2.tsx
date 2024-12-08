import stemStyles from "./styles/stem.module.css";
import candleBaseStyles from "./styles/candleBases.module.css";
import branchStyles from "./styles/branches.module.css";
import RedCandle from "./candles/RedCandle";
import OrangeCandle from "./candles/OrangeCandle";
import YellowCandle from "./candles/YellowCandle";
import GreenCandle from "./candles/GreenCandle";
import TealCandle from "./candles/TealCandle";
import LightBlueCandle from "./candles/LightBlueCandle";
import DarkBlueCandle from "./candles/DarkBlueCandle";
import PurpleCandle from "./candles/PurpleCandle";
import PinkCandle from "./candles/PinkCandle";
import { useState } from "react";
const Menorah2 = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleDrag = (x: number, y: number) => {
    console.log("drag", x, y);
    setPosition({ x, y });
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      //   xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 620 780"
      //   style="enable-background:new 0 0 620 780;"
      enableBackground={"new 0 0 620 780"}
      //   xml:space="preserve"
      width={"620px"}
      height={"780px"}
    >
      <linearGradient
        id="flameGradient"
        gradientUnits="userSpaceOnUse"
        x1="126.7861"
        y1="83.9785"
        x2="126.7861"
        y2="41.0273"
      >
        <stop offset="0" style={{ stopColor: "#141a20" }} />
        <stop offset="3.000055e-02" style={{ stopColor: "#201241C" }} />
        <stop offset="7.897231e-02" style={{ stopColor: "#263542" }} />
        <stop offset="0.1408" style={{ stopColor: "#2C465B" }} />
        <stop offset="0.2131" style={{ stopColor: "#1F5074" }} />
        <stop offset="0.2933" style={{ stopColor: "#00548D" }} />
        <stop offset="0.3" style={{ stopColor: "#00558F" }} />
        <stop offset="0.334" style={{ stopColor: "#2F6A92" }} />
        <stop offset="0.3794" style={{ stopColor: "#748996" }} />
        <stop offset="0.4203" style={{ stopColor: "#A8A796" }} />
        <stop offset="0.4553" style={{ stopColor: "#D0C193" }} />
        <stop offset="0.483" style={{ stopColor: "#EBD28F" }} />
        <stop offset="0.5" style={{ stopColor: "#EBD28F" }} />
        <stop offset="0.76" style={{ stopColor: "#F8DA8E" }} />
        <stop offset="1" style={{ stopColor: "#ffeec4" }} />
      </linearGradient>

      <RedCandle position={position} onDrag={handleDrag} />
      <OrangeCandle />
      <YellowCandle />
      <GreenCandle />
      <TealCandle />
      <LightBlueCandle />
      <DarkBlueCandle />
      <PurpleCandle />
      <PinkCandle />
      <g>
        <g>
          <line
            className={stemStyles.st112}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st113}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st114}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st115}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st116}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st117}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st118}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st119}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st120}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st121}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st122}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st123}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st124}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st125}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st126}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st127}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st128}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st129}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st130}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st131}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st132}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st133}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st134}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st135}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st136}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st137}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st138}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st139}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st140}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st141}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st142}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st143}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st144}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st145}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st146}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st147}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st148}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st149}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st150}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st151}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st152}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st153}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st154}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st155}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st156}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st157}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st158}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st159}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st160}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st161}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st162}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st163}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st164}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st165}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st166}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st167}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st168}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st169}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st171}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st172}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st173}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st174}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st175}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st176}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
          <line
            className={stemStyles.st177}
            x1="304.8"
            y1="344.1"
            x2="304.8"
            y2="676.7"
          />
        </g>
        <g>
          <linearGradient
            id="SVGID_72_"
            gradientUnits="userSpaceOnUse"
            x1="286.042"
            y1="335.6465"
            x2="323.5205"
            y2="335.6465"
          >
            <stop offset="0" style={{ stopColor: "#C8A84C" }} />
            <stop offset="1.957078e-02" style={{ stopColor: "#CCAB4D" }} />
            <stop offset="0.129" style={{ stopColor: "#DEBA53" }} />
            <stop offset="0.1963" style={{ stopColor: "#E7C157" }} />
            <stop offset="0.2266" style={{ stopColor: "#E1BC55" }} />
            <stop offset="0.3959" style={{ stopColor: "#CEAD4E" }} />
            <stop offset="0.5" style={{ stopColor: "#C8A84C" }} />
            <stop offset="0.7" style={{ stopColor: "#E7C157" }} />
            <stop offset="0.8028" style={{ stopColor: "#DEBA53" }} />
            <stop offset="0.9701" style={{ stopColor: "#CCAB4D" }} />
            <stop offset="1" style={{ stopColor: "#C8A84C" }} />
          </linearGradient>
          <rect
            x="286"
            y="328.4"
            className={candleBaseStyles.st178}
            width="37.5"
            height="14.5"
          />
          <linearGradient
            id="SVGID_73_"
            gradientUnits="userSpaceOnUse"
            x1="286.042"
            y1="327.8062"
            x2="323.5205"
            y2="327.8062"
          >
            <stop offset="0" style={{ stopColor: "#AB9140" }} />
            <stop offset="5.334417e-02" style={{ stopColor: "#B89C46" }} />
            <stop offset="0.1419" style={{ stopColor: "#CBAA4D" }} />
            <stop offset="0.1963" style={{ stopColor: "#D1B04F" }} />
            <stop offset="0.2788" style={{ stopColor: "#C4A54A" }} />
            <stop offset="0.4158" style={{ stopColor: "#B29643" }} />
            <stop offset="0.5" style={{ stopColor: "#AB9140" }} />
            <stop offset="0.6848" style={{ stopColor: "#D1B04F" }} />
            <stop offset="0.7723" style={{ stopColor: "#CBAA4D" }} />
            <stop offset="0.9144" style={{ stopColor: "#B89C46" }} />
            <stop offset="1" style={{ stopColor: "#AB9140" }} />
          </linearGradient>
          <polygon
            className={candleBaseStyles.st179}
            points="322.8,327.2 286.7,327.2 286,328.4 323.5,328.4     "
          />
          <linearGradient
            id="SVGID_74_"
            gradientUnits="userSpaceOnUse"
            x1="286.042"
            y1="343.4871"
            x2="323.5205"
            y2="343.4871"
          >
            <stop offset="0" style={{ stopColor: "#AB9140" }} />
            <stop offset="5.334417e-02" style={{ stopColor: "#B89C46" }} />
            <stop offset="0.1419" style={{ stopColor: "#CBAA4D" }} />
            <stop offset="0.1963" style={{ stopColor: "#D1B04F" }} />
            <stop offset="0.2788" style={{ stopColor: "#C4A54A" }} />
            <stop offset="0.4158" style={{ stopColor: "#B29643" }} />
            <stop offset="0.5" style={{ stopColor: "#AB9140" }} />
            <stop offset="0.6848" style={{ stopColor: "#D1B04F" }} />
            <stop offset="0.7723" style={{ stopColor: "#CBAA4D" }} />
            <stop offset="0.9144" style={{ stopColor: "#B89C46" }} />
            <stop offset="1" style={{ stopColor: "#AB9140" }} />
          </linearGradient>
          <polygon
            className={candleBaseStyles.st180}
            points="286.7,344.1 322.8,344.1 323.5,342.9 286,342.9     "
          />
        </g>
        <g>
          <linearGradient
            id="SVGID_75_"
            gradientUnits="userSpaceOnUse"
            x1="345.375"
            y1="335.6465"
            x2="382.8535"
            y2="335.6465"
          >
            <stop offset="0" style={{ stopColor: "#C8A84C" }} />
            <stop offset="1.957078e-02" style={{ stopColor: "#CCAB4D" }} />
            <stop offset="0.129" style={{ stopColor: "#DEBA53" }} />
            <stop offset="0.1963" style={{ stopColor: "#E7C157" }} />
            <stop offset="0.2266" style={{ stopColor: "#E1BC55" }} />
            <stop offset="0.3959" style={{ stopColor: "#CEAD4E" }} />
            <stop offset="0.5" style={{ stopColor: "#C8A84C" }} />
            <stop offset="0.7" style={{ stopColor: "#E7C157" }} />
            <stop offset="0.8028" style={{ stopColor: "#DEBA53" }} />
            <stop offset="0.9701" style={{ stopColor: "#CCAB4D" }} />
            <stop offset="1" style={{ stopColor: "#C8A84C" }} />
          </linearGradient>
          <rect
            x="345.4"
            y="328.4"
            className={candleBaseStyles.st181}
            width="37.5"
            height="14.5"
          />
          <linearGradient
            id="SVGID_76_"
            gradientUnits="userSpaceOnUse"
            x1="345.375"
            y1="327.8062"
            x2="382.8535"
            y2="327.8062"
          >
            <stop offset="0" style={{ stopColor: "#AB9140" }} />
            <stop offset="5.334417e-02" style={{ stopColor: "#B89C46" }} />
            <stop offset="0.1419" style={{ stopColor: "#CBAA4D" }} />
            <stop offset="0.1963" style={{ stopColor: "#D1B04F" }} />
            <stop offset="0.2788" style={{ stopColor: "#C4A54A" }} />
            <stop offset="0.4158" style={{ stopColor: "#B29643" }} />
            <stop offset="0.5" style={{ stopColor: "#AB9140" }} />
            <stop offset="0.6848" style={{ stopColor: "#D1B04F" }} />
            <stop offset="0.7723" style={{ stopColor: "#CBAA4D" }} />
            <stop offset="0.9144" style={{ stopColor: "#B89C46" }} />
            <stop offset="1" style={{ stopColor: "#AB9140" }} />
          </linearGradient>
          <polygon
            className={candleBaseStyles.st182}
            points="382.2,327.2 346,327.2 345.4,328.4 382.9,328.4     "
          />
          <linearGradient
            id="SVGID_77_"
            gradientUnits="userSpaceOnUse"
            x1="345.375"
            y1="343.4871"
            x2="382.8535"
            y2="343.4871"
          >
            <stop offset="0" style={{ stopColor: "#AB9140" }} />
            <stop offset="5.334417e-02" style={{ stopColor: "#B89C46" }} />
            <stop offset="0.1419" style={{ stopColor: "#CBAA4D" }} />
            <stop offset="0.1963" style={{ stopColor: "#D1B04F" }} />
            <stop offset="0.2788" style={{ stopColor: "#C4A54A" }} />
            <stop offset="0.4158" style={{ stopColor: "#B29643" }} />
            <stop offset="0.5" style={{ stopColor: "#AB9140" }} />
            <stop offset="0.6848" style={{ stopColor: "#D1B04F" }} />
            <stop offset="0.7723" style={{ stopColor: "#CBAA4D" }} />
            <stop offset="0.9144" style={{ stopColor: "#B89C46" }} />
            <stop offset="1" style={{ stopColor: "#AB9140" }} />
          </linearGradient>
          <polygon
            className={candleBaseStyles.st183}
            points="346,344.1 382.2,344.1 382.9,342.9 345.4,342.9     "
          />
        </g>
        <g>
          <linearGradient
            id="SVGID_78_"
            gradientUnits="userSpaceOnUse"
            x1="404.708"
            y1="335.6465"
            x2="442.1865"
            y2="335.6465"
          >
            <stop offset="0" style={{ stopColor: "#C8A84C" }} />
            <stop offset="1.957078e-02" style={{ stopColor: "#CCAB4D" }} />
            <stop offset="0.129" style={{ stopColor: "#DEBA53" }} />
            <stop offset="0.1963" style={{ stopColor: "#E7C157" }} />
            <stop offset="0.2266" style={{ stopColor: "#E1BC55" }} />
            <stop offset="0.3959" style={{ stopColor: "#CEAD4E" }} />
            <stop offset="0.5" style={{ stopColor: "#C8A84C" }} />
            <stop offset="0.7" style={{ stopColor: "#E7C157" }} />
            <stop offset="0.8028" style={{ stopColor: "#DEBA53" }} />
            <stop offset="0.9701" style={{ stopColor: "#CCAB4D" }} />
            <stop offset="1" style={{ stopColor: "#C8A84C" }} />
          </linearGradient>
          <rect
            x="404.7"
            y="328.4"
            className={candleBaseStyles.st184}
            width="37.5"
            height="14.5"
          />
          <linearGradient
            id="SVGID_79_"
            gradientUnits="userSpaceOnUse"
            x1="404.708"
            y1="327.8062"
            x2="442.1865"
            y2="327.8062"
          >
            <stop offset="0" style={{ stopColor: "#AB9140" }} />
            <stop offset="5.334417e-02" style={{ stopColor: "#B89C46" }} />
            <stop offset="0.1419" style={{ stopColor: "#CBAA4D" }} />
            <stop offset="0.1963" style={{ stopColor: "#D1B04F" }} />
            <stop offset="0.2788" style={{ stopColor: "#C4A54A" }} />
            <stop offset="0.4158" style={{ stopColor: "#B29643" }} />
            <stop offset="0.5" style={{ stopColor: "#AB9140" }} />
            <stop offset="0.6848" style={{ stopColor: "#D1B04F" }} />
            <stop offset="0.7723" style={{ stopColor: "#CBAA4D" }} />
            <stop offset="0.9144" style={{ stopColor: "#B89C46" }} />
            <stop offset="1" style={{ stopColor: "#AB9140" }} />
          </linearGradient>
          <polygon
            className={candleBaseStyles.st185}
            points="441.5,327.2 405.4,327.2 404.7,328.4 442.2,328.4     "
          />
          <linearGradient
            id="SVGID_80_"
            gradientUnits="userSpaceOnUse"
            x1="404.708"
            y1="343.4871"
            x2="442.1865"
            y2="343.4871"
          >
            <stop offset="0" style={{ stopColor: "#AB9140" }} />
            <stop offset="5.334417e-02" style={{ stopColor: "#B89C46" }} />
            <stop offset="0.1419" style={{ stopColor: "#CBAA4D" }} />
            <stop offset="0.1963" style={{ stopColor: "#D1B04F" }} />
            <stop offset="0.2788" style={{ stopColor: "#C4A54A" }} />
            <stop offset="0.4158" style={{ stopColor: "#B29643" }} />
            <stop offset="0.5" style={{ stopColor: "#AB9140" }} />
            <stop offset="0.6848" style={{ stopColor: "#D1B04F" }} />
            <stop offset="0.7723" style={{ stopColor: "#CBAA4D" }} />
            <stop offset="0.9144" style={{ stopColor: "#B89C46" }} />
            <stop offset="1" style={{ stopColor: "#AB9140" }} />
          </linearGradient>
          <polygon
            className={candleBaseStyles.st186}
            points="405.4,344.1 441.5,344.1 442.2,342.9 404.7,342.9     "
          />
        </g>
        <g>
          <linearGradient
            id="SVGID_81_"
            gradientUnits="userSpaceOnUse"
            x1="464.041"
            y1="335.6465"
            x2="501.5195"
            y2="335.6465"
          >
            <stop offset="0" style={{ stopColor: "#C8A84C" }} />
            <stop offset="1.957078e-02" style={{ stopColor: "#CCAB4D" }} />
            <stop offset="0.129" style={{ stopColor: "#DEBA53" }} />
            <stop offset="0.1963" style={{ stopColor: "#E7C157" }} />
            <stop offset="0.2266" style={{ stopColor: "#E1BC55" }} />
            <stop offset="0.3959" style={{ stopColor: "#CEAD4E" }} />
            <stop offset="0.5" style={{ stopColor: "#C8A84C" }} />
            <stop offset="0.7" style={{ stopColor: "#E7C157" }} />
            <stop offset="0.8028" style={{ stopColor: "#DEBA53" }} />
            <stop offset="0.9701" style={{ stopColor: "#CCAB4D" }} />
            <stop offset="1" style={{ stopColor: "#C8A84C" }} />
          </linearGradient>
          <rect
            x="464"
            y="328.4"
            className={candleBaseStyles.st187}
            width="37.5"
            height="14.5"
          />
          <linearGradient
            id="SVGID_82_"
            gradientUnits="userSpaceOnUse"
            x1="464.041"
            y1="327.8062"
            x2="501.5195"
            y2="327.8062"
          >
            <stop offset="0" style={{ stopColor: "#AB9140" }} />
            <stop offset="5.334417e-02" style={{ stopColor: "#B89C46" }} />
            <stop offset="0.1419" style={{ stopColor: "#CBAA4D" }} />
            <stop offset="0.1963" style={{ stopColor: "#D1B04F" }} />
            <stop offset="0.2788" style={{ stopColor: "#C4A54A" }} />
            <stop offset="0.4158" style={{ stopColor: "#B29643" }} />
            <stop offset="0.5" style={{ stopColor: "#AB9140" }} />
            <stop offset="0.6848" style={{ stopColor: "#D1B04F" }} />
            <stop offset="0.7723" style={{ stopColor: "#CBAA4D" }} />
            <stop offset="0.9144" style={{ stopColor: "#B89C46" }} />
            <stop offset="1" style={{ stopColor: "#AB9140" }} />
          </linearGradient>
          <polygon
            className={candleBaseStyles.st188}
            points="500.8,327.2 464.7,327.2 464,328.4 501.5,328.4     "
          />
          <linearGradient
            id="SVGID_83_"
            gradientUnits="userSpaceOnUse"
            x1="464.041"
            y1="343.4871"
            x2="501.5195"
            y2="343.4871"
          >
            <stop offset="0" style={{ stopColor: "#AB9140" }} />
            <stop offset="5.334417e-02" style={{ stopColor: "#B89C46" }} />
            <stop offset="0.1419" style={{ stopColor: "#CBAA4D" }} />
            <stop offset="0.1963" style={{ stopColor: "#D1B04F" }} />
            <stop offset="0.2788" style={{ stopColor: "#C4A54A" }} />
            <stop offset="0.4158" style={{ stopColor: "#B29643" }} />
            <stop offset="0.5" style={{ stopColor: "#AB9140" }} />
            <stop offset="0.6848" style={{ stopColor: "#D1B04F" }} />
            <stop offset="0.7723" style={{ stopColor: "#CBAA4D" }} />
            <stop offset="0.9144" style={{ stopColor: "#B89C46" }} />
            <stop offset="1" style={{ stopColor: "#AB9140" }} />
          </linearGradient>
          <polygon
            className={candleBaseStyles.st189}
            points="464.7,344.1 500.8,344.1 501.5,342.9 464,342.9     "
          />
        </g>
        <g>
          <linearGradient
            id="SVGID_84_"
            gradientUnits="userSpaceOnUse"
            x1="226.71"
            y1="335.6465"
            x2="264.1885"
            y2="335.6465"
          >
            <stop offset="0" style={{ stopColor: "#C8A84C" }} />
            <stop offset="1.957078e-02" style={{ stopColor: "#CCAB4D" }} />
            <stop offset="0.129" style={{ stopColor: "#DEBA53" }} />
            <stop offset="0.1963" style={{ stopColor: "#E7C157" }} />
            <stop offset="0.2266" style={{ stopColor: "#E1BC55" }} />
            <stop offset="0.3959" style={{ stopColor: "#CEAD4E" }} />
            <stop offset="0.5" style={{ stopColor: "#C8A84C" }} />
            <stop offset="0.7" style={{ stopColor: "#E7C157" }} />
            <stop offset="0.8028" style={{ stopColor: "#DEBA53" }} />
            <stop offset="0.9701" style={{ stopColor: "#CCAB4D" }} />
            <stop offset="1" style={{ stopColor: "#C8A84C" }} />
          </linearGradient>
          <rect
            x="226.7"
            y="328.4"
            className={candleBaseStyles.st190}
            width="37.5"
            height="14.5"
          />
          <linearGradient
            id="SVGID_85_"
            gradientUnits="userSpaceOnUse"
            x1="226.71"
            y1="327.8062"
            x2="264.1885"
            y2="327.8062"
          >
            <stop offset="0" style={{ stopColor: "#AB9140" }} />
            <stop offset="5.334417e-02" style={{ stopColor: "#B89C46" }} />
            <stop offset="0.1419" style={{ stopColor: "#CBAA4D" }} />
            <stop offset="0.1963" style={{ stopColor: "#D1B04F" }} />
            <stop offset="0.2788" style={{ stopColor: "#C4A54A" }} />
            <stop offset="0.4158" style={{ stopColor: "#B29643" }} />
            <stop offset="0.5" style={{ stopColor: "#AB9140" }} />
            <stop offset="0.6848" style={{ stopColor: "#D1B04F" }} />
            <stop offset="0.7723" style={{ stopColor: "#CBAA4D" }} />
            <stop offset="0.9144" style={{ stopColor: "#B89C46" }} />
            <stop offset="1" style={{ stopColor: "#AB9140" }} />
          </linearGradient>
          <polygon
            className={candleBaseStyles.st191}
            points="263.5,327.2 227.4,327.2 226.7,328.4 264.2,328.4     "
          />
          <linearGradient
            id="SVGID_86_"
            gradientUnits="userSpaceOnUse"
            x1="226.71"
            y1="343.4871"
            x2="264.1885"
            y2="343.4871"
          >
            <stop offset="0" style={{ stopColor: "#AB9140" }} />
            <stop offset="5.334417e-02" style={{ stopColor: "#B89C46" }} />
            <stop offset="0.1419" style={{ stopColor: "#CBAA4D" }} />
            <stop offset="0.1963" style={{ stopColor: "#D1B04F" }} />
            <stop offset="0.2788" style={{ stopColor: "#C4A54A" }} />
            <stop offset="0.4158" style={{ stopColor: "#B29643" }} />
            <stop offset="0.5" style={{ stopColor: "#AB9140" }} />
            <stop offset="0.6848" style={{ stopColor: "#D1B04F" }} />
            <stop offset="0.7723" style={{ stopColor: "#CBAA4D" }} />
            <stop offset="0.9144" style={{ stopColor: "#B89C46" }} />
            <stop offset="1" style={{ stopColor: "#AB9140" }} />
          </linearGradient>
          <polygon
            className={candleBaseStyles.st192}
            points="227.4,344.1 263.5,344.1 264.2,342.9 226.7,342.9     "
          />
        </g>
        <g>
          <linearGradient
            id="SVGID_87_"
            gradientUnits="userSpaceOnUse"
            x1="167.3779"
            y1="335.6465"
            x2="204.8564"
            y2="335.6465"
          >
            <stop offset="0" style={{ stopColor: "#C8A84C" }} />
            <stop offset="1.957078e-02" style={{ stopColor: "#CCAB4D" }} />
            <stop offset="0.129" style={{ stopColor: "#DEBA53" }} />
            <stop offset="0.1963" style={{ stopColor: "#E7C157" }} />
            <stop offset="0.2266" style={{ stopColor: "#E1BC55" }} />
            <stop offset="0.3959" style={{ stopColor: "#CEAD4E" }} />
            <stop offset="0.5" style={{ stopColor: "#C8A84C" }} />
            <stop offset="0.7" style={{ stopColor: "#E7C157" }} />
            <stop offset="0.8028" style={{ stopColor: "#DEBA53" }} />
            <stop offset="0.9701" style={{ stopColor: "#CCAB4D" }} />
            <stop offset="1" style={{ stopColor: "#C8A84C" }} />
          </linearGradient>
          <rect
            x="167.4"
            y="328.4"
            className={candleBaseStyles.st193}
            width="37.5"
            height="14.5"
          />
          <linearGradient
            id="SVGID_88_"
            gradientUnits="userSpaceOnUse"
            x1="167.3779"
            y1="327.8062"
            x2="204.8564"
            y2="327.8062"
          >
            <stop offset="0" style={{ stopColor: "#AB9140" }} />
            <stop offset="5.334417e-02" style={{ stopColor: "#B89C46" }} />
            <stop offset="0.1419" style={{ stopColor: "#CBAA4D" }} />
            <stop offset="0.1963" style={{ stopColor: "#D1B04F" }} />
            <stop offset="0.2788" style={{ stopColor: "#C4A54A" }} />
            <stop offset="0.4158" style={{ stopColor: "#B29643" }} />
            <stop offset="0.5" style={{ stopColor: "#AB9140" }} />
            <stop offset="0.6848" style={{ stopColor: "#D1B04F" }} />
            <stop offset="0.7723" style={{ stopColor: "#CBAA4D" }} />
            <stop offset="0.9144" style={{ stopColor: "#B89C46" }} />
            <stop offset="1" style={{ stopColor: "#AB9140" }} />
          </linearGradient>
          <polygon
            className={candleBaseStyles.st194}
            points="204.2,327.2 168,327.2 167.4,328.4 204.9,328.4     "
          />
          <linearGradient
            id="SVGID_89_"
            gradientUnits="userSpaceOnUse"
            x1="167.3779"
            y1="343.4871"
            x2="204.8564"
            y2="343.4871"
          >
            <stop offset="0" style={{ stopColor: "#AB9140" }} />
            <stop offset="5.334417e-02" style={{ stopColor: "#B89C46" }} />
            <stop offset="0.1419" style={{ stopColor: "#CBAA4D" }} />
            <stop offset="0.1963" style={{ stopColor: "#D1B04F" }} />
            <stop offset="0.2788" style={{ stopColor: "#C4A54A" }} />
            <stop offset="0.4158" style={{ stopColor: "#B29643" }} />
            <stop offset="0.5" style={{ stopColor: "#AB9140" }} />
            <stop offset="0.6848" style={{ stopColor: "#D1B04F" }} />
            <stop offset="0.7723" style={{ stopColor: "#CBAA4D" }} />
            <stop offset="0.9144" style={{ stopColor: "#B89C46" }} />
            <stop offset="1" style={{ stopColor: "#AB9140" }} />
          </linearGradient>
          <polygon
            className={candleBaseStyles.st195}
            points="168,344.1 204.2,344.1 204.9,342.9 167.4,342.9     "
          />
        </g>
        <g>
          <linearGradient
            id="SVGID_90_"
            gradientUnits="userSpaceOnUse"
            x1="108.0459"
            y1="335.6465"
            x2="145.5244"
            y2="335.6465"
          >
            <stop offset="0" style={{ stopColor: "#C8A84C" }} />
            <stop offset="1.957078e-02" style={{ stopColor: "#CCAB4D" }} />
            <stop offset="0.129" style={{ stopColor: "#DEBA53" }} />
            <stop offset="0.1963" style={{ stopColor: "#E7C157" }} />
            <stop offset="0.2266" style={{ stopColor: "#E1BC55" }} />
            <stop offset="0.3959" style={{ stopColor: "#CEAD4E" }} />
            <stop offset="0.5" style={{ stopColor: "#C8A84C" }} />
            <stop offset="0.7" style={{ stopColor: "#E7C157" }} />
            <stop offset="0.8028" style={{ stopColor: "#DEBA53" }} />
            <stop offset="0.9701" style={{ stopColor: "#CCAB4D" }} />
            <stop offset="1" style={{ stopColor: "#C8A84C" }} />
          </linearGradient>
          <rect
            x="108"
            y="328.4"
            className={candleBaseStyles.st196}
            width="37.5"
            height="14.5"
          />
          <linearGradient
            id="SVGID_91_"
            gradientUnits="userSpaceOnUse"
            x1="108.0459"
            y1="327.8062"
            x2="145.5244"
            y2="327.8062"
          >
            <stop offset="0" style={{ stopColor: "#AB9140" }} />
            <stop offset="5.334417e-02" style={{ stopColor: "#B89C46" }} />
            <stop offset="0.1419" style={{ stopColor: "#CBAA4D" }} />
            <stop offset="0.1963" style={{ stopColor: "#D1B04F" }} />
            <stop offset="0.2788" style={{ stopColor: "#C4A54A" }} />
            <stop offset="0.4158" style={{ stopColor: "#B29643" }} />
            <stop offset="0.5" style={{ stopColor: "#AB9140" }} />
            <stop offset="0.6848" style={{ stopColor: "#D1B04F" }} />
            <stop offset="0.7723" style={{ stopColor: "#CBAA4D" }} />
            <stop offset="0.9144" style={{ stopColor: "#B89C46" }} />
            <stop offset="1" style={{ stopColor: "#AB9140" }} />
          </linearGradient>
          <polygon
            className={candleBaseStyles.st197}
            points="144.9,327.2 108.7,327.2 108,328.4 145.5,328.4     "
          />
          <linearGradient
            id="SVGID_92_"
            gradientUnits="userSpaceOnUse"
            x1="108.0459"
            y1="343.4871"
            x2="145.5244"
            y2="343.4871"
          >
            <stop offset="0" style={{ stopColor: "#AB9140" }} />
            <stop offset="5.334417e-02" style={{ stopColor: "#B89C46" }} />
            <stop offset="0.1419" style={{ stopColor: "#CBAA4D" }} />
            <stop offset="0.1963" style={{ stopColor: "#D1B04F" }} />
            <stop offset="0.2788" style={{ stopColor: "#C4A54A" }} />
            <stop offset="0.4158" style={{ stopColor: "#B29643" }} />
            <stop offset="0.5" style={{ stopColor: "#AB9140" }} />
            <stop offset="0.6848" style={{ stopColor: "#D1B04F" }} />
            <stop offset="0.7723" style={{ stopColor: "#CBAA4D" }} />
            <stop offset="0.9144" style={{ stopColor: "#B89C46" }} />
            <stop offset="1" style={{ stopColor: "#AB9140" }} />
          </linearGradient>
          <polygon
            className={candleBaseStyles.st198}
            points="108.7,344.1 144.9,344.1 145.5,342.9 108,342.9     "
          />
        </g>
        <g>
          <linearGradient
            id="SVGID_93_"
            gradientUnits="userSpaceOnUse"
            x1="288.1582"
            y1="683.8279"
            x2="321.4043"
            y2="683.8279"
          >
            <stop offset="0" style={{ stopColor: "#C8A84C" }} />
            <stop offset="1.957078e-02" style={{ stopColor: "#CCAB4D" }} />
            <stop offset="0.129" style={{ stopColor: "#DEBA53" }} />
            <stop offset="0.1963" style={{ stopColor: "#E7C157" }} />
            <stop offset="0.2266" style={{ stopColor: "#E1BC55" }} />
            <stop offset="0.3959" style={{ stopColor: "#CEAD4E" }} />
            <stop offset="0.5" style={{ stopColor: "#C8A84C" }} />
            <stop offset="0.7" style={{ stopColor: "#E7C157" }} />
            <stop offset="0.8028" style={{ stopColor: "#DEBA53" }} />
            <stop offset="0.9701" style={{ stopColor: "#CCAB4D" }} />
            <stop offset="1" style={{ stopColor: "#C8A84C" }} />
          </linearGradient>
          <rect
            x="288.2"
            y="676.7"
            className={stemStyles.st199}
            width="33.2"
            height="14.3"
          />
          <linearGradient
            id="SVGID_94_"
            gradientUnits="userSpaceOnUse"
            x1="275.2207"
            y1="694.8716"
            x2="334.3418"
            y2="694.8716"
          >
            <stop offset="0" style={{ stopColor: "#C8A84C" }} />
            <stop offset="1.957078e-02" style={{ stopColor: "#CCAB4D" }} />
            <stop offset="0.129" style={{ stopColor: "#DEBA53" }} />
            <stop offset="0.1963" style={{ stopColor: "#E7C157" }} />
            <stop offset="0.2266" style={{ stopColor: "#E1BC55" }} />
            <stop offset="0.3959" style={{ stopColor: "#CEAD4E" }} />
            <stop offset="0.5" style={{ stopColor: "#C8A84C" }} />
            <stop offset="0.7" style={{ stopColor: "#E7C157" }} />
            <stop offset="0.8028" style={{ stopColor: "#DEBA53" }} />
            <stop offset="0.9701" style={{ stopColor: "#CCAB4D" }} />
            <stop offset="1" style={{ stopColor: "#C8A84C" }} />
          </linearGradient>
          <path
            className={stemStyles.st200}
            d="M334.3,698.8v-4.6c0-1.8-1.5-3.2-3.2-3.2h-52.7c-1.8,0-3.2,1.5-3.2,3.2v4.6H334.3z"
          />
          <linearGradient
            id="SVGID_95_"
            gradientUnits="userSpaceOnUse"
            x1="242.3301"
            y1="704.4507"
            x2="367.2324"
            y2="704.4507"
          >
            <stop offset="0" style={{ stopColor: "#C8A84C" }} />
            <stop offset="2.990660e-02" style={{ stopColor: "#CCAB4D" }} />
            <stop offset="0.1972" style={{ stopColor: "#DEBA53" }} />
            <stop offset="0.3" style={{ stopColor: "#E7C157" }} />
            <stop offset="0.3199" style={{ stopColor: "#E1BC55" }} />
            <stop offset="0.4314" style={{ stopColor: "#CEAD4E" }} />
            <stop offset="0.5" style={{ stopColor: "#C8A84C" }} />
            <stop offset="0.65" style={{ stopColor: "#E7C157" }} />
            <stop offset="0.77" style={{ stopColor: "#DEBA53" }} />
            <stop offset="0.9651" style={{ stopColor: "#CCAB4D" }} />
            <stop offset="1" style={{ stopColor: "#C8A84C" }} />
          </linearGradient>
          <path
            className={stemStyles.st201}
            d="M367.2,710.1v-5.6c0-3.2-2.6-5.8-5.8-5.8H248.1c-3.2,0-5.8,2.6-5.8,5.8v5.6H367.2z"
          />
          <linearGradient
            id="SVGID_96_"
            gradientUnits="userSpaceOnUse"
            x1="228.4219"
            y1="716.7703"
            x2="381.1406"
            y2="716.7703"
          >
            <stop offset="0" style={{ stopColor: "#C8A84C" }} />
            <stop offset="1.957078e-02" style={{ stopColor: "#CCAB4D" }} />
            <stop offset="0.129" style={{ stopColor: "#DEBA53" }} />
            <stop offset="0.1963" style={{ stopColor: "#E7C157" }} />
            <stop offset="0.2266" style={{ stopColor: "#E1BC55" }} />
            <stop offset="0.3959" style={{ stopColor: "#CEAD4E" }} />
            <stop offset="0.5" style={{ stopColor: "#C8A84C" }} />
            <stop offset="0.7" style={{ stopColor: "#E7C157" }} />
            <stop offset="0.8028" style={{ stopColor: "#DEBA53" }} />
            <stop offset="0.9701" style={{ stopColor: "#CCAB4D" }} />
            <stop offset="1" style={{ stopColor: "#C8A84C" }} />
          </linearGradient>
          <path
            className={stemStyles.st202}
            d="M381.1,723.4v-7.5c0-3.2-2.6-5.8-5.8-5.8H234.2c-3.2,0-5.8,2.6-5.8,5.8v7.5H381.1z"
          />
          <linearGradient
            id="SVGID_97_"
            gradientUnits="userSpaceOnUse"
            x1="211.2793"
            y1="731.1941"
            x2="398.2832"
            y2="731.1941"
          >
            <stop offset="0" style={{ stopColor: "#C8A84C" }} />
            <stop offset="2.990660e-02" style={{ stopColor: "#CCAB4D" }} />
            <stop offset="0.1972" style={{ stopColor: "#DEBA53" }} />
            <stop offset="0.3" style={{ stopColor: "#E7C157" }} />
            <stop offset="0.3199" style={{ stopColor: "#E1BC55" }} />
            <stop offset="0.4314" style={{ stopColor: "#CEAD4E" }} />
            <stop offset="0.5" style={{ stopColor: "#C8A84C" }} />
            <stop offset="0.65" style={{ stopColor: "#E7C157" }} />
            <stop offset="0.77" style={{ stopColor: "#DEBA53" }} />
            <stop offset="0.9651" style={{ stopColor: "#CCAB4D" }} />
            <stop offset="1" style={{ stopColor: "#C8A84C" }} />
          </linearGradient>
          <path
            className={stemStyles.st203}
            d="M398.3,739v-9.8c0-3.2-2.6-5.8-5.8-5.8H217.1c-3.2,0-5.8,2.6-5.8,5.8v9.8H398.3z"
          />
        </g>
        <g>
          <linearGradient
            id="SVGID_98_"
            gradientUnits="userSpaceOnUse"
            x1="536.082"
            y1="498.1997"
            x2="553.2895"
            y2="498.1997"
            gradientTransform="matrix(0 1 -1 0 802.9854 -82.1289)"
          >
            <stop offset="0" style={{ stopColor: "#000000" }} />
            <stop
              offset="8.962709e-02"
              style={{
                stopColor: "#000000",
                stopOpacity: 0.9104
              }}
            />
            <stop
              offset="1"
              style={{
                stopColor: "#000000",
                stopOpacity: 0
              }}
            />
          </linearGradient>
          <rect
            x="293.9"
            y="454"
            className={branchStyles.st204}
            width="21.7"
            height="17.2"
          />

          <linearGradient
            id="SVGID_99_"
            gradientUnits="userSpaceOnUse"
            x1="596.2148"
            y1="498.1997"
            x2="613.4224"
            y2="498.1997"
            gradientTransform="matrix(0 1 -1 0 802.9854 -82.1289)"
          >
            <stop offset="0" style={{ stopColor: "#000000" }} />
            <stop
              offset="8.962709e-02"
              style={{
                stopColor: "#000000",
                stopOpacity: 0.9104
              }}
            />
            <stop
              offset="1"
              style={{
                stopColor: "#000000",
                stopOpacity: 0
              }}
            />
          </linearGradient>
          <rect
            x="293.9"
            y="514.1"
            className={branchStyles.st205}
            width="21.7"
            height="17.2"
          />

          <linearGradient
            id="SVGID_100_"
            gradientUnits="userSpaceOnUse"
            x1="655.3589"
            y1="498.1997"
            x2="672.5664"
            y2="498.1997"
            gradientTransform="matrix(0 1 -1 0 802.9854 -82.1289)"
          >
            <stop offset="0" style={{ stopColor: "#000000" }} />
            <stop
              offset="8.962709e-02"
              style={{
                stopColor: "#000000",
                stopOpacity: 0.9104
              }}
            />
            <stop
              offset="1"
              style={{
                stopColor: "#000000",
                stopOpacity: 0
              }}
            />
          </linearGradient>
          <rect
            x="293.9"
            y="573.2"
            className={branchStyles.st206}
            width="21.7"
            height="17.2"
          />

          <linearGradient
            id="SVGID_101_"
            gradientUnits="userSpaceOnUse"
            x1="715.0991"
            y1="498.2036"
            x2="732.3066"
            y2="498.2036"
            gradientTransform="matrix(0 1 -1 0 802.9854 -82.1289)"
          >
            <stop offset="0" style={{ stopColor: "#000000" }} />
            <stop
              offset="8.962709e-02"
              style={{
                stopColor: "#000000",
                stopOpacity: 0.9104
              }}
            />
            <stop
              offset="1"
              style={{
                stopColor: "#000000",
                stopOpacity: 0
              }}
            />
          </linearGradient>
          <rect
            x="293.9"
            y="633"
            className={stemStyles.st207}
            width="21.7"
            height="17.2"
          />
        </g>
        <g>
          <path
            className={stemStyles.st112}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st113}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st114}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st115}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st116}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st117}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st118}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st119}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st120}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st121}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st122}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st123}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st124}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st125}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st126}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st127}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st128}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st129}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st130}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st131}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st132}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st133}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st134}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st135}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st136}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st137}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st138}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st139}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st140}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st141}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st142}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st143}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st144}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st145}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st146}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st147}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st148}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st149}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st150}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st151}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st152}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st153}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st154}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st155}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st156}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st157}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st158}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st159}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st160}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st161}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st162}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st163}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st164}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st165}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st166}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st167}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st168}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st169}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st170}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st171}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st172}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st173}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st174}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st175}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st176}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
          <path
            className={stemStyles.st177}
            d="M245.4,344.1v41.7c0,32.8,26.6,59.3,59.3,59.3c32.8,0,59.3-26.6,59.3-59.3v-41.7"
          />
        </g>
        <g>
          <path
            className={stemStyles.st112}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st113}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st114}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st115}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st116}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st117}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st118}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st119}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st120}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st121}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st122}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st123}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st124}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st125}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st126}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st127}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st128}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st129}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st130}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st131}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st132}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st133}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st134}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st135}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st136}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st137}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st138}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st139}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st140}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st141}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st142}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st143}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st144}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st145}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st146}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st147}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st148}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st149}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st150}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st151}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st152}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st153}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st154}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st155}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st156}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st157}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st158}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st159}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st160}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st161}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st162}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st163}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st164}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st165}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st166}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st167}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st168}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st169}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st170}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st171}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st172}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st173}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st174}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st175}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st176}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
          <path
            className={stemStyles.st177}
            d="M186.1,344.1v41.7c0,65.5,53.1,118.7,118.7,118.7c65.5,0,118.7-53.1,118.7-118.7v-41.7"
          />
        </g>
        <g>
          <path
            className={stemStyles.st112}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st113}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st114}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st115}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st116}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st117}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st118}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st119}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st120}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st121}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st122}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st123}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st124}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st125}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st126}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st127}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st128}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st129}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st130}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st131}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st132}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st133}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st134}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st135}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st136}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st137}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st138}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st139}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st140}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st141}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st142}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st143}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st144}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st145}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st146}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st147}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st148}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st149}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st150}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st151}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st152}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st153}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st154}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st155}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st156}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st157}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st158}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st159}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st160}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st161}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st162}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st163}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st164}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st165}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st166}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st167}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st168}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st169}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st170}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st171}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st172}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st173}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st174}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st175}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st176}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
          <path
            className={stemStyles.st177}
            d="M126.8,344.1v41.7c0,98.3,79.7,178,178,178c98.3,0,178-79.7,178-178v-41.7"
          />
        </g>
        <g>
          <linearGradient
            id="SVGID_102_"
            gradientUnits="userSpaceOnUse"
            x1="426.2192"
            y1="676.2017"
            x2="441.1919"
            y2="676.2017"
            gradientTransform="matrix(0 1 -1 0 802.9854 -82.1289)"
          >
            <stop offset="0" style={{ stopColor: "#000000" }} />
            <stop
              offset="8.962709e-02"
              style={{
                stopColor: "#000000",
                stopOpacity: 0.9104
              }}
            />
            <stop
              offset="1"
              style={{
                stopColor: "#000000",
                stopOpacity: 0
              }}
            />
          </linearGradient>
          <rect
            x="115.9"
            y="344.1"
            className={branchStyles.st208}
            width="21.7"
            height="15"
          />

          <linearGradient
            id="SVGID_103_"
            gradientUnits="userSpaceOnUse"
            x1="426.2192"
            y1="616.8677"
            x2="441.1919"
            y2="616.8677"
            gradientTransform="matrix(0 1 -1 0 802.9854 -82.1289)"
          >
            <stop offset="0" style={{ stopColor: "#000000" }} />
            <stop
              offset="8.962709e-02"
              style={{
                stopColor: "#000000",
                stopOpacity: 0.9104
              }}
            />
            <stop
              offset="1"
              style={{
                stopColor: "#000000",
                stopOpacity: 0
              }}
            />
          </linearGradient>
          <rect
            x="175.2"
            y="344.1"
            className={branchStyles.st209}
            width="21.7"
            height="15"
          />

          <linearGradient
            id="SVGID_104_"
            gradientUnits="userSpaceOnUse"
            x1="426.2192"
            y1="557.5338"
            x2="441.1919"
            y2="557.5338"
            gradientTransform="matrix(0 1 -1 0 802.9854 -82.1289)"
          >
            <stop offset="0" style={{ stopColor: "#000000" }} />
            <stop
              offset="8.962709e-02"
              style={{
                stopColor: "#000000",
                stopOpacity: 0.9104
              }}
            />
            <stop
              offset="1"
              style={{
                stopColor: "#000000",
                stopOpacity: 0
              }}
            />
          </linearGradient>
          <rect
            x="234.6"
            y="344.1"
            className={branchStyles.st210}
            width="21.7"
            height="15"
          />

          <linearGradient
            id="SVGID_105_"
            gradientUnits="userSpaceOnUse"
            x1="426.2192"
            y1="498.1997"
            x2="441.1919"
            y2="498.1997"
            gradientTransform="matrix(0 1 -1 0 802.9854 -82.1289)"
          >
            <stop offset="0" style={{ stopColor: "#000000" }} />
            <stop
              offset="8.962709e-02"
              style={{
                stopColor: "#000000",
                stopOpacity: 0.9104
              }}
            />
            <stop
              offset="1"
              style={{
                stopColor: "#000000",
                stopOpacity: 0
              }}
            />
          </linearGradient>
          <rect
            x="293.9"
            y="344.1"
            className={branchStyles.st211}
            width="21.7"
            height="15"
          />

          <linearGradient
            id="SVGID_106_"
            gradientUnits="userSpaceOnUse"
            x1="426.2192"
            y1="438.8653"
            x2="441.1919"
            y2="438.8653"
            gradientTransform="matrix(0 1 -1 0 802.9854 -82.1289)"
          >
            <stop offset="0" style={{ stopColor: "#000000" }} />
            <stop
              offset="8.962709e-02"
              style={{
                stopColor: "#000000",
                stopOpacity: 0.9104
              }}
            />
            <stop
              offset="1"
              style={{
                stopColor: "#000000",
                stopOpacity: 0
              }}
            />
          </linearGradient>
          <rect
            x="353.2"
            y="344.1"
            className={branchStyles.st212}
            width="21.7"
            height="15"
          />

          <linearGradient
            id="SVGID_107_"
            gradientUnits="userSpaceOnUse"
            x1="426.2192"
            y1="379.5308"
            x2="441.1919"
            y2="379.5308"
            gradientTransform="matrix(0 1 -1 0 802.9854 -82.1289)"
          >
            <stop offset="0" style={{ stopColor: "#000000" }} />
            <stop
              offset="8.962709e-02"
              style={{
                stopColor: "#000000",
                stopOpacity: 0.9104
              }}
            />
            <stop
              offset="1"
              style={{
                stopColor: "#000000",
                stopOpacity: 0
              }}
            />
          </linearGradient>
          <rect
            x="412.6"
            y="344.1"
            className={branchStyles.st213}
            width="21.7"
            height="15"
          />

          <linearGradient
            id="SVGID_108_"
            gradientUnits="userSpaceOnUse"
            x1="426.2192"
            y1="320.1968"
            x2="441.1919"
            y2="320.1968"
            gradientTransform="matrix(0 1 -1 0 802.9854 -82.1289)"
          >
            <stop offset="0" style={{ stopColor: "#000000" }} />
            <stop
              offset="8.962709e-02"
              style={{
                stopColor: "#000000",
                stopOpacity: 0.9104
              }}
            />
            <stop
              offset="1"
              style={{
                stopColor: "#000000",
                stopOpacity: 0
              }}
            />
          </linearGradient>
          <rect
            x="471.9"
            y="344.1"
            className={branchStyles.st214}
            width="21.7"
            height="15"
          />
        </g>
        <g>
          <linearGradient
            id="SVGID_109_"
            gradientUnits="userSpaceOnUse"
            x1="48.1406"
            y1="335.6465"
            x2="85.6191"
            y2="335.6465"
          >
            <stop offset="0" style={{ stopColor: "#C8A84C" }} />
            <stop offset="1.957078e-02" style={{ stopColor: "#CCAB4D" }} />
            <stop offset="0.129" style={{ stopColor: "#DEBA53" }} />
            <stop offset="0.1963" style={{ stopColor: "#E7C157" }} />
            <stop offset="0.2266" style={{ stopColor: "#E1BC55" }} />
            <stop offset="0.3959" style={{ stopColor: "#CEAD4E" }} />
            <stop offset="0.5" style={{ stopColor: "#C8A84C" }} />
            <stop offset="0.7" style={{ stopColor: "#E7C157" }} />
            <stop offset="0.8028" style={{ stopColor: "#DEBA53" }} />
            <stop offset="0.9701" style={{ stopColor: "#CCAB4D" }} />
            <stop offset="1" style={{ stopColor: "#C8A84C" }} />
          </linearGradient>
          <rect
            x="48.1"
            y="328.4"
            className={branchStyles.st215}
            width="37.5"
            height="14.5"
          />
          <linearGradient
            id="SVGID_110_"
            gradientUnits="userSpaceOnUse"
            x1="48.1406"
            y1="327.8062"
            x2="85.6191"
            y2="327.8062"
          >
            <stop offset="0" style={{ stopColor: "#AB9140" }} />
            <stop offset="5.334417e-02" style={{ stopColor: "#B89C46" }} />
            <stop offset="0.1419" style={{ stopColor: "#CBAA4D" }} />
            <stop offset="0.1963" style={{ stopColor: "#D1B04F" }} />
            <stop offset="0.2788" style={{ stopColor: "#C4A54A" }} />
            <stop offset="0.4158" style={{ stopColor: "#B29643" }} />
            <stop offset="0.5" style={{ stopColor: "#AB9140" }} />
            <stop offset="0.6848" style={{ stopColor: "#D1B04F" }} />
            <stop offset="0.7723" style={{ stopColor: "#CBAA4D" }} />
            <stop offset="0.9144" style={{ stopColor: "#B89C46" }} />
            <stop offset="1" style={{ stopColor: "#AB9140" }} />
          </linearGradient>
          <polygon
            className={branchStyles.st216}
            points="84.9,327.2 48.8,327.2 48.1,328.4 85.6,328.4     "
          />
          <linearGradient
            id="SVGID_111_"
            gradientUnits="userSpaceOnUse"
            x1="48.1406"
            y1="343.4871"
            x2="85.6191"
            y2="343.4871"
          >
            <stop offset="0" style={{ stopColor: "#AB9140" }} />
            <stop offset="5.334417e-02" style={{ stopColor: "#B89C46" }} />
            <stop offset="0.1419" style={{ stopColor: "#CBAA4D" }} />
            <stop offset="0.1963" style={{ stopColor: "#D1B04F" }} />
            <stop offset="0.2788" style={{ stopColor: "#C4A54A" }} />
            <stop offset="0.4158" style={{ stopColor: "#B29643" }} />
            <stop offset="0.5" style={{ stopColor: "#AB9140" }} />
            <stop offset="0.6848" style={{ stopColor: "#D1B04F" }} />
            <stop offset="0.7723" style={{ stopColor: "#CBAA4D" }} />
            <stop offset="0.9144" style={{ stopColor: "#B89C46" }} />
            <stop offset="1" style={{ stopColor: "#AB9140" }} />
          </linearGradient>
          <polygon
            className={branchStyles.st217}
            points="48.8,344.1 84.9,344.1 85.6,342.9 48.1,342.9     "
          />
        </g>
        <g>
          <linearGradient
            id="SVGID_112_"
            gradientUnits="userSpaceOnUse"
            x1="523.9443"
            y1="335.6465"
            x2="561.4229"
            y2="335.6465"
          >
            <stop offset="0" style={{ stopColor: "#C8A84C" }} />
            <stop offset="1.957078e-02" style={{ stopColor: "#CCAB4D" }} />
            <stop offset="0.129" style={{ stopColor: "#DEBA53" }} />
            <stop offset="0.1963" style={{ stopColor: "#E7C157" }} />
            <stop offset="0.2266" style={{ stopColor: "#E1BC55" }} />
            <stop offset="0.3959" style={{ stopColor: "#CEAD4E" }} />
            <stop offset="0.5" style={{ stopColor: "#C8A84C" }} />
            <stop offset="0.7" style={{ stopColor: "#E7C157" }} />
            <stop offset="0.8028" style={{ stopColor: "#DEBA53" }} />
            <stop offset="0.9701" style={{ stopColor: "#CCAB4D" }} />
            <stop offset="1" style={{ stopColor: "#C8A84C" }} />
          </linearGradient>
          <rect
            x="523.9"
            y="328.4"
            className={branchStyles.st218}
            width="37.5"
            height="14.5"
          />
          <linearGradient
            id="SVGID_113_"
            gradientUnits="userSpaceOnUse"
            x1="523.9443"
            y1="327.8062"
            x2="561.4229"
            y2="327.8062"
          >
            <stop offset="0" style={{ stopColor: "#AB9140" }} />
            <stop offset="5.334417e-02" style={{ stopColor: "#B89C46" }} />
            <stop offset="0.1419" style={{ stopColor: "#CBAA4D" }} />
            <stop offset="0.1963" style={{ stopColor: "#D1B04F" }} />
            <stop offset="0.2788" style={{ stopColor: "#C4A54A" }} />
            <stop offset="0.4158" style={{ stopColor: "#B29643" }} />
            <stop offset="0.5" style={{ stopColor: "#AB9140" }} />
            <stop offset="0.6848" style={{ stopColor: "#D1B04F" }} />
            <stop offset="0.7723" style={{ stopColor: "#CBAA4D" }} />
            <stop offset="0.9144" style={{ stopColor: "#B89C46" }} />
            <stop offset="1" style={{ stopColor: "#AB9140" }} />
          </linearGradient>
          <polygon
            className={branchStyles.st219}
            points="560.8,327.2 524.6,327.2 523.9,328.4 561.4,328.4     "
          />
          <linearGradient
            id="SVGID_114_"
            gradientUnits="userSpaceOnUse"
            x1="523.9443"
            y1="343.4871"
            x2="561.4229"
            y2="343.4871"
          >
            <stop offset="0" style={{ stopColor: "#AB9140" }} />
            <stop offset="5.334417e-02" style={{ stopColor: "#B89C46" }} />
            <stop offset="0.1419" style={{ stopColor: "#CBAA4D" }} />
            <stop offset="0.1963" style={{ stopColor: "#D1B04F" }} />
            <stop offset="0.2788" style={{ stopColor: "#C4A54A" }} />
            <stop offset="0.4158" style={{ stopColor: "#B29643" }} />
            <stop offset="0.5" style={{ stopColor: "#AB9140" }} />
            <stop offset="0.6848" style={{ stopColor: "#D1B04F" }} />
            <stop offset="0.7723" style={{ stopColor: "#CBAA4D" }} />
            <stop offset="0.9144" style={{ stopColor: "#B89C46" }} />
            <stop offset="1" style={{ stopColor: "#AB9140" }} />
          </linearGradient>
          <polygon
            className={branchStyles.st220}
            points="524.6,344.1 560.8,344.1 561.4,342.9 523.9,342.9     "
          />
        </g>
        <g>
          <path
            className={stemStyles.st112}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st113}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st114}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st115}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st116}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st117}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st118}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st119}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st120}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st121}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st122}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st123}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st124}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st125}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st126}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st127}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st128}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st129}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st130}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st131}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st132}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st133}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st134}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st135}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st136}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st137}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st138}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st139}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st140}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st141}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st142}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st143}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st144}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st145}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st146}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st147}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st148}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st149}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st150}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st151}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st152}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st153}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st154}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st155}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st156}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st157}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st158}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st159}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st160}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st161}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st162}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st163}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st164}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st165}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st166}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st167}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st168}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st169}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st170}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st171}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st172}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st173}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st174}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st175}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st176}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
          <path
            className={stemStyles.st177}
            d="M66.9,344.1v41.7c0,131.4,106.5,237.9,237.9,237.9c131.4,0,237.9-106.5,237.9-237.9v-41.7"
          />
        </g>
      </g>
    </svg>
  );
};

export default Menorah2;
