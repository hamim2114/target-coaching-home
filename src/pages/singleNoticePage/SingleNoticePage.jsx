import { Link, useParams } from 'react-router-dom';
import './SingleNoticePage.scss';
import { MdOutlineAccessTimeFilled } from 'react-icons/md'
import { BsArrowLeft } from 'react-icons/bs'
import { useQuery } from '@tanstack/react-query';
import { axiosReq } from '../../utils/axiosReq';
import { CircularProgress } from '@mui/material';
import parser from 'html-react-parser';

const SingleNoticePage = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery({
    queryKey: ['notice-single'],
    queryFn: () => axiosReq.get(`/notice/${id}`).then(res => res.data)
  });

  const formattedDate = new Date(data?.createdAt).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return (
    <div className="notice-single-page">
      {
        isLoading ? <CircularProgress sx={{ m: '15rem' }} /> : error ? 'Something went wrong!' :
          !data ? <h2 style={{ padding: '35rem', color: 'gray' }}>Notice Empty.</h2> :
            <div className="notice-single-page-wrapper">
              <div className='top-title'>{data.title}</div>
              <div className="notice-img">
                <img src={data?.img} alt="" />
              </div>
              <div className='info'>
                <div className="time"><MdOutlineAccessTimeFilled /> <b>Posted:</b> {formattedDate}</div>
              </div>
              <div className="text">{parser(data.body)}</div>
              <Link to='/notice' className='back-arrow'><BsArrowLeft />Back to Notice</Link>
            </div>
      }
    </div>
  )
}

export default SingleNoticePage