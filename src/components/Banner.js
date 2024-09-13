import React from 'react'
import { Link } from 'react-router-dom'
import "./banner.css"

function Banner({ text, img, link }) {
  return (
    <div>
      <div style={{ backgroundImage: `url(${img})` }} className='banner'>
        <h2 className='display-6 text-start text-light fw-bold pt-5 ms-5'>{text}</h2>
        <em className='text-start text-light'><Link to={"/"} className='text-info ms-5'>Home</Link> / {link}</em>
      </div>
    </div>
  )
}

export default Banner