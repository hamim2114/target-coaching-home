import { useQuery } from '@tanstack/react-query';
import Course from '../../components/course/Course';
import './CoursePage.scss';
import { axiosReq } from '../../utils/axiosReq';
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const CoursePage = () => {
  const [value, setValue] = useState('All');

  const { isLoading, error, data: course, refetch } = useQuery({
    queryKey: ['course'],
    queryFn: () => {
      if (value === 'All') {
        return axiosReq.get('/course').then(res => res.data)
      } else {
        return axiosReq.get(`/course/category/${value}`).then(res => res.data)
      }
    }
  });

  useEffect(() => {
    refetch()
  }, [value])


  const handleClick = (value) => {
    setValue(value);
  };
  return (
    <div className="course-page">
      <div className="wrapper">
        <h1>Our <span>Course</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum pariatur animi in dignissimos tempora laudantium possimus qui provident corporis non?</p>
        <h3>Category</h3>
        <div className="cat">
          <button className={`btn ${value === 'All' ? 'active' : ''}`} onClick={() => handleClick('All')}>All</button>
          <button className={`btn ${value === 'Academic' ? 'active' : ''}`} onClick={() => handleClick('Academic')}>Academic</button>
          <button className={`btn ${value === 'Special' ? 'active' : ''}`} onClick={() => handleClick('Special')}>Special</button>
        </div>
        <div className="course-card">
          {
            isLoading ? <CircularProgress /> : error ? 'Something went wrong!' :
              course.length === 0 ? <h2 style={{ padding: '5rem', color: 'gray' }}>Course Empty.</h2> :
                course.map((data, i) => (
                  <Course data={data} key={i} />
                ))
          }
        </div>
      </div>
    </div>
  )
}

export default CoursePage