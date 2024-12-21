import React from 'react'

const NewsletterBox = () => {
    const onSubmitHandler = ()=>{
        event.preventDefault();
        
    }
    return (
        <div className='text-center'>
            <p className='text-2xl font-medium text-gray-800'>Subscribe Now & Get 20% Off</p>
            <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus cumque culpa rem, illo ab recusandae deleniti dolorum explicabo distinctio libero.</p>
            <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
                <input type="email" required={true} placeholder='Enter Your Email' className='w-full sm:flex-1 outline-none' />
                <button className='bg-black text-white text-xs px-10 py-4' type='submit'>Subscribe</button>
            </form>
        </div>
    )
}

export default NewsletterBox