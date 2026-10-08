import { FaUser } from "react-icons/fa";
import type { Iplayer } from "../../types/PlayerType";
import { useState } from "react";
import { toast } from "react-toastify/unstyled";

const PlayerCard = ({
  player,
  coin,
  setCoin,
}: {
  player: Iplayer;
  coin: number;
  setCoin: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelectPlayer = () => {
    setIsSelected(true);
    const newCoinPrice = coin - player.price;
    if (newCoinPrice >= 0) {
      setCoin(newCoinPrice);
      toast.success(`${player.playerName} is purchased successfully!`);
    } else {
      toast.error("You don't have enough coins to purchase this player.");
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Player Image */}
      <figure className="h-64 overflow-hidden bg-base-200">
        <img
          src={player.playerImg}
          alt={player.playerName}
          className="h-full w-full transition-transform duration-500 hover:scale-105"
        />
      </figure>

      {/* Card Content */}
      <div className="card-body p-5">
        {/* Player Name */}
        <div className="flex items-center gap-2">
          <FaUser className="text-primary" />

          <h2 className="text-xl font-bold">{player.playerName}</h2>
        </div>

        {/* Country & Player Type */}
        <div className="mt-2 flex items-center justify-between">
          <p className="text-sm font-medium text-gray-500">{player.origin}</p>

          <span className="badge badge-primary badge-outline">
            {player.playerType}
          </span>
        </div>

        <div className="divider my-2"></div>

        {/* Rating */}
        <h3 className="text-sm font-semibold text-gray-500">Player Details</h3>

        <div className="mt-2 space-y-3">
          {/* Batting */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Batting</span>

            <span className="font-semibold">{player.battingStyle}</span>
          </div>

          {/* Bowling */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Bowling</span>

            <span className="font-semibold">{player.bowlingStyle}</span>
          </div>
        </div>

        <div className="divider my-2"></div>

        {/* Price & Button */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500">Price</p>

            <h2 className="text-2xl font-bold">${player.price}</h2>
          </div>

          <button
            onClick={() => handleSelectPlayer()}
            className={
              "btn btn-primary rounded-xl px-5 shadow-md transition-all hover:scale-105"
            }
            // disabled={isSelected == true ? true : false}
            disabled={isSelected}
          >
            {isSelected === true ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
