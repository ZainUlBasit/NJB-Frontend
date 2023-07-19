import { configureStore } from "@reduxjs/toolkit";
import SideMenuReducer from "./SideMenuSlice";
import CompanyReducer from "./Slices/CompanySlice";
import ItemReducer from "./Slices/ItemSlice";

export const store = configureStore({
  reducer: {
    SideMenuReducer,
    CompanyReducer,
    ItemReducer,
  },
});
