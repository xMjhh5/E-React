
import './001-Css/App.css'
import { Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import ProductDetails from './Pages/ProductDetails'
import SignUp from './Pages/User/signUp'
import Login from './Pages/User/login'
import AddProduct from './Pages/AddProduct'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/product/:id" element={ <ProductDetails/> } />
        <Route path="/signUp" element={ <SignUp/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/addProduct" element={ <AddProduct/> } />
      </Routes>

      <Footer/>
    </>
  )
}

export default App
