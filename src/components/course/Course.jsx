import { Link } from 'react-router-dom';
import './Course.scss';
import parser from 'html-react-parser';
import { FaArrowRight, FaCalendar, FaClock } from 'react-icons/fa'

const Course = ({data}) => {

  return (
    <Link to={`/course/${data._id}`} className="course">
      <img src={data.img || '/classdefault.jpg'} alt="" />
      <div className={`cat ${data.category === 'Special' ? 'sp' : ''}`}>{data.category}</div>
      <div className="date-sec">
        {data.date && <span className="day"><FaCalendar/>{data?.date}</span>}
        <span className="time"><FaClock/> {data.time}</span>
      </div>
      <h2>{data.class}</h2>
      <div className='desc'>{parser(data.desc.substring(0,200))} ...</div>
      <div className="details"><span>Details <FaArrowRight/></span></div>
    </Link>
  )
}

export default Course