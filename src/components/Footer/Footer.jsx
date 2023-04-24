import React from 'react';
import { FaClipboardList, FaPhone, FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='container'>
            <div className="row g-2">
                <div className="col-4"><div><hr className='text-light' /></div></div>
                <div className="col-4"><div className='text-center'><p className='text-light'>©2023 SOHAN™. All Rights Reserved.</p></div></div>
                <div className="col-4"><div><hr className='text-light' /></div></div>
            </div>
            <h5 className='text-light my-3 fw-normal text-center'><span>
                        <a href="https://github.com/sohan004" target='_blank'><FaGithub className='icon fs-2'></FaGithub></a>
                        <a href="https://www.facebook.com/profile.php?id=100056995762123" target='_blank'><FaFacebook className='icon fs-2'></FaFacebook></a>
                        <a href="" target='_blank'><FaLinkedin className='icon fs-2'></FaLinkedin></a>
                    </span></h5>

        </div>
    );
};

export default Footer;