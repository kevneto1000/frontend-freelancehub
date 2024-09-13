import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlinePermIdentity } from "react-icons/md";

function Profile() {

  const [allSkills, setAllSkills] = useState(['JavaScript', 'React', 'Node.js', 'CSS', 'HTML', 'Python', 'Django', 'SQL', 'MongoDB', 'Bootstrap', 'Tailwind', 'Webkit', 'Vue.js', 'Github', 'Typescript', 'PHP', 'Laravae', 'Other']);

  const [selectedSkills, setSelectedSkills] = useState([]);
  const [isSkillsListVisible, setSkillsListVisible] = useState(true);
  const [newSkill, setNewSkill] = useState('');

  const handleSkillChange = (skill) => {
    if (selectedSkills.includes(skill)) {
      // Remove skill from the selected list if it's already there
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    } else {
      // Add the selected skill to the list
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const toggleSkillsList = () => {
    setSkillsListVisible(!isSkillsListVisible);
  };

  const handleAddSkill = () => {
    if (newSkill && !allSkills.includes(newSkill)) {
      // Add new skill to the list of all skills
      setAllSkills([...allSkills, newSkill]);
      // Automatically select the new skill
      setSelectedSkills([...selectedSkills, newSkill]);
      // Clear the input field
      setNewSkill('');
    }
  };

  const [user, setuser] = useState(null)
  let id = useSelector((state) => state.user.data.id)


  useEffect(() => {

    axios.get(`http://localhost:8000/profile/${id}`)
      .then(response => {
        setuser(response.data)
      })
      .catch(error => {
        console.log(error.response.statusText)
      })

  }, [])

  return (
    <div>
      <Navbar />
      <Banner
        text="Kevin Nduka"
        img={("./../../breadcrumb-bg.png")}
        link="Kevin Nduka"
      />

      <div className="container">
        <div className="row">
          <div className="col-md-5 mt-5">
            <div className="card mt-5">
              <div className='position-relative'>
                <img src={("./../../ai-art-gamer-computer-pc-gaming-hd-wallpaper-preview.jpg")} className="card-img-top" alt="..." />
                <img src={"http://localhost:8000/" + user?.photo} className='profile-image' alt="" />
              </div>
              <div className="card-body mt-5">
                <h4>{user?.first_name} {user?.last_name}</h4>
                <h5 className='fw-light text-start'>{user?.skill}</h5>
                <p className='text-secondary text-start'>Lagos, Lagos State, Nigeria</p>
                <Link to={"/message"} type="button" className="btn btn-outline-info">Send Message</Link>
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
                    <p>July 7</p>
                  </div>
                </div>
                <hr />

                <div>
                  <h5 className='text-start'>Description</h5>
                  <p className='text-start mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed ullam quam reprehenderit expedita, ea, quia odio, quod distinctio corporis mollitia ratione placeat dolorum amet dolores. Magnam repellat non, aperiam nisi sit at nostrum quo reprehenderit? Magnam tenetur similique vitae quisquam qui. Asperiores hic, eius aliquam aspernatur et beatae? Quaerat, tempora.</p>
                </div>
                <hr />

                <div className='skills'>
                  <h5 className='text-start'>Skills</h5>

                  <button className='btn btn-outline-info' onClick={toggleSkillsList}>
                    {isSkillsListVisible ? 'Hide Skills List' : 'Show Skills List'}
                  </button>

                  {isSkillsListVisible && (
                    <div className="skills-list">
                      {allSkills.map((skill) => (
                        <div key={skill}>
                          <input
                            type="checkbox"
                            id={skill}
                            checked={selectedSkills.includes(skill)}
                            onChange={() => handleSkillChange(skill)}
                          />
                          <label htmlFor={skill}>{skill}</label>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="add-skill">
                  <input
                    type="text"
                    className='form-control'
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    placeholder="Add a new skill"
                  />
                  <button className='btn btn-info' onClick={handleAddSkill}>Add Skill</button>
                </div>


                <div className='selected-skills'>
                  {selectedSkills.length === 0 ? (
                    <p>No skills selected yet</p>
                  ) : (
                    <div>
                      {selectedSkills.map((skill) => (
                        <button className='btn btn-secondary' key={skill}>{skill}</button>
                      ))}
                    </div>
                  )}
                </div>


              </div>


            </div>
          </div>
        </div>

        <div className="col-md-6">

        </div>
      </div>
    </div>
  )
}

export default Profile