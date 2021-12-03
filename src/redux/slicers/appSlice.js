import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  metaMaskAccountAddress: "",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    // Get MataMask account address
    addmetaMaskAccountAddress: (state, action) => {
      state.metaMaskAccountAddress = action.payload[0];
    },
  },
  extraReducers: {},
});

export const { addmetaMaskAccountAddress } = appSlice.actions;
export default appSlice.reducer;
