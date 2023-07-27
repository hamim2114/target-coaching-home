import { Link, useParams } from 'react-router-dom';
import './SingleBlogPage.scss';
import { MdOutlineAccessTimeFilled } from 'react-icons/md'
import { BsArrowLeft } from 'react-icons/bs'
import { useQuery } from '@tanstack/react-query';
import { axiosReq } from '../../utils/axiosReq';
import { CircularProgress } from '@mui/material';
import parse from 'html-react-parser';

const SingleBlogPage = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery({
    queryKey: ['blog-single'],
    queryFn: () => axiosReq.get(`/blog/${id}`).then(res => res.data)
  });

  const formattedDate = new Date(data?.createdAt).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <>
      <div className="blog-bg-img">
        <img src='/blogbg.jpg' alt="" />
      </div>
      {
        isLoading ? <CircularProgress sx={{ m: '10rem' }} /> : error ? 'Something went wrong!' :
          !data ? <h2 style={{ padding: '15rem', color: 'gray' }}>Blog Not Found!</h2> :
            <div className="blog-single">
              <div className="wrapper">
                <h1>{data.title}<hr /></h1>
                <div className='info'>
                  <div className="time"><MdOutlineAccessTimeFilled /> {formattedDate}</div>
                </div>
                <div className="text">{parse(data.body)}</div>
                <Link to='/blog' className='back-arrow'><BsArrowLeft />Back to Blogs</Link>
              </div>
            </div>
      }
    </>
  )
}

export default SingleBlogPage;