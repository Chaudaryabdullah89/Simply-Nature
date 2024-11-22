import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/Shopcontext";
import assets from "../assets/assets";
import RelatedProducts from "../components/Relatedproducts";
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
    <div className=" max-w-[1280px] mx-auto">
      <div className="border-t-2 pt-10 mt-10 transition-all ease-in duration-500 text-center ">
        <div className="flex flex-col md:flex-row gap-12 ">
          {/* product image */}
          <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
            <div className="flex ml-8 sm:ml-0 flex-col  w-[35%] sm:w-40">
              {productdata.image.map((item, index) => (
                <img
                  onClick={() => setimage(item)}
                  src={item}
                  key={index}
                  className="    sm:mb-3 flex-shrink-0 cursor-pointer "
                  alt=""
                /> 
              ))}
            </div>
            <div className="w-[80%]  items-center sm:mx-auto mx-auto flex-shrink-0 cursor-pointer">
              <img src={image} alt="" className="rounded-lg" />
            </div>
          </div>
          {/* Dertailes loading */}
          <div className="flex-col w-full flex gap-2 text-start sm:w-[45%] px-5 sm:pl-0 ">
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
      <div className="flex flex-col mt-10 ">
        <div className="flex flex-row mx-auto sm:mx-0">
          <h2 className="text-lg border py-2 px-3 font-semibold">
            Description
          </h2>
          <h2 className="text-lg border py-2 px-3 font-semibold">
            Reviews (541)
          </h2>
        </div>
        <div className="border px-4 py-8 flex flex-col gap-5 text-gray-500" >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, enim.
            Cum culpa dignissimos deleniti, quos nobis ipsam vel repellat animi
            voluptatum quaerat, in sunt eum eius magnam facere aut dicta!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            tenetur illum error cupiditate enim, sint amet suscipit similique
            rem et consequuntur aspernatur dolor. Eaque, sint enim quo officia
            minus quisquam.
          </p>
        </div>
      </div>
      <h2 className="text-semibold text-center text-5xl my-24" >Related Product </h2>
      <RelatedProducts category={productdata.category} subCategory={productdata.subCategory} />
    </div>
  ) : (
    <div>
      <h1>Product not found</h1>
    </div>
  );
};

export default Products;
