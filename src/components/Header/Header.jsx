import React from 'react';
import './Header.css'
import { Typewriter } from 'react-simple-typewriter';
import { FaClipboardList, FaPhone, FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import sohanPng from '../../assets/Picsart_23-04-24_14-45-05-939.png'
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { useScroll } from '../usescroll';




const Header = () => {

    const [element, controls] = useScroll()


    const div1 = {
        hidden: { y: -200, opacity: 0 },
        show: {
            y: 0, opacity: 1, 
        }

    }
    const div2 = {
        hidden: { y: 200, opacity: 0 },
        show: {
            y: 0, opacity: 1
        }

    }
    return (
        <div className='container'>
            <div className='d-flex flex-column-reverse mb-5 flex-md-row  text-center text-md-start gap-3 align-items-center'>
                <motion.div variants={div1} initial="hidden" animate={controls} exit="exit" transition={{duration: 1, ease: 'easeInOut'}} className='w-100 w-md-50'>
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
                    <p ref={element} className='text-light my-4'> I build dynamic and scalable web applications using MongoDB, Express, React, and Node.js. With strong problem-solving skills and attention to detail, I am committed to delivering reliable, performant solutions that exceed expectations.</p>
                    <div className='d-flex gap-3 my-4 justify-content-center justify-content-md-start'>
                        <button className="btn fw-bolder btn1 "><FaClipboardList /> Resume</button>
                        <a href="#contact"><button className="btn fw-bolder btn2">Let's Talk <FaPhone /></button></a>
                    </div>
                    <h5 className='text-light my-3 fw-normal'>Check out My <span>
                        <a href="https://github.com/sohan004" target='_blank'><FaGithub className='icon fs-2'></FaGithub></a>
                        <a href="https://www.facebook.com/profile.php?id=100056995762123" target='_blank'><FaFacebook className='icon fs-2'></FaFacebook></a>
                        <a href="" target=''><FaLinkedin className='icon fs-2'></FaLinkedin></a>
                    </span></h5>

                </motion.div>
                <motion.div variants={div2} initial="hidden" animate={controls} exit="exit" transition={{duration: 0.6, ease: 'easeInOut'}} className='w-100 w-md-50 text-center'>
                    <img src={sohanPng} alt="" className="img-fluid w-100 " />
                </motion.div>
            </div>
        </div>
    );
};

export default Header;