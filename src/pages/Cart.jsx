import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { decrementCartItem, emptyCart, incrementCartItem, removeCartItem } from '../redux/slice/cartSlice'
import Swal from 'sweetalert2'


function Cart() { 
    const dispatch = useDispatch()
    const userCart = useSelector(state=>state.cartReducer)
    const [sum,setSum]=useState(0)
    const navigate = useNavigate()
   // upadting code for total sum
   useEffect(()=>{
    setSum(userCart?.reduce((acc,curr)=>acc+curr.totalPrice,0))// acc-0 , curr - product in the cart list so 0+sum of first product
   },[userCart])

   //when the quantity of product is one and decrement the quantity, result 0 so the item will removed from list
   const handleDecrementCart = (product)=>{
    if(product.quantity>1){
        dispatch(decrementCartItem(product))
    }else{
        dispatch(removeCartItem(product.id))
    }
   }

   const checkOut = ()=>{
    dispatch(emptyCart())
    navigate("/")
    Swal.fire({
    title:"Order Placed",
    text:"Tank You For Purchasing With Us"
})
   } 

  return (
    <>
    <Header/>
    <div className="container py-5">
        {
            userCart?.length>0?
            <div className="my-5">
            <h1 className='text-danger fw-bold'>Cart Summery</h1>
            <div className="row mt-4">
                <div className="col-md-8 border rounded p-5">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>product</th>
                                <th>image</th>
                                <th>quantity</th>
                                <th>price</th>
                                <th>..</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userCart?.map((product,index)=>(
                                    <tr>
                                <td>{index+1}</td>
                                <td>{product?.title}</td>
                                <td><img width={'50px'} height={'50px'}src={product?.thumbnail}alt="product" /></td>
                                <td>
                                    <div className="d-flex">
                                        <button onClick={()=>dispatch(handleDecrementCart(product))} className="btn fs-3 fw-bold">-</button>
                                        <input style={{width:'50px'}} value={product?.quantity} type="text" className="form-control" readOnly/>
                                        <button onClick={()=>dispatch(incrementCartItem(product))} className="btn fs-4 fw-bold">+</button>
                                    </div>
                                </td>
                                <td>$ {product.totalPrice}</td>
                                <td> <button onClick={()=>dispatch(removeCartItem(product?.id))} className="btn text-danger"> <FontAwesomeIcon icon={faTrash}/></button> </td>
                            </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <div className="float-end my-3">
                        <button onClick={()=>dispatch(emptyCart())} className="btn btn-danger me-2">Empty Cart</button>
                        <Link to={"/"} className='btn btn-primary'>Shope More</Link>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="border rounded p-5">
                        <h3 fw-bold>Total Amound :<span className='text-danger'>$ {sum}</span> </h3>
                        <hr />
                        <div className="d-grid mt-2">
                            <buttun onClick = {checkOut} className="btn btn-success">CHECK OUT</buttun>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        :
        <div style={{height:'82vh'}} className='d-flex flex-column align-items-center justify-content-center ' >
          <img className='w-25'  src="https://assets-v2.lottiefiles.com/a/0953d504-117d-11ee-aa49-1f149204cb5f/9uZcoEJaoF.gif" alt="" />
          <h3 className='mb-4'>Cart Is Empty...</h3>
          <Link className=' border rounded p-2 bg-info text-light text-decoration-none ' to={"/"}>Add More</Link>
        </div>
        }
    </div>
    </>
   
  )
}

export default Cart