import { useEffect, useState } from "react"
import { LOGOURL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    
    const [buttonClick, setButtonClick] = useState('Login')

    const onlineStatus = useOnlineStatus()
    return (
        <div className='header'>
            <div className='logo'>
                <img alt='logo' src={LOGOURL}  width={100}/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li> { onlineStatus ===true ? 'online' : 'offline '}</li>
                    <li><Link to='/'>Home</Link></li>
                    
                    <li><Link to="about">About Us</Link></li>
                    
                   <li><Link>Contact Us</Link></li>
                    <li>Cart</li>
                    <li>
                        <button className="login" onClick={() => {
                        setButtonClick(buttonClick === 'Logout' ? 'Login' : 'Logout')
                    }} >{buttonClick }</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;