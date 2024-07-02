import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

function Blog() {
  const [blogs, setBlogs] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch('http://localhost:4000/getblogs');

      const data = await res.json();
      setBlogs(data.blogs);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      {blogs.length > 0 ? (
        blogs.map(blog => (
          <div className="blog-card" key={blog._id}>
            <Link to={`/blog/${blog._id}`} className="blog-link">
              <h1 className="blog-title">Title: {blog.title}</h1>
              <h2 className="blog-subject">Subject: {blog.subject}</h2>
            </Link>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Blog;
