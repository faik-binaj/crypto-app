import React, { useState, useEffect } from "react";
import axios from "axios";

import CachedIcon from "@mui/icons-material/Cached";
import Coins from "../Coin/Coins";
import "./styles/Home.css";

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getAllCoins();
  }, []);

  const getAllCoins = async () => {
    setIsLoading(true);
    await axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((response) => {
        const allCoins = response.data;
        setCoins(allCoins);
        setIsLoading(false);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  const refreshPageHandler = () => {
    window.location.reload(false);
  };

  return (
    <div className={"home"}>
      <h1>Crypto Currency App</h1>

      <div className={"mainHeader"}>
        <div className={"search"}>
          <input
            type={"text"}
            placeholder={"Search..."}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <div className={"refreshPage"}>
          <button onClick={refreshPageHandler}>
            <CachedIcon />
          </button>
        </div>
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        coins
          .filter((coins) => {
            if (query === "") {
              return coins;
            } else if (coins.name.toLowerCase().includes(query.toLowerCase())) {
              return coins;
            }
          })
          .map((coin) => {
            return (
              <Coins
                key={coin.id}
                id={coin.id}
                symbol={coin.symbol}
                name={coin.name}
                image={coin.image}
                current_price={coin.current_price}
                price_change_percentage_24h={coin.price_change_percentage_24h}
                market_cap={coin.market_cap}
              />
            );
          })
      )}
    </div>
  );
};

export default Home;
