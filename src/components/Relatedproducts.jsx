import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/Shopcontext';
import Productitem from './Productitem';

const Relatedproducts = ({ category, subCategory }) => {
  const { products} = useContext(ShopContext);
  const [relatedproducts, setrelatedproducts] = useState([]);
  useEffect(() => {
    if (products.length > 0) {
        let productscopy = products.slice();
        productscopy = productscopy.filter((item) => item.category === category && item.subCategory === subCategory);
        setrelatedproducts(productscopy.slice(0, 5));
    }
}, [products, category, subCategory]);
    return (
        <div className='my-0 px-5 '>
        {/* <div className='text-center text-3xl py-2 flex flex-col gap-10'> */}
    
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
        relatedproducts.map((product, index) => (
          <Productitem key={`${product._id}-${index}`} id={product._id} name={product.name} price={product.price} image={product.image} />
        ))
        }
        </div>
        {/* </div> */}
                </div>
  )
}

export default Relatedproducts