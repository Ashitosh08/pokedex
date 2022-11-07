import React from 'react'

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <Link to='/'>
          <h1 className='logo header'>POKEDEX </h1>
        </Link>
        <ul className='nav-links'>
          <li>
            <Link to='/'>home</Link>
          </li>
          <li>
            <Link to='/LoginReg'>Login/Signup</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
