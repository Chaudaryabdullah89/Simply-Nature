import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/Shopcontext";
import Productitem from "./Productitem";
import Title from "./Title";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestproducts, setlatestproducts] = useState([]); // Fix useState initialization


  useEffect(() => {
    setlatestproducts(products.slice(0, 8));
  }, [products]);

  return (
    <div className="my-10 mx-auto " style={{maxWidth :'1280px' , }}>
      <div className="text-center py-12 pb-20 text-3xl">
        <Title text1={"latest"} text2={"Collection"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
          inventore corporis similique aspernatur, dolore aliquid atque eveniet
        </p>
      </div>
      {/* rendring the product  */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 p-3 ">
            {
                latestproducts.map((item,index)=>(
                    <Productitem key={index} id={item._id} name={item.name} price={item.price} image={item.image} category={item.category} />
                ))
                
            }
      </div>
      <Link to="/shop">

      <button 
        className="mt-5 px-4 py-2 bg-red-600 flex justify-center items-center text-center mx-auto  text-white rounded hover:bg-green-600 transition duration-300"
       
 >
       Browse More
 </button>
      </Link>
    </div>
  );
};

export default LatestCollection;
