import { BsArrowRight } from 'react-icons/bs'
import './Blog.scss';

const Blog = ({ blog }) => {

  return (
    <div className="blog">
      <div className="blog-img">
        <img src={blog.img} alt="" />
      </div>
      <div className="title">{blog.title.substring(0, 70)} {blog.title.length > 70 ? '...' : '' }</div>
      <div className="desc">{blog.desc.substring(0, 130)} ...</div>
      <div className="info">
        <div className="info-group">
          <div className="img"><img src="/noavatar.png" alt="" /></div>
          <div className="name">Admin</div>
        </div>
        <button className="more-btn link">read more<BsArrowRight /> </button>
      </div>
    </div>
  )
}

export default Blog