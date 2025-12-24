import React from "react";
import { assets } from "../../assets/assets";
import SearchBar from "./SearchBar";
import Companies from "./Companies";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full md:pt-35 pt-28 px-8 md:px-0 text-center bg-gradient-to-b from-indigo-100/80">
      
      <h1 className="md:text-large text-small relative font-bold text-gray-800 max-w-3xl mx-auto capitalize">
        Unlock your potential with expert-led courses tailored to your journey 
      </h1>
      <p className="md:block hidden text-gray-500 max-w-3xl mx-auto my-6">
        Explore, learn, and grow with content that adapts to your ambition
      </p>
      <p className="md:hidden text-gray-500 max-w-sm mx-auto my-6">
        Lorem ipsum dolor sit amet consectetur.
      </p>
      

      <SearchBar />
   
    </div>
  );
};

export default Hero;
