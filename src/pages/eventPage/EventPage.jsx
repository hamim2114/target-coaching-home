import { Link } from 'react-router-dom';
import './EventPage.scss';
import { FaCalendar, FaClock, FaMapMarker } from 'react-icons/fa'
import { useQuery } from '@tanstack/react-query';
import { axiosReq } from '../../utils/axiosReq';
import { CircularProgress } from '@mui/material';

const EventPage = () => {
  const { isLoading, error, data: event } = useQuery({
    queryKey: ['event'],
    queryFn: () => axiosReq.get('/event').then(res => res.data)
  });

  return (
    <div className="event">
      <div className="event-wrapper">
        <h1>Upcoming <span>Events</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, inventore temporibus excepturi ex ea quae!</p>
        <div className="event-list">
          {
            isLoading ? <CircularProgress sx={{m: '6rem'}} /> : error ? 'Something went wrong!' :
              event.length === 0 ? <h2 style={{ padding: '5rem', color: 'gray' }}>Event Empty.</h2> :
                event.map(e => (
                  <div key={e._id} className="event-single">
                    <div className="info-main">
                      <img src={e.img || "/eventsm.jpg"} alt="" />
                      <div className="info-main-item">
                        <h2>{e.title}</h2>
                        <div className="info"><FaCalendar /> {e.date}</div>
                        <div className="info"><FaClock />{e.time}</div>
                        <div className="info"><FaMapMarker /> {e.location}</div>
                      </div>
                    </div>
                    <Link to={`/event/${e._id}`} className='link-btn'>Details</Link>
                  </div>
                ))
          }
        </div>
      </div>
    </div>
  )
}

export default EventPage