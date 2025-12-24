import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import CourseCard from "./CourseCard";

const CoursesSection = () => {

const {allCourses}=useContext(AppContext)

  return (
    <div className="w-10/12 pb-14 text-center" >
      <div className="flex flex-col justify-center items-center gap-5 text-center mt-10 mb-10">
        <h1 className="md:text-4xl capitalize font-medium text-slate-800">
          Study with top experts
        </h1>
        <p className="text-gray-500 w-3/5">
          Join thousands of learners in our highest-rated courses. From software
          development to self-improvement, our carefully designed content helps
          you achieve real-world results.
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mb-10">

      


    {allCourses.slice(4,8).map((course,index )=><CourseCard key={index} course={course}/>)}




        
     
      </div>
      <Link to={"/course-list"} onClick={()=>{scrollTo(0,0)}} className="py-3 px-5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all">All Courses</Link>
    </div>
  );
};

export default CoursesSection;
