import React from 'react'

function Navbar() {
  return (
    <>
       <div className='flex-1 items-center justify-between bg-gray-600 p-4 shadow-md text-white '>
        <div className='flex justify-between'>
           <h2>Home</h2>
           <h2>About us</h2>
           <h2>Contact</h2>
           <h2>SignUp</h2>
        </div>  
       </div>
    </>
  )
}

export default Navbar