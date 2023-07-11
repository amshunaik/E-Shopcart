import {createSlice} from '@reduxjs/toolkit'
const list=createSlice({
    name:'listpart',
    initialState:{cartvis:false},
    reducers:{
        toggle(state){
            state.cartvis=!state.cartvis;
        }
    }
});

export const listAction=list.actions;
export default list;