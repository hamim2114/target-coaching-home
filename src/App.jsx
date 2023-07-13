import { useEffect, useState } from 'react'
import HeroSection from './components/heroSection/HeroSection'
import Navbar from './components/navbar/Navbar'
import WelcomeSec from './components/welcomeSection/WelcomeSec'
import Loader from './components/loader/Loader';
import './App.scss';
import Classes from './components/classes/Classes';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Achievment from './components/achievment/Achievment';
import Footer from './components/footer/Footer';
import Teachers from './components/teachers/Teachers';
import Blogs from './components/blogs/Blogs';
import Wave from './components/wave/Wave';

function App() {
  const [animateExit, setAnimateExit] = useState(true)

  useEffect(() => {
    //  window.onload = () => {
    //   setAnimateExit(false)
    //  }
    setTimeout(() => {
      setAnimateExit(false)
    }, [0])
  }, [])

  return (
    <div className="app">
      <div className={`slideBg ${!animateExit ? 'active' : ''}`}>
      </div>
      <Navbar />
      <HeroSection />
      <Wave/>
      <WelcomeSec />
      <Classes />
      <Achievment />
      <Teachers />
      <Blogs />
      <Footer />
    </div>
  )
}

export default App
