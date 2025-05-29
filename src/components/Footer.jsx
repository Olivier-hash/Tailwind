import React from 'react'

function Footer() {
  return (
    <>
    <footer className='bg-gray-800 text-white py-8 px-4'>
        <div className='max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-3 space-x-6 text-md'>
            {/* column 1 */}
            <div className='mx-auto'>
                <h3 className='text-lg font-semibold mb-3'>Company</h3>
                <ul className='space-y-2'>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Press</a></li>
                </ul>
            </div>

            {/* Column 2 */}
            <div className='mx-auto'>
                <h3 className='text-lg font-semibold mb-3'>Support</h3>
                <ul className='space-y-2'>
                    <li><a href="#"></a>Help center</li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">Accessbility</a></li>
                </ul>
            </div>
            {/* column 3 */}
            <div className='mx-auto'>
                <h3>Legal</h3>
            </div>

        </div>
    </footer>
    </>
  )
}

export default Footer