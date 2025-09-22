import { configureStore } from "@reduxjs/toolkit";
import toueReducer from "./tourslice";

const store = configureStore({
  reducer: {
    tours: toueReducer,
  },
});

export default store;
