import './Class.scss';
import { FaArrowRight, FaCalendar, FaClock, FaTimes, FaTimesCircle } from 'react-icons/fa'

const Class = () => {
  return (
    <div className="class">
      <img src="/class1.jpg" alt="" />
      <div className="date-sec">
        <span className="day"><FaCalendar/> Mon - Fri</span>
        <span className="time"><FaClock/> 10AM - 12PM</span>
      </div>
      <h3>Basic English Speaking and Grammar</h3>
      <div className="details">Details <FaArrowRight/></div>
    </div>
  )
}

export default Class