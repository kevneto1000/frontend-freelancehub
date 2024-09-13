import React from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

function Job() {

    const navigate = useNavigate()

    const handleJob = (e) => {
        e.preventDefault()


        let form = new FormData(e.currentTarget);

        axios.post(`http://localhost:8000/job/${id}`, form)
            .then((response) => {
                console.log(response.data)
                navigate("/")
            })
            .catch((error) => {
                console.log(error.response.data)
            })


    }



    return (
        <div>
            <img className='logo mt-3' src={("./../../freelance_logo-removebg-preview (1).png")} alt="logo" />
            <div className="container-job">
                <div className="content text-center">
                    <h2>Are you hiring or a freelancer? </h2>
                    <form onSubmit={handleJob}>
                        <div className='mt-3 d-flex gap-3 ms-5'>
                            <input type="checkbox" />
                            <label forr="job" name="job" id='job' className='mb-1'>I'm hiring</label>

                            <input type="checkbox" />
                            <label forr="job" name="job" id='job' className='mb-1'>I'm a freelancer</label>
                        </div>

                        <button className='btn btn-info px-3 mt-4' type='submit'>CONTINUE</button>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default Job
