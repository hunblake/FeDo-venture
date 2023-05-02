// src/TradingText.js
import React from "react";
import Typed from "react-typed";

const TradingText = () => {
  return (
    <div>
      <h1 className="text-white homepagetextshadow">
        Fueling the next generation <br />{" "}
        <Typed
          strings={[
            '<span class="highlighted-word">Blockchain</span>',
            '<span class="highlighted-word">DeFi</span>',
            '<span class="highlighted-word">Web3</span>',
            '<span class="highlighted-word">Layer1</span>',
            '<span class="highlighted-word">Infrastructure</span>',
            '<span class="highlighted-word">GameFi</span>',
            '<span class="highlighted-word">NFT</span>',
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
        <br />
        ecosystem
      </h1>
    </div>
  );
};

export default TradingText;
