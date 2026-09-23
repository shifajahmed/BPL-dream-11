import { use } from "react"; 
import type { Iplayer } from "../../types/Player";
import AvailablePlayers from "./AvailablePlayers";

interface PlayersProps {
  playersPromise: Promise<Iplayer[]>;
}

const Players = ({ playersPromise }: PlayersProps) => {
  const players = use(playersPromise);
  console.log(players);
  return (
    <div>
      <div>
        <h2 className="font-bold text-xl">Available Players</h2>
        <div className="flex justify-between gap-4 mb-2">
          <button className="btn btn-success">Available</button>
          <button className="btn ">Selected</button>
        </div>
      </div>

      <AvailablePlayers players={players} />
    </div>
  );
};

export default Players;
