import { useRef } from 'react';
import './Teachers.scss'
import Slider from 'react-slick'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import Teacher from '../teacher/Teacher';

const tData = [
  {
    img: '/teacher1.jpg',
    name: 'Darcy Alec',
    title: 'B.Sc in Mathematics',
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
    phone: '+88090000000'
  },
  {
    img: '/teacher2.jpg',
    name: 'Darcy Alec',
    title: 'B.S.S in Economics',
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
    phone: '+88090000000'
  },
  {
    img: '/teacher1.jpg',
    name: 'Darcy Alec',
    title: 'B.Sc in Mathematics',
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
    phone: '+88090000000'
  },
  {
    img: '/teacher2.jpg',
    name: 'Darcy Alec',
    title: 'B.S.S in Economics',
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
    phone: '+88090000000'
  },
  {
    img: '/teacher1.jpg',
    name: 'Darcy Alec',
    title: 'B.Sc in Mathematics',
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
    phone: '+88090000000'
  },
  {
    img: '/teacher2.jpg',
    name: 'Darcy Alec',
    title: 'B.S.S in Economics',
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
    phone: '+88090000000'
  },

]

const Teachers = () => {
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
          slidesToShow: 2,
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
    <div className="teachers">
      <div className="teachers-wrapper">
        <div className="top">
          <h1>Our <span>Teachers</span> </h1>
          <p>Application programming interface voice-over (vo) instructor led training br curation, user created content</p>
        </div>
        <div className="bottom">
          <Slider ref={sliderRef} {...settings}>
            {
              tData.map((teacher, index) => (
                <Teacher key={index} teacher={teacher} />
              ))
            }
          </Slider>
          <div className='btn'>
            <button className='more-btn'>All Teachers</button>
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

export default Teachers