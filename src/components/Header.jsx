import { faCartPlus, faHeart, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Nav,Container,Navbar,Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <Navbar expand="lg" className="bg-primary position-fixed w-100">
      <Container>
        <Navbar.Brand> <Link to={'/'} className='text-decoration-none text-light fw-bold'><FontAwesomeIcon icon={faTruckFast}/> Daily Cart</Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-light' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-md-flex align-items-md-center ">
            <Link to={'/whishlist'}className='text-decoration-none text-light fw-bold d-flex align-items-center '><FontAwesomeIcon icon={faHeart} className='text-danger me-1'/> WHISHLIST <Badge pill bg="success"className='ms-1'>9</Badge></Link>
            <Link to={'/cart'}className='text-decoration-none text-light fw-bold ms-md-4 d-flex align-items-center'><FontAwesomeIcon icon={faCartPlus} className='text-danger me-1'/> CART <Badge pill bg="success"className='ms-1'>9</Badge></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header