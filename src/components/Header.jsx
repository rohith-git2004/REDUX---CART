import { faCartPlus, faHeart, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Nav,Container,Navbar,Badge } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProduct } from '../redux/slice/productSlice'



function Header({insideHome}) {
  const userWishlist = useSelector(state=>state.wishlistReducer)// taking the wishlist items
  const userCart = useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()
  
  return (
    <Navbar expand="lg" className="bg-primary position-fixed w-100 z-1">
      <Container>
        <Navbar.Brand> <Link to={'/'} className='text-decoration-none text-light fw-bold'><FontAwesomeIcon icon={faTruckFast}/> Daily Cart</Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-light' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-md-flex align-items-md-center ">
            { insideHome &&
              <Nav.Item onChange={e=>dispatch(searchProduct(e.target.value))} className='me-lg-3'> <input type="text" className="form-control me-lg-5 text-center" placeholder='Seacrch Product' /> </Nav.Item>
            }
            <Link to={'/whishlist'}className='text-decoration-none text-light fw-bold d-flex align-items-center '><FontAwesomeIcon icon={faHeart} className='text-danger me-1'/> WISHLIST <Badge pill bg="success"className='ms-1'>{userWishlist?.length}</Badge></Link>
            <Link to={'/cart'}className='text-decoration-none text-light fw-bold ms-md-4 d-flex align-items-center'><FontAwesomeIcon icon={faCartPlus} className='text-danger me-1'/> CART <Badge pill bg="success"className='ms-1'>{userCart?.length}</Badge></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header