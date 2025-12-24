import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { assets } from "../../assets/assets";
import CourseCard from "../../components/student/CourseCard";
import CoursesSection from "../../components/student/CoursesSection";
import AppContext from "../../context/AppContext";
import Footer from "../../components/student/Footer";
import { useState } from "react";
import SearchBar from "../../components/student/SearchBar";

const CoursesList = () => {
  const { navigate, allCourses } = useContext(AppContext);
  const { input } = useParams();

  const [filterCourse, setFilterCourse] = useState([]);
  useEffect(() => {
    if (allCourses && allCourses.length > 0) {
      const tempCourses = allCourses.slice();
      input
        ? setFilterCourse(
            tempCourses.filter((item) =>
              item.courseTitle.toLowerCase().includes(input.toLowerCase())
            )
          )
        : setFilterCourse(tempCourses);
    }
  }, [allCourses, input]);

  return (
    <div>
      <div className="flex justify-center my-12">
        <SearchBar data={input} />
      </div>

      <div className="w-full flex justify-center items-center mb-20">
        <div className="w-9/12 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
          {filterCourse.length > 0 ? (
            filterCourse.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full text-lg">
              " <span className="inline-block text-rose-600">{input}</span> " course not found
            </p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CoursesList;
