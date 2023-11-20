import React from "react";
import rock from "../assets/images/icon-rock.svg";
import paper from "../assets/images/icon-paper.svg";
import scissors from "../assets/images/icon-scissors.svg";
import { MySelection } from "../features/prs";
import { useDispatch, useSelector } from "react-redux";

export default function Game() {
  const dispatch = useDispatch();
  const prs = useSelector((state) => state.prs);

  function handleSelect(e) {
    dispatch(MySelection(e.target.value));
  }

  return (
    <div className="bg-[url('./assets/images/bg-triangle.svg')] bg-no-repeat bg-center w-5/6 md:w-1/3 h-2/3 md:h-3/4 flex flex-col justify-between">
      <div className="flex justify-between">
        <input
          onChange={(e) => handleSelect(e)}
          className="hidden"
          type="checkbox"
          value={"paper"}
          name=""
          id="paper"
        />
        <div className="rounded-full border-[16px] md:border-[20px] border-blue-700 shadow-[0_9px_0px_0px_rgba(30,58,138,0.7)]">
          <label
            className="flex items-center justify-center bg-white shadow-[inset_0px_6px_0px_rgba(0,0,0,0.2)] md:shadow-[inset_0px_8px_0px_rgba(0,0,0,0.2)] px-5 py-4 md:px-12 md:py-10 rounded-full   cursor-pointer"
            htmlFor="paper"
          >
            <img src={paper} alt="icon paper" />
          </label>
        </div>

        <input
          onChange={(e) => handleSelect(e)}
          className="hidden"
          type="checkbox"
          value={"scissors"}
          name=""
          id="scissors"
        />
        <div className="rounded-full border-[16px] md:border-[20px] border-yellow-400 shadow-[0_8px_0px_0px_rgba(202,138,4,0.9)] md:shadow-[0_10px_0px_0px_rgba(202,138,4,0.9)]">
          <label
            className="flex items-center justify-center bg-white px-5 py-4 md:px-12 md:py-10 rounded-full shadow-[inset_0px_6px_0px_rgba(0,0,0,0.2)] md:shadow-[inset_0px_8px_0px_rgba(0,0,0,0.2)] cursor-pointer"
            htmlFor="scissors"
          >
            <img src={scissors} alt="icon scissors" />
          </label>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <input
          onChange={(e) => handleSelect(e)}
          className="hidden"
          type="checkbox"
          value={"rock"}
          name=""
          id="rock"
        />
        <div className="rounded-full border-[16px] md:border-[20px] border-red-500 shadow-[0_8px_0px_0px_rgba(153,27,27,0.7)] md:shadow-[0_10px_0px_0px_rgba(153,27,27,0.7)]">
          <label
            className="flex items-center justify-center bg-white shadow-[inset_0px_6px_0px_rgba(0,0,0,0.2)] md:shadow-[inset_0px_8px_0px_rgba(0,0,0,0.2)] px-5 py-4 md:px-12 md:py-10 rounded-full cursor-pointer"
            htmlFor="rock"
          >
            <img src={rock} alt="icon rock" />
          </label>
        </div>
      </div>
    </div>
  );
}
