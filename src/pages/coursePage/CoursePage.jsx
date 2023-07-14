import { courseData } from '../../components/Courses/Courses';
import Course from '../../components/course/Course';
import './CoursePage.scss';

const CoursePage = () => {
  return (
    <div className="course-page">
      <div className="wrapper">
        <h1>Our <span>Course</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum pariatur animi in dignissimos tempora laudantium possimus qui provident corporis non?</p>
        <h3>Category</h3>
        <div className="cat">
          <button className='btn active'>All</button>
          <button className='btn'>Academic</button>
          <button className='btn'>Special</button>
        </div>
        <div className="course-card">
          {
            courseData.map((data,i) => (
              <Course data={data} key={i} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default CoursePage