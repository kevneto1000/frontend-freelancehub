import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import Navbar from "../components/Navbar";
import axios from 'axios';
import { useSelector } from 'react-redux';
import { FaRegImage } from "react-icons/fa6";

function Post() {


  const fileInputRef = useRef(null);

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('Selected file:', file);
      // Handle the file upload or preview logic here
    }
  };

  const [position, setposition] = useState(null)
  const [post, setpost] = useState("")

  const [user, setuser] = useState(null)
  let id = useSelector((state) => state.user.data.id)

  useEffect(() => {

    axios.get("http://localhost:8000/allpositions/")
      .then((response) => setposition(response.data))
      .catch((error) => console.log(error))

  }, [])

  useEffect(() => {

    axios.get(`http://localhost:8000/profile/${id}`)
      .then(response => {
        setuser(response.data)
      })
      .catch(error => {
        console.log(error.response.statusText)
      })

  }, [])

  const [country, setcountry] = useState(null)
  const [states, setstates] = useState(null)
  const [cities, setcities] = useState(null)
  const [selectedcountry, setselectedcountry] = useState("")
  const [selectedstate, setselectedstate] = useState("")
  const [selectedcity, setselectedcity] = useState("")

  useEffect(() => {
    axios.get("https://countriesnow.space/api/v0.1/countries")
      .then((response) => {
        setcountry(response.data.data)
      })
      .catch(error => {
        console.log(error);
      })
  }, [])

  useEffect(() => {
    axios.post("https://countriesnow.space/api/v0.1/countries/states", { country: selectedcountry })
      .then((response) => {
        setstates(response.data.data.states)
      })
      .catch(error => {
        console.log(error);
      })
  }, [selectedcountry])


  useEffect(() => {
    axios.post("https://countriesnow.space/api/v0.1/countries/state/cities", { country: selectedcountry, state: selectedstate })
      .then((response) => {
        setcities(response.data.data)
      })
      .catch(error => {
        console.log(error);
      })
  }, [selectedstate])

  async function handlePostSubmit(e) {
    e.preventDefault()

    if (id === undefined) {
      alert("login required")
    } else {
      let data = new FormData(e.currentTarget);

      await axios.post(`http://localhost:8000/post/${id}`, data)
        .then((response) => console.log(response.data))
        .catch((error) => {
          console.log(error.response.data)
        })
    }
  }

  return (

    <div>
      <Navbar />

      <div className="container">


        <div className="row">

          <div className="post col-md-2">
            <div className="card profile-card">
              <img src={"http://localhost:8000/" + user?.photo} className='profile-img mt-3' alt="" />
              <div className='profile-title'>
                <Link to={"/profile"}><p className="card-title text-center fw-bold">Welcome, <em>{user?.first_name}</em></p></Link>
                <p className='text-center'>{user?.skill}</p>
              </div>
            </div>
          </div>

          <div className="post col-md-7">
            <div className="card p-2 py-5">
              <div className="d-flex gap-3 m-1">
                <img src={"http://localhost:8000/" + user?.photo} className='profile-img mt-3' alt="" />
              </div>

              {/* Modal trigger button */}
              <Link
                type="button"
                className="btn btn-outline-secondary"
                data-bs-toggle="modal"
                data-bs-target="#modalId"
              >
                Write a post
              </Link>

              {/* Modal Body  */}
              {/* if you want to close by clicking outside the modal, delete the last endpoint:data-bs-backdrop and data-bs-keyboard */}
              <div
                className="modal fade"
                id="modalId"
                tabindex="-1"
                data-bs-backdrop="static"
                data-bs-keyboard="false"

                role="dialog"
                aria-labelledby="modalTitleId"
                aria-hidden="true"
              >
                <div
                  className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg"
                  role="document"
                >
                  <div className="modal-content">
                    <form onSubmit={handlePostSubmit}>
                      <div className="modal-header">
                        <div className="modal-title" id="modalTitleId">
                          <div className='d-flex gap-4'>
                            <input type="text" name='title' className='form-control rounded-1 card-post' placeholder='Post Title' />
                            <div>
                              <input type="text" name='position' list='cat' className='form-control rounded-1 card-post' placeholder='Post Position' />
                              <datalist id='cat'>
                                {
                                  position?.map((position) => (
                                    <option key={position?.id} value={position?.id}>{position?.name}</option>
                                  ))
                                }
                              </datalist>
                            </div>
                            <input type="text" name='company_name' className='form-control rounded-1 card-post' placeholder='Company Name' />
                          </div>
                        </div>

                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>

                      <div className="modal-body">
                        <textarea name="description" className="form-control rounded-1" placeholder="Start a post"></textarea>
                        <div className="d-flex select-category">
                          <input type="number" name='price' className='form-control rounded-1 card-post w-50 mt-2' placeholder="Amount" />

                          {/* Insert Country section */}
                          <p className='fw-bold m-auto'>Country:</p>
                          <select onChange={(e) => setselectedcountry(e.target.value)} name="country" id="" className='form-control rounded-1 card-post w-50 mt-2'>
                            {country?.map((ctry) => (
                              <option key={ctry?.country} value={ctry?.country}>{ctry?.country}</option>
                            ))}
                          </select>

                          {/* Insert City section */}
                          {
                            selectedcountry !== "" &&
                            <>
                              <p className='fw-bold m-auto'>State:</p>
                              <select onChange={(e) => setselectedstate(e.target.value)} name="states" id="" className='form-control rounded-1 card-post w-50 mt-2'>
                                {states?.map((state) => (
                                  <option key={state?.name} value={state?.name}>{state?.name}</option>
                                ))}
                              </select>
                            </>
                          }

                          {/* Insert City section */}
                          {
                            selectedstate !== "" &&
                            <>
                              <p className='fw-bold m-auto'>City:</p>
                              <select onChange={(e) => setselectedcity(e.target.value)} name="city" id="" className='form-control rounded-1 card-post w-50 mt-2'>
                                {cities?.map((city) => (
                                  <option key={city} value={city}>{city}</option>
                                ))}
                              </select>
                            </>
                          }
                        </div>
                        <input
                          type="file"
                          ref={fileInputRef}
                          style={{ display: 'none' }}
                          onChange={handleFileChange}
                          name='image'
                        />
                        <FaRegImage className="upload-icon text-info mt-2" size={25} onClick={handleIconClick} />
                      </div>

                      <div className="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type='submit' className="btn btn-info">Post</button>
                      </div>
                    </form>


                  </div>
                </div>
              </div>

              {/* Optional: Place to the bottom of scripts */}
              <script>
                const myModal = new bootstrap.Modal(
                document.getElementById("modalId"),
                options,
                );
              </script>

            </div>
          </div>

          <div className="post col-md-3 position-relative d-lg-block d-none">
            <div className="card m-auto position-fixed">
              <div className="card-title m-auto">
                <h3 className='mt-2'>Categories</h3>
              </div>
              <div className="card-body m-auto">
                <a href="#" className="btn btn-outline-info rounded-4 px-4 mt-2">Web Development</a> <br />
                <a href="#" className="btn btn-outline-info rounded-4 px-4 mt-2">Data Science</a> <br />
                <a href="#" className="btn btn-outline-info rounded-4 px-4 mt-2">Graphic Design</a>
                <a href="#" className="btn btn-outline-info rounded-4 px-4 mt-2">More</a>
              </div>
            </div>
          </div>

          <div className="col-md-2"></div>

          <div className="col-md-7 d-lg-block justify-content-center posted-job">
            <div className="card p-2">
              <div className="card-title d-flex">
                <div className='d-flex'>
                  <img src={"http://localhost:8000/" + user?.photo} className='profile_img mt-3' alt="" />
                  <div className='ms-3'>
                    <p className='text-start fw-bold'>{user?.first_name}</p>
                    <p className='text-secondary text-start'>{user?.skill}</p>
                    <p name="date_posted" className='text-secondary text-start'></p>
                  </div>
                </div>

                <div className='icons'>

                </div>
              </div>

              <div className="card-body">
                <div className="posted-job-item">
                  <h5 name="title" className='text-start fw-bolder'>Searching for Web developer</h5>
                  <p name="position" className='fw-bold text-start'>Frontend</p>
                  <div className="posted-job-img">
                    <img src={("./../../IT dev.webp")} name="image" className='img-fluid' alt="" />
                  </div>
                  <p name="description" className='text-start mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quas explicabo delectus ex velit perferendis aut dolorem numquam iure excepturi nam.
                  </p>
                  <div className="posted-job-info d-flex justify-content-around mt-3">
                    <p name="price"><span className='fw-bold text-black'>Amount:</span> $1500.00</p>
                    <p name="company_name">Company Name</p>
                    <p name="country, states, city">Country, State, City</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Post