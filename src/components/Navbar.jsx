import React from 'react'

function Navbar() {
  return (
    <>
       <div className='items-center justify-between bg-gray-600 p-4 shadow-md text-white '>
        <div className='flex flex-column md:flex-row space-x-4'>
           <h2 className='   justify-between'>Home</h2>
           <h2 className='   justify-between'>About us</h2>
           <h2 className='   justify-between'>Contact</h2>
        </div> 
         <div className='flex flex-row-reverse space-x-4 space-x-reverse'>
           <button><h2 className='   justify-between'>SignUp</h2></button>
           <button><h2 className='   bg-center justify-between'>Login</h2></button>
          </div> 
       </div>
    </>
  )
}

export default Navbar