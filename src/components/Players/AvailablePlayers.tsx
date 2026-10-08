import React, { type Dispatch } from "react";
import type { Iplayer } from "../../types/PlayerType";
import { FaUser } from "react-icons/fa";
import PlayerCard from "./playerCard";

interface IAvailableProps{
  players: Iplayer[];
  coin: number;
  setCoin: Dispatch<React.SetStateAction<number>>;
}
  const AvailablePlayers = ({ players, coin, setCoin }: IAvailableProps) => {
  // console.log(coin, setCoin, from AvailablePlayers);

  return (
    <div className="grid grid-cols-3 container mx-auto px-4 gap-7 mt-6">
      {players.map((player: Iplayer, index: number) => {
        return <PlayerCard key={index} player={player} coin ={coin} setCoin={setCoin} />;
      })}
    </div>
  );
};

export default AvailablePlayers;
