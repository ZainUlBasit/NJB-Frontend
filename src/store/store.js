import { configureStore } from "@reduxjs/toolkit";
import SideMenuReducer from "./SideMenuSlice";
import CompanyReducer from "./Slices/CompanySlice";
import ItemReducer from "./Slices/ItemSlice";
import CustomerReducer from "./Slices/CustomerSlice";
import ExpensesReducer from "./Slices/ExpenseSlice";

export const store = configureStore({
  reducer: {
    SideMenuReducer,
    CompanyReducer,
    ItemReducer,
    CustomerReducer,
    ExpensesReducer,
  },
});
