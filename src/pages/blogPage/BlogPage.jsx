import './BlogPage.scss';
import Blog from '../../components/blog/Blog'
import CircularProgress from '@mui/material/CircularProgress';
import { useQuery } from '@tanstack/react-query'
import { axiosReq } from '../../utils/axiosReq';

const BlogPage = () => {
  const { isLoading, error, data: blogData } = useQuery({
    queryKey: ['blog'],
    queryFn: () => axiosReq.get('/blog').then(res => res.data)
  });

  return (
    <div className="blog-page">
      <div className="blog-page-wrapper">
        <h1>Our <span>Blog</span></h1>
        <p>Application programming interface voice-over (vo) instructor led training br curation, user created content</p>
        <div className="blog-data">
          {
          isLoading ? <CircularProgress /> : error ? 'Something went wrong!' :
          blogData.length === 0 ? <h2 style={{ padding: '5rem', color: 'gray' }}>Blog Empty.</h2> :
          blogData.map((blog, index) => (
            <Blog blog={blog} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogPage