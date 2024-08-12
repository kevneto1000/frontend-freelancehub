import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {login as updateLogin} from '../redux/slices/Userslice'
import axios from "axios"

function Login() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleLogin(e) {
        e.preventDefault()
        let form = new FormData(e.currentTarget)

        
      
        axios.post("http://localhost:8000/login/", form)
        .then((response) => {
            dispatch(updateLogin({
                id:response.data
            }))

            navigate("/")

        })

        .catch((error) => {
            for(let key in error.response.data){
                alert(`${key} ${error.response.data[key]}`);
            }

            // console.log(error)
        })

    }

  return (
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-5">
                <form onSubmit={handleLogin}>
                    <h3 className="text-center">Login</h3>
                    <div className="form-group mt-3">
                        <input name='email' type="email" className="form-control py-3" placeholder="Email" required/>
                    </div>
                    <div className="form-group my-3">
                        <input name='password' type="password" className="form-control py-3" placeholder="Password" required/>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">LOGIN</button> 
                    <p className="text-center">Don't have an account? <Link to="/signup">Register</Link></p>
                </form>
            </div>

            <div className="col-md-7">
                <img src={("./../../login-img-removebg-preview.png")} className='img-fluid' alt="" />
            </div>
        </div>
    </div>
  )
}

export default Login
