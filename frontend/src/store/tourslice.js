import {createSlice} from '@reduxjs/toolkit';
const tourslice=createSlice({
    name:'tours',
    initialstate: [],
    reducers:{
        settours:(state,action)=>{
            return action.payload;
        }
    }
});
export const {settours}=tourslice.actions;
export default tourslice.reducer;