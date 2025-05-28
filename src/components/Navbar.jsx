import React from 'react';

function Navbar() {
  return (
    <div className="flex items-center justify-between bg-gray-600 p-4 shadow-md text-white">
      {/* Left side: Home, About, Contact */}
      <div className="flex space-x-4">
        <h2>Home</h2>
        <h2>About us</h2>
        <h2>Contact</h2>
      </div>

      {/* Right side: SignUp, Login */}
      <div className="flex space-x-4">
        <button className='rounded-full w-20 h-8 bg-transparent hover:bg-white hover:text-blue-600'>Login</button>
        <button className='rounded-full w-20 h-8 bg-transparent hover:bg-white hover:text-blue-600'>Signup</button>
      </div>
    </div>
  );
}

export default Navbar;
