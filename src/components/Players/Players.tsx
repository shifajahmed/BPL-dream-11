import { use, useState } from "react";
import type { Iplayer } from "../../types/Player";
import AvailablePlayers from "./AvailablePlayers";

interface PlayersProps {
  playersPromise: Promise<Iplayer[]>;
}

const Players = ({ playersPromise }: PlayersProps) => {
  const players = use(playersPromise);
  console.log(players);

  const [buttonType, setButtonType] = useState("available");
  console.log(buttonType);

  const handleUpdateBnType = () => {
    setButtonType("type");
  return (
    <div>
      <div className="flex justify-between gap-4 mb-2 container mx-auto px-4">
        <h2 className="font-bold text-xl">Available Players</h2>
        <div>
          <button onClick ={() => handleUpdateBnType()}
            className={`btn ${buttonType === "available" ? "btn-success" : ""} rounded-r-none`}
            onClick={() => setButtonType("available")}
          >
            Available
          </button>
          <button
            className={`btn ${buttonType === "selected" ? "btn-success" : ""} rounded-l-none`}
            onClick={() => setButtonType("selected")}
          >
            Selected
          </button>
        </div>
      </div>

      <AvailablePlayers players={players} />
    </div>
  );
};

export default Players;
