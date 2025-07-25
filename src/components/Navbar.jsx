import React, { useState } from "react";
// import './index.css';
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
// import { Link } from "react-router-dom";



const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)



  return (


    <div className=' font-custom h-[100px]  mx-auto flex justify-between items-center'>

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
              About
            </a>



            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
              onClick={() => setIsOpen(false)}
            >
              Collections
            </a>
          </div>
        )}
      </div>

      <div className=' h-[100px]  mx-auto flex justify-between items-center  '>

        <h1 className="text-4xl  text-center">Yzy Archive</h1>
        {/* <img src={logo} alt="site logo"></img> */}
      </div>
    </div>


  )
}

export default Navbar;



{/* <script
  type="module"
  src="node_modules/@material-tailwind/html@latest/scripts/popover.js"
></script> */}