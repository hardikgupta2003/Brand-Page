import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-evenly w-[1440px] h-[72px]'>
        <div className="">
            <img src="images/brand_logo.png" alt="" />
        </div>
        <ul className="flex gap-6">
            <li className="">MENU</li>
            <li className="">LOCATION</li>
            <li className="">CONTACT</li>
            <li className="">ABOUT</li>
        </ul>
        <div >
            <button className="py-[6px] px-[16px] bg-red-700 text-white rounded-lg">LOGIN</button>
        </div>
    </nav>
  )
}

export default Navbar