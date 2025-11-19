import { Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Pnf from './pages/Pnf'
import Whishlist from './pages/Whishlist'
import View from './pages/View'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Routes>
      <Route path ='/' element={<Home/>}/>
      <Route path='/cart'element={<Cart/>}/>
      <Route path='/*' element={<Pnf/>}/>
      <Route path='/whishlist' element={<Whishlist/>}/>
      <Route path='/products/id/view' element={<View/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
