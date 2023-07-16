import './TeachersPage.scss';
import Teacher from '../../components/teacher/Teacher'
import { tData } from '../../components/teachers/Teachers'

const TeachersPage = () => {
  return (
    <div className="teachers-page">
      <div className="teachers-page-wrapper">
        <div className="top">
          <h1>Our <span>Teachers</span> </h1>
          <p>Application programming interface voice-over (vo) instructor led training br curation, user created content</p>
        </div>
        <div className="bottom">
          <div className="teacher-sec">
            {
              tData.map((teacher, index) => (
                <Teacher key={index} teacher={teacher} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeachersPage