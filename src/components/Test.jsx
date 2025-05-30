// my original code logic of flex
import React from 'react'
function Test() {
return (
<>
<div className='bg-gray-800 text-white py-2 px-2 '>
    <div className='flex justify-between'>
    <div className='flex space-x-6'>
        <h3><a href=''>Home</a></h3>
        <h3><a href=''>About</a></h3>
        <h3><a href=''>Services</a></h3>
        <h3><a href=''>Contact us</a></h3>
    </div>
    <div className='flex space-x-4'>
        <h3><a href=''>Sign up</a></h3>
        <h3><a href=''>Log in</a></h3>
         <h3><a href=''>forget something</a></h3>
          <h3><a href=''>NEar by</a></h3>
    </div>
    </div>
</div>
</>
);
}

export default Test

// function Footer() {
//   return (
//     <>
//     <div className='bg-gray-800 text-white py-8 px-4'>
//         <div className='flex justify-between max-w-7xl mx-auto sm:grid-cols-1 md:grid-cols-3 space-x-6 text-md'>
//             {/* column 1 */}
//             <div className='flex space-x-4'>
//                 <h3 >Company</h3>
//             </div>

//             {/* Column 2 */}
//             <div className='flex space-x-4'>
//                 <h3 >Support</h3>
//             </div>
//             {/* column 3 */}
//             <div className='flex space-x-4'>
//                 <h3>Legal</h3>
//             </div>

//         </div>
//     </div>
//     </>
//   )
// }

// export default Footer