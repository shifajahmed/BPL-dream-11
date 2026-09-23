import { FaUser } from "react-icons/fa";
import type { Iplayer } from "../../types/PlayerType";
import Players from "./Players";

const AvailablePlayers = ({ players }: { players: Iplayer[] }) => {
  console.log(Players, "players from available players");
  return (
    <div className="grid grid-cols-3 gap-4 mt-6">
      {players.map((player: Iplayer) => {
        return (
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img src={player.playerImg} alt="player" />
            </figure>
            <div className="card-body space-y-4">
              <h2 className="card-title">
                {" "}
                <FaUser /> {player.playerName}
              </h2>

              <div className="flex justify-between gap-4">
                <p className="font-bold">${player.origin}</p>
                <button className="btn">{player.playerType}</button>
              </div>

              <div className="divider /">
             <h2 className="font-semibold text-2xl">Rating</h2>

             <div className="flex justify-between gap-4">
                <p className="font-bold">${player.battingStyle}</p>
                <button className="btn">{player.bowlingStyle}</button>
              </div>

              <div className="card-actions justify-between items-center">
                <h2 className="font-bold text-2xl">${player.price}</h2>
                <button className="btn">Buy Now</button>
              </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AvailablePlayers;
