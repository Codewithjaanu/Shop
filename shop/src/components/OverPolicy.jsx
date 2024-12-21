import React from 'react'
import { assets } from "../assets/frontend_assets/assets";

const OverPolicy = () => {
    return (
        <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-12 text-center py-20 text-xs sm:text-sm md:text-base'>
            <div className=''>
                <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt='' />
                <p className='font-semibold'>Easy Exchange Policy</p>
                <p className='text-gray-400'>We Offer Hassle Free Exchange Policy</p>
            </div>
            <div className=''>
                <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt='' />
                <p className='font-semibold'>7 Days Return Policy</p>
                <p className='text-gray-400'>We provied 7 Days Free Return Policy</p>
            </div>
            <div className=''>
                <img src={assets.support_img} className='w-12 m-auto mb-5' alt='' />
                <p className='font-semibold'>Bast Customer Support</p>
                <p className='text-gray-400'>We Provied 24/7 Customer Support</p>
            </div>
        </div>
    )
}

export default OverPolicy