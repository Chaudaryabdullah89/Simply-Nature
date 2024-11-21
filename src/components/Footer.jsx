import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return ( 
        <>
        <div className='grid grid-cols-1 px-3 md:grid-cols-4 gap-5 md:gap-16 mx-auto py-10' style={{maxWidth : '1280px' }} >
                <div className='flex flex-col gap-5 text-center items-center justify-center' >
                    <img src="https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2020/06/plants-store-logo-green.svg" className='w-24 items-center justify-center' alt="" />
                    <h2 className='font-extrabold text-[#2b2f38] text-2xl text-center items-center' >Simply Nature </h2>
                    <div className='flex flex-row gap-5 items-center justify-center text-center pb-10'>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer " className='items-center justify-center text-center w-8 h-8 bg-gray-600'>
                            <i className="ri-facebook-fill text-2xl text-white relative"></i>
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer " className='items-center justify-center text-center w-8 h-8 bg-gray-600'>
                            <i className="ri-twitter-fill text-2xl text-white relative"></i>
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer " className='w-8 h-8 bg-gray-600'>
                            <i className="ri-instagram-fill text-2xl text-white relative"></i>
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer " className='w-8 h-8 bg-gray-600'>
                            <i className="ri-linkedin-fill text-2xl text-white relative"></i>
                        </a>
                    </div>
                </div>

                <div className='flex flex-col gap-5' >
                    <h2 className='font-semibold text-2xl'>Quick Links</h2>
                    <div className='flex flex-col text-gray-500 gap-1'>
                        <Link to='/' className='hover:text-green-600 transition-all'>Introduction</Link>
                        <Link to='/about' className='hover:text-green-600 transition-all'>Know more About Us</Link>
                        <Link to='/shop' className='hover:text-green-600 transition-all'>Visit Store</Link>
                        <Link to='/contact' className='hover:text-green-600 transition-all'>Let’s Connect</Link>
                    </div>
                </div>

                <div className='flex flex-col gap-5' >
                    <h2 className='font-semibold text-2xl'>Important Links</h2>
                    <div className='flex flex-col text-gray-500 gap-1'>
                        <Link to='/' className='hover:text-green-600 transition-all'>Privacy Policy</Link>
                        <Link to='/about' className='hover:text-green-600 transition-all'>Shipping Details</Link>
                        <Link to='/shop' className='hover:text-green-600 transition-all'>Terms & Conditions</Link>
                        <Link to='/contact' className='hover:text-green-600 transition-all'>Make Enquiry</Link>
                    </div>
                </div>

                <div className='flex flex-col gap-5 '>
                    <p className='text-2xl font-semibold'>
                        Get In Touch With Us For  The Best Quality Plants  & Succulents
                    </p>
                    <p className='text-gray-500' >Qui dolore ipsum quia dolor sit amet,  consec tetur adipisci velit, sed quia  non numquam eius modi tempora  incidunt lores ta porro ame.</p>
                    <Link to={'/contact'}  className='text-red-600 font-semibold uppercase hover:text-gray-500 transition-all'>
                <i className="ri-phone-fill rotate-180"></i> Ask For Help
                </Link>
                </div>
                
        </div>
        <hr className='my-10 max-w-[1280px] mx-auto'  />
        
        <div className='flex text-center gap-3 md:gap-0 flex-col md:flex-row max-w-[1280px] mx-auto justify-around pb-10 '>
<h2 className='font-semibold' >Copyright © 2024 Simply Natural</h2>
<h2 className='font-semibold' >Powered by Simply Natural</h2>
        </div>
        </>
    )
}

export default Footer