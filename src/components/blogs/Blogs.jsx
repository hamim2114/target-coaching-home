import './Blogs.scss'
import React from 'react'
import Blog from '../blog/Blog'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { CircularProgress } from '@mui/material'
import { axiosReq } from '../../utils/axiosReq';
import { motion } from 'framer-motion';

const Blogs = () => {
  const { isLoading, error, data: blogData } = useQuery({
    queryKey: ['blog'],
    queryFn: () => axiosReq.get('/blog').then(res => res.data)
  });
  return (
    <div className="blog-sec">
      <motion.h1
        transition={{ duration: 1, ease: "easeOut" }}
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >From Our <span>Blog</span></motion.h1>
      <motion.p
        transition={{ duration: 1, ease: "easeOut", delay: .5 }}
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >Application programming interface voice-over (vo) instructor led training br curation, user created content</motion.p>
      <div className="blog-data">
        {
          isLoading ? <CircularProgress /> : error ? 'Something went wrong!' :
            blogData.length === 0 ? <h2 style={{ padding: '5rem', color: 'gray' }}>Blog Empty.</h2> :
              blogData.slice(0, 3).map((blog, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 200, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut", delay: index * 0.4 }}
                  viewport={{ once: true }}
                >
                  <Blog blog={blog} key={index} />
                </motion.div>
              ))}
      </div>
      <Link to='/blog' className="more-blog-btn link">More Blog<BsArrowRight /> </Link>
    </div>
  )
}

export default Blogs;