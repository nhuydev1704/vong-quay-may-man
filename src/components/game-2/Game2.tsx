import { LuckyWheel } from "@lucky-canvas/react";
import { useRef } from "react";
import type { Prizes } from "../../types";
import {
  game2Blocks,
  game2Buttons,
  game2DefaultConfig,
  game2DefaultStyle,
  game2Prizes,
} from "./Game2Config";

const Game2 = () => {
  const myLucky = useRef<any>(null);

  return (
    <LuckyWheel
      ref={myLucky}
      width="400px"
      height="400px"
      blocks={game2Blocks}
      prizes={game2Prizes}
      buttons={game2Buttons}
      defaultStyle={game2DefaultStyle}
      defaultConfig={game2DefaultConfig}
      onStart={() => {
        myLucky.current.play();
        setTimeout(() => {
          const index = (Math.random() * 6) >> 0;
          myLucky.current.stop(index);
        }, 2500);
      }}
      onEnd={(prize: Prizes["prizes"]) => {
        console.log("🚀 ~ Game2 ~ prize:", prize);
        // 抽奖结束会触发end回调
        alert("Congratulations on winning: " + prize.fonts[0].text);
      }}
    />
  );
};

export default Game2;
