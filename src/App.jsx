import React from "react";
import Header from "./Components/Header";
import FooterRules from "./Components/FooterRules";
import Game from "./Components/Game";

export default function () {
  return (
    <div className="h-screen bg-gradient-to-br from-cello-900 to-haiti-950">
      <div className="pt-10">
        <Header />
      </div>
      <div className="h-2/3 bg-[url('./assets/images/bg-triangle.svg')] bg-no-repeat bg-center flex items-center justify-center">
        <Game />
      </div>
      <div className="flex items-center justify-center">
        <FooterRules />
      </div>
    </div>
  );
}
