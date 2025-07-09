import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from "react-router-dom";
import logo from '../assets/siteLogo.png'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)



    return (


      <div className='bg-slate-500 h-[100px]  mx-auto flex justify-between items-center'>

      <div className="relative">
      
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 flex flex-col space-y-1 z-50"
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>

        </button>

   
      {isOpen && (
        <div className="absolute top-12 left-0 w-40 bg-white shadow-lg rounded-lg p-2 space-y-2">
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
            onClick={() => setIsOpen(false)}
          >
            Seasons
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
            onClick={() => setIsOpen(false)}
          >
            Info
          </a>
        </div>
      )}
    </div>
    
    <div className='col-span-1 mt-24 mx-auto w-[300px] h-auto '>

   
    <img src={logo} alt="site logo"></img>
</div>
    </div>
  
        
    )
}

export default Navbar;