import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/Shopcontext';

const Productitem = ({ id, name, price, image,category }) => {
    const { currency } = useContext(ShopContext);

    return (
        <>
            <Link to={`/product/${id}`} className='text-gray cursor-pointer pb-10 '>
                <div className='overflow-hidden'>
                    <img src={image} alt="" className='hover:scale-110 transition-all ease-in-out rounded-lg ' />
                </div>
                <p className='text-gray-400 pt-4 '>{category}</p>
                <p className='pt-2 pb-1 text-sm'>{name}</p>
                <div className='flex items-center'>
                    {[...Array(5)].map((_, index) => (
                        <i key={index} className='ri-star-fill text-yellow-500'></i>
                    ))}
                </div>
                <div className='relative '>
                    <div className='absolute bg-red-600 rounded-full w-8 justify-center text-center align-middle items-center h-8 -top-2 right-0 m-2 opacity-100 hover:bg-red-700 transition-opacity'>
                        <i className='ri-shopping-cart-line text-white text-xl relative gogoo hover:rotate-180 '></i>
                    </div>
                </div>
                <p className='text-small font-medium'>{currency}{price}</p>
            </Link>
        </>
    );
}

export default Productitem;