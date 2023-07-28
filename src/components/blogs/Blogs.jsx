import './Blogs.scss'
import React from 'react'
import Blog from '../blog/Blog'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { CircularProgress } from '@mui/material'
import { axiosReq } from '../../utils/axiosReq';

const Blogs = () => {
  const { isLoading, error, data: blogData } = useQuery({
    queryKey: ['blog'],
    queryFn: () => axiosReq.get('/blog').then(res => res.data)
  });
  return (
    <div className="blog-sec">
      <h1

      >From Our <span>Blog</span></h1>
      <p

      >Application programming interface voice-over (vo) instructor led training br curation, user created content</p>
      <div className="blog-data">
        {
          isLoading ? <CircularProgress /> : error ? 'Something went wrong!' :
            blogData.length === 0 ? <h2 style={{ padding: '5rem', color: 'gray' }}>Blog Empty.</h2> :
              blogData.slice(0, 3).map((blog, index) => (
                <Blog blog={blog} key={index} />
              ))}
      </div>
      <Link to='/blog' className="more-blog-btn link">More Blog<BsArrowRight /> </Link>
    </div>
  )
}

export default Blogs;