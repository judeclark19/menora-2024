import { makeAutoObservable } from "mobx";

class Candle {
  isVisible: boolean = false;
  isLit: boolean = false;
  xCoord: string = "0";
  yCoord: string | null = null;

  constructor(xCoord: string, yCoord?: string) {
    this.xCoord = xCoord;
    this.yCoord = yCoord || null;
    makeAutoObservable(this);
  }

  setIsVisible(isVisible: boolean) {
    this.isVisible = isVisible;
    if (!isVisible) {
      this.setIsLit(false);
    }
  }

  setIsLit(isLit: boolean) {
    this.isLit = isLit;
  }

  get flameStyles() {
    return {
      transform: this.isLit ? "scale(1)" : "scale(0)",
      opacity: this.isLit ? 1 : 0,
      transition: "transform 1s ease, opacity 1s ease",
      transformOrigin: `${this.xCoord}px ${this.yCoord || "319"}px`
    };
  }

  get coronaStyles() {
    return {
      opacity: this.isLit ? 1 : 0,
      // pointerEvents: "none" as "none",
      transition: "opacity 1s ease",
      transformOrigin: `${this.xCoord}px ${this.yCoord || "319"}px`,
      transform: this.isLit ? "scale(1)" : "scale(0)",
      animation: this.isLit
        ? "scale-up 0.8s ease forwards, flicker 1.2s infinite 1s"
        : "none"
    };
  }
}

class MenorahState {
  candles: Candle[] = [];

  constructor() {
    makeAutoObservable(this);

    this.candles = [
      new Candle("452.5"),
      new Candle("553.2"),
      new Candle("652.3"),
      new Candle("751.5"),
      new Candle("948.5"),
      new Candle("1047.7"),
      new Candle("1146.8"),
      new Candle("1247.5"),
      new Candle("850.1", "221.5") // shamash
    ];
  }

  private sequentialAction(
    indices: number[],
    action: (candle: Candle) => void,
    delay: number,
    callback?: () => void
  ) {
    const performAction = (index: number) => {
      if (index < indices.length) {
        setTimeout(() => {
          action(this.candles[indices[index]]);
          performAction(index + 1);
        }, delay);
      } else if (callback) {
        callback();
      }
    };

    performAction(0);
  }

  get litCandlesCount(): number {
    return this.candles.filter((candle) => candle.isLit).length;
  }

  night(num: number) {
    this.candles.forEach((candle) => {
      candle.setIsVisible(false);
      candle.setIsLit(false);
    });

    const visibleIndices = Array.from({ length: num }, (_, i) => i);
    this.sequentialAction(
      visibleIndices,
      (candle) => candle.setIsVisible(true),
      300,
      () => {
        this.candles[8].setIsVisible(true);
        setTimeout(() => {
          this.candles[8].setIsLit(true);
          this.sequentialAction(
            visibleIndices,
            (candle) => candle.setIsLit(true),
            300
          );
        }, 800);
      }
    );
  }

  light() {
    if (this.candles[8].isVisible) {
      this.candles[8].setIsLit(true);
      setTimeout(() => {
        this.lightVisibleCandles();
      }, 800);
    } else {
      this.lightVisibleCandles();
    }
  }

  private lightVisibleCandles() {
    const visibleIndices = this.candles
      .slice(0, 8)
      .map((candle, index) => (candle.isVisible ? index : -1))
      .filter((index) => index !== -1);

    this.sequentialAction(
      visibleIndices,
      (candle) => candle.setIsLit(true),
      300
    );
  }

  extinguish() {
    this.candles.forEach((candle) => {
      candle.setIsLit(false);
    });
  }

  reset() {
    this.candles.forEach((candle) => {
      candle.setIsVisible(false);
    });
  }
}

const menorahState = new MenorahState();
export default menorahState;
