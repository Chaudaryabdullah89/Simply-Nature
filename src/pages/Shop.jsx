import React, { useContext, useEffect, useState } from 'react';
import Banner1 from '../components/Banner1';
import PlantsCollection from '../components/PlantsCollection';
import Productitem from '../components/Productitem';
import Shophero from '../components/Shophero';
import { ShopContext } from '../Context/Shopcontext';
  
const Shop = () => {
  const { products } = useContext(ShopContext);
  const [latestproducts, setlatestproducts] = useState([]); // Fix useState initialization


  useEffect(() => {
    setlatestproducts(products.slice(0, 4));
  }, [products]);

  return (
<>
<Shophero />

<div className="my-20 mx-auto " style={{maxWidth :'1280px' , }}>
      <div className=" py-12  pl-3 text-3xl">
        <h1 className=' font-semibold text-2xl md:text-4xl '>Featured Collection</h1>
      </div>
      {/* rendring the product  */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 p-3 ">
            {
                latestproducts.map((item,index)=>(
                    <Productitem key={index} id={item._id} name={item.name} price={item.price} image={item.image} category={item.category} />
                ))
                
            }
      </div>
    </div>
    <PlantsCollection />
    <Banner1 />
</>
  )
}

export default Shop