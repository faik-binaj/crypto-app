import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Axios from "axios";

import BackgroundImg from "../../images/cryptobckg.jpeg";
import "./styles/CoinPage.css";

const CoinPage = () => {
  const [coin, setCoin] = useState("");
  let { id } = useParams();

  useEffect(() => {
    Axios.get(`https://api.coingecko.com/api/v3/coins/${id}`).then(
      (response) => {
        setCoin(response.data);
      }
    );
  }, [id]);

  if (coin) {
    return (
      <div
        className={"coinPageContainer"}
        style={{
          backgroundImage: `url(${BackgroundImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className={"coinPageInfo"}>
          <h1>{coin.name}</h1>
          <img src={coin.image.large} alt={""} />
          <div className={"coinData"}>
            <div className={"coinPageRow"}>
              <h3 className={"coinPageHeader"}>Symbol:</h3>
              <h3 className={"coinPageData"}>{coin.symbol}</h3>
            </div>
            <div className={"coinPageRow"}>
              <h3 className={"coinPageHeader"}>Current Price:</h3>
              <h3 className={"coinPageData"}>
                $ {coin.market_data.current_price.usd.toLocaleString()}
              </h3>
            </div>
            <div className={"coinPageRow"}>
              <h3 className={"coinPageHeader"}>Market Cap:</h3>
              <h3 className={"coinPageData"}>
                $ {coin.market_data.market_cap.usd.toLocaleString()}
              </h3>
            </div>
            <div className={"coinPageRow"}>
              <h3 className={"coinPageHeader"}>Total Volume:</h3>
              <h3 className={"coinPageData"}>
                $ {coin.market_data.total_volume.usd.toLocaleString()}
              </h3>
            </div>
            <div className={"coinPageRow"}>
              <h3 className={"coinPageHeader"}>24hr High:</h3>
              <h3 className={"coinPageData green"}>
                $ {coin.market_data.high_24h.usd.toLocaleString()}
              </h3>
            </div>
            <div className={"coinPageRow"}>
              <h3 className={"coinPageHeader"}>24hr Low:</h3>
              <h3 className={"coinPageData red"}>
                $ {coin.market_data.low_24h.usd.toLocaleString()}
              </h3>
            </div>
          </div>
          <Link to="/">
            <div className="coinPage-RouteButton">go back</div>
          </Link>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default CoinPage;
