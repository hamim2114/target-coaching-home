import './HomePage.scss';
import HeroSection from '../../components/heroSection/HeroSection'
import Wave from '../../components/wave/Wave'
import WelcomeSec from '../../components/welcomeSection/WelcomeSec'
import Achievment from '../../components/achievment/Achievment'
import Teachers from '../../components/teachers/Teachers'
import Blogs from '../../components/blogs/Blogs'
import Courses from '../../components/Courses/Courses';

const HomePage = () => {
  return (
    <div className="homepage">
      <HeroSection />
      <div className="homepage-sub">
        <Wave />
        <WelcomeSec />
        <Courses />
        <Achievment />
        <Teachers />
        <Blogs />
      </div>
    </div>
  )
}

export default HomePage