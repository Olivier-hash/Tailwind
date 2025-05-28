

export default function Login() {
  return (
    <>
    
     
     <div className="flex items-center justify-between">
      {/* left */}
      <div className="flex space-x-4">
        <h2>Home</h2>
        <h2>About us</h2>
        <h2>Contact</h2>
      </div>
      {/* Right side: SignUp, Login */}
      <div className="flex space-x-4">
        <button className="bg-white">Login</button>
        <button>SignUp</button>
      </div>
     </div>


    </>

  )
}

