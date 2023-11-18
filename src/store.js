import { configureStore } from "@reduxjs/toolkit";
import prs from "./features/prs";

export const store = configureStore({
  reducer: {
    prs,
  },
});
