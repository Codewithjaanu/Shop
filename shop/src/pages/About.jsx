import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-1'>
    <Title text1={'About'} text2={'Us'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
    <img src={assets.about_img} alt="" className='w-full md:max-w-[450px]' />
    <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam omnis praesentium similique cupiditate dicta. Voluptatum explicabo dolore eos sed natus asperiores. Eveniet veritatis rerum aperiam tempora unde doloribus sapiente quasi maiores delectus quidem, numquam nisi reiciendis magni quae voluptatum cum quam eos incidunt blanditiis? Incidunt nisi et beatae nam accusamus.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolores impedit deleniti beatae, vero accusantium quisquam, voluptatem cupiditate cumque sint est ducimus. Explicabo officiis laborum debitis, amet minus ducimus eos, dolorem unde cum repudiandae sit ipsam odio perspiciatis quidem ex est accusantium quas enim ut! Assumenda maiores iusto officiis mollitia incidunt debitis at, vel non dolorum voluptatem ratione, eaque optio.</p>
    <b className='text-gray-800'>Our Mission</b>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam, inventore facilis nesciunt qui vel, aliquid autem, obcaecati quas asperiores magni debitis. Porro dignissimos illo debitis quaerat dicta! Impedit quo quia fuga at atque ratione ex est excepturi nam delectus!</p>
    </div>
      </div>
      <div className='text-xl py-4'>
    <Title text1={'Why'} text2={'Choose Us'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
    <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
    <b>Quality Assurance:</b>
    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil labore consequatur ad rerum numquam atque officia! Eius quo exercitationem sit!</p>
    </div>
    <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
    <b>Convenience:</b>
    <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil mollitia voluptates aliquid voluptate repellendus laborum ipsam expedita nam ducimus dolores!</p>
    </div>
    <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
    <b>Exceptional Customer Service:</b>
    <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia praesentium magni obcaecati dignissimos. Vel quae esse obcaecati reprehenderit nemo enim?</p>
    </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About