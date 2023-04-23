import React from 'react';
import './Sec2.css'
import logo1 from '../../assets/coding.png'
import logo2 from '../../assets/book.png'
import logo3 from '../../assets/responsive.png'
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion"
import { useScroll } from '../usescroll';

const Sec2 = () => {

    const [element, controls] = useScroll()


    const div1 = {
        hidden: { y: -200, opacity: 0 },
        show: {
            y: 0, opacity: 1,
        },

    }
    const div2 = {
        hidden: { y: 200, opacity: 0 },
        show: {
            y: 0, opacity: 1,
        },

    }

    return (
        <div className='container'>
            <h3 className="text-center text-light">My Services</h3>
            <h1 className="text-center sec2h1 my-3 mb-5">What I Do</h1>
            <div className="row g-5">
                <div className="col-12 col-md-6 col-lg-4">
                    <motion.div variants={div1} initial="hidden" animate={controls} exit="exit" transition={{ duration: 1, ease: 'easeInOut' }} className='cad p-4 rounded-4'>
                        <div className='text-center'>
                            <img style={{ width: '120px' }} src={logo1} alt="" className="img-fluid " />
                        </div>
                        <h4 className='text-light mt-4 my-3 fw-normal'>Web Development</h4>
                        <ul className='text-light p-2'>
                            <li>Clear and Effective CTAs</li>
                            <li>Optimized for Search Engines</li>
                            <li >Single Page Application (SPA)</li>
                        </ul>
                    </motion.div>
                </div>
                <div ref={element} className="col-12 col-md-6 col-lg-4">
                    <motion.div variants={div2} initial="hidden" animate={controls} exit="exit" transition={{ duration: 1, ease: 'easeInOut' }} className='cad p-4 rounded-4'>
                        <div className='text-center'>
                            <img style={{ width: '120px' }} src={logo2} alt="" className="img-fluid " />
                        </div>
                        <h4 className='text-light mt-4 my-3 fw-normal'>Web Design</h4>
                        <ul className='text-light p-2'>
                            <li>Responsive Web Design</li>
                            <li>React Web App Development</li>
                            <li>MERN Stack Web App Development</li>
                        </ul>
                    </motion.div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <motion.div variants={div1} initial="hidden" animate={controls} exit="exit" transition={{ duration: 1, ease: 'easeInOut' }} className='cad p-4 rounded-4 cd-3'>
                        <div className='text-center'>
                            <img style={{ width: '120px' }} src={logo3} alt="" className="img-fluid " />
                        </div>
                        <h4 className='text-light mt-4 my-3 fw-normal'>Web Application</h4>
                        <ul className='text-light p-2'>
                            <li>Reporting & Analytics</li>
                            <li>User Rights Management</li>
                            <li>Document Management System</li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Sec2;