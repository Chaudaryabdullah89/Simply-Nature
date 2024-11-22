import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/Shopcontext";
import assets from "../assets/assets";
const Products = () => {
  const { productid } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productdata, setproductdata] = useState(false);
  const [image, setimage] = useState("");
  const [size, setsize] = useState("");
  const fetchproduct = async () => {
    products.map((item) => {
      if (item._id === productid) {
        setproductdata(item);
        setimage(item.image[0]);

        return null;
      }
    });
  };
  useEffect(() => {
    fetchproduct();
  }, [productid, products]);
  return productdata ? (
    <div>
      <div className="border-t-2 pt-10 mt-10 transition-all ease-in duration-500 text-start max-w-[1280px] mx-auto ">
        <div className="flex flex-col md:flex-row gap-12 ">
          {/* product image */}
          <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
            <div className="flex flex-col w-[25%] sm:w-40">
              {productdata.image.map((item, index) => (
                <img
                  onClick={() => setimage(item)}
                  src={item}
                  key={index}
                  className="  sm:mb-3 flex-shrink-0 cursor-pointer "
                  alt=""
                />
              ))}
            </div>
            <div className="w-[80%]  flex-shrink-0 cursor-pointer">
              <img src={image} alt="" />
            </div>
          </div>
          {/* Dertailes loading */}
          <div className="flex-col flex gap-2 text-start w-[36%] ">
            <h1 className="font-semibold text-2xl ">{productdata.name}</h1>
            <div className="flex items-center gap-1 mt-2">
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_dull_icon} alt="" className="w-3 5" />
              <p className="pl-2 text-gray-500"> 47</p>
            </div>
            <p className="text-2xl font-semibold">
              {" "}
              {currency}
              {productdata.price}{" "}
            </p>
            <p className="py-5 text-gray-500"> {productdata.description} </p>
            <p className="text-lg font-semibold pb-2">Select size</p>
            <div className="flex gap-2">
              {productdata.sizes.map((item, index) => (
                <button
                  key={`${item}-${index}`}
                  onClick={() => setsize(item)}
                  className={`p-2 px-4 border ${
                    size === item ? "border-red-600" : "border-gray-300"
                  }  `}
                >
                  {item}
                </button>
              ))}
            </div>
            <button className="px-8 mt-8 py-3 bg-black text-white w-fit">
              Add To Cart
            </button>
            <div className="border-t-2 my-8 leading-relaxed text-gray-500 ">
              <p className="pt-5">100% Orignal Product</p>
              <p>Cash on delivery is avaible on this product</p>
              <p>Easy return and exchange policy within 7 days</p>
            </div>
          </div>
        </div>
      </div>
      {/* des */}
      <div className="" >
        
      </div>
    </div>
  ) : (
    <div>
      <h1>Product not found</h1>
    </div>
  );
};

export default Products;
