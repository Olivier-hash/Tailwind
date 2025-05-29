

import React from 'react'

function SideBar() {
  return (
    <>
    <div className='flex h-screen'>
       {/* Sidebar */}
        <div className='w-64 bg-gray-800 text-white p-4'>
            <h2 className='text-xl  font-bold mb-4'>Sidebar</h2>
            <ul className='space-y-2'>
                <li><a href="block hover:bg-gray-700 p-2 rounded">Dashboard</a></li>
                <li><a href="block hover:bg-gray-700 p-2 rounded">Audience</a></li>
                <li><a href="block hover:bg-gray-700 p-2 rounded">Posts</a></li>
                <li><a href="block hover:bg-gray-700 p-2 rounded">Schedules</a></li>
                <li><a href="block hover:bg-gray-700 p-2 rounded">Settings</a></li>
                <li><a href="block hover:bg-gray-700 p-2 rounded">Profile</a></li>
                <li><a href="block hover:bg-gray-700 p-2 rounded">Logout</a></li>
                <li><a href="block hover:bg-gray-700 p-2 rounded">Accounts</a></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default SideBar