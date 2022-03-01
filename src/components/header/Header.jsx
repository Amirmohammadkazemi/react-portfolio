import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/person.png'
import Socials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className=" container header__container">
        <h5>Hello guys. I'm</h5>
        <h1>SHAHIN</h1>
        <h5 className="text-light">Robotics & AI Developer</h5>
        <CTA />
        <Socials />

        <div className='me'>
          <img src={ME} alt='my picture'></img>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header