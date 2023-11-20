import React from "react";
import rules from "../assets/images/image-rules.svg";
import close from "../assets/images/icon-close.svg";

export default function RulesModal({ closeModal }) {
  return (
    <div
      onClick={closeModal}
      className="fixed top-0 left-0 h-screen w-full flex flex-col items-center justify-between md:flex md:items-center md:justify-center md:bg-cello-950/90 md:w-full md:h-screen md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className=" bg-white  flex flex-col items-center justify-between w-full h-screen md:w-[400px] md:h-[400px] md:rounded-md md:pb-5 md:pt-5 pt-20 pb-20"
      >
        <p className="text-3xl text-cello-700 font-semibold">RULES</p>

        <img src={rules} alt="icon rules" />

        <button onClick={closeModal}>
          <span>
            <img src={close} alt="icon close" />
          </span>
        </button>
      </div>
    </div>
  );
}
