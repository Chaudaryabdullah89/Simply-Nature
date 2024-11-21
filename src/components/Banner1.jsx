import React from 'react'
import { Link } from 'react-router-dom'

const Banner1 = () => {
return (
    <>
    <div className='mx-auto justify-center py-28 md:py-20 my-0 md:my-20 ' style={{maxWidth : '1280px'}}>
        <div className='flex flex-col md:flex-row gap-10 md:gap-28 p-3 justify-center'>
            <div className='flex flex-col gap-5 md:gap-24'>
                <h2 className='font-semibold text-2xl'>
                    Need help in choosing the <br /> right plants?
                </h2>
                <Link to={'/contact'}  className='text-red-600 font-semibold uppercase hover:text-gray-500 transition-all'>
                <i className="ri-phone-fill rotate-180"></i> Ask For Help
                </Link>
            </div>
            <div className='flex flex-col gap-5 md:w-1/2 mt-1 text-gray-500 text-lg'>
                <p>
                Commodo sociosqu venenatis cras dolor sagittis integer luctus sem primis eget maecenas sedurna malesuada consectetuer.
                </p>
                <p>
                Ornare integer commodo mauris et ligula purus, praesent cubilia laboriosam viverra. Mattis id rhoncus. Integer lacus eu volutpat fusce. Elit etiam phasellus suscipit suscipit dapibus, condimentum tempor quis, turpis luctus dolor sapien vivamus.
                </p>
            </div>
        </div>
    </div>
    <hr className='mb-1' />
    </>

)
}

export default Banner1