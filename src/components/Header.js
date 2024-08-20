import { useEffect, useState } from "react"
import { LOGOURL } from "../utils/constants";

const Header = () => {
    
    const [buttonClick, setButtonClick] = useState('Login')

    return (
        <div className='header'>
            <div className='logo'>
                <img alt='logo' src={LOGOURL}  width={100}/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
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