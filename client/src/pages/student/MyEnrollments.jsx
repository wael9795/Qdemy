import React, { useContext, useState } from 'react';
import AppContext from '../../context/AppContext';
import {Line} from "rc-progress"
import Footer from '../../components/student/Footer';

const MyEnrollments = () => {
  const { enrolledCourse, courseDurationCalc ,navigate} = useContext(AppContext);
  const [progArray, setProgArray] = useState([
    { lectureCompleted: 2, totalLecture: 4 },
    { lectureCompleted: 1, totalLecture: 5 },
    { lectureCompleted: 3, totalLecture: 6 },
    { lectureCompleted: 4, totalLecture: 4 },
    { lectureCompleted: 0, totalLecture: 3 },
    { lectureCompleted: 5, totalLecture: 7 },
    { lectureCompleted: 6, totalLecture: 8 },
    { lectureCompleted: 2, totalLecture: 6 },
    { lectureCompleted: 4, totalLecture: 10 },
    { lectureCompleted: 3, totalLecture: 5 },
    { lectureCompleted: 7, totalLecture: 7 },
    { lectureCompleted: 1, totalLecture: 4 },
    { lectureCompleted: 0, totalLecture: 2 },
    { lectureCompleted: 5, totalLecture: 5 },
  ]);
  return (
    <>
      <div className="md:px-36 px-8 pt-10 mb-11 bg-gradient-to-b from-indigo-100/80">
        <h1 className="font-semibold text-2xl">My Enrollments</h1>
        <table className="md:table-auto table-fixed w-full overflow-hidden border mt-10">
          <thead className="text-gray-900 border-b border-gray-500/20 text-sm text-left max-sm:hidden">
            <tr>
              <th className="px-4 py-3 font-semibold truncate">Course</th>
              <th className="px-4 py-3 font-semibold truncate">Duration</th>
              <th className="px-4 py-3 font-semibold truncate">Completed</th>
              <th className="px-4 py-3 font-semibold truncate">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {enrolledCourse.map((course, index) => (
              <tr className="border-b border-gray-500/20" key={index}>
                <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3">
                  <img className="w-14 sm:w-24 md:w-28" src={course.courseThumbnail} alt="" />
                  <div className="flex-1">
                    <p className="mb-1 max-sm:text-sm">{course.courseTitle}</p>
                    <Line className='bg-gray-300 rounded-full' strokeWidth={2}percent={progArray[index]?(progArray[index].lectureCompleted *100)/progArray[index].totalLecture:0}/>
                  </div>
                </td>
                <td className="px-4 py-3 max-sm:hidden">{courseDurationCalc(course)}</td>
                <td className="px-4 py-3 max-sm:hidden">
                  {progArray[index] && `${progArray[index].lectureCompleted} / ${progArray[index].totalLecture}`} <span>lectures</span>
                </td>
                <td className="px-4 py-3 max-sm:text-right">
                  <button onClick={()=>navigate("/player/"+course._id)} className="bg-red-500 hover:bg-red-600 duration-300 px-3 sm:px-5 py-2 max-sm:text-xs rounded text-white">
                    {progArray[index] && progArray[index].lectureCompleted / progArray[index].totalLecture ===1?"Completed":"on going"}
                    </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer/>
    </>
  );
};

export default MyEnrollments;
