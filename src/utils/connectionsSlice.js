import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
  name: "connections",
  initialState: null,
  reducers: {
    addConnections: (state, actoin) => actoin.payload,
    removeConnections: (state, actoin) => null,
  },
});


export const {addConnections, removeConnections} = connectionSlice.actions;
export default connectionSlice.reducer;