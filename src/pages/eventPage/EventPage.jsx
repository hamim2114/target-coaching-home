import { Link } from 'react-router-dom';
import './EventPage.scss';
import { FaArrowRight, FaCalendar, FaClock, FaLocationArrow, FaMap, FaMapMarker } from 'react-icons/fa'

const EventPage = () => {
  return (
    <div className="event">
      <div className="event-wrapper">
        <h1>Upcoming <span>Events</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, inventore temporibus excepturi ex ea quae!</p>
        <div className="event-list">
          <div className="event-single">
            <div className="info-main">
              <img src="/class1.jpg" alt="" />
              <div className="info-main-item">
                <h2>Explorations of Regional Chief Executive Network</h2>
                <div className="info"><FaCalendar /> 13th Dec 2023</div>
                <div className="info"><FaClock /> 09.00 AM</div>
                <div className="info"><FaMapMarker /> Coaching Campus</div>
              </div>
            </div>
            <Link to='/event/42r4we' className='link-btn'>Details</Link>
          </div>
          <div className="event-single">
            <div className="info-main">
              <img src="/class1.jpg" alt="" />
              <div className="info-main-item">
                <h2>Explorations of Regional Chief Executive Network</h2>
                <div className="info"><FaCalendar /> 13th Dec 2023</div>
                <div className="info"><FaClock /> 09.00 AM</div>
                <div className="info"><FaMapMarker /> Coaching Campus</div>
              </div>
            </div>
            <Link to='/event/42r4we' className='link-btn'>Details</Link>
          </div>
          <div className="event-single">
            <div className="info-main">
              <img src="/class1.jpg" alt="" />
              <div className="info-main-item">
                <h2>Explorations of Regional Chief Executive Network</h2>
                <div className="info"><FaCalendar /> 13th Dec 2023</div>
                <div className="info"><FaClock /> 09.00 AM</div>
                <div className="info"><FaMapMarker /> Coaching Campus</div>
              </div>
            </div>
            <Link to='/event/42r4we' className='link-btn'>Details</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventPage