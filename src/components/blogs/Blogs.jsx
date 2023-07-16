import './Blogs.scss'
import Blog from '../blog/Blog'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export const blogData = [
  {
    img: '/blog1.png',
    title: 'A Guide to Setting and Achieving Your Goals',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, itaque? Corporis consequatur, ex consequuntur nisi quas inventore dolorum, illum quisquam quis minima aliquid. Earum illum cupiditate tenetur soluta temporibus inventore, quod blanditiis quasi, eveniet doloribus consequuntur recusandae. Magni sit amet asperiores corporis impedit veritatis assumenda iure quos quae? Repellendus, excepturi?',
    teacherImg: '/noavatar.png',
    teacher: 'Hafiz',
    date: 'Nov 11 2023'
  },
  {
    img: '/blog2.png',
    title: 'How to Improve Your Communication Skills in the Workplace',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, itaque? Corporis consequatur, ex consequuntur nisi quas inventore dolorum, illum quisquam quis minima aliquid. Earum illum cupiditate tenetur soluta temporibus inventore, quod blanditiis quasi, eveniet doloribus consequuntur recusandae. Magni sit amet asperiores corporis impedit veritatis assumenda iure quos quae? Repellendus, excepturi?',
    teacherImg: '/noavatar.png',
    teacher: 'Hafiz',
    date: 'Nov 11 2023'
  },
  {
    img: '/blog3.png',
    title: '10 Tips for Effective Time Management.',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, itaque? Corporis consequatur, ex consequuntur nisi quas inventore dolorum, illum quisquam quis minima aliquid. Earum illum cupiditate tenetur soluta temporibus inventore, quod blanditiis quasi, eveniet doloribus consequuntur recusandae. Magni sit amet asperiores corporis impedit veritatis assumenda iure quos quae? Repellendus, excepturi?',
    teacherImg: '/noavatar.png',
    teacher: 'Hafiz',
    date: 'Nov 11 2023'
  },
  {
    img: '/blog3.png',
    title: '10 Tips for Effective Time Management.',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, itaque? Corporis consequatur, ex consequuntur nisi quas inventore dolorum, illum quisquam quis minima aliquid. Earum illum cupiditate tenetur soluta temporibus inventore, quod blanditiis quasi, eveniet doloribus consequuntur recusandae. Magni sit amet asperiores corporis impedit veritatis assumenda iure quos quae? Repellendus, excepturi?',
    teacherImg: '/noavatar.png',
    teacher: 'Hafiz',
    date: 'Nov 11 2023'
  },
  {
    img: '/blog3.png',
    title: '10 Tips for Effective Time Management.',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, itaque? Corporis consequatur, ex consequuntur nisi quas inventore dolorum, illum quisquam quis minima aliquid. Earum illum cupiditate tenetur soluta temporibus inventore, quod blanditiis quasi, eveniet doloribus consequuntur recusandae. Magni sit amet asperiores corporis impedit veritatis assumenda iure quos quae? Repellendus, excepturi?',
    teacherImg: '/noavatar.png',
    teacher: 'Hafiz',
    date: 'Nov 11 2023'
  },
  {
    img: '/blog3.png',
    title: '10 Tips for Effective Time Management.',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, itaque? Corporis consequatur, ex consequuntur nisi quas inventore dolorum, illum quisquam quis minima aliquid. Earum illum cupiditate tenetur soluta temporibus inventore, quod blanditiis quasi, eveniet doloribus consequuntur recusandae. Magni sit amet asperiores corporis impedit veritatis assumenda iure quos quae? Repellendus, excepturi?',
    teacherImg: '/noavatar.png',
    teacher: 'Hafiz',
    date: 'Nov 11 2023'
  },
]
const Blogs = () => {
  return (
    <div className="blog-sec">
    <h1>From Our <span>Blog</span></h1>
    <p>Application programming interface voice-over (vo) instructor led training br curation, user created content</p>
    <div className="blog-data">
      {blogData.slice(0, 3).map((blog, index) => (
        <Blog blog={blog} key={index} />
      ))}
    </div>
    <Link to='/blog' className="more-blog-btn link">More Blog<BsArrowRight /> </Link>
  </div>
  )
}

export default Blogs