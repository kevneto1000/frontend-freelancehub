import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'


import { BiSearchAlt } from "react-icons/bi"
import { FaVideo } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { FaEllipsisV, FaTimes } from "react-icons/fa";
import { FiPaperclip } from "react-icons/fi";
import { FaLocationArrow } from "react-icons/fa";

function Message() {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <Navbar />

            <div className="container">
                <div className="row justify-content-center h-100">

                    <div className="col-md-4 col-xl-3 message mt-5"><div className='card mb-sm-3 mb-md-0 contacts_card mt-5'>
                        <div className="card-header">
                            <div className="input-group">
                                <input type="text" placeholder="Search..." name="" className="form-control search" />
                                <div className="input-group-prepend">
                                    <span className="input-group-text search_btn"><BiSearchAlt size={25} /></span>
                                </div>
                            </div>
                        </div>
                        <div className="card-body contacts_body">
                            <ul className='contacts'>
                                <li className='active'>
                                    <div className="d-flex bd-highlight">
                                        <div className="img_cont">
                                            <img src={("./../../video editing.png")} className='rounded-circle user_img' alt="" />
                                            <span className="online_icon"></span>
                                        </div>
                                        <div className="user_info">
                                            <span>Veecar</span>
                                            <p>Veecar is online</p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="d-flex bd-highlight">
                                        <div className="img_cont">
                                            <img src={("./../../virtual assistant.jpg")} className='rounded-circle user_img' alt="" />
                                            <span className="online_icon offline"></span>
                                        </div>
                                        <div className="user_info">
                                            <span>Harry</span>
                                            <p>Harry left 7 mins ago</p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="d-flex bd-highlight">
                                        <div className="img_cont">
                                            <img src={("./../../avatar.jpeg")} className='rounded-circle user_img' alt="" />
                                            <span className="online_icon"></span>
                                        </div>
                                        <div className="user_info">
                                            <span>Robert</span>
                                            <p>Robert is online</p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="d-flex bd-highlight">
                                        <div className="img_cont">
                                            <img src={("./../../summer dress.jpg")} className='rounded-circle user_img' alt="" />
                                            <span className="online_icon offline"></span>
                                        </div>
                                        <div className="user_info">
                                            <span>Merit</span>
                                            <p>Merit left 30 mins ago</p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="d-flex bd-highlight">
                                        <div className="img_cont">
                                            <img src={("./../../admin.jpg")} className='rounded-circle user_img' alt="" />
                                            <span className="online_icon offline"></span>
                                        </div>
                                        <div className="user_info">
                                            <span>Chioma</span>
                                            <p>Chioma left 50 mins ago</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="card-footer"></div>
                    </div></div>

                    <div className="col-md-8 col-xl-6 chat mt-5">
                        <div className="card mt-5">
                            <div className="card-header msg_head">
                                <div className="d-flex bd-higlight">
                                    <div className="img_cont">
                                        <img src={("./../../video editing.png")} className="rounded-circle user_img" />
                                        <span className="online_icon"></span>
                                    </div>
                                    <div className="user_info">
                                        <span>Chat with Veecar</span>
                                        <p className='text-start'>1767 Messages</p>
                                    </div>
                                    <div className="video_cam">
                                        <span><FaVideo /></span>
                                        <span><FaPhone /></span>
                                    </div>
                                </div>
                                {/* <span id="action_menu_btn"><FaEllipsisV /></span> */}
                                <div className='action_menu' id="action_menu_btn">
                                    <div onClick={handleToggle} style={{ fontSize: '1.5rem', cursor: 'pointer' }}>
                                        {menuOpen ? <FaTimes /> : <FaEllipsisV />}
                                    </div>
                                    {menuOpen && (
                                        <div className="menu">
                                            <ul>
                                                <li><Link to={`/profile/{user?.id}`}>View Profile</Link></li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="card-body msg_card_body">
                                <div className="d-flex justify-content-start mb-4">
                                    <div class="img_cont_msg">
                                        <img src={("./../../IT dev.webp")} class="rounded-circle user_img_msg"/>
                                    </div>
                                    <div class="msg_cotainer">
                                        Hi, how are you Veecar?
                                        <span class="msg_time">8:40 AM, Today</span>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-end mb-4">
                                    <div class="msg_cotainer_send">
                                        Hi Kevin i am good tnx how about you?
                                        <span class="msg_time">8:55 AM, Today</span>
                                    </div>
                                    <div class="img_cont_msg">
                                        <img src={("./../../video editing.png")} class="rounded-circle user_img_msg"/>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-start mb-4">
                                    <div class="img_cont_msg">
                                        <img src={("./../../IT dev.webp")} class="rounded-circle user_img_msg"/>
                                    </div>
                                    <div class="msg_cotainer">
                                        I am good too, thank you. Will you marry me?
                                        <span class="msg_time">9:00 AM, Today</span>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-end mb-4">
                                    <div class="msg_cotainer_send">
                                        Do you know how long I've been waiting to hear that question from you?
                                        <span class="msg_time">9:05 AM, Today</span>
                                    </div>
                                    <div class="img_cont_msg">
                                        <img src={("./../../video editing.png")} class="rounded-circle user_img_msg"/>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-start mb-4">
                                    <div class="img_cont_msg">
                                        <img src={("./../../IT dev.webp")} class="rounded-circle user_img_msg"/>
                                    </div>
                                    <div class="msg_cotainer">
                                        I am so happy, let's get married this weekend.
                                        <span class="msg_time">9:07 AM, Today</span>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-end mb-4">
                                    <div class="msg_cotainer_send">
                                        You read my mind
                                        <span class="msg_time">9:10 AM, Today</span>
                                    </div>
                                    <div class="img_cont_msg">
                                        <img src={("./../../video editing.png")} class="rounded-circle user_img_msg"/>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-start mb-4">
                                    <div class="img_cont_msg">
                                        <img src={("./../../IT dev.webp")} class="rounded-circle user_img_msg"/>
                                    </div>
                                    <div class="msg_cotainer">
                                        I already got you your wedding dress. It's magnificent
                                        <span class="msg_time">9:12 AM, Today</span>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-end mb-4">
                                    <div class="msg_cotainer_send">
                                        I trust you, what about Martha?
                                        <span class="msg_time">9:20 AM, Today</span>
                                    </div>
                                    <div class="img_cont_msg">
                                        <img src={("./../../video editing.png")} class="rounded-circle user_img_msg"/>
                                    </div>
                                </div>

                            </div>

                            <div className="card-footer">
							<div className="input-group d-flex gap-2">
								<div className="input-group-append">
									<span className="input-group-text attach_btn rounded-4 mt-1 p-3"><FiPaperclip/></span>
								</div>
								<textarea name="" className="form-control type_msg rounded-4" placeholder="Type your message..."></textarea>
								<div className="input-group-append">
									<span className="input-group-text send_btn rounded-4 mt-1 p-3"><FaLocationArrow/></span>
								</div>
							</div>
						</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Message
