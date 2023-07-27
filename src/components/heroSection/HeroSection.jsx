import './HeroSection.scss'
import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <main className='hero-main'>
      <div className="area" >
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div >
      <marquee className='marque' behavior="" direction=""><b>NOTICE: !! SITE UNDER DEVELOPMENT !!</b></marquee>
      <div className="heroSec">
        <div className="info">
          <div className="typewriter">
            <Typewriter
              typeSpeed={50}
              deleteSpeed={4}
              words={["Welcome To Target Coaching Home !", "Our journey for your batter future !"]}
              loop={0}
              cursor={true}
              cursorBlinking={true}
            />
          </div>
          <motion.h1
            transition={{ duration: 1, ease: "easeOut" }}
            initial={{ scale: 1.2, y: -100, opacity: 0 }}
            whileInView={{ scale: 1, y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >Providing Best Education  For Brighter <span className='type-animation animating'>Future..</span> </motion.h1>
          <motion.p
            transition={{ duration: 2, ease: "easeOut", delay: .5 }}
            initial={{ scale: 1.2, y: 100, opacity: 0 }}
            whileInView={{ scale: 1, y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >Per sed, mattis. Integer viverra euismod maecenas incidunt, phasellus consequatur aliquam nihil temporibus in assumens deserunt convallis. Inceptos per consectetur consequatur proin.Integer viverra euismod maecenas incidunt, phasellus consequatur aliquam nihil temporibus in assumens deserunt convallis. Inceptos per consectetur consequatur</motion.p>
          <motion.button
            transition={{ duration: 5, ease: "easeOut" }}
            initial={{ opacity: 0 }}
            whileInView={{opacity: 1 }}
            viewport={{ once: true }}
            className='heroBtn'>Learn More</motion.button>
        </div>
        <div className="heroImg">
          <motion.img
            transition={{ duration: 2, ease: "easeOut" }}
            initial={{ scale: 1.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            src="/book.png" alt="" />
        </div>
      </div>
    </main>
  )
}

export default HeroSection