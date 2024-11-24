import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/Shopcontext";
import assets from "../assets/assets";
import RelatedProducts from "../components/Relatedproducts";
const Products = () => {
  const { productid } = useParams();
  const { products, addtocart, currency, updatequantity, cartitems } =
    useContext(ShopContext);
  const [productdata, setproductdata] = useState(false);
  const [image, setimage] = useState("");
  const [size, setsize] = useState("");
  const [cartdata,setCartdata] = useState([]);
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

 useEffect(()=>{
  const temp = [];
  for(let items in cartitems){
    for(let item in cartitems[items]){
      try {
        if(cartitems[items][item] > 0){
          temp.push({
            _id : items,
            size : item,
            quantity : cartitems[items][item]
          })
        }
      } catch (error) {
        console.error(error);
        
      }
    }
  }
  setCartdata(temp)
 },[cartitems])
// console.log(cartdata);

const [zoomStyle, setZoomStyle] = useState({
  transform: "scale(1)",
  transformOrigin: "center",
});

const handleMouseMove = (e) => {
  const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
  const x = ((e.pageX - left) / width) * 100;
  const y = ((e.pageY - top) / height) * 100;

  setZoomStyle({
    transform: "scale(2)", // Zoom level (e.g., 2x)
    transformOrigin: `${x}% ${y}%`, // Sets zoom origin based on mouse position
  });
};

const handleMouseLeave = () => {
  setZoomStyle({
    transform: "scale(1)",
    transformOrigin: "center", // Reset zoom origin
  });
};

  return productdata ? (
    <div className=" max-w-[1280px] mx-auto my-10 ">
      <div className="border-t-2 pt-10 mt-10 transition-all ease-in duration-500 text-center ">
        <div className="flex flex-col md:flex-row gap-12 ">
          {/* product image */}
          <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
            <div className="flex ml-6 sm:ml-0 flex-col  w-[24%]  sm:w-40">
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
            <div className="w-[90%] h-full sm:w-[80%]  mx-auto overflow-hidden cursor-zoom-in">
      <img
        src={image}
        alt="Zoomable"
        className="w-full h-full object-cover transition-transform duration-300"
        style={zoomStyle} 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />
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
              {productdata.price} <span className="text-lg font-normal" > + Free Delivery </span> 
            </p>
            <p className="py-5 text-gray-500"> {productdata.description} </p>
            <p className="text-xl font-semibold pb-2">Select The Size</p>
            <div className="flex gap-2">
              {productdata.sizes.map((item, index) => (
                <button
                  onClick={() => setsize(item)}
                  key={`${item}-${index}`}
                  value={item}
                  className={`border ${
                    item === size ? "border-orange-500" : ""
                  } py-2 px-4 bg-slate-100 `}
                >
                  {item}
                </button>
               
))}
            </div>
            <div className="flex flex-col">

              <p className="text-xl font-semibold pb-2">Select The Quantity</p>
            <input
                type="number"
                min={1}
                defaultValue={1}
                className=" border py-2 w-16 rounded-lg text-center text-black"
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : updatequantity(productdata._id,productdata.size,Number(e.target.value) )
                    // : console.log('work done')
                    
                    
                }
              />
          

                  
             
                
                
              
            </div>
            <button
              onClick={() => {
                addtocart(productdata._id, size);
              }}
              className="px-8 py-2 bg-red-600 text-white mt-2 font-semibold rounded-full shadow-lg hover:bg-green-500  transition duration-300 ease-in-out transform hover:scale-105 w-fit"
            >
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
        <div className="border px-4 py-8 flex flex-col gap-5 text-gray-500">
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
      <h2 className="text-semibold text-center text-5xl my-24">
        Related Product{" "}
      </h2>
      <RelatedProducts
        category={productdata.category}
        subCategory={productdata.subCategory}
      />
    </div>
  ) : (
    <div>
      <h1>Product not found</h1>
    </div>
  );
};

export default Products;
