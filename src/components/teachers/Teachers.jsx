import './Teachers.scss'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import Teacher from '../teacher/Teacher';
import { Link } from 'react-router-dom';
import { axiosReq } from '../../utils/axiosReq';
import { useQuery } from '@tanstack/react-query';
import { CircularProgress } from '@mui/material';
import { motion } from 'framer-motion'
import React from 'react';


const Teachers = () => {
  const { isLoading, error, data: teachers } = useQuery({
    queryKey: ['teachers'],
    queryFn: () => axiosReq.get('/team').then(res => res.data)
  });
  return (
    <div className="teachers">
      <div className="teachers-wrapper">
        <div className="top">
          <motion.h1
            transition={{ duration: 1, ease: "easeOut" }}
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >Our <span>Teachers</span> </motion.h1>
          <motion.p
            transition={{ duration: 1, ease: "easeOut", delay: .2 }}
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >Application programming interface voice-over (vo) instructor led training br curation, user created content</motion.p>
        </div>
        <div className="bottom">
          <div className="teacher-sec"
          >
            {isLoading ? (
              <CircularProgress sx={{ margin: '2rem auto' }} />
            ) : error ? (
              'Something went wrong!'
            ) : teachers.length === 0 ? (
              <h2 style={{ padding: '5rem', color: 'gray' }}>Teachers Empty.</h2>
            ) : (
              teachers
                .slice(0, 4)
                .map((teacher, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 200, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: index * 0.4 }}
                    viewport={{ once: true }}
                  >
                    <Teacher teacher={teacher} />
                  </motion.div>
                ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Teachers;