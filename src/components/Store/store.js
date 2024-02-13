import { configureStore } from "@reduxjs/toolkit";
import idReducer from "../../Features/idSlice";

export const store = configureStore({
  reducer: {
    id: idReducer
  }
});
