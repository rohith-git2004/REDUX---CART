import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart',
    initialState :[],

    reducers:{
        //add to cart
        addToCart:(state,action)=>{
            const exisitingProduct = state.find(item=>item.id==action.payload.id)
            if(exisitingProduct){
                exisitingProduct.quantity++
                exisitingProduct.totalPrice = exisitingProduct.quantity*exisitingProduct.price
                const remainingProduct = state.filter(item=>item.id!=exisitingProduct.id)
                state = [...remainingProduct,exisitingProduct]
            }else{
                state.push({...action.payload,quantity:1,totalPrice:action.payload.price})
            }
        },
        //remove cart item
        removeCartItem:(state,action)=>{
            return state.filter(product=>product.id!==action.payload)
        },
        //increment cart item quantity
        incrementCartItem:(state,action)=>{
            const exisitingProduct = state.find(item=>item.id==action.payload.id)
            exisitingProduct.quantity++
            exisitingProduct.totalPrice = exisitingProduct.quantity*exisitingProduct.price

            const remainingProduct = state.filter(item=>item.id!=exisitingProduct.id)
            state = [...remainingProduct,exisitingProduct]
        },
        //decrement cart item quantity
        decrementCartItem:(state,action)=>{
            const exisitingProduct = state.find(item=>item.id==action.payload.id)
            exisitingProduct.quantity--
            exisitingProduct.totalPrice = exisitingProduct.quantity*exisitingProduct.price

            const remainingProduct = state.filter(item=>item.id!=exisitingProduct.id)
            state = [...remainingProduct,exisitingProduct]
        },
        //empty cart
        emptyCart:(state,action)=>{
            return[]
        }
    }
})
export const {addToCart,removeCartItem,incrementCartItem,decrementCartItem,emptyCart}=cartSlice.actions
export default cartSlice.reducer