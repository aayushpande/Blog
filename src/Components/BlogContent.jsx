import React from 'react'
import './BlogContent.css';  

function BlogContent() {
  return (
    <div className='cncard'>
      <h1>TITLE</h1>
      <input type="title" placeholder='TITLE'/>
      <h1>SUBJECT</h1>
      <input type="subject" placeholder='SUBJECT'/>
      <h1>CONTENT</h1>
      <input type="content" placeholder='YOUR CONTENT'/>
      <div><br/>
      <button >SUBMIT</button>
      </div>
    </div>
  )
}

export default BlogContent
