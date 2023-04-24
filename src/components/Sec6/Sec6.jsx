import React, { useRef } from 'react';
import './Sec6.css'
import { FaMapMarkerAlt, FaPhoneAlt, FaMailBulk } from "react-icons/fa";
import { motion } from 'framer-motion';
import { useScroll } from '../usescroll';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';


const Sec6 = () => {
    const [element, controls] = useScroll()
    const im = {
        hidden: { y: -400, opacity: 0 },
        show: { y: 0, opacity: 1, },
    }





    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_o79clcz', 'template_8wdy9rd', form.current, 'h92SdH-J8CUCZmDs7')
            .then((result) => {
                Swal.fire(
                    'Message sent successfully',
                    '',
                    'success'
                  )
                  e.target.reset()
            }, (error) => {
                Swal.fire(
                    'Message not sent ',
                    '',
                    'error'
                  )
            });
    };
    return (
        <div ref={element} className='container'>
            <h3 id='contact' className="text-center text-light ">Contact</h3>
            <motion.div variants={im} initial="hidden" animate={controls} exit="exit" transition={{ duration: 2 }} className='d-flex align-items-center flex-column flex-md-row mt-5 sec6-2'>
                <div className='w-100 w-md-50 text-center text-md-start'>
                    <h1 className='fw-bolder  sec-6'>Get in touch</h1>
                    <p className='text-light mb-5'>Fill in the form to start a conversation</p>
                    <p className='text-light mb-2'><FaMapMarkerAlt /> <span className='ms-3'>Dhaka, Bangladesh</span></p>
                    <p className='text-light mb-2'><FaPhoneAlt /> <span className='ms-3'>+8801867689987</span></p>
                    <p className='text-light mb-2'><FaMailBulk /> <span className='ms-3'>aryansohan02@gmail.com</span></p>
                </div>
                <div className='w-100 w-md-50'>
                    <form ref={form} onSubmit={sendEmail}>
                        <p className='text-light mb-1'>Full Name</p>
                        <input required type="text" name="user_name" className='w-100 p-2 rounded bg-dark border text-light' />
                        <p className='text-light mt-4 mb-1'>Email</p>
                        <input required type="email" name="user_email" className='w-100 p-2 rounded bg-dark border text-light' />
                        <p className='text-light mt-4 mb-1'>Message</p>
                        <textarea required className='w-100 bg-dark border text-light' name="message" cols="30" rows="5"></textarea>
                        <input type="submit" value="submit" className='w-100 p-2 mt-3 rounded sub' />
                    </form>
                </div>
            </motion.div>

        </div>
    );
};

export default Sec6;