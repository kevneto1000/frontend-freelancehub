import React from 'react'
import { Link } from 'react-router-dom'

function Job({ img, price, link, img2, name }) {
  return (
    <div>

      <div className="card rounded-4">
        <div className="card-body">
          <img src={img} className='card-img-top img-fluid img-job rounded-4' alt="" />
          <h4 className="card-subtitle mt-3 text-body-dark text-start text-success">$ {price}</h4>
          <h5 className="card-subtitle mt-3 text-body-dark text-start mb-3 link"><Link>{link}</Link></h5>
          <hr />
          <div className='d-flex gap-3'>
            <img src={img2} className='profile_img' alt="" />
            <p className='fw-bolder mt-2'>{name}</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Job