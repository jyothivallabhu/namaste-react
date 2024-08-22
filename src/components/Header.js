import { useContext, useEffect, useState } from "react"
import { LOGOURL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    const {loggedInUser,date } = useContext(UserContext)
    
    const cartItems = useSelector((store)=> store.cart.items)
    
    const [buttonClick, setButtonClick] = useState('Login')

    const onlineStatus = useOnlineStatus()
    return (
        <div className='flex justify-between  bg-slate-600 shadow-lg text-cyan-50 '>
            <div className='p-5'>
                <img alt='logo' src={LOGOURL}  width={100}/>
            </div>
            <div className='nav-items'>
                <ul className="p-5 m-5 flex items-center ">
                    <li className="px-5" > { onlineStatus ===true ? 'online' : 'offline '}</li>
                    <li className="px-5"><Link to='/'>Home</Link></li>
                    <li className="px-5"><Link to='grocery'>Grocery</Link></li>
                    <li className="px-5"><Link to="about">About Us</Link></li>
                    
                   <li className="px-5"><Link>Contact Us</Link></li>
                    <li className="px-5"><Link to = "cart"> Cart {cartItems.length}</Link> </li>
                    <li className="px-5">
                        <button className="rounded bg-cyan-200 p-4" onClick={() => {
                        setButtonClick(buttonClick === 'Logout' ? 'Login' : 'Logout')
                    }} >{buttonClick }</button>
                    </li>
                    <li>{loggedInUser } - {date} </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;