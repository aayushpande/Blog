import React from 'react';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>{`Copyright © Upbeat Code ${year}`}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eius consectetur maiores molestias sed placeat eos quasi natus rerum, quos est quod veritatis sint.</p>
      </div>
    </footer>
  );
}
