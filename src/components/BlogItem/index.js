import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  const {id, title, author, imageUrl, avatarUrl, topic} = blogItem

  return (
    <Link to={`/blogs/${id}`} className="link">
      <div className="list-container">
        <img src={imageUrl} alt={id} className="img" />
        <div className="details-container">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="author-container">
            <img src={avatarUrl} alt={id} className="author-img" />
            <p className="author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
