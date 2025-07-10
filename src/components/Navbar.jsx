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
          {/* <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
            onClick={() => setIsOpen(false)}
          >
            Seasons

            
          </a> */}

          <button type="button" class="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900" aria-expanded="false">
    <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">Seasons</span>
    <svg class="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
      <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
    </svg>
  </button>



           
          

          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
            onClick={() => setIsOpen(false)}
          >
            About
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

<script src="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js"></script>