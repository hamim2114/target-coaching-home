import './Course.scss';
import { FaArrowRight, FaCalendar, FaClock, FaTimes, FaTimesCircle } from 'react-icons/fa'

const Course = ({data}) => {
  
  return (
    <div className="course">
      <img src={data.img} alt="" />
      <div className={`cat ${data.cat === 'Special' ? 'sp' : ''}`}>{data.cat}</div>
      <div className="date-sec">
        <span className="day"><FaCalendar/> Mon - Fri</span>
        <span className="time"><FaClock/> 05PM - 08PM</span>
      </div>
      <h2>CLASS: SEVEN</h2>
      <div className='desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam harum alias eaque eum.</div>
      <div className="details"><span>Details <FaArrowRight/></span></div>
    </div>
  )
}

export default Course