import React from 'react'
import './Navbarr.css';
import HamburgerDrawer from './HamburgerDrawer';

const Navbar = ({setCategory}) => {
  return (
    <div className='nav'>
      <div className='icon'>
        <HamburgerDrawer setCategory={setCategory} />
      </div>
      <img
        style={{ cursor: "pointer" }}
        src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
        height="80%"
        alt="logo"
      />
      {/* <div className='headt'>
        Inshorts
      </div> */}
      
    </div>
  )
}

export default Navbar
