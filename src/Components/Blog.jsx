import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Blog.css';  

    function blog() {
      useEffect(() => {
        // alert('sucefull login')
      }, [])
      
  return (
   <div> 
     {/* <a href="blogcontent"> i am a blog </a> */}
     <a href='blogcontent'> <div className='bgcard'>
      <h1>Title:</h1>
      <h1>Subject:</h1>
     </div></a>
     
     <a href='blogcontent'><div className='bgcard'>
      <h1>Title:</h1>
      <h1>Subject:</h1>
     </div> </a>
     <br/>
     <a href='blogcontent'><div className='bgcard'>
      <h1>Title:</h1>
      <h1>Subject:</h1>
     </div> </a>
     
     <a href='blogcontent'><div className='bgcard'>
      <h1>Title:</h1>
      <h1>Subject:</h1>
     </div></a>
     <br/>
    </div>
  )
}

export default blog
