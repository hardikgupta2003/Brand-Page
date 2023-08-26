import React from 'react'

const Product = () => {
  return (
    <div className='flex  justify-center items-center w-[1125px] h-[613px] mx-[152px] '>
        <div className="flex flex-col w-[595px] gap-[36px]">
    <h1 className=' font-extrabold text-8xl uppercase leading-2'>your feet deserver the best</h1>
    <p className="uppercase text-gray-600 font-bold text-lg">your feet deserve the best and we're here to help you with our shoes.your feet deserve the best and we're here to help you with our shoes. </p>
    <div className="flex gap-4">
        <button className="py-[6px] px-[16px] bg-red-700 text-white rounded-lg">Shop Now</button>
        <button className="py-[6px] px-[16px] border-2">Category</button>
    </div>
    <div className="">
    <p className='text-gray-500'>Also Available On</p>
    <div className="flex gap-2">
        <img src="/flipkart.png" alt="" />
        <img src="/amazon.png" alt="" />
    </div>
            </div>
        </div>
        <div >
            <img src="src\hero-image.png" className="w-[530px] h-[488px]" alt="" />
        </div>
    </div>
  )
}

export default Product