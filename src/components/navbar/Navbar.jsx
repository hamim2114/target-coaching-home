import { useEffect, useState } from 'react'
import './Navbar.scss'

const Navbar = () => {
  const [scroll, setScroll] = useState(0);
  const [nav, setNav] = useState(false);
 
    window.onscroll = () => {
        setScroll(window.pageYOffset);
        return () => (window.onscroll = null);
    }

  return (
    <nav className={`nav-main ${scroll > 100 ? 'active' : ''} `}>
      <div style={{color: `${scroll > 500 ? '#494949' : ''}`}} className="navbar">
        <div className="logo">TARGET-COACHING</div>
        <ul style={{right: `${nav ? '0' : ''}`}}>
          <li>Home</li>
          <li>About Us</li>
          <li>Classes</li>
          <li>Gallery</li>
          <li>Teachers</li>
          <li>Events</li>
          <li>Contacts</li>
        <button className='navBtn'>JOIN US NOW</button>
        </ul>
        <div className="nav-menu">
          <div className={`nav-line ${nav && 'active'}`} onClick={() => setNav(p => !p)}>
            <span ></span>
            <span ></span>
            <span ></span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar