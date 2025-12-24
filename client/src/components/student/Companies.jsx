import React from "react";
import { assets } from "../../assets/assets";
    
const Companies = () => {
  return (
    <div className="text-center">
      <p className="text-gray-500 md:text-base text-sm capitalize">Relied on by learners across</p>
      <div className="flex items-center justify-center w-full gap-5 md:gap-24 my-7">
        <img className="block w-10 md:w-20" src={assets.com_visa} alt="com_visa" />
        <img className="block w-7 md:w-14" src={assets.com_apple} alt="com_apple" />
        <img className="block w-7 md:w-14" src={assets.com_google} alt="com_google" />
        <img className="block w-12 md:w-24" src={assets.com_amazon} alt="com_amazon" />
        <img className="block w-12 md:w-24" src={assets.com_mastercard} alt="com_mastercard" />
      </div>
    </div>
  );
};

export default Companies;
