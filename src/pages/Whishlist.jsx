import React from 'react'
import Header from '../components/Header'
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWishlist } from '../redux/slice/wishlistSlice'
import Swal from 'sweetalert2'
import { addToCart } from '../redux/slice/cartSlice'

function Whishlist() {
  const dispatch = useDispatch()
  const userWishlist = useSelector(state=>state.wishlistReducer)
  const userCart = useSelector(state=>state.cartReducer)

  const handleCart = (product)=>{
          const existingProduct = userCart?.find(item=>item.id==product.id)
          dispatch(addToCart(product))
           Swal.fire({//alert 
              title: 'Completed!',
              text: existingProduct?`quantity of ${product.title},is updated successfully`:'Product added to your cart....',
              icon: 'success',
              confirmButtonText: 'DONE'
  })
      }
  return (
    
    <>
    <Header/>
    <div className='container py-5'>
        {/* wishlist with content */}
        {
          userWishlist?.length>0?
          <div className="row my-5">
            {
              userWishlist?.map(product=>(
                <div className="col-md-3 mb-2">
                {/* card */}
                <Card className='mt-4'>
                <Card.Img height={'250px'} variant="top" src={product?.thumbnail} />
                <Card.Body className='text-center'>
                    <Card.Title>{product.title}</Card.Title>
                    <div className="d-flex justify-content-evenly my-1">
                        <button onClick={()=>dispatch(removeFromWishlist(product.id))} className="btn text-danger"> <FontAwesomeIcon icon={faHeartCircleXmark}/> </button>
                        <button onClick={()=>handleCart(product)} className="btn text-success"> <FontAwesomeIcon icon={faCartPlus}/> </button>
                    </div>
                </Card.Body>
                </Card>
           </div>
              ))
            }
        </div>
        :
        <div style={{height:'82vh'}} className='d-flex flex-column align-items-center justify-content-center ' >
          <img className='w-25'  src="https://assets-v2.lottiefiles.com/a/0953d504-117d-11ee-aa49-1f149204cb5f/9uZcoEJaoF.gif" alt="" />
          <h3 className='mb-4'>Wishlist Is Empty...</h3>
          <Link className=' border rounded p-2 bg-info text-light text-decoration-none ' to={"/"}>Add More</Link>
        </div>
        }
    </div>
    </>
  )
}

export default Whishlist