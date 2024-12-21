import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
      <Title text1={'Contact'} text2={'Us'}/>
    </div>
    <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
    <img src={assets.contact_img} className='w-full max-w-[480px]' alt="" />
    <div className='flex flex-col justify-center gap-6 items-start'>
    <p className='font-semibold text-xl text-gray-600'>Our Store</p>
    <p className='text-gray-400'>1234 Willms Station <br/> Suit 350, Washin, Usa</p>
    <p className='text-gray-500'>Tel: +91 8209584781 <br/>     EveningStar7m@gmail.com</p>
    <p className='font-semibold text-xl text-gray-600'>Careers at Forever</p>
    <p className='text-gray-400'> Learn More About Our Teams And Jon Openings</p>
    <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white translate-all duration-500'>Explore Jobs</button>
    </div>
    </div>

    <NewsletterBox/>
    </div>
  )
}

export default Contact