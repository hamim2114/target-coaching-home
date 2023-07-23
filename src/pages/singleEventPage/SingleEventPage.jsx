import { Link, useParams } from 'react-router-dom';
import './SingleEventPage.scss';
import { MdOutlineAccessTimeFilled } from 'react-icons/md'
import { BsArrowLeft } from 'react-icons/bs'
import { useQuery } from '@tanstack/react-query';
import { axiosReq } from '../../utils/axiosReq';
import { CircularProgress } from '@mui/material';
import parser from 'html-react-parser';

const SingleEventPage = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery({
    queryKey: ['event-single'],
    queryFn: () => axiosReq.get(`/event/${id}`).then(res => res.data)
  });
  return (
    <>
      <div className="event-bg-img">
        <img src='/eventlg.jpg' alt="" />
      </div>
      <div className="event-single-page">
        {
          isLoading ? <CircularProgress sx={{m: '10rem'}}/> : error ? 'Something went wrong!' :
            !data ? <h2 style={{ padding: '15rem', color: 'gray' }}>Event Not Found!</h2> :
              <div className="event-single-page-wrapper">
                <h1>{data.title}<hr /></h1>
                <div className='info'>
                  <div className="time"><MdOutlineAccessTimeFilled /> {data.date}</div>
                </div>
                <div className="text">{parser(data.body)}</div>
                <Link to='/event' className='back-arrow'><BsArrowLeft />Back to Event</Link>
              </div>
        }
      </div>
    </>
  )
}

export default SingleEventPage