import React from "react";
import Button from "./Button";
import Title from "./Title";

const Hero = () => {
  return (
    <div
      className="h-full md:h-[90vh] bg-center bg-no-repeat -mt-28 top-0 left-0 -z-50 bg-cover"
      style={{
        backgroundImage:
          "url(https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2020/07/hero-bg.jpg)",
      }}
    >
      <div className="wants items-center pl-8 pt-36 pb-10 sm:pl-28 md:pl-26 md:pt-56 lg:pt-70 items-center text-start my-auto ">
{/* 
    <h2 className="font-medium text-2xl">
    Best Quality Plants
    </h2> */}
    <Title text1='' text2='Best Quality Plants'  />
    <h2 className="font-medium text-[#2b2f38] text-4xl md:text-5xl lg:text-7xl pb-10 leading-tight">
    Amazing Variety <br /> Of Plants Starting <br /> Just $6
    </h2>
    <Button value={'Shop Now'} />
      </div>
    </div>
  );
};

export default Hero;
