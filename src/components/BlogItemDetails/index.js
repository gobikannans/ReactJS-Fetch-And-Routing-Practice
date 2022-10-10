import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {isLoading: true, blogsDetails: []}

  componentDidMount() {
    this.getDataDetails()
  }

  getDataDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const updatedData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      author: data.author,
      avatarUrl: data.avatar_url,
      topic: data.topic,
      content: data.content,
    }
    console.log(updatedData)

    this.setState({blogsDetails: updatedData, isLoading: false})
  }

  render() {
    const {blogsDetails, isLoading} = this.state
    const {title, imageUrl, content, author, avatarUrl} = blogsDetails

    return (
      <div className="blog-details-container">
        {isLoading ? (
          <div>
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div>
            <h1 className="title-detail">{title}</h1>
            <div className="author-details">
              <img src={avatarUrl} className="avatar-img" alt={author} />
              <p className="author-name">{author}</p>
            </div>
            <img src={imageUrl} className="blog-img" alt={title} />
            <p className="content">{content}</p>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
