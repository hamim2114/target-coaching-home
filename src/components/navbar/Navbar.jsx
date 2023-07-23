import { useEffect, useState } from 'react'
import React from 'react';
import './Navbar.scss'
import { Link, useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { axiosReq } from '../../utils/axiosReq';
import { useQuery } from '@tanstack/react-query';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

const Navbar = () => {
  const [scroll, setScroll] = useState(0);
  const [scrollup, setScrollup] = useState(true);
  const [nav, setNav] = useState(false);

  const { isLoading, error, data: notice} = useQuery({
    queryKey: ['notice'],
    queryFn: () => axiosReq.get('/notice').then(res => res.data)
  });
  const { data: event} = useQuery({
    queryKey: ['event'],
    queryFn: () => axiosReq.get('/event').then(res => res.data)
  });

  const { pathname } = useLocation();

  const prevScroll = useRef(0);
  const navbarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setNav(false);
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);


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
    <nav ref={navbarRef} className={`nav-main ${scroll > 100 || pathname !== '/' ? 'active' : ''} ${scrollup ? '' : 'scrollup'} `}>
      <div style={{ color: `${scroll > 500 || pathname !== '/' ? '#494949' : ''}` }} className='navbar'>
        <Link className="logo">TARGET-COACHING</Link>
        <ul style={{ right: `${nav ? '0' : ''}` }}>
          <Link to='/' className={`link ${pathname === '/' ? 'active' : ''}`} onClick={() => setNav(false)}>Home</Link>
          <Link to='/about' className={`link ${pathname === '/about' ? 'active' : ''}`} onClick={() => setNav(false)}>About Us</Link>
          <Link to='/notice' className={`link ${pathname === '/notice' ? 'active' : ''}`} onClick={() => setNav(false)}>
            Notice {notice?.length ? <span>({notice.length})</span> :''}
          </Link>
          <Link to='/course' className={`link ${pathname === '/course' ? 'active' : ''}`} onClick={() => setNav(false)}>Course</Link>
          <Link to='/teachers' className={`link ${pathname === '/teachers' ? 'active' : ''}`} onClick={() => setNav(false)}>Teachers</Link>
          <Link to='/event' className={`link ${pathname === '/event' ? 'active' : ''}`} onClick={() => setNav(false)}>
            Event {event?.length ? <span>({event.length})</span> : ''}
          </Link>
          <Link to='/blog' className={`link ${pathname === '/blog' ? 'active' : ''}`} onClick={() => setNav(false)}>Blogs</Link>
          <Link to='/contact' className={`link ${pathname === '/contact' ? 'active' : ''}`} onClick={() => setNav(false)}>Contact</Link>
          <Link to='/login' className={`link  ${pathname === '/login' ? 'active' : ''}`} onClick={() => setNav(false)}><b>Login</b></Link>
          <Link to='/register' className='navBtn' onClick={() => setNav(false)}>Register</Link>
        </ul>
        <div className="nav-menu"  onClick={() => setNav(p => !p)}>
          {notice?.length || event?.length ? <div className="warn" style={{display: nav ? 'none': ''}}><PriorityHighIcon/></div> : ''}
          <div className={`nav-line ${nav && 'active'}`}>
            <span ></span>
            <span ></span>
            <span ></span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default React.memo(Navbar);