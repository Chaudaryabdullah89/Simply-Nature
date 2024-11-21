import React from 'react'
import { NavLink } from 'react-router-dom'

const Button = ({value}) => {
return (
    <div className="flex  items-center">
            <button className="px-6 py-2 bg-red-600 text-white font-semibold rounded-full shadow-lg hover:bg-green-500  transition duration-300 ease-in-out transform hover:scale-105">
                    <NavLink to='/shop' className='text-md'>{value}</NavLink>
            </button>
    </div>
)
}

export default Button