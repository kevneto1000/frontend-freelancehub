import React from 'react'
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav
            className="navbar navbar-expand-sm navbar-light bg-light container-fluid"
        >
            <div className="container-fluid">
                <Link to={"/"} className="navbar-brand"><img className='logo' src={("./../../freelance_logo-removebg-preview (1).png")} alt="" /></Link>
                <button
                    className="navbar-toggler d-lg-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId"
                    aria-controls="collapsibleNavId"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav m-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link to={"/work"} className="nav-link">Find Work</Link>
                        </li>
                        <li className="nav-item">
                           <Link to={"/freelance"} className='nav-link'>Find Freelancers</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/login"} className="nav-link">Log In</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/signup"} className="nav-link">Sign Up</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/message"} className="nav-link">Messages</Link>
                        </li>
                    </ul>
                    <form className="d-flex my-2 my-lg-0">
                        <Link to={"/post"}
                            className="btn btn-outline-info rounded-3 px-3 my-2 my-sm-0"
                            type="submit"
                        >
                            Post a project
                        </Link>
                    </form>
                </div>
            </div>
        </nav>

    )
}

export default Navbar