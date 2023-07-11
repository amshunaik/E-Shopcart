import { createSlice } from "@reduxjs/toolkit";
import cart from "./cartsl";
const todo={vis:false, Qlength:0,done:0, pres:[],isadd:false};

const todo1=createSlice({
    name:'todo',
    initialState:todo,
    reducers:{
        isvis(state){
            state.vis=!state.vis;
            state.Qlength=state.Qlength;
            state.pres=state.pres
            state.click++;
            state.isadd=false;


        },
        isattach(state,action){
            const {value,list}=action.payload
            state.Qlength=action.payload.value;
            state.vis=state.vis
            state.pres.push(action.payload.list);
            state.click=0;
            state.isadd=true;
            

            

        },
        isdeleted(state,action){
            state.done=action.payload;
            state.pres=state.pres
        }
    }
})

export const todoactions=todo1.actions;
export default todo1;