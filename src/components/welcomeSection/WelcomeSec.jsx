import './WelcomeSec.scss'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { TbCertificate } from 'react-icons/tb'

const WelcomeSec = () => {

  return (
    <>
      <div className='welcomeSecMain'>

        <div className='welcome-sec'>
        
            <h1 className='welcome-txt'>
              Welcome to <br /> <span>Target Coaching Home</span></h1>
          <p>
            Ecosystem blended learning off-the-shelf learning storytelling explainer animation completion criteria.
          </p>
          <div className="welcome-sec-features">
            <div

              className='features-box'>
              <FaChalkboardTeacher className='welcome-sec-icon' />
              <h3>Experienced Teachers</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, corrupti?</p>
            </div>
            <div

              className='features-box lg'>
              <img className='kidimg' src="/kid.jpg" alt="" />
              <h3>Best Learning Program</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, nisi!</p>
              <button>Learn More</button>
            </div>
            <div

              className='features-box'>
              <TbCertificate className='welcome-sec-icon' />
              <h3>Global Certificate</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ratione.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WelcomeSec