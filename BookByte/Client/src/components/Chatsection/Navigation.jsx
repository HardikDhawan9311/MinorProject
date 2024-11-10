import React from 'react'
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <div className='bg-primary'>
    <Link to='/' className='btn btn-primary m-3'>Home</Link>
    <Link to='/signup' className='btn btn-primary m-3'>Signup</Link>
    
     <Link to='/login' className='btn btn-primary m-3'>Login</Link>
     <Link to='/logout' className='btn btn-primary m-3'>Logout</Link>
     {/*<Link to='/createroomform' className='btn btn-primary m-3'>Chat Room</Link>*/}
    
    </div>
  )
}

export default NavBar