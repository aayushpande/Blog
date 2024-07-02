import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar'; 
import Footer from './Footer'; 
import './FullBlog.css'; 

function FullBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`http://localhost:4000/getblog/${id}`);
        const data = await res.json();
        setBlog(data);
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };
    fetchBlog();
  }, [id]);

  return (
    <div className="page-container">
      <Navbar />
      <div className="container">
        <div className="content">
          {blog ? (
            <div className="cncard">
              <h1 className="title">{blog.title}</h1>
              <h2 className="subject">{blog.subject}</h2>
              <p className="content">{blog.content}</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FullBlog;
