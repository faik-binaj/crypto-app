import React from "react";
import { useNavigate } from "react-router-dom";

import "./Coin.css";

const Coins = ({
  symbol,
  name,
  image,
  current_price,
  price_change_percentage_24h,
  market_cap,
  id,
}) => {
  let navigate = useNavigate();

  const routeChange = () => {
    let path = `/CoinPage/${id}`;
    navigate(path);
  };

  return (
    <div className="coinContainer">
      <div className="coinRow">
        <div className="coinData">
          <div className="coin">
            <img src={image} alt={""} />
            <h1 className="coinName">{name}</h1>
            <p className="coinSymbol">{symbol}</p>
            <p className="coinPrice">$ {current_price.toFixed(2)}</p>
            {price_change_percentage_24h < 0 ? (
              <p className="priceChange red">
                {price_change_percentage_24h.toFixed(3)}%
              </p>
            ) : (
              <p className="priceChange green">
                {price_change_percentage_24h.toFixed(3)}%
              </p>
            )}
            <p className="coinVolume">$ {market_cap.toLocaleString()}</p>
            <button onClick={routeChange}>More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coins;
