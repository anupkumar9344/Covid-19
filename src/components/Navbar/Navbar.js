import React from 'react';
import image from '../images/image.png';
import '../Navbar/Navbar.css'

export const Navbar = () => {
   
    return (
        
        <div style={{width:"100%"}}>
            {/* <!-- Just an image --> */}
                <nav class="navbar navbar-light m-0">
                <a class="navbar-brand" href="#">
                    <img src={image} alt="COVID-19" />
                </a>
                </nav>
        </div>
    )
}
export default Navbar;