import { BsArrowRight } from 'react-icons/bs'
import './Blog.scss';
import { Link } from 'react-router-dom';
import parser from 'html-react-parser';

const Blog = ({ blog }) => {

  return (
    <Link to={`/blog/${blog._id}`} className="blog">
      <div className="blog-img">
        <img src={blog.img || '/defaultBlog.jpg'} alt="" />
      </div>
      <div className="title">{blog.title.substring(0, 70)} {blog.title.length > 70 ? '...' : '' }</div>
      <div className="desc">{parser(blog.body.substring(0, 190))}</div>
      <div className="info">
        <div className="info-group">
          <div className="img"><img src="/noavatar.png" alt="" /></div>
          <div className="name">Admin</div>
        </div>
        <button className="more-btn link">read more<BsArrowRight /> </button>
      </div>
    </Link>
  )
}

export default Blog