import React from "react";
import { assets } from "../../assets/assets";

const CallToAction = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col justify-center items-center gap-5 text-center mt-10 mb-10">
        <h1 className="md:text-4xl capitalize font-medium text-slate-800">
          Upgrade Your Future
        </h1>
        <p className="text-gray-500 w-3/5">
          Start your learning journey today and join thousands who have upgraded
          their skills through our expert-led courses and curated content.
        </p>
      </div>
     
        <button className="py-3 px-5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all mb-10">Take the First Step </button>
      
    </div>
  );
};

export default CallToAction;
