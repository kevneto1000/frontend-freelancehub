import React from 'react'
import { Link } from 'react-router-dom'

function CategoryCard({img, title}) {
  return (
    <div className="col-md-3 mt-4">
    <div className="card mt-5 card-category">
      <img src={img} className="card-image" alt=""/>
        <div className="card-footer">
          <h5 className="card-title fw-bolder text-center"><Link>{title}</Link></h5>
        </div>
    </div>
  </div>
  )
}

export default CategoryCard