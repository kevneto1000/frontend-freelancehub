import React from 'react'

function CategoryCard({img, title}) {
  return (
    <div className="col-md-3 mt-4">
    <div className="card mt-5 card-category">
      <img src={img} className="card-image" alt=""/>
        <div className="card-footer">
          <h5 className="card-title fw-bolder text-center">{title}</h5>
        </div>
    </div>
  </div>
  )
}

export default CategoryCard