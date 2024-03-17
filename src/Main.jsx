import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Component/Home/Home"
import Cart from "./Component/Cart/Cart"
import Contact from "./Component/Contact/Contact"
import Header from "./Common/Header/Header"
import { useEffect, useState } from "react"
import Loader from "./Loader/Loader"
import Footer from "./Common/Footer/Footer"


const Main = () => {

const [loader,setLoader] = useState(true)

useEffect(() => {
    setTimeout(() => {
        setLoader(false)
    }, 2000);
})
return(
    <div>

  
    <BrowserRouter>

    {loader && <Loader/> }
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>

)
}
 

export default Main