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
        <label
          className="flex items-center justify-center bg-white px-5 py-4 md:px-12 md:py-10 rounded-full border-[16px] md:border-[20px] border-blue-700 cursor-pointer"
          htmlFor="paper"
        >
          <img src={paper} alt="icon paper" />
        </label>

        <input
          onChange={(e) => handleSelect(e)}
          className="hidden"
          type="checkbox"
          value={"scissors"}
          name=""
          id="scissors"
        />
        <label
          className="flex items-center justify-center bg-white px-5 py-4 md:px-12 md:py-10 rounded-full border-[16px] md:border-[20px] border-yellow-400 cursor-pointer"
          htmlFor="scissors"
        >
          <img src={scissors} alt="icon scissors" />
        </label>
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
        <label
          className="flex items-center justify-center bg-white px-5 py-4 md:px-12 md:py-10 rounded-full border-[16px] md:border-[20px] border-red-500 cursor-pointer"
          htmlFor="rock"
        >
          <img src={rock} alt="icon rock" />
        </label>
      </div>
    </div>
  );
}
