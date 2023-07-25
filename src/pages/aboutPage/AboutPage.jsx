import './AboutPage.scss';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { axiosReq } from '../../utils/axiosReq';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const AboutPage = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['gallery'],
    queryFn: () => axiosReq.get('/gallery').then(res => res.data)
  });

  return (
    <div className="about-page">
      <div className="about-page-wrapper">
        <h1>About <span>Us</span></h1>
        <p>Application programming interface voice-over (vo) instructor led training br curation, user created content</p>
        <div className="top">
          <div className="gallery">
            {
              data &&
              <AutoplaySlider
              animation="foldOutAnimation"
              cssModule={[CoreStyles, AnimationStyles]}
              play={true}
              cancelOnInteraction={false}
              interval={3000}
            >
              {
                data?.map(i => (
                  <div key={i} data-src={i?.image} />
                ))
              }
            </AutoplaySlider>
            }
          </div>
          <div className="info">
            <h2>Expertise <span>unparalleled</span>  in education</h2>
            <div className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eum, vitae unde a quos repellat.</div>
            <div className="list"><IoMdCheckmarkCircleOutline /> Certified instructors</div>
            <div className="list"><IoMdCheckmarkCircleOutline /> Deep Learning</div>
            <div className="list"><IoMdCheckmarkCircleOutline /> Friendly Campus</div>
            <div className="list"><IoMdCheckmarkCircleOutline /> Easy registration</div>
            <button className="explore-course-btn"><Link to='/course' className='link'>Explore Course</Link></button>
          </div>
        </div>
        <div className="middle">
          <h2>A <span>journey</span> of passion and <br /> <span>dedication</span> </h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown</p>
          <div className="info1">
            <div className="left">
              <h4>Our mission</h4>
              <div className='left-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</div>
            </div>
            <div className="right">
              <img src="/about1.jpg" alt="" />
            </div>
          </div>
          <div className="info2">
            <div className="left">
              <img src="/about2.jpg" alt="" />
            </div>
            <div className="right">
              <h4>Our vision</h4>
              <div className='right-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</div>
            </div>
          </div>
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  )
}

export default AboutPage