import React from "react";
import rock from "../assets/images/icon-rock.svg";
import paper from "../assets/images/icon-paper.svg";
import scissors from "../assets/images/icon-scissors.svg";
import { MySelection } from "../features/prs";
import { useDispatch, useSelector } from "react-redux";
import { log } from "console";

export default function Game() {
  const dispatch = useDispatch();
  const prs = useSelector((state) => state.prs);

  return (
    <div className="w-5/6 h-2/3 flex flex-col justify-between">
      <div className="flex justify-between">
        <button
          onClick={(e) => dispatch(MySelection(e.target.value))}
          value={"paper"}
          className="bg-white px-5 py-4 rounded-full border-[16px] border-blue-700"
        >
          <span>
            <img src={paper} alt="icon paper" />
          </span>
        </button>
        <button
          onClick={(e) => dispatch(MySelection(e.target.value))}
          value={"scissors"}
          className="bg-white px-5 py-4 rounded-full border-[16px] border-yellow-400"
        >
          <span>
            <img src={scissors} alt="icon rock" />
          </span>
        </button>
      </div>
      <div className="flex items-center justify-center">
        <button
          onClick={(e) => dispatch(MySelection(e.target.value))}
          value={"rock"}
          className="bg-white px-5 py-4 rounded-full border-[16px] border-red-500"
        >
          <span>
            <img src={rock} alt="" />
          </span>
        </button>
      </div>
    </div>
  );
}
