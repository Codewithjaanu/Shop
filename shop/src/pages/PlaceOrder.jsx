import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/frontend_assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod')
  const {navigate}=useContext(ShopContext)

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/*  */}
      <div className='flex flex-col g-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'Delivery'} text2={'Information'} />
        </div>
        <div className='flex gap-3'>
          <input type='text' placeholder='First Name' className='border outline-none border-gray-300 rounded py-1.5 w-full px-3.5' />
          <input type='text' placeholder='Last Name' className='border border-gray-300 outline-none rounded py-1.5 w-full px-3.5' />
        </div>

        <input type='email' placeholder='Email Address' className='border mt-1 border-gray-300 outline-none rounded py-1.5 w-full px-3.5' />
        <input type='text' placeholder='Street' className='border mt-1 border-gray-300 outline-none rounded py-1.5 w-full px-3.5' />
        <div className='flex gap-3 mt-1'>
          <input type='text' placeholder='City' className='border outline-none border-gray-300 rounded py-1.5 w-full px-3.5' />
          <input type='text' placeholder='State' className='border border-gray-300 outline-none rounded py-1.5 w-full px-3.5' />
        </div>
        <div className='flex gap-3 mt-1'>
          <input type='number' placeholder='ZipCode' className='border outline-none border-gray-300 rounded py-1.5 w-full px-3.5' />
          <input type='text' placeholder='Country' className='border border-gray-300 outline-none rounded py-1.5 w-full px-3.5' />
        </div>
        <input type='number' placeholder='Phone No.' className='border mt-1 outline-none border-gray-300 rounded py-1.5 w-full px-3.5' />

      </div>
      {/*  */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>
        <div className='mt-12'>
          <Title text1={'PayMent'} text2={'Method'} />
          <div className='flex flex-col sm:flex-row gap-3 mt-4'>
            <div
              onClick={() => setMethod('stripe')}
              className={`flex items-center gap-3 border p-2 px-3 cursor-pointer ${method === 'stripe' ? 'bg-green-100' : ''
                }`}
            >
              <span
                className={`min-w-[14px] h-[14px] border rounded-full ${method === 'stripe' ? 'bg-green-400' : 'bg-gray-200'
                  }`}
              ></span>
              <img src={assets.stripe_logo} alt='Stripe' className='h-5' />
            </div>
            <div
              onClick={() => setMethod('razorpay')}
              className={`flex items-center gap-3 border p-2 px-3 cursor-pointer ${method === 'razorpay' ? 'bg-green-100' : ''
                }`}
            >
              <span
                className={`min-w-[14px] h-[14px] border rounded-full ${method === 'razorpay' ? 'bg-green-400' : 'bg-gray-200'
                  }`}
              ></span>
              <img src={assets.razorpay_logo} alt='Razorpay' className='h-5' />
            </div>
            <div
              onClick={() => setMethod('cod')}
              className={`flex items-center gap-3 border p-2 px-3 cursor-pointer ${method === 'cod' ? 'bg-green-100' : ''
                }`}
            >
              <span
                className={`min-w-[14px] h-[14px] border rounded-full ${method === 'cod' ? 'bg-green-400' : 'bg-gray-200'
                  }`}
              ></span>
              <p className='text-gray-500 text-sm font-medium'>Cash On Delivery</p>
            </div>
          </div>
          <div className='w-full text-end mt-8'>
          <button onClick={()=>navigate("/orders")} className='bg-black text-white px-16 py-3 text-sm'>Place Order</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder