import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Job from '../components/Job'
import axios from 'axios'

function Work() {

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
                text="Find the work that suites you..."
                img={("./../../breadcrumb-bg.png")}
                link="Services"
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
                        <Job
                            img={("./../../sneakers.png")}
                            price="95.00"
                            link="Sneakers Shoes Illustration Vector Design"
                            img2={("./../../avatar.jpeg")}
                            name="Jane Doe"
                        />
                    </div>

                    <div className="col-md-3 mt-5">
                        <Job
                            img={("./../../piano.png")}
                            price="55.00"
                            link="Piano App Layout Design and Development"
                            img2={("./../../avatar.jpeg")}
                            name="Jane Doe"
                        />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Work