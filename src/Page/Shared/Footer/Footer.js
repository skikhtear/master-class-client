import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='w-100 m-5 p-5 '>
            <p className='text-light fs-4 fw-bolder m-5 p-5'>copy right master class 2022</p>
            <div>
                <FaFacebook className='bg-light fs-1'></FaFacebook>
                <FaInstagram className='bg-light fs-1'></FaInstagram>
                <FaTwitter className='bg-light fs-1'></FaTwitter>
             </div>
        </div>
    );
};

export default Footer;