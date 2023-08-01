import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GetBankAccounts } from "../../Https";

export const fetchBanks = createAsyncThunk("fetchBanks", async () => {
  const { data } = await GetBankAccounts();
  return data;
});

const BankSlice = createSlice({
  name: "bank",
  initialState: {
    loading: false,
    data: [],
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBanks.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchBanks.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchBanks.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.loading = false;
      state.isError = true;
    });
  },
});

export default BankSlice.reducer;
