import { useEffect, useState } from 'react'
import './Navbar.scss'
import { Link, useLocation } from 'react-router-dom';
import { useRef } from 'react';

const Navbar = () => {
  const [scroll, setScroll] = useState(0);
  const [scrollup, setScrollup] = useState(true);
  const [nav, setNav] = useState(false);
  const prevScroll = useRef(0);

  const { pathname } = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > prevScroll.current) {
        setScrollup(false);
      } else if (currentScroll < prevScroll.current) {
        setScrollup(true);
      }
      setScroll(currentScroll)
      prevScroll.current = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav-main ${scroll > 100 || pathname !== '/' ? 'active' : ''} ${scrollup ? '' : 'scrollup' } `}>
      <div style={{ color: `${scroll > 500 || pathname !== '/' ? '#494949' : ''}` }} className='navbar'>
        <div className="logo">TARGET-COACHING</div>
        <ul style={{ right: `${nav ? '0' : ''}` }}>
          <Link to='/' className={`link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
          <li>Notice</li>
          <Link to='/course' className={`link ${pathname === '/course' ? 'active' : ''}`}>Course</Link>
          <li>Teachers</li>
          <li>Events</li>
          <li>Blogs</li>
          <li>Contacts</li>
          <li>Login</li>
          <button className='navBtn'>REGISTER</button>
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