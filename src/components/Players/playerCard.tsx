import React from 'react';

const playerCard = () => {
    return (
        <div className="card bg-base-100 gap-7 shadow-sm">
            <figure>
              <img src={player.playerImg} alt="player" />
            </figure>
            <div className="card-body space-y-3">
              <h2 className="card-title">
                <FaUser /> 
                {player.playerName}
              </h2>

              <div className="flex justify-between gap-4">
                <p className="font-semibold">{player.origin}</p>
                <button className="btn">{player.playerType}</button>
              </div>

              <div className="divider" />
              <h2 className="font-bold text-2xl">Rating</h2>

              <div className="flex justify-between gap-4">
                <p className="font-bold">{player.battingStyle}</p>
                <button className="btn">{player.bowlingStyle}</button>
              </div>

              <div className="card-actions justify-between items-center">
                <h2 className="font-bold text-2xl">${player.price}</h2>
                <button className="btn">Buy Now</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    );
};

export default playerCard;