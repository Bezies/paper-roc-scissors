import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ListOfChoice: [
    {
      id: 0,
      name: "paper",
      colorBorder: "border-blue-700",
      image: "images/icon-paper.svg",
      shadow: "shadow-[0_10px_0px_0px_rgba(30,58,138,0.7)]",
    },
    {
      id: 1,
      name: "scissors",
      colorBorder: "border-yellow-400",
      image: "images/icon-scissors.svg",
      shadow: "shadow-[0_9px_0px_0px_rgba(202,138,4,0.9)]",
    },
    {
      id: 2,
      name: "rock",
      colorBorder: "border-red-500",
      image: "images/icon-rock.svg",
      shadow: "shadow-[0_9px_0px_0px_rgba(153,27,27,0.7)]",
    },
  ],
  MyPicked: "",
  HousePickedID: "",
  CountPoint: [],
  rounds: {
    roundOne: true,
    roundTwo: false,
  },
  Result: {
    loose: false,
    win: false,
    draw: false,
  },
};

export const prs = createSlice({
  name: "prs",
  initialState,
  reducers: {
    MySelection: (state, action) => {
      state.MyPicked = action.payload;
      state.rounds.roundOne = false;
      state.rounds.roundTwo = true;
      state.HousePickedID = Math.floor(Math.random() * 3);
    },
    CountPoint: (state, action) => {
      // PAPER VS SCISSORS
      if (
        state.MyPicked === "paper" &&
        state.ListOfChoice.find((el) => el.id === state.HousePickedID).name ===
          "scissors"
      ) {
        state.CountPoint.push(0);
        state.Result.loose = true;
        state.Result.win = false;
        state.Result.draw = false;
        // PAPER VS ROCK
      } else if (
        state.MyPicked === "paper" &&
        state.ListOfChoice.find((el) => el.id === state.HousePickedID).name ===
          "rock"
      ) {
        state.CountPoint.push(1);
        state.Result.win = true;
        state.Result.loose = false;
        state.Result.draw = false;
        // ROCK VS PAPER
      } else if (
        state.MyPicked === "rock" &&
        state.ListOfChoice.find((el) => el.id === state.HousePickedID).name ===
          "paper"
      ) {
        state.CountPoint.push(0);
        state.Result.win = false;
        state.Result.loose = true;
        state.Result.draw = false;
        // ROCK VS SCISSORS
      } else if (
        state.MyPicked === "rock" &&
        state.ListOfChoice.find((el) => el.id === state.HousePickedID).name ===
          "scissors"
      ) {
        state.CountPoint.push(1);
        state.Result.win = true;
        state.Result.loose = false;
        state.Result.draw = false;
        // SCISSORS VS PAPER
      } else if (
        state.MyPicked === "scissors" &&
        state.ListOfChoice.find((el) => el.id === state.HousePickedID).name ===
          "paper"
      ) {
        state.CountPoint.push(1);
        state.Result.win = true;
        state.Result.loose = false;
        state.Result.draw = false;
        // SCISSORS VS ROCK
      } else if (
        state.MyPicked === "scissors" &&
        state.ListOfChoice.find((el) => el.id === state.HousePickedID).name ===
          "rock"
      ) {
        state.CountPoint.push(0);
        state.Result.win = false;
        state.Result.loose = true;
        state.Result.draw = false;
        // DRAW
      } else if (
        state.MyPicked ===
        state.ListOfChoice.find((el) => el.id === state.HousePickedID).name
      ) {
        state.CountPoint.push(0);
        state.Result.win = false;
        state.Result.loose = false;
        state.Result.draw = true;
      }
    },
    NewGame: (state, action) => {
      state.rounds.roundTwo = false;
      state.rounds.roundOne = true;
      state.MyPicked = "";
      state.HousePickedID = "";
    },
  },
});

export const { MySelection, CountPoint, NewGame } = prs.actions;
export default prs.reducer;
