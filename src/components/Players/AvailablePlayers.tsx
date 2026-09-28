import { FaUser } from "react-icons/fa";
import type { Iplayer } from "../../types/PlayerType";
import Players from "./Players";

const AvailablePlayers = ({ players }: { players: Iplayer[] }) => {
  console.log(Players, "players from available players");
  return (
    <div className="grid grid-cols-3 gap-4 mt-6">
      {players.map((player: Iplayer) => {
        return (
          
  );
};

export default AvailablePlayers;
