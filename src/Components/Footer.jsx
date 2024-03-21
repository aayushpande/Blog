import React from 'react'
import './Footer.css';

export default function Footer() {
    const year = new Date().getFullYear();
    console.log()
  return (
    <div>
      <footer className='footer'>{`Copyright © Upbeat Code ${year}`}
     <div/> <h7>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eius consectetur maiores molestias sed placeat eos quasi natus rerum, quos est quod veritatis sint. Explicabo praesentium magni minus ducimus quia.</h7>
      </footer>
    </div>
  )
}
