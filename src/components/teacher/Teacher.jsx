import './Teacher.scss';
import { FaArrowRight,FaFacebook,  FaMailchimp, FaPhone } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import {IoIosArrowDown} from 'react-icons/io';
import {GrMail} from 'react-icons/gr';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import CallIcon from '@mui/icons-material/Call';


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
          <a to={`mailto:`} className='social-icon link'><EmailIcon/></a>
          <a href={``} target='_blank' rel="noopener noreferrer" className='social-icon link'><FacebookIcon/></a>
          <a to={`tel:`} className='social-icon link'><CallIcon/></a>
        </div>
      </div>
    </div>
  )
}

export default Teacher