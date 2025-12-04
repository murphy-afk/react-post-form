import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import Input from './components/Input';

const initialFormData = {
  author: '',
  title: '',
  content: '',
  status: 'public'
}

function App() {
  const [formData, setFormData] = useState(initialFormData);
  const [posts, setPosts] = useState([])

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
    setPosts((current) => [formData, ...current]);
    setFormData(initialFormData)
  }

  return (
    <>
      <h1>Add a blog post</h1>
      <div className="container">
        <form action="submit" onSubmit={handleSubmit}>
          <Input className="test1 test2 test3" test={'valore1'} id='author' inputType='text' label='Author' labelClass='form-label' inputClass='form-control' title='author' value={formData.author} onChange={updateForm} />
          <Input id='title' inputType='text' label='Title' labelClass='form-label' inputClass='form-control' title='title' value={formData.title} onChange={updateForm} />
          <Input id='content' inputType='text' label='Content' labelClass='form-label' inputClass='form-control' title='content' value={formData.content} onChange={updateForm} />
          <div className="form-check">
            <Input id='public' inputType='radio' label='Public' labelClass='form-check-label' inputClass='form-check-input' title='status' value='public' checked={formData.status === 'public'} onChange={updateForm} />
          </div>
          <div className="form-check">
            <Input id='draft' inputType='radio' label='Draft' labelClass='form-check-label' inputClass='form-check-input' title='status' value='draft' checked={formData.status === 'draft'} onChange={updateForm} />
          </div>
          <button className='btn btn-primary mt-3'>Submit</button>
        </form>
        <h2 className='pt-4'>{posts.length > 0 ? 'Posts:' : ''}</h2>
        {posts.length > 0 && posts.map((post, index) => (
          <div className="card" key={index}>
            <div className="card-body">
              <span className='card-title fw-bold pb-1 pe-2 fs-3'>{post.title}</span>
              <span
                className={`badge ${post.status === 'public' ? 'text-bg-success' : 'text-bg-warning'}`}>
                {post.status === 'public' ? 'Public' : 'Draft'}</span>
              <p className='card-subtitle mb-2 text-body-secondary'>{post.author}</p>
              <p className='card-text'>{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default App