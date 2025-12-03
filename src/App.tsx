import Game1 from "./components/game-1/Game1";
import Game2 from "./components/game-2/Game2";
import Game3 from "./components/game-3/Game3";
import Game4 from "./components/game-4/Game4";

function App() {
  return (
    <div className="w-screen h-screen bg-linear-to-r/srgb from-indigo-500 to-teal-400">
      <div className="p-4 grid gap-10 lg:grid-cols-2 place-items-center">
        <div
          style={{
            backgroundImage: 'url("/game1/bg-compose.jpeg")',
            backgroundSize: "cover",
            width: "100%",
            height: "450px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "12px",
          }}
        >
          <Game1 />
        </div>
        <div
          style={{
            backgroundImage: 'url("/game2/bg-compose.jpeg")',
            backgroundSize: "cover",
            width: "100%",
            height: "450px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "12px",
          }}
        >
          <Game2 />
        </div>
        <div
          style={{
            backgroundImage: 'url("/game3/bg-compose.jpeg")',
            backgroundSize: "cover",
            width: "100%",
            height: "450px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "12px",
          }}
        >
          <Game3 />
        </div>
        <Game4 />
      </div>
    </div>
  );
}

export default App;
