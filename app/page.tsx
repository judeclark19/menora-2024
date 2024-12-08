"use client";

import Menorah from "./Menorah";
import Menorah2 from "../menorah/Menorah2";
import img from "../public/candlesticks.svg";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function Home() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Menorah2 />
    </DndProvider>
  );
}
