import { useEffect, useState } from 'react'
import HeroSection from './components/heroSection/HeroSection'
import Navbar from './components/navbar/Navbar'
import WelcomeSec from './components/welcomeSection/WelcomeSec'
import Loader from './components/loader/Loader';
import './App.scss';

function App() {
  const [animateExit, setAnimateExit] = useState(true)

  useEffect(() => {
  //  window.onload = () => {
  //   setAnimateExit(false)
  //  }
  setTimeout(() => {
    setAnimateExit(false)
  },[1000])
  }, [])

  return (
    <div className="app">
      <div className={`slideBg ${!animateExit? 'active' : ''}`}>
      </div>
      <Navbar/>
      <HeroSection/>
      <WelcomeSec/>
    </div>
  )
}

export default App
