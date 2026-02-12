import { createSlice } from "@reduxjs/toolkit";

const requestsSlice = createSlice({
  name:"requests",
  initialState:null,
  reducers:{
    addRequests:(state,action)=>action.payload,
    removeRequests:(state,action)=>null,
    removeRequest:(state,action)=>{
      const newArray = state.filter(r=>r._id!=action.payload);
      return newArray;
    }
  }

})

export const {addRequests, removeRequests, removeRequest} = requestsSlice.actions;

export default requestsSlice.reducer;
