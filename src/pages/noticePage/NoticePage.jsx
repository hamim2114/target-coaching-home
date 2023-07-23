import { Link } from 'react-router-dom';
import './NoticePage.scss';
import paerser from 'html-react-parser';
import { FaArrowRight, FaCalendar, FaClock, FaLocationArrow, FaMap, FaMapMarker } from 'react-icons/fa'
import { TiWarning } from 'react-icons/ti'
import { useQuery } from '@tanstack/react-query';
import { axiosReq } from '../../utils/axiosReq';
import { CircularProgress } from '@mui/material';

const NoticePage = () => {
  const { isLoading, error, data: notice } = useQuery({
    queryKey: ['notice'],
    queryFn: () => axiosReq.get('/notice').then(res => res.data)
  });

  return (
    <div className="notice">
      <div className="notice-wrapper">
        <h1>Active <span>Notice</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, inventore temporibus excepturi ex ea quae!</p>
        <div className="notice-list">
          {
            isLoading ? 'Loading...' : error ? 'Something went wrong!' :
              notice.length === 0 ? <h2 style={{ padding: '5rem', color: 'gray' }}>Notice Empty.</h2> :
                notice.map(n => (
                  <div key={n._id} className="notice-single">
                    <div className="info-main">
                      <TiWarning className='warn' />
                      <div className="info">
                        <h2>{n.title}</h2>
                        <div className="date"><FaCalendar />{new Date(n.createdAt).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}</div>
                        <div className='desc'>{paerser(n.body.substring(0,300))}...</div>
                      </div>
                    </div>
                    <Link to={`/notice/${n._id}`} className='link-btn'>Details</Link>
                  </div>
                ))
          }
        </div>
      </div>
    </div>
  )
}

export default NoticePage;