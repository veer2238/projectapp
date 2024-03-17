import './Header.scss'
import { FaSearch } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Header = () =>  
<div className='header-main'>

<div className='logo'>logo</div>

<div className='header-icon'>

<span><MdAccountCircle/></span>

<span><FaSearch/></span>

<Link to='/cart'><span ><FaCartShopping/></span></Link>

</div>


</div>

export default Header