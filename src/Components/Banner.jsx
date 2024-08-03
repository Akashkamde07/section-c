import React from 'react';

const Banner = () => {
  return (
    <div className="relative mt-3 flex justify-center items-center w-full max-w-7xl mx-auto overflow-hidden">
      <img src="image.png" alt="banner" className="object-cover  rounded-3xl"style={{height:"283px",width:"1383px"}} />
      <div className="absolute inset-0 bg-gradient-to-r from-[#6F259F]  rounded-3xl to-transparent"></div>
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white font-sans px-4">
        <h1 className="text-4xl m-0 font-bold text-6xl">
          Here to <span className="text-blue-500">help</span>
        </h1>
        <p className="text-lg mt-2">
          Get in touch with us and we will get back to you and <br />
          help you as soon as we can!
        </p>
      </div>
    </div>
  );
};

export default Banner;
