import React from 'react'
import "./banner.css"

function Banner({text, img}) {
  return (
    <div style= {{backgroundImage: `url(${img})`}} className='banner'>
        <h2 className='display-4 text-center fw-bolder pt-5 mt-1'>{text}</h2>
    </div>
  )
}

export default Banner