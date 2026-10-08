import { use, useState } from "react";
import type { Iplayer } from "../../types/Player";
import AvailablePlayers from "./AvailablePlayers";

interface PlayersProps {
  playersPromise: Promise<Iplayer[]>;
  coin: number;
  setCoin: React.Dispatch<React.SetStateAction<number>>;
}

const Players = ({ playersPromise, coin, setCoin }: PlayersProps) => {
  const players = use(playersPromise);
  console.log(players);

  const [buttonType, setButtonType] = useState("available");
  console.log(buttonType);

  const handleUpdateBnType = (type: "available" | "selected") => {
    setButtonType(type);
  };
  return (
    <div>
      <div className="flex justify-between gap-4 mb-2 container mx-auto px-4">
        <h2 className="font-bold text-xl">Available Players</h2>
        <div>
          <button
            onClick={() => handleUpdateBnType("available")}
            className={`btn ${buttonType === "available" ? "btn-success" : ""} rounded-r-none`}
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

      {buttonType === "available" ? (
        <AvailablePlayers players={players} coin={coin} setCoin={setCoin} />
        
      ) : (
        <SelectedPlayers />
      )}
    </div>
  );
};

export default Players;
