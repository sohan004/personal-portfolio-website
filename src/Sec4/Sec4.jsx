import React from 'react';
import './Sec4.css'
import img1 from '../assets/Picsart_23-04-24_02-27-59-915.png'
import img2 from '../assets/Picsart_23-04-24_02-40-33-525.png'
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { useScroll } from '../components/usescroll';
import { FaArrowRight } from "react-icons/fa";

const Sec4 = () => {
    const [element, controls] = useScroll()

    const rotat = {
        hidden: { rotateY: 180, opacity: 0 },
        show: {
            rotateY: 0, opacity: 1, transition: {
                duration: 2,
            }
        }
    }

    const im = {
        hidden: { y: 200, opacity: 0 },
        show: { y: 0, opacity: 1,  },
    }

    return (
        <div className='container'>
            <h3 id='abtMe' className="text-center text-light ">About me ?</h3>
            <div className='d-flex flex-column flex-md-row align-items-center sec4-div'>
                <motion.div variants={im} initial="hidden" animate={controls} exit="exit" transition={{ duration: 1.4 }} className='w-100 w-md-50'>
                    <img src={img2} alt="" className="img-fluid" />
                </motion.div>
                <motion.div variants={rotat} initial="hidden" animate={controls} exit="exit" className='w-100 w-md-50 text-center text-md-start'>
                    <div ref={element}>
                        <h5 className='text-light fw-normal '>I'm a
                            <span className='fs-2 fw-bolder sec4-tr'>
                                <Typewriter
                                    words={[' MERN stack Developer', ' Web Developer', ' React Developer', ' Frontend Developer']}
                                    loop={false}
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                /></span></h5>
                        <h1 className='text-light display-4 fw-bolder'>I Can Design Anything You Want</h1>
                        <p className="text-light my-3">I am a self-driven, ambitious, and enthusiastic front‑end developer. I have worked on several web development projects using HTML, CSS, JavaScript, React JS, and Node JS. I am very interested to work as a Frontend developer and I love to do it. The possibilities offered by the industry are endless and this motivates me to keep learning new methods and technologies every day. I would love to contribute to supporting the team’s objectives and outstanding performance.</p>
                        <div className='d-flex gap-5 text-start
                    '>
                            <div>
                                <p className='text-light'>Name</p>
                                <p className='text-light'>Age</p>
                                <p className='text-light'>Number</p>
                                <p className='text-light'>Email</p>
                                <p className='text-light'>Address</p>
                            </div>
                            <div>
                                <p className='text-light'>:</p>
                                <p className='text-light'>:</p>
                                <p className='text-light'>:</p>
                                <p className='text-light'>:</p>
                                <p className='text-light'>:</p>
                            </div>
                            <div>
                                <p className='text-light'>Sohan</p>
                                <p className='text-light'>20</p>
                                <p className='text-light'>+8801867689987</p>
                                <p className='text-light'>aryansohan02@gmail.com</p>
                                <p className='text-light'>Dhaka, Bangladesh</p>
                            </div>
                        </div>
                        <div className='my-3'>
                            <a href="#" target='_blank'><button className="btn  bt1 me-4">Hire Me <FaArrowRight/></button></a>
                            <a href="https://github.com/sohan004" target='_blank'><button className="btn bt1">Github <FaArrowRight/></button></a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Sec4;