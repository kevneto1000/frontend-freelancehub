import React from 'react'
import { Link } from "react-router-dom"

function Notfound() {
  return (
    <div className="container my-5">
        <div className="col-md-12">
            <img src={("./../../error-404-page-not-available.webp")} className='notfound-img' alt="" />
            <h1 className='text-center'>Sorry! Page not found</h1>
            <p>Unfortunately, the page you are looking for does not exist or has been deleted</p>
            <Link to={"/"} className="btn btn-info text-light" id="homeBtn"> Back to Homepage </Link>
        </div>
    </div>
  )
}

export default Notfound