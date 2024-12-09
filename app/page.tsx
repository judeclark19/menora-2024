"use client";

import { observer } from "mobx-react-lite";
import Menorah from "./Menorah/Menorah";
import menorahState from "./Menorah/Menorah.state";

const backgroundColors = [
  "#000000",
  "#060709",
  "#0C0E12",
  "#12151B",
  "#171C23",
  "#1D232C",
  "#222A35",
  "#28313E",
  "#2D3846",
  "#3A444F"
];

const Home = observer(() => {
  return (
    <div
      className="container"
      style={{
        backgroundColor: backgroundColors[menorahState.litCandlesCount]
      }}
    >
      <div className="content-wrapper">
        <h1>חַג חֲנוּכָּה שַׂמֵחַ</h1>
        <p className="instructions">
          Click on a base to place a candle. <br />
          Click a candle to light it. <br /> <br />
          Or, choose a night to light:
        </p>

        <div className="preset-btns">
          <button
            onClick={() => {
              menorahState.night(1);
            }}
          >
            1
          </button>
          <button
            onClick={() => {
              menorahState.night(2);
            }}
          >
            2
          </button>
          <button
            onClick={() => {
              menorahState.night(3);
            }}
          >
            3
          </button>
          <button
            onClick={() => {
              menorahState.night(4);
            }}
          >
            4
          </button>
          <button
            onClick={() => {
              menorahState.night(5);
            }}
          >
            5
          </button>
          <button
            onClick={() => {
              menorahState.night(6);
            }}
          >
            6
          </button>
          <button
            onClick={() => {
              menorahState.night(7);
            }}
          >
            7
          </button>
          <button
            onClick={() => {
              menorahState.night(8);
            }}
          >
            8
          </button>
        </div>

        <Menorah />

        <div className="button-wrapper">
          <button
            className="extinguish-btn"
            onClick={() => {
              menorahState.extinguish();
            }}
          >
            Extinguish
            {/* <span id="extinguish-btn">Extinguish</span> */}
          </button>
          <button
            className="reset-btn"
            onClick={() => {
              menorahState.reset();
            }}
          >
            Reset
            {/* <span id="reset-btn">Reset</span> */}
          </button>
        </div>

        <p>
          Created by <a href="https://github.com/judeclark19">Jude Clark</a>
        </p>
      </div>
    </div>
  );
});

export default Home;
