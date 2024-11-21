import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/Shopcontext';
import Productitem from './Productitem';
const PlantsCollection = () => {
    const  {products} = useContext(ShopContext);
    const [latestproducts, setlatestproducts] = useState([]); 
    useEffect(() => {
    setlatestproducts(products.slice(0,8));

    },[products]);
return (
    <div className='w-full bg-slate-100 '>
         <div className='max-w-[1280px] mx-auto py-10'>

         <h2  className='font-semibold text-3xl px-3 md:text-4xl  py-10'>
            Our plants Collection
         </h2>
         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 p-3 ">
                    {
                            latestproducts.map((item,index)=>(
                                    <Productitem key={index} id={item._id} name={item.name} price={item.price} image={item.image} category={item.category} />
                            ))
                            
                    }

        </div>
        <div className='flex gap-10' >

 <button 
        className="mt-5 px-4 py-2 bg-red-600 flex justify-center items-center text-center mx-auto  text-white rounded hover:bg-green-600 transition duration-300"
        onClick={() => setlatestproducts(products.slice(0, latestproducts.length + 8))} 
 >
        See more Products
 </button>
 {/* <button 
        className="mt-5 px-4 py-2 bg-red-600 flex justify-center items-center text-center mx-auto  text-white rounded hover:bg-green-600 transition duration-300"
        onClick={() => setlatestproducts(products.slice(0, latestproducts.length - 4))} 
 >
        Hide Products
 </button> */}
        </div>

         </div>
    </div>
)
}

export default PlantsCollection