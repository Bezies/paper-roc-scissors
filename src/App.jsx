import React from "react";
import Header from "./Components/Header";
import FooterRules from "./Components/FooterRules";
import Game from "./Components/Game";
import { useSelector } from "react-redux";
import MyItemPicked from "./Components/MyItemPicked";

export default function () {
  const prs = useSelector((state) => state.prs);

  return (
    <div className="h-screen bg-gradient-to-br from-cello-900 to-haiti-950 font-barlow">
      <div className="pt-10">
        <Header />
      </div>
      <div className="h-2/3 flex items-center justify-center">
        {prs.rounds.roundOne && <Game />}
        {prs.rounds.roundTwo && <MyItemPicked />}
      </div>
      <div className="flex items-center justify-center md:fixed md:bottom-10 md:right-10">
        <FooterRules />
      </div>
    </div>
  );
}
