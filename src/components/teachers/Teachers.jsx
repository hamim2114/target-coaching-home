import './Teachers.scss'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import Teacher from '../teacher/Teacher';
import { Link } from 'react-router-dom';

export const tData = [
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
 
  return (
    <div className="teachers">
      <div className="teachers-wrapper">
        <div className="top">
          <h1>Our <span>Teachers</span> </h1>
          <p>Application programming interface voice-over (vo) instructor led training br curation, user created content</p>
        </div>
        <div className="bottom">
          <div className="teacher-sec">
            {
              tData.slice(0,4).map((teacher, index) => (
                <Teacher key={index} teacher={teacher} />
              ))
            }
          </div>
          <div className='btn'>
            <Link to='/teachers' className='more-btn'>All Teachers</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Teachers