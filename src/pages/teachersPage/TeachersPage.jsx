import './TeachersPage.scss';
import { useQuery } from '@tanstack/react-query'
import Teacher from '../../components/teacher/Teacher'
import { tData } from '../../components/teachers/Teachers'
import { axiosReq } from '../../utils/axiosReq';

const TeachersPage = () => {
  const { isLoading, error, data: team } = useQuery({
    queryKey: ['team'],
    queryFn: () => axiosReq.get('/team').then(res => res.data)
  });
  
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
              isLoading ? 'Loading..' : error ? 'Something went wrong!' :
              team.length === 0 ? <h2 style={{ padding: '5rem', color: 'gray' }}>Teacher Empty.</h2> :
              team.map((teacher, index) => (
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