import React from "react";
import logo from "../assets/images/logo.svg";

export default function Header() {
  return (
    <div className="flex items-center justify-between w-4/5 mx-auto p-4 border-4 border-gray-500 border-opacity-50 rounded-lg">
      <img className="w-20" src={logo} alt="logo rock paper scissors" />
      <div className="text-center bg-cello-50 p-3 rounded-lg">
        <p className="text-xs text-cello-700">SCORE</p>
        <p className="font-bold text-3xl text-gray-700">0</p>
      </div>
    </div>
  );
}
