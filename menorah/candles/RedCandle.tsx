"use client";

import { useDrag } from "react-dnd";
import { useRef, useEffect, Ref } from "react";
import candleStyles from "../styles/candles.module.css";

const RedCandle = ({
  position,
  onDrag
}: {
  position: { x: number; y: number };
  onDrag: (x: number, y: number) => void;
}) => {
  const [collected, drag, dragPreview] = useDrag(() => ({
    type: "candle",
    item: { type: "red" }
  }));

  return collected.isDragging ? (
    <div ref={dragPreview} />
  ) : (
    // <div ref={drag} {...collected}>
    <g
      ref={drag as unknown as Ref<SVGGElement>}
      //   ref={svgRef}
      style={{
        pointerEvents: "all",
        cursor: "grab",
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      onClick={() => {
        console.log("Red candle clicked!");
      }}
    >
      {/* red candle */}
      <path
        className={candleStyles.wick}
        d="M65.2,91.6c-0.3-6.5,1.1-15.3,1.1-15.4l1.4,0.2c0,0.1-1.4,8.7-1.1,15.1L65.2,91.6z"
      />
      <path
        className={candleStyles.flame}
        d="M68.8,41c1.9,0,3.6,20.1,3.6,30.4c0,5.7-2.5,12.5-5.9,12.5c-1.9,0-5.1-1.7-5.1-12.6     C61.4,60.6,65.2,41,68.8,41z"
      />
      <linearGradient
        id="redWaxGradient"
        gradientUnits="userSpaceOnUse"
        x1="56.2607"
        y1="208.5701"
        x2="77.498"
        y2="208.5701"
      >
        <stop offset="0" style={{ stopColor: "#ED1C24" }} />
        <stop offset="5.434438e-02" style={{ stopColor: "#EF382B" }} />
        <stop offset="0.1445" style={{ stopColor: "#F0523A" }} />
        <stop offset="0.2" style={{ stopColor: "#F15B40" }} />
        <stop offset="0.2815" style={{ stopColor: "#F04934" }} />
        <stop offset="0.4168" style={{ stopColor: "#EE2C27" }} />
        <stop offset="0.5" style={{ stopColor: "#ED1C24" }} />
        <stop offset="0.76" style={{ stopColor: "#F15B40" }} />
        <stop offset="0.8266" style={{ stopColor: "#F0523A" }} />
        <stop offset="0.9348" style={{ stopColor: "#EF382B" }} />
        <stop offset="1" style={{ stopColor: "#ED1C24" }} />
      </linearGradient>
      <polygon
        className={candleStyles.redWax}
        points="77.5,327.2 56.3,327.2 59,89.9 74.7,89.9    "
      />
    </g>
    // </div>
  );
};

export default RedCandle;
