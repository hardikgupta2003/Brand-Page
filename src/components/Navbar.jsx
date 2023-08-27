import React from 'react'
import brand_logo from '../images/brand_logo.png'

const Navbar = () => {
  return (
    <nav className='flex justify-evenly w-[1440px] h-[72px]'>
        <div className="">
            <img src={brand_logo} alt="" />
        </div>
        <ul className="flex gap-6">
            <li className=" cursor-pointer"> <a href="http://">MENU</a></li>
            <li className=" cursor-pointer"><a href="http://">LOCATION</a></li>
            <li className=" cursor-pointer"><a href="http://">CONTACT</a></li>
            <li className=" cursor-pointer"><a href="http://">ABOUT</a></li>
        </ul>
        <div >
            <button className="py-[6px] px-[16px] bg-red-700 text-white rounded-lg">LOGIN</button>
        </div>
    </nav>
  )
}

export default Navbar