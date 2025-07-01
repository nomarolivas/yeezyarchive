import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from "react-router-dom";

const Navbar = () => {

    const [nav, setNav]= useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div>
            
            <Link  className= "link" to="/">Home</Link>
            


        </div>
        
    )
}

export default Navbar;