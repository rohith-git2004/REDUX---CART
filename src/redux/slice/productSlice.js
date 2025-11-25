import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//action with asynchrous fuction call
export const getAllProducts = createAsyncThunk('products/getAllProducts',async()=>{
    const result = await axios.get("https://dummyjson.com/products")
    // console.log(result.data.products);
    sessionStorage.setItem("products",JSON.stringify(result.data.products)) //to store data permenantly(session and local storage inspect-> application)
    return result.data.products
})

const productSlice = createSlice({
    name:'products',
    initialState:{
        allProducts:[],
        dummyAllProducts:[],
        loading:true,
        error:""
    },
    reducers:{
        //used to resolve synchronus  action payload search key from header
        searchProduct:(state,action)=>{
            state.allProducts = state.dummyAllProducts.filter(item=>item.title.toLowerCase().includes(action.payload.toLowerCase()))
        }
    },
    extraReducers:(builder)=>{    // extrareducer - used to resolve asynchronus (3 states - fullfilled,pending,rejected)
        builder.addCase(getAllProducts.fulfilled,(state,action)=>{    // fulfilled - resolved data / where allproduct have data
            state.allProducts = action.payload
            state.dummyAllProducts = action.payload
            state.loading = false
            state.error =""
        })      
         builder.addCase(getAllProducts.pending,(state,action)=>{    // panding : requested to website but the data not got,so no data in allproduct
            state.allProducts = []
            state.dummyAllProducts =[]
            state.loading = true
            state.error =""
        })      
        builder.addCase(getAllProducts.rejected,(state,action)=>{    // panding : requested to website but the data not got,so no data in allproduct
            state.allProducts = []
            state.dummyAllProducts =[]
            state.loading = false
            state.error ="something went wrong!!! API CALL FAILED..."
        })      
    }
})
export const {searchProduct} = productSlice.actions
export default productSlice.reducer