import { Link, useParams } from 'react-router-dom';
import './SingleCoursePage.scss';
import { MdOutlineAccessTimeFilled } from 'react-icons/md'
import { BsArrowLeft } from 'react-icons/bs'
import { axiosReq } from '../../utils/axiosReq';
import { useQuery } from '@tanstack/react-query';
import parse from 'html-react-parser';
import { CircularProgress } from '@mui/material';

const SingleCoursePage = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery({
    queryKey: ['course-single'],
    queryFn: () => axiosReq.get(`/course/${id}`).then(res => res.data)
  });

  const formattedDate = new Date(data?.createdAt).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return (
    <>
      <div className="course-bg-img">
        <img src='/coursebg.jpg' alt="" />
      </div>
      {
         isLoading ? <CircularProgress /> : error ? 'Something went wrong!' :
         !data ? <h2 style={{ padding: '35rem', color: 'gray' }}>Course Empty.</h2> :
        <div className="course-single">
        <div className="wrapper">
          <h1>{data.class} <hr /></h1>
          <div className='info'>
            <div className="time"><MdOutlineAccessTimeFilled />{formattedDate}</div>
          </div>
          <div className="text">{parse(data.desc)}</div>
          <Link to='/course' className='back-arrow'><BsArrowLeft />Back to Course</Link>
        </div>
      </div>
      }
    </>

  )
}

export default SingleCoursePage