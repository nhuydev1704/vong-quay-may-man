import { LuckyWheel } from "@lucky-canvas/react";
import { useRef } from "react";
import type { Prizes } from "../../types";
import {
  game3Blocks,
  game3Buttons,
  game3DefaultConfig,
  game3DefaultStyle,
  game3Prizes,
} from "./Game3Config";

const Game3 = () => {
  const myLucky = useRef<any>(null);

  return (
    <LuckyWheel
      ref={myLucky}
      width="400px"
      height="400px"
      blocks={game3Blocks}
      prizes={game3Prizes}
      buttons={game3Buttons}
      defaultStyle={game3DefaultStyle}
      defaultConfig={game3DefaultConfig}
      onStart={() => {
        myLucky.current.play();
        setTimeout(() => {
          const index = (Math.random() * 6) >> 0;
          myLucky.current.stop(index);
        }, 2500);
      }}
      onEnd={(prize: Prizes["prizes"]) => {
        console.log("🚀 ~ Game3 ~ prize:", prize);
        // 抽奖结束会触发end回调
        alert("Congratulations on winning: " + prize.fonts[0].text);
      }}
    />
  );
};

export default Game3;
