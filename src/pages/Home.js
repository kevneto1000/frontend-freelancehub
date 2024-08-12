import React from 'react'
import Navbar from "../components/Navbar";
import { BiSearchAlt } from "react-icons/bi"
import { MdSwitchAccount } from "react-icons/md"
import { MdOutlineContentPasteSearch } from "react-icons/md"
import { TbWorldDownload } from "react-icons/tb"
import { Link } from 'react-router-dom'
import CategoryCard from '../components/CategoryCard'

function Home() {
  return (

    <div>
      <Navbar/>
      <div className="container">
        {/* banner */}
        <div className="row">
          <div className="col-md-6">
            <div className="p-5 mb-4 rounded-3">
              <div className="container-fluid py-5 intro">
                <h1 className="display-5 fw-bold text-start">Are you looking for Freelancers?</h1>
                <p className="col-md-8 fs-4 my-4 text-start">
                  Hire Great Freelancers. Freelance Hub helps you hire elite freelancers at a moment's notice.
                </p>
                <div className='d-md-flex gap-3 position-relative'>
                  <Link to={"/freelance"} className="btn btn-info btn-lg" type="button">
                    Hire a freelancer
                  </Link>
                  <form className='search' action="">
                    <input type="text" className='form-control py-3 px-5 w-100' placeholder='search freelance work' />
                  </form>
                  <Link to='/freelance'>
                    <BiSearchAlt className="icon-search" size={25} />
                  </Link>
                </div>
              </div>
            </div>

          </div>

          <div className="col-md-6 d-md-block d-none">
            <img className='im-fluid' src={("./../../Working remotely.png")} alt="" />
          </div>
        </div>

        {/* main */}
        <div className="card-group mt-5 p-5">
          <div className="card m-auto py-5">
            <MdSwitchAccount className='icon' />
            <div className="card-body">
              <h5 className="card-title">Create Account</h5>
              <p className="card-text">First you have to create an account here</p>
            </div>
          </div>

          <div className="card m-auto py-5">
            <MdOutlineContentPasteSearch className='icon' />
            <div className="card-body">
              <h5 className="card-title">Search Work</h5>
              <p className="card-text">Search the best freelance work here</p>
            </div>
          </div>

          <div className="card m-auto py-5">
            <TbWorldDownload className='icon' />
            <div className="card-body">
              <h5 className="card-title">Save and apply</h5>
              <p className="card-text">Apply or save and start your work</p>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-6 group">
            <img src={("./../../Group 13.png")} alt="" />
          </div>

          <div className="col-md-6 mt-5">
            <div className="p-4 mb-4 rounded-3 jumbotron-end">
              <div className="container-fluid py-5">
                <h1 className="display-4 fw-bold text-end">Find the Best <span>Freelancers</span> Here</h1>
                <p className="fs-5 text-end text-body-tertiary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati esse totam alias voluptatibus. Totam illum qui soluta unde, veritatis incidunt!
                </p>
              </div>
            </div>


          </div>
        </div>

        {/* categories */}
        <div className="row mt-5">
          <h3 className='text-center fw-bold mt-5 display-5'>Browse Different <span>Category</span></h3>

          <CategoryCard
            img={("./../../IT dev.webp")}
            title={"Programming & Tech"}
          />

          <CategoryCard
            img={("./../../Sales Marketing.jpeg")}
            title={"Sales & Marketing"}
          />

          <CategoryCard
            img={("./../../writing.jpg")}
            title={"Writing & Translation"}
          />

          <CategoryCard
            img={("./../../graphic design.avif")}
            title={"Graphic Design"}
          />

          <CategoryCard
            img={("./../../video editing.png")}
            title={"Video Editing"}
          />

          <CategoryCard
            img={("./../../virtual assistant.jpg")}
            title={"Virtual Assistant"}
          />

          <CategoryCard
            img={("./../../admin.jpg")}
            title={"Admin & Customer Support"}
          />

          <div className="col-md-3 mb-lg-4">
            <button className='btn btn-info category-btn'>More Categories</button>
          </div>


        </div>
      </div>
    </div>

  )
}

export default Home