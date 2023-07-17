import { Link } from 'react-router-dom';
import './Course.scss';
import { FaArrowRight, FaCalendar, FaClock } from 'react-icons/fa'

const Course = ({data}) => {
  
  return (
    <Link to='/course/368423827833' className="course">
      <img src={data.img} alt="" />
      <div className={`cat ${data.cat === 'Special' ? 'sp' : ''}`}>{data.cat}</div>
      <div className="date-sec">
        <span className="day"><FaCalendar/> Mon - Fri</span>
        <span className="time"><FaClock/> 05PM - 08PM</span>
      </div>
      <h2>CLASS: <span>{data.class}</span></h2>
      <div className='desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam harum alias eaque eum.</div>
      <div className="details"><span>Details <FaArrowRight/></span></div>
    </Link>
  )
}

export default Course