import React from 'react';
import skillBg from '../../assets/World-Earth-Background-PNG-Image.png'
import './Sec3.css'
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiExpress } from "react-icons/si";
import { motion } from "framer-motion"
import { useScroll } from '../usescroll';


const Sec3 = () => {
    const [element, controls] = useScroll()

    const html = {
        hidden: { top: '50%', left: '50%', opacity: 0, scale: 0 },
        show: {
            top: '10%', left: '20%', opacity: 1, scale: 1
        },
    }
    const css = {
        hidden: { top: '50%', left: '50%', opacity: 0, scale: 0 },
        show: {
            top: '10%', left: '50%', opacity: 1, scale: 1
        },
    }
    const js = {
        hidden: { top: '50%', left: '50%', opacity: 0, scale: 0 },
        show: {
            top: '10%', left: '80%', opacity: 1, scale: 1
        },
    }
    const tail = {
        hidden: { top: '50%', left: '50%', opacity: 0, scale: 0 },
        show: {
            top: '40%', left: '20%', opacity: 1, scale: 1
        },
    }
    const bs = {
        hidden: { top: '50%', left: '50%', opacity: 0, scale: 0 },
        show: {
            top: '40%', left: '50%', opacity: 1, scale: 1
        },
    }
    const fb = {
        hidden: { top: '50%', left: '50%', opacity: 0, scale: 0 },
        show: {
            top: '40%', left: '80%', opacity: 1, scale: 1
        },
    }
    const react = {
        hidden: { top: '50%', left: '50%', opacity: 0, scale: 0 },
        show: {
            top: '70%', left: '20%', opacity: 1, scale: 1
        },
    }
    const expres = {
        hidden: { top: '50%', left: '50%', opacity: 0, scale: 0 },
        show: {
            top: '70%', left: '50%', opacity: 1, scale: 1
        },
    }
    const containerVariants = {
        show: {
            transition: {
                staggerChildren: 0.4,
            },
        },
    };
    return (
        <div className='container'>
            <h3 className="text-center text-light ">My Skills</h3>
            <h5 className="text-center sec2h1 my-3 mb-5">Skills are the expertise or talent needed in order to do a job or task.</h5>
            <motion.div ref={element} variants={containerVariants} initial="hidden" animate={controls} className='position-relative mn text-center mx-auto '>
                <img src={skillBg} alt="" className="img-fluid  position-relative " />
                <motion.div variants={html} className='position-absolute '><FaHtml5 className=' sk '></FaHtml5><small className='fc d-block'>HTML</small></motion.div>
                <motion.div variants={css} className='position-absolute '><FaCss3Alt className=' sk '></FaCss3Alt><small className='fc d-block'>CSS</small></motion.div>
                <motion.div variants={js} className='position-absolute '><FaJs className=' sk '></FaJs><small className='fc d-block'>Javascript</small></motion.div>
                <motion.div variants={tail} className='position-absolute '><SiTailwindcss className=' sk '></SiTailwindcss><small className='fc d-block'>Tailwind</small></motion.div>
                <motion.div variants={bs} className='position-absolute '><FaBootstrap className=' sk '></FaBootstrap><small className='fc d-block'>Bootstrap</small></motion.div>
                <motion.div variants={fb} className='position-absolute '><SiFirebase className=' sk '></SiFirebase><small className='fc d-block'>Firebase</small></motion.div>
                <motion.div variants={react} className='position-absolute '><FaReact className=' sk '></FaReact><small className='fc d-block'>React</small></motion.div>
                <motion.div variants={expres} className='position-absolute '><SiExpress className=' sk '></SiExpress><small className='fc d-block'>Express.js</small></motion.div>
            </motion.div>
        </div>
    );
};

export default Sec3;