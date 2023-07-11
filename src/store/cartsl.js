import { createSlice } from "@reduxjs/toolkit";

const cart=createSlice({
    name:'shopcart',
    initialState:{
        shoplist:[],
        TotQuan:0,
        Amount:0
    },
    reducers:{
        Add(state,action){
            const newpart =action.payload;
            const pres=state.shoplist.find(item=>item.id===newpart.id);
            state.TotQuan++;
            
            if(!pres){
                state.shoplist.push({id:newpart.id,
                    quantity:1,price:newpart.price,
                    totPrice:newpart.price,
                    title:newpart.title });
            }
            else{
                pres.quantity++;
                pres.totPrice=pres.totPrice+newpart.price;
            }




        },
        Remove(state,action){
            const id=action.payload;
            const pres=state.shoplist.find(t=>t.id===id);
            state.TotQuan--;
            if(pres.quantity===1){
                state.shoplist.filter(t=>t.id===id)
                pres.quantity--;
                

            }
            else if(pres.quantity===0){
                alert("No product added");
                state.TotQuan=0;
            }
            else {
                pres.quantity--;
                pres.totPrice-=pres.price;
                
            }

        }

    }
})

export const cartAction=cart.actions;
export default cart;