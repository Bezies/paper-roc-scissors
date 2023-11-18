import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  MyPicked: "",
};

export const prs = createSlice({
  name: "prs",
  initialState,
  reducers: {
    MySelection: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const { MySelection } = prs.actions;
export default prs.reducer;
