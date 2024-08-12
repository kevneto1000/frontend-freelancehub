import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlinePermIdentity } from "react-icons/md";

function Profile() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5">
            <div className="card mt-5">
              <div className='position-relative'>
                <img src={("./../../ai-art-gamer-computer-pc-gaming-hd-wallpaper-preview.jpg")} className="card-img-top" alt="..." />
                <img src={("./../../virtual assistant.jpg")} className='profile-image' alt="" />
              </div>
              <div className="card-body mt-5">
                <h4>Kevin Nduka</h4>
                <h5 className='fw-light text-start'>Full stack Developer</h5>
                <p className='text-secondary text-start'>Lagos, Lagos State, Nigeria</p>
                <Link type="button" className="btn btn-outline-info">Send Message</Link>
                <hr />

                <div className="d-flex justify-content-between">
                  <div className='d-flex gap-3'>
                    <FaLocationDot className='mt-1' />
                    <p className='fw-bold'> From </p>
                  </div>
                  <div>
                    <p>Nigeria</p>
                  </div>
                </div>
                
                <div className="d-flex justify-content-between">
                  <div className='d-flex gap-3'>
                    <MdOutlinePermIdentity className='mt-1' />
                    <p className='fw-bold'> Member since </p>
                  </div>
                  <div>
                    <p>August 12</p>
                  </div>
                </div>
                <hr />

                <div>
                  <h5 className='text-start'>Description</h5>
                  <p className='text-start mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed ullam quam reprehenderit expedita, ea, quia odio, quod distinctio corporis mollitia ratione placeat dolorum amet dolores. Magnam repellat non, aperiam nisi sit at nostrum quo reprehenderit? Magnam tenetur similique vitae quisquam qui. Asperiores hic, eius aliquam aspernatur et beatae? Quaerat, tempora.</p>
                </div>
                <hr />

                <div>
                  <h5 className='text-start'>Experience</h5>
                </div>


              </div>
            </div>
          </div>

          <div className="col-md-6">

          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile