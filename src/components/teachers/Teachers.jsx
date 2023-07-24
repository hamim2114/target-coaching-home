import './Teachers.scss'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import Teacher from '../teacher/Teacher';
import { Link } from 'react-router-dom';
import { axiosReq } from '../../utils/axiosReq';
import { useQuery } from '@tanstack/react-query';
import { CircularProgress } from '@mui/material';
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
          <h1>Our <span>Teachers</span> </h1>
          <p>Application programming interface voice-over (vo) instructor led training br curation, user created content</p>
        </div>
        <div className="bottom">
          <div className="teacher-sec">
            {
              isLoading ? <CircularProgress sx={{ margin: '2rem auto' }} /> : error ? 'Something went wrong!' :
                teachers.length === 0 ? <h2 style={{ padding: '5rem', color: 'gray' }}>Teachers Empty.</h2> :
                  teachers.slice(0, 4).map((teacher, index) => (
                    <Teacher key={index} teacher={teacher} />
                  ))
            }
          </div>
          <div className='btn'>
            <Link to='/teachers' className='more-btn'>All Teachers</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Teachers;