import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CountPoint } from "../features/prs";
import { NewGame } from "../features/prs";

export default function MyItemPicked() {
  const prs = useSelector((state) => state.prs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CountPoint());
  }, []);

  function PlayAgain() {
    dispatch(NewGame());
  }

  return (
    <div className="flex flex-col w-10/12 md:w-3/5 md:mt-10">
      <div className="flex justify-between items-center">
        <div className="flex flex-col md:flex-col-reverse items-center">
          <div
            className={`border-[14px] md:border-[18px] rounded-full ${
              prs.ListOfChoice.find((el) => el.name === prs.MyPicked)
                .colorBorder
            } ${prs.ListOfChoice.find((el) => el.name === prs.MyPicked).shadow}
             `}
          >
            <div className="flex items-center justify-center bg-white shadow-[inset_0px_6px_0px_rgba(0,0,0,0.2)] md:shadow-[inset_0px_8px_0px_rgba(0,0,0,0.2)] px-4 py-3 md:px-14 md:py-12 rounded-full">
              <img
                className="w-12 h-14 md:w-16 md:h-20"
                src={
                  prs.ListOfChoice.find((el) => el.name === prs.MyPicked).image
                }
                alt="icon paper"
              />
            </div>
          </div>

          <p className="uppercase text-white text-sm font-semibold mt-5 md:mb-10 md:text-2xl">
            You Picked
          </p>
        </div>

        <div className="flex flex-col md:flex-col-reverse items-center">
          <div
            className={`rounded-full border-[14px] md:border-[18px]  ${
              prs.ListOfChoice.find((el) => el.id === prs.HousePickedID)
                .colorBorder
            } ${
              prs.ListOfChoice.find((el) => el.id === prs.HousePickedID).shadow
            }`}
          >
            <div
              className={`flex items-center justify-center bg-white shadow-[inset_0px_6px_0px_rgba(0,0,0,0.2)] md:shadow-[inset_0px_8px_0px_rgba(0,0,0,0.2)]  px-4 py-3 md:px-14 md:py-12 rounded-full `}
            >
              <img
                className="w-12 h-14 md:w-16 md:h-20"
                src={
                  prs.ListOfChoice.find((el) => el.id === prs.HousePickedID)
                    .image
                }
                alt="icon paper"
              />
            </div>
          </div>
          <p className="uppercase text-white text-sm font-semibold mt-5 md:mb-10 md:text-2xl">
            The house Picked
          </p>
        </div>
      </div>
      <div className="relative">
        {prs.Result.loose && (
          <div className="flex flex-col items-center justify-center md:mt-0 md:absolute md:-top-40 md:left-1/2 md:-translate-x-1/2">
            <p className="text-5xl text-white font-bold">YOU LOSE</p>
            <button
              onClick={() => PlayAgain()}
              className="flex items-center justify-center bg-white px-10 py-3 mt-5 rounded-lg text-sm text-cello-800 font-medium hover:text-red-600"
            >
              PLAY AGAIN
            </button>
          </div>
        )}
        {prs.Result.win && (
          <div className="flex flex-col items-center justify-center mt-20 md:mt-0 md:absolute md:-top-40 md:left-1/2 md:-translate-x-1/2">
            <p className="text-5xl text-white font-bold">YOU WIN</p>
            <button
              onClick={() => PlayAgain()}
              className="flex items-center justify-center bg-white px-10 py-3 mt-5 rounded-lg text-sm text-cello-800 font-medium hover:text-red-600"
            >
              PLAY AGAIN
            </button>
          </div>
        )}
        {prs.Result.draw && (
          <div className="flex flex-col items-center justify-center mt-20 md:mt-0 md:absolute md:-top-40 md:left-1/2 md:-translate-x-1/2">
            <p className="text-5xl text-white font-bold">IT'S A DRAW</p>
            <button
              onClick={() => PlayAgain()}
              className="flex items-center justify-center bg-white px-10 py-3 mt-5 rounded-lg text-sm text-cello-800 font-medium hover:text-red-600"
            >
              PLAY AGAIN
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
