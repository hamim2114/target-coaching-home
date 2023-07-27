import './WelcomeSec.scss'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { TbCertificate } from 'react-icons/tb'
import { motion } from 'framer-motion'

const WelcomeSec = () => {

  return (
    <>
      <div className='welcomeSecMain'>

        <div className='welcome-sec'>
          <motion.div
            transition={{ duration: 1, ease: "easeOut" }}
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className='welcome-txt'
          >Welcome to <br /> <span>Target Coaching Home</span></motion.div>
          <motion.p
            transition={{ duration: 1, ease: "easeOut",delay: .1 }}
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >Ecosystem blended learning off-the-shelf learning storytelling explainer animation completion criteria.</motion.p>
          <div className="welcome-sec-features">
            <motion.div
              transition={{ duration: .5, ease: "easeOut" }}
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className='features-box'>
              <FaChalkboardTeacher className='welcome-sec-icon' />
              <h3>Experienced Teachers</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, corrupti?</p>
            </motion.div>
            <motion.div
              transition={{ duration: .5, ease: "easeOut" }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className='features-box lg'>
              <img className='kidimg' src="/kid.jpg" alt="" />
              <h3>Best Learning Program</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, nisi!</p>
              <button>Learn More</button>
            </motion.div>
            <motion.div
              transition={{ duration: .5, ease: "easeOut" }}
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className='features-box'>
              <TbCertificate className='welcome-sec-icon' />
              <h3>Global Certificate</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ratione.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WelcomeSec