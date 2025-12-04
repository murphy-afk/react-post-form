import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

const initialFormData = {
  author: '',
  title: '',
  content: ''
  // to be added: public 
}

function App() {
  const [formData, setFormData] = useState(initialFormData);

  function updateForm(event) {
    const key = event.target.name;
    const newPostData = {
      ...formData,
      [key]: event.target.value
    };
    setFormData(newPostData);
  }

  return (
    <>
      <h1>Add a blog post</h1>
      <div className="container">
        <form action="submit">
          <label htmlFor="author" className='form-label'>Author</label>
          <input
            type="text"
            name='author'
            id='author'
            className='form-control'
            value={formData.name}
            onChange={updateForm} />
          {/* <label htmlFor="title" className='form-label'>Title</label>
          <input 
          type="text" 
          name='title' 
          id='title' 
          className='form-control' 
          value={formData.title}/>
          <label htmlFor="content" className='form-label'>Content</label>
          <textarea name="content" id="content" className='form-control'></textarea>
          <button className='btn btn-primary'>Submit</button> */}
        </form>
      </div>
    </>
  )
}

export default App
