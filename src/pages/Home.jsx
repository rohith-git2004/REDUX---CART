import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux/slice/productSlice';
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Home() {
  const dispatch = useDispatch()//dispatch is a function used to send an action to the reducer.
 const {loading,allProducts,error} = useSelector(state=>state.productReducer)

 const [currentPage,setCurrentPage] = useState(1)
 const productsPerPage = 8
 const totalPage = Math.ceil(allProducts.length/productsPerPage) // ceil 4.6 convert into 5

 const pageItemLastIndex = currentPage*productsPerPage
 const pageItemStartIndex = pageItemLastIndex - productsPerPage
 const visibleProductArray = allProducts?.slice(pageItemStartIndex,pageItemLastIndex)

useEffect(()=>{
  dispatch(getAllProducts())
},[])      //[] - runs only ones

const navigateNextPage= ()=>{
  if(currentPage!=totalPage){
    setCurrentPage(currentPage+1)
  }
}

const navigateBackPage =()=>{
  if(currentPage!=1){
    setCurrentPage(currentPage-1)
  }
}
  return (
    <>
      <Header insideHome ={true} />
      <div className="container py-5">
       { 
       loading?
       <div className='text-center my-5 fw-bolder fs-5'><img width="120px" src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831" alt="loading" />loading...</div>
       :
        <div className="row my-5">
          {/* duplicate */}
          {
            allProducts?.length>0?
            visibleProductArray?.map(product=>(
              <div key={product?.id} className="col-md-3 mb-2">
            {/* card - react bootstrap */}
            <Card>
              <Card.Img height={"250px"} variant="top" src={product?.thumbnail}/>
              <Card.Body className="text-center">
                <Card.Title>{product?.title}</Card.Title>
                <Link to={`/products/${product?.id}/view`}className="btn btn-secondary">View More..</Link>
              </Card.Body>
            </Card>
          </div>
            ))
            :
            <p className='fs-5 fw-bold my-5'>PRODUCT NOT FOUND!!!</p>
          }
          <div className="my-3 text-center">
            <button onClick={navigateBackPage} className="btn"><FontAwesomeIcon icon={faBackward} /></button>
            <span className="fw-bolder">{currentPage} of {totalPage}</span>
            <button onClick={navigateNextPage} className="btn"><FontAwesomeIcon icon={faForward} /></button>
          </div>
        </div>
        } 
      </div>
    </>
  );
}

export default Home