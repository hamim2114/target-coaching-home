import './BlogPage.scss';
import { blogData } from '../../components/blogs/Blogs'
import Blog from '../../components/blog/Blog'
import { BsArrowRight } from 'react-icons/bs'

const BlogPage = () => {
  return (
    <div className="blog-page">
      <div className="blog-page-wrapper">
        <h1>From Our <span>Blog</span></h1>
        <p>Application programming interface voice-over (vo) instructor led training br curation, user created content</p>
        <div className="blog-data">
          {blogData.map((blog, index) => (
            <Blog blog={blog} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogPage