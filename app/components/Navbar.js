import React from 'react'
import Link from 'next/link'
// import Signin from '../Signin/page'
// import Login from '../Login/page'
// import Myspace from '../Myspace/page'
// import Cart from '../Cart/page'

const Navbar = () => {
  return (
    <div className='container mx-auto px-4 py-4 bg-green-900 text-white'>
      <nav>
        <div className='flex items-center'><h1>FRESH PICK :)</h1></div>
        <ul className='flex justify-end items-center gap-10'>
          <Link href={"/"}><li>
            <div className="avatar">
              <div className="ring-primary  w-12 rounded-full ring-2 ring-offset-2">
                <img src="https://cdn-icons-png.flaticon.com/128/9713/9713317.png" />
              </div>
            </div>
          </li></Link>
          <Link href={"/Cart"}><li>
            <div className="avatar">
              <div className="ring-primary  w-12 rounded-full ring-2 ring-offset-2">
                <img src="https://cdn-icons-png.flaticon.com/128/10822/10822003.png" />
              </div>
            </div>
          </li></Link>
          <Link href={"/Signin"}><li><button className="btn btn-warning">Sign up</button></li></Link>
          <Link href={"/Login"}><li><button className="btn btn-warning">Log in</button></li></Link>
          <Link href={"/Myspace"}><li><button className="btn btn-warning">My Space</button></li></Link>


        </ul>
      </nav>
    </div>

  )
}

export default Navbar
