import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div>
                    <img src={assets.logo} className='mb-5 w-32' alt="" />
                    <p className='w-full md:w-2/3 text-gray-600'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae excepturi assumenda maiores ipsam qui dignissimos ut alias in animi fuga.
                    </p>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>Company</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div >
                    <p className='text-xl font-medium mb-5'>Get In Touch</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+91 8209584781</li>
                        <li>EveningStar7m@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>CopyRight 2024@ fovever.com -All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer