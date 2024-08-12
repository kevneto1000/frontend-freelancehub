import React from 'react'
import axios from "axios"
import {useNavigate} from 'react-router-dom'

function Signup() {

    let navigate = useNavigate()

    function handleSignup(e) {
        e.preventDefault()
        let form = new FormData(e.currentTarget)

        axios.post("http://localhost:8000/signup/", form)
        .then((response) => {
            alert("account created successfully")

            navigate("/")

        })
        .catch((error) => {
            for(let key in error.response.data){
                alert(`${key} ${error.response.data[key]}`);
            }
        })
    
    }

  return (
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-7">
                <img src={("./../../signup-img-removebg-preview.png")} className='img-fluid' alt="" />
            </div>

            <div className="col-md-5">
                <form onSubmit={handleSignup}>
                    <h2 className="text-center mt-5">Sign Up</h2>
                    <div className="form-group mt-3">
                        <label for="first_name">First Name</label>
                        <input name="first_name" className="form-control" required />
                    </div>
                    <div className="form-group mt-3">
                        <label for="last_name">Last Name</label>
                        <input name="last_name" className="form-control" required />
                    </div>
                    <div className="form-group mt-3">
                        <label for="email">Email</label>
                        <input name="email" className="form-control" id="email" aria-describedby="emailHelp" required />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group mt-3">
                        <label for="password">Password</label>
                        <input name="password" className="form-control" id="password" required />
                    </div>
                    <div className="form-group mt-3">
                        <label for="confirmPassword">Confirm Password</label>
                        <input name="password" className="form-control" id="confirmPassword" required />
                    </div>
                    <div className="form-group mt-3">
                        <label for="skill">Skill</label>
                        <input name="skill" className="form-control" />
                    </div>
                    <div className="form-group mt-3">
                        <label>Profile picture needed</label>
                        <input name="photo" type='file' />
                    </div>
                    <div className="form-group mt-3">
                        <label className='fw-bold'>Gender</label> <br />
                        Male <input name='male' type='checkbox' /> <br />
                        Female <input name='female' type='checkbox' />
                    </div>
                    <div className="form-group mt-3">
                        <label className='fw-bold'>DOB</label>
                        <input name="age" type='date' required />
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">SIGN UP</button> 
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup