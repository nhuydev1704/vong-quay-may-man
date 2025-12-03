import { LuckyGrid } from "@lucky-canvas/react";
import { useRef } from "react";
import type { Prizes } from "../../types";
import {
  game4ActiveStyle,
  game4Blocks,
  game4Buttons,
  game4DefaultConfig,
  game4DefaultStyle,
  game4Prizes,
} from "./Game4Config";

const Game4 = () => {
  const myLucky = useRef<any>(null);

  return (
    <LuckyGrid
      ref={myLucky}
      width="400px"
      height="400px"
      blocks={game4Blocks}
      prizes={game4Prizes}
      buttons={game4Buttons}
      defaultStyle={game4DefaultStyle}
      activeStyle={game4ActiveStyle}
      defaultConfig={game4DefaultConfig}
      onStart={() => {
        myLucky.current.play();
        setTimeout(() => {
          const index = (Math.random() * 6) >> 0;
          myLucky.current.stop(index);
        }, 2500);
      }}
      onEnd={(prize: Prizes["prizes"]) => {
        alert("Congratulations on winning: " + prize.fonts[0].text);
      }}
    />
  );
};

export default Game4;
