import React from "react";
import logo from "../assets/images/logo.svg";
import { useSelector } from "react-redux";

export default function Header() {
  const prs = useSelector((state) => state.prs);
  return (
    <div className="flex items-center justify-between w-4/5 md:w-1/2 mx-auto p-4 md:px-10 border-4 border-gray-500 border-opacity-50 rounded-lg">
      <img className="w-20 md:w-32" src={logo} alt="logo rock paper scissors" />
      <div className="text-center bg-cello-50 p-3 md:px-10 md:border md:border-black rounded-lg">
        <p className="text-xs md:text-base text-cello-700">SCORE</p>
        <p className="font-bold text-3xl md:text-6xl text-gray-700">
          {prs.CountPoint.reduce((sum, acc) => sum + acc, 0)}
        </p>
      </div>
    </div>
  );
}
