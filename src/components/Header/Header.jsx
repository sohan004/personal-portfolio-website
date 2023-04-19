import React from 'react';
import './Header.css'
import { Typewriter } from 'react-simple-typewriter';
import { FaClipboardList, FaPhone, FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import sohanPng from '../../assets/sohanpng2.png'
import { motion } from "framer-motion"


const div1 = {
    hidden:{y: -200, opacity: 0}, 
    show:{y: 0, opacity: 1,transition: {
        duration: 1,
        ease:'easeInOut'
    }}, 
    
}
const div2 = {
    hidden:{x:200, opacity: 0}, 
    show:{x: 0, opacity: 1,  transition: {
        duration: 0.6,
        ease:'easeInOut'
    }}, 
    
}


const Header = () => {
    return (
        <div className='container'>
            <div className='d-flex flex-column-reverse flex-md-row  text-center text-md-start gap-3 align-items-center'>
                <motion.div variants={div1} initial="hidden" animate="show" exit="exit" className='w-100 w-md-50'>
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

                </motion.div>
                <motion.div variants={div2} initial="hidden" animate="show" exit="exit" className='w-100 w-md-50 text-center'>
                    <img src={sohanPng} alt="" className="img-fluid w-100 border rounded-circle" />
                </motion.div>
            </div>
        </div>
    );
};

export default Header;