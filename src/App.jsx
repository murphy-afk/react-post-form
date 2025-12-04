import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

const initialFormData = {
  author: '',
  title: '',
  content: '',
  status: 'public'
}

function App() {
  const [formData, setFormData] = useState(initialFormData);
  const [posts, setPosts] = useState('')

  function updateForm(event) {
    const key = event.target.name;
    const newPostData = {
      ...formData,
      [key]: event.target.value
    };
    setFormData(newPostData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setPosts((current) => [formData, ...current])
    console.log(posts);
  }

  return (
    <>
      <h1>Add a blog post</h1>
      <div className="container">
        <form action="submit" onSubmit={handleSubmit}>
          <label htmlFor="author" className='form-label'>Author</label>
          <input
            type="text"
            name='author'
            id='author'
            className='form-control'
            value={formData.name}
            onChange={updateForm} />
          <label htmlFor="title" className='form-label'>Title</label>
          <input
            type="text"
            name='title'
            id='title'
            className='form-control'
            value={formData.name}
            onChange={updateForm} />
          <label htmlFor="content" className='form-label'>Content</label>
          <textarea
            name="content"
            id="content"
            className='form-control'
            value={formData.name}
            onChange={updateForm}></textarea>
          <div className='form-check'>
            <label htmlFor="public" className='form-check-label'>Public</label>
            <input
              type="radio"
              name="status"
              id="public"
              className='form-check-input'
              value='public'
              checked={formData.status === 'public'}
              onChange={updateForm} />
          </div>
          <div className="form-check">
            <label htmlFor="draft" className='form-check-label'>Draft</label>
            <input
              type="radio"
              name="status"
              id="draft"
              className='form-check-input'
              value='draft'
              checked={formData.status === 'draft'}
              onChange={updateForm} />
          </div>
          <button className='btn btn-primary'>Submit</button>
        </form>
      </div>
      <h2>Posts:</h2>
      {posts.length > 0 && posts.map((post, index) => (
        <div className="card" key={index}>
          <div className="card-body">
            <span className='card-title'>{post.title}</span>
            <span
              className={`badge ${post.status === 'public' ? 'text-bg-success' : 'text-bg-warning'}`}>
              {post.status === 'public' ? 'Public' : 'Draft'}</span>
            <p className='card-subtitle mb-2 text-body-secondary'>{post.author}</p>
            <p className='card-text'>{post.content}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default App
