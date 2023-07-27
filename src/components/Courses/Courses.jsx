import { useRef } from 'react';
import './Courses.scss'
import Slider from 'react-slick'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useQuery } from '@tanstack/react-query';
import Course from '../course/Course';
import { Link } from 'react-router-dom';
import { axiosReq } from '../../utils/axiosReq';
import { CircularProgress } from '@mui/material';
import { motion } from 'framer-motion'

const Courses = () => {
  const { isLoading, error, data: course } = useQuery({
    queryKey: ['course'],
    queryFn: () => axiosReq.get('/course').then(res => res.data)
  });

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
          slidesToScroll: 1,
          dots: false,
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
          <motion.h1
            transition={{ duration: 1, ease: "easeOut" }}
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >Our <span>Course</span> </motion.h1>
          <motion.p
            transition={{ duration: 1, ease: "easeOut", delay: .2 }}
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >Application programming interface voice-over (vo) instructor led training br curation, user created content</motion.p>
        </div>
        <div className="bottom">
          {
            isLoading ? <CircularProgress sx={{ margin: '0 auto' }} /> : error ? 'Something went wrong!' :
              course.length === 0 ? <h2 style={{ padding: '5rem', color: 'gray' }}>Course Empty.</h2> :
                <Slider ref={sliderRef} {...settings}>
                  {
                    course.map((data, i) => (
                      <motion.div
                        key={i}
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: .5, ease: "easeOut", delay: i * 0.2 }}
                        viewport={{ once: true }}
                      >
                        <Course data={data} key={i} />
                      </motion.div>
                    ))
                  }
                </Slider>
          }
          <div className='btn'>
            <Link to='/course' className='more-btn'>All Course</Link>
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

export default Courses;