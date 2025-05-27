import React from 'react'

function Navbar() {
  return (
    <>
       <div className='flex-1 items-center justify-between bg-gray-600 p-4 shadow-md text-white '>
        <div className='flex justify-between'>
           <h2 className='hidden md:block  bg-cover bg-center justify-between'>Home</h2>
           <h2 className='hidden md:block  bg-cover bg-center justify-between'>About us</h2>
           <h2 className='hidden md:block  bg-cover bg-center justify-between'>Contact</h2>
           <h2 className='hidden md:block  bg-cover bg-center justify-between'>SignUp</h2>
        </div>  
       </div>
    </>
  )
}

export default Navbar