import HeroSection from './components/heroSection/HeroSection'
import Navbar from './components/navbar/Navbar'
import WelcomeSec from './components/welcomeSection/WelcomeSec'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <WelcomeSec/>
    </div>
  )
}

export default App
