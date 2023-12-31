import './Teacher.scss';
import React from 'react'
import { FaArrowRight, FaFacebook, FaMailchimp, FaPhone } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import { GrMail } from 'react-icons/gr';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import CallIcon from '@mui/icons-material/Call';
import { motion } from 'framer-motion'


const Teacher = ({ teacher }) => {

  return (
    <motion.div
      // transition={{ duration: 1, ease: "easeOut" }}
      // initial={{ y: 200, opacity: 0 }}
      // whileInView={{ y: 0, opacity: 1 }}
      // viewport={{ once: true }}
      className="teacher">
      <div className="up">
        <img src={teacher.img || '/noavatar.png'} alt="team" />
      </div>
      <div className="down">
        <div className="name">{teacher.name}</div>
        <div className="title">{teacher.title}</div>
        <div className="arrow"><IoIosArrowDown /></div>
        <div className="social">
          <a href={`mailto: ${teacher.email}`} className='social-icon link'><EmailIcon /></a>
          <a href={`tel: ${teacher.phone}`} className='social-icon link'><CallIcon /></a>
          <a href={`https://${teacher.facebook}`} target='_blank' rel="noopener noreferrer" className='social-icon link'><FacebookIcon /></a>
        </div>
      </div>
    </motion.div>
  )
}

export default React.memo(Teacher)