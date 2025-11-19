import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight, faEnvelope, faPhone, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{height:"300px"}} className='bg-primary d-flex justify-content-center align-items-center flex-column text-light '>
        <div className='d-flex justify-content-evenly w-100'>
           <div style={{width:"400px"}} className="intro">
            <h3>
                <FontAwesomeIcon icon={faTruckFast}/> Daily Cart
                </h3>
                    <p>Designed and built with all the love in the world by the Luminar team with the help of our contributors.</p>
                    <p>Code licensed Luminar, docs CC BY 3.0.</p>
                    <p>Currently v5.3.2</p>
           </div>
           <div className="links d-flex  flex-column">
            <h3>Links</h3>
            <Link to={'/'} className='text-decoration-none text-light'> Home</Link>
            <Link to={'/whishlist'} className='text-decoration-none text-light'> Whishlist</Link>
            <Link to={'/cart'} className='text-decoration-none text-light'> Cart</Link>
           </div>
           <div className="links d-flex  flex-column">
            <h3>Guides</h3>
            <a href={'https://react.dev/'} className='text-decoration-none text-light'> React</a>
            <a href={'https://react-bootstrap.github.io/'} className='text-decoration-none text-light'> React Bootstrap</a>
            <a href={'https://react-redux.js.org/'} className='text-decoration-none text-light'> React Redux</a>
            <a href={'https://www.npmjs.com/package/react-router-dom'} className='text-decoration-none text-light'> React Router Dom</a>
           </div>
           <div className="d-flex flex-column">
            <h3>Contact Us</h3>
            <div className="d-flex">
                <input type="text" placeholder='Email Her' className="form-control" />
                <button className="btn"> <FontAwesomeIcon icon={faArrowRight} className='text-light'/></button>
            </div>
            <div className="mt-3 d-flex justify-content-between">
                <FontAwesomeIcon icon={faFacebook}/>
                <FontAwesomeIcon icon={faTwitter}/>
                <FontAwesomeIcon icon={faWhatsapp}/>
                <FontAwesomeIcon icon={faInstagram}/>
                <FontAwesomeIcon icon={faEnvelope}/>
                <FontAwesomeIcon icon={faPhone}/>
            </div>
           </div>
        </div>
        <p className='fw-bold '>© 2025 Daily cart. All rights reserved.</p>
    </div>
  )
}

export default Footer