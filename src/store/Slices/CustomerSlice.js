import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GetAllCustomers } from "../../Https";

export const fetchCustomers = createAsyncThunk("fetchCustomers", async () => {
  const { data } = await GetAllCustomers();
  return data;
});

const CustomerSlice = createSlice({
  name: "customer",
  initialState: {
    loading: false,
    data: [],
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCustomers.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchCustomers.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchCustomers.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.loading = false;
      state.isError = true;
    });
  },
});

export default CustomerSlice.reducer;