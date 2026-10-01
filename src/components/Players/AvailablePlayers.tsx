import React from "react";
import type { Iplayer } from "../../types/PlayerType";
import { FaUser } from "react-icons/fa";
import PlayerCard from "./playerCard";

const AvailablePlayers = ({ players }: { players: Iplayer[] }) => {
  console.log(PlayerCard, "players from available players");
  return (
    <div className="grid grid-cols-3 container mx-auto px-4 gap-7 mt-6">
      {players.map((player: Iplayer, index: number) => {
        return <PlayerCard key={index} player={player} />;
      })}
    </div>
  );
};

export default AvailablePlayers;
