import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../redux/slice/wishlistSlice'
import Swal from 'sweetalert2'
import { addToCart } from '../redux/slice/cartSlice'
function View() {
   
    const userWishlist = useSelector(state=>state.wishlistReducer) //state means reducer of redux store .then picking data of wishlistReducer
    const userCart = useSelector(state=>state.cartReducer)
    const dispatch = useDispatch() // upadte store
    // id of the view page
    const {id} = useParams()
    // console.log(id);
    // create a state for store the view page product
    const [product,setProduct] = useState({})
    // console.log(product);
    const handleCart = ()=>{
        const existingProduct = userCart?.find(item=>item.id==id)
        dispatch(addToCart(product))
         Swal.fire({//alert 
            title: 'Completed!',
            text: existingProduct?`quantity of ${product.title},is updated successfully`:'Product added to your cart....',
            icon: 'success',
            confirmButtonText: 'DONE'
})
    }
    
    //getting data from session storage
    useEffect(()=>{
        if(sessionStorage.getItem("products")){
            const allProducts = JSON.parse(sessionStorage.getItem("products"))
            setProduct(allProducts.find(item=>item.id==id))
        }
    },[])

    const handleWishlist = () =>{
       const existingProduct = userWishlist?.find(item=>item.id==id)
       if(existingProduct){
        Swal.fire({//alert 
            title: 'Sorry!',
            text: 'Product Alredy in Wishlist..',
            icon: 'error',
            confirmButtonText: 'DONE'
})
       }else{
        // add product to wishlistin redux store - dispatch action
        dispatch(addToWishlist(product))
       }
    }
    
  return (
    <>
        <Header/>
        <div className="container py-5">
            <div className="row my-5">
                <div className="col-md-6 text-center">
                    <img className='img-fluid' src={product?.thumbnail} alt="product" />
                    <div className="d-flex justify-content-evenly mt-5">
                        <button onClick={handleWishlist} className="btn btn-warning">ADD TO WISHLIST</button>
                        <button onClick={handleCart} className="btn btn-success">ADD TO CART</button>
                    </div>
                </div>
                <div className="col-md-6 mt-5 mt-md-0">
                    <h1>{product?.title}</h1>
                    <h3 className='text-danger'>$ {product?.price}</h3>
                    <h4>Brand : {product?.brand}</h4>
                    <h4>Category :{product?.category}</h4>
                    <h4>Description :{product?.description}</h4>
                    <h5 className="my-3">Client Reviews</h5>
                    {/* Duplicate div */}
                    {
                        product?.reviews?.length>0?
                        product?.reviews?.map((item,index)=>(
                            <div key={index} className="border rounde p-3 shadow mb-2">
                        <p><span className='fw-bold'>{item?.reviewrName}</span>{item?.comment}</p>
                        <p>Rating :{item?.rating} <FontAwesomeIcon icon={faStar} className='text-warning'/></p>
                    </div> 
                        ))
                        :
                        <div>No Client Reviews Are Available</div>
                    }                   

                </div>
            </div>
        </div>
    </>
  )
}

export default View