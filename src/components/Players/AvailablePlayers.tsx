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
            <div className="card-body">
              <h2 className="card-title">
                {" "}
                <FaUser /> {player.playerName}
              </h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AvailablePlayers;
