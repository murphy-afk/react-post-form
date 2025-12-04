import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

function App() {

  return (
    <>
    <h1>Add a blog post</h1>
    <div className="container">

    <form action="submit" onSubmit={handleSubmit}>
      <label htmlFor="author" className='form-label'>Author</label>
      <input type="text" name='author' id='author' className='form-control' />
      <label htmlFor="title" className='form-label'>Title</label>
      <input type="text" name='title' id='title' className='form-control' />
      <label htmlFor="content" className='form-label'>Content</label>
      <textarea name="content" id="content" className='form-control'></textarea>
      <button className='btn btn-primary'>Submit</button>
    </form>
    </div>
    </>
  )
}

export default App
