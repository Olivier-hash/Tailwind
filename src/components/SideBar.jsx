

import React from 'react'

function SideBar() {
  return (
    <>
    <div className='flex h-screen'>
       {/* Sidebar */}
        <div className='w-64 bg-gray-800 text-white p-4'>
            <h2 className='text-xl  font-bold mb-4 text-center'>Sidebar</h2>
            <ul className='space-y-2 text-center'>
                <li><a href="#" className='block hover:bg-gray-700 p-2 rounded'>Dashboard</a></li>
                <li><a href="#" className='block hover:bg-gray-700 p-2 rounded'>Audience</a></li>
                <li><a href="#" className='block hover:bg-gray-700 p-2 rounded'>Posts</a></li>
                <li><a href="#" className='block hover:bg-gray-700 p-2 rounded'>Schedules</a></li>
                <li><a href="#" className='block hover:bg-gray-700 p-2 rounded'>Settings</a></li>
                <li><a href="#" className='block hover:bg-gray-700 p-2 rounded'>Profile</a></li>
                <li><a href="#" className='block hover:bg-gray-700 p-2 rounded'>Logout</a></li>
                <li><a href="#" className='block hover:bg-gray-700 p-2 rounded'>Accounts</a></li>
            </ul>
        </div>
        {/* main content */}
        <div className='flex bg-gray-100 p-6 overflow-auto'>
            <h1>Main content</h1>
        </div>
    </div>
    </>
  )
}

export default SideBar