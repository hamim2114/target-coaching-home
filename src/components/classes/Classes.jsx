import { useRef } from 'react';
import Class from '../class/Class'
import './Classes.scss'
import Slider from 'react-slick'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const Classes = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    lazyLoad: true,
    pauseOnHover: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <div className="classes">
      <div className="classes-wrapper">
        <div className="top">
          <h1>Our <span>Classes</span> </h1>
          <p>Application programming interface voice-over (vo) instructor led training br curation, user created content</p>
        </div>
        <div className="bottom">
          <Slider ref={sliderRef} {...settings}>
            <Class />
            <Class />
            <Class />
            <Class />
            <Class />
            <Class />
          </Slider>
          <div className='btn'>
            <button className='more-btn'>More Classes</button>
            <div className="prev-next">
              <div className="s-button" onClick={previous}>
                <IoIosArrowBack />
              </div>
              <div className="s-button" onClick={next}>
                <IoIosArrowForward />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Classes