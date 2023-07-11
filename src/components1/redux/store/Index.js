
import {configureStore, createSlice} from '@reduxjs/toolkit'

const initial1={counter:0,show:true};
const slice=createSlice({
    name:'counter',
    initialState:initial1,
    reducers:{
        incre(state,action){
            state.counter+=action.payload;

        },
        dec(state){
            state.counter--;
        },
        toggle(state){
            state.show=!state.show;
        },
    }
});
const authstate={isauth:false}

const authsl=createSlice({
    name:'authen',
    initialState:authstate,
    reducers:{
        login(state){
            state.isauth=true;
        },
        logout(state){
            state.isauth=false;

        }
    }
})
    const store=configureStore({
        reducer:{c1:slice.reducer,a1:authsl.reducer}
    });
export const authaction=authsl.actions;    
export const cac=slice.actions  ;  
export default store;