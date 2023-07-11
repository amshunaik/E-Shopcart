import { configureStore } from "@reduxjs/toolkit";
import list from "./uisl";
import todo1 from "./Todo";
import cart from "./cartsl";
// Here the store is created where both the reducer property of listpart and shopcart are stored using configurestore

const store=configureStore({
    reducer:{listpart:list.reducer, shopcart:cart.reducer,todo:todo1.reducer}
})

export default store