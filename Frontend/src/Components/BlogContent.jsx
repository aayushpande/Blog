import React, { useState } from 'react';
import './BlogContent.css';  
import { useNavigate } from 'react-router-dom';

function BlogContent() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    subject: '',
    content: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    try {
      const response = await fetch('http://localhost:3000/blog',  {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Blog submitted successfully');
        navigate('/blog');
      } else {
        console.error('Failed to submit blog');
      }
    } catch (error) {
      console.error('Error submitting blog:', error);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" value={formData.title} onChange={handleInputChange} placeholder='Title' required />
          
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleInputChange} placeholder='Subject' required />
          
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" value={formData.content} onChange={handleInputChange} placeholder='Your content' rows="10" required />
          
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default BlogContent;
