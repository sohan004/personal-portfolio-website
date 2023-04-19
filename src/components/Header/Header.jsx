import React from 'react';
import './Header.css'
import { Typewriter } from 'react-simple-typewriter';
import { FaClipboardList, FaPhone, FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";


const Header = () => {
    return (
        <div className='container'>
            <div className='d-flex flex-column flex-md-row gap-4 text-center text-md-start'>
                <div className='w-100 w-md-50'>
                    <h3 className='text-light fw-normal '>Hello, I'm</h3>
                    <h1 className='fw-bolder head-h1 display-3'>SOHAN</h1>
                    <h5 className='text-light fw-normal '>And I'm a
                        <span className='fs-2 fw-bolder text-warning'>
                            <Typewriter
                                words={[' MERN stack Developer', ' Web Developer', ' React Developer', ' Frontend Developer']}
                                loop={false}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            /></span></h5>
                    <p className='text-light my-4'> I build dynamic and scalable web applications using MongoDB, Express, React, and Node.js. With strong problem-solving skills and attention to detail, I am committed to delivering reliable, performant solutions that exceed expectations.</p>
                    <div className='d-flex gap-3 my-4 justify-content-center justify-content-md-start'>
                        <button className="btn fw-bolder btn1 "><FaClipboardList /> Resume</button>
                        <button className="btn fw-bolder btn2">Let's Talk <FaPhone /></button>
                    </div>
                    <h5 className='text-light my-3 fw-normal'>Check out My <span>
                        <FaGithub className='icon fs-2'></FaGithub>
                        <FaFacebook className='icon fs-2'></FaFacebook>
                        <FaLinkedin className='icon fs-2'></FaLinkedin>
                    </span></h5>

                </div>
                <div className='w-100 w-md-50'></div>
            </div>
        </div>
    );
};

export default Header;