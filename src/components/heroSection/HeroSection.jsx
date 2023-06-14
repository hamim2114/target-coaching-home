import './HeroSection.scss'

const HeroSection = () => {
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
      <marquee className='marque' behavior="" direction=""><b>NOTICE:</b>  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, accusantium.</marquee>
      <div className="heroSec">
        <div className="info">
          <h1>Providing Best Education For Brighter future</h1>
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