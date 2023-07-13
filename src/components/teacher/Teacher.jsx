import './Teacher.scss';
import { FaArrowRight,FaFacebook,  FaMailchimp, FaPhone } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import {IoIosArrowDown} from 'react-icons/io';
import {GrMail} from 'react-icons/gr';


const Teacher = ({teacher}) => {
  return (
    <div className="teacher">
      <div className="up">
        <img src={teacher.img} alt="team" />
      </div>
      <div className="down">
        <div className="name">{teacher.name}</div>
        <div className="title">{teacher.title}</div>
        <div className="arrow"><IoIosArrowDown/></div>
        <div className="social">
          <a to={`mailto:`} className='social-icon link'><GrMail size={21}/></a>
          <a href={``} target='_blank' rel="noopener noreferrer" className='social-icon link'><FaFacebook/></a>
          <a to={`tel:`} className='social-icon link'><FaPhone/></a>
        </div>
      </div>
    </div>
  )
}

export default Teacher