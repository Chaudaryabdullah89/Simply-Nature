import React from 'react'
import { NavLink } from 'react-router-dom'

const Browsecollection = () => {
  return (
    <div className='flex  gap-16 md:40 flex-wrap justify-center  md:flex-row mt-20   mb-20 px-3 md:px-10 p-4 mx-auto' style={{maxWidth : '1200px'}}>
<div className='flex flex-col gap-8 bg-[#EFEEF4] p-10 rounded-xl ' >
    <div>
<img src="https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant1-free-img.jpg" className='w-60' alt="" />

    </div>
    <div className='flex flex-col gap-4'>
    <div className='flex flex-col gap-2'>
<p className='text-start text-lg font-semibold text-[#2b2f38] mt-2' >Beautiful Plant Varieties</p>
<p className='text-start text-gray-500' >Luctus nec ullamcorper mattis , <br /> pulvinar dapibus leo.</p>

    </div>
<div className='flex flex-row gap-2 hover:text-gray-600'>
<NavLink to='/shop' className='text-red-600 font-semibold hover:text-gray-600 uppercase ' >See Collection</NavLink>

<i className="ri-arrow-right-line text-gray-600  hover:text-gray-600 cursor-pointer "></i>
</div>
        
    </div>
</div>
<div className='flex flex-col gap-8 bg-[#EFEEF4] p-10 rounded-xl' >
    <div>
<img src="https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant1-free-img.jpg" className='w-60' alt="" />

    </div>
    <div className='flex flex-col gap-4'>
    <div className='flex flex-col gap-2'>
<p className='text-start text-lg font-semibold text-[#2b2f38] mt-2' >Beautiful Plant Varieties</p>
<p className='text-start text-gray-500' >Luctus nec ullamcorper mattis , <br /> pulvinar dapibus leo.</p>

    </div>
<div className='flex flex-row gap-2 hover:text-gray-600'>
<NavLink to='/shop' className='text-red-600 font-semibold hover:text-gray-600 uppercase ' >See Collection</NavLink>

<i className="ri-arrow-right-line text-gray-600  hover:text-gray-600 cursor-pointer "></i>
</div>
        
    </div>
</div>
<div className='flex flex-col gap-8 bg-[#EFEEF4] p-10 rounded-xl' >
    <div>
<img src="https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant1-free-img.jpg" className='w-60' alt="" />

    </div>
    <div className='flex flex-col gap-4'>
    <div className='flex flex-col gap-2'>
<p className='text-start text-lg font-semibold text-[#2b2f38] mt-2' >Beautiful Plant Varieties</p>
<p className='text-start text-gray-500' >Luctus nec ullamcorper mattis , <br /> pulvinar dapibus leo.</p>

    </div>
<div className='flex flex-row gap-2 hover:text-gray-600'>
<NavLink to='/shop' className='text-red-600 font-semibold hover:text-gray-600 uppercase ' >See Collection</NavLink>

<i className="ri-arrow-right-line text-gray-600  hover:text-gray-600 cursor-pointer "></i>
</div>
        
    </div>
</div>
    </div>
  )
}

export default Browsecollection