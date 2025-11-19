import React from 'react'
import Header from '../components/Header'
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons'
FontAwesomeIcon

function Whishlist() {
  return (
    <>
    <Header/>
    <div className='container py-5'>
        {/* wishlist with content */}
        <div className="row my-5">
            <div className="col-md-3 mb-2">
                {/* card */}
                <Card className='mt-4'>
                <Card.Img height={'250px'} variant="top" src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp" />
                <Card.Body className='text-center'>
                    <Card.Title>Card Title</Card.Title>
                    <div className="d-flex justify-content-evenly my-1">
                        <button className="btn text-danger"> <FontAwesomeIcon icon={faHeartCircleXmark}/> </button>
                        <button className="btn text-success"> <FontAwesomeIcon icon={faCartPlus}/> </button>
                    </div>
                </Card.Body>
                </Card>
           </div>
        </div>
    </div>
    </>
  )
}

export default Whishlist