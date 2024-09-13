import React from 'react'
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa6";

function Profile({img, name, rate, review}) {
    return (
        <div className="card">
            <div className="card-body card-profile m-auto">
                <img src={img} className='img-fluid card_profile_img' alt="" />
                <h5 className="card-subtitle mt-3 text-body-dark text-center">{name}</h5>
                <p className="card-text text-center mt-2"> <FaStar className='mb-1' /> {rate} <span>({review} reviews)</span></p>
                <Link className="btn btn-info card-link d-flex justify-content-center rounded-5 mt-2">View Profile</Link>
            </div>
        </div>
    )
}

export default Profile