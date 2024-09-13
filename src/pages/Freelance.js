import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import axios from 'axios';
import Profile from '../components/Profile'




function Freelance() {

  const [position, setposition] = useState(null)

  useEffect(() => {

    axios.get("http://localhost:8000/allpositions/")
      .then((response) => setposition(response.data))
      .catch((error) => console.log(error))

  }, [])

  return (
    <div>
      <Navbar />
      <Banner
        text="Find the best freelancers here!"
        img={("./../../breadcrumb-bg.png")}
        link="Freelancers"
      />

      <div className="container mt-5">
        <div className="row">
          <div className="dropdown col-md-12">
            <button className="btn btn-light dropdown-toggle p-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              All Categories
            </button>
            <ul className="dropdown-menu p-3">
              <li><Link className='my-2'>{
                position?.map((position) => (
                  <option key={position?.id} value={position?.id}>{position?.name}</option>
                ))
              }</Link></li>
            </ul>
          </div>

          <div className="col-md-3 mt-5">
            <Profile
              name="Jane Doe"
              img={("./../../avatar.jpeg")}
              rate="4.3"
              review="5"
            />
          </div>

          <div className="col-md-3 mt-5">
            <Profile
              name="Sarah Green"
              img={("./../../admin.jpg")}
              rate="4.5"
              review="10"
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Freelance
