import './HeroSection.scss'
import { Typewriter } from 'react-simple-typewriter'
import { useEffect } from 'react';

const HeroSection = () => {
useEffect(() => {
  
}, [])

  return (
    <main>
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
          
          <h1>Providing Best Education  For Brighter <span className='type-animation animating'>Future..</span> </h1>
          <p>Per sed, mattis. Integer viverra euismod maecenas incidunt, phasellus consequatur aliquam nihil temporibus in assumens deserunt convallis. Inceptos per consectetur consequatur proin.Integer viverra euismod maecenas incidunt, phasellus consequatur aliquam nihil temporibus in assumens deserunt convallis. Inceptos per consectetur consequatur</p>
          <button className='heroBtn'>Learn More</button>
        </div>
        <div className="heroImg">
          <img src="/book.png" alt="" />
        </div>
      </div>
    </main>
  )
}

export default HeroSection