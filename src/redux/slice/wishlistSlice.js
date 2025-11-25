import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name : 'wishlist',
    initialState:[],
    reducers:{      //action 

    //add to wishlist
    addToWishlist : (state,action)=>{
        state.push(action.payload)   // the action called in the add to wishlist button (view component) .so the  the intial state:[] will get the item
    },
    //remove from wishlist
    removeFromWishlist :(state,action)=>{
      return state.filter(product=>product.id!=action.payload)
    }
    }
})
export const {addToWishlist,removeFromWishlist} = wishlistSlice.actions
export default wishlistSlice.reducer






// where just creating an empty array with name whishlist