import { Link } from 'react-router-dom';
import './NoticePage.scss';
import { FaArrowRight, FaCalendar, FaClock, FaLocationArrow, FaMap, FaMapMarker } from 'react-icons/fa'
import {TiWarning} from 'react-icons/ti'

const NoticePage = () => {
  return (
    <div className="notice">
      <div className="notice-wrapper">
        <h1>Active <span>Notice</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, inventore temporibus excepturi ex ea quae!</p>
        <div className="notice-list">
          <div className="notice-single">
            <div className="info-main">
              <TiWarning className='warn'/>
              <div className="info">
                <h2>Notice For All</h2>
                <div className="date"><FaCalendar /> 13th Dec 2023</div>
                <div className='desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa reprehenderit expedita maiores qui voluptatum sunt! ...</div>
              </div>
            </div>
            <Link to='/notice/42r4we' className='link-btn'>Details</Link>
          </div>
          <div className="notice-single">
            <div className="info-main">
              <TiWarning className='warn'/>
              <div className="info">
                <h2>Notice For CLASS: SIX</h2>
                <div className="date"><FaCalendar /> 13th Dec 2023</div>
                <div className='desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa reprehenderit expedita maiores qui voluptatum sunt! ...</div>
              </div>
            </div>
            <Link to='/notice/42r4we' className='link-btn'>Details</Link>
          </div>
          <div className="notice-single">
            <div className="info-main">
              <TiWarning className='warn'/>
              <div className="info">
                <h2>Notice For CLASS: EIGHT</h2>
                <div className="date"><FaCalendar /> 13th Dec 2023</div>
                <div className='desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa reprehenderit expedita maiores qui voluptatum sunt! ...</div>
              </div>
            </div>
            <Link to='/notice/42r4we' className='link-btn'>Details</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoticePage;