import React from 'react'
import './Navbarr.css';
import HamburgerDrawer from './HamburgerDrawer';

const Navbar = ({setCategory}) => {
  return (
    <div className='nav'>
      <div className='icon'>
        <HamburgerDrawer setCategory={setCategory} />
      </div>
      <div className='headt'>
        Inshorts
      </div>
      <div className='nouse'>
        sasank
      </div>
    </div>
  )
}

export default Navbar
