import { createSlice } from "@reduxjs/toolkit";
import appSlice from "./appSlice";


const searchSlice=createSlice({
    name:"search",
    initialState:{},
    reducers:{
        cacheResults:(state,action)=>{
            // state={...action.payload, ...state}
            const newObj =Object.assign(state,action.payload);
            state=newObj;


        }
    },
});

export const {cacheResults}=searchSlice.actions
export default searchSlice.reducer;

