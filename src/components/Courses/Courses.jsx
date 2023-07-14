import { useRef } from 'react';
import './Courses.scss'
import Slider from 'react-slick'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import Course from '../course/Course';

export const courseData = [
  {
    img: '/class1.jpg',
    cat: 'Academic',
    day: 'Mon - Fri',
    time: '05PM - 08PM',
    class: 'Seven',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam harum alias eaque eum.'
  },
  {
    img: '/class2.jpg',
    cat: 'Special',
    day: 'Mon - Fri',
    time: '05PM - 08PM',
    class: 'Seven',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam harum alias eaque eum.'
  },
  {
    img: '/class3.jpg',
    cat: 'Special',
    day: 'Mon - Fri',
    time: '05PM - 08PM',
    class: 'Seven',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam harum alias eaque eum.'
  },
  {
    img: '/class1.jpg',
    cat: 'Academic',
    day: 'Mon - Fri',
    time: '05PM - 08PM',
    class: 'Seven',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam harum alias eaque eum.'
  },
  {
    img: '/class1.jpg',
    cat: 'Academic',
    day: 'Mon - Fri',
    time: '05PM - 08PM',
    class: 'Seven',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam harum alias eaque eum.'
  },
  {
    img: '/class1.jpg',
    cat: 'Academic',
    day: 'Mon - Fri',
    time: '05PM - 08PM',
    class: 'Seven',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam harum alias eaque eum.'
  },
  {
    img: '/class1.jpg',
    cat: 'Academic',
    day: 'Mon - Fri',
    time: '05PM - 08PM',
    class: 'Seven',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam harum alias eaque eum.'
  },
  {
    img: '/class1.jpg',
    cat: 'Academic',
    day: 'Mon - Fri',
    time: '05PM - 08PM',
    class: 'Seven',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam harum alias eaque eum.'
  },
]

const Courses = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    arrows: false,
    dots: true,
    slidesToShow: 3,
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
    <div className="courses">
      <div className="courses-wrapper">
        <div className="top">
          <h1>Our <span>Course</span> </h1>
          <p>Application programming interface voice-over (vo) instructor led training br curation, user created content</p>
        </div>
        <div className="bottom">
          <Slider ref={sliderRef} {...settings}>
            {
              courseData.map((data,i) => (
                <Course data={data} key={i}/>
              ))
            }
          </Slider>
          <div className='btn'>
            <button className='more-btn'>All Course</button>
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

export default Courses