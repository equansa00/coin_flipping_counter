import React from "react";

function Coin({ side }) {
  const imageUrl = side === "heads" ? "/CoinHead.jpg" : "/CoinTail.jpg";
  return <img src={imageUrl} alt={side} style={{ width: '100px', height: '100px' }} />;
}

export default Coin;
