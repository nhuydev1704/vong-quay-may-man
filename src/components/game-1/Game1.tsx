import { LuckyWheel } from "@lucky-canvas/react";
import { useRef } from "react";
import type { Prizes } from "../../types";
import {
  game1Blocks,
  game1Buttons,
  game1DefaultStyle,
  game1Prizes,
} from "./Game1Config";

const Game1 = () => {
  const myLucky = useRef<any>(null);

  return (
    <LuckyWheel
      ref={myLucky}
      width="400px"
      height="400px"
      blocks={game1Blocks}
      prizes={game1Prizes}
      buttons={game1Buttons}
      defaultStyle={game1DefaultStyle}
      onStart={() => {
        myLucky.current.play();
        setTimeout(() => {
          const index = (Math.random() * 6) >> 0;
          myLucky.current.stop(index);
        }, 2500);
      }}
      onEnd={(prize: Prizes["prizes"]) => {
        console.log("🚀 ~ Game1 ~ prize:", prize);
        // 抽奖结束会触发end回调
        alert("Congratulations on winning: " + prize.fonts[0].text);
      }}
    />
  );
};

export default Game1;
