
import { createContext, useEffect, useState } from "react"; // org
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration";
const AppContext = createContext();
export const AppContextProvider = (props) => {
  const currency = import.meta.env.VITE_CURRENCY;

  const navigate = useNavigate();

  const [allCourses, setAllCourses] = useState([]);
  const [isEducator, setIsEducator] = useState(true);
  const[enrolledCourse,setEnrolledCourse]=useState([])

  const fetchAllCourses = async () =>
    //fetch All Courses

    {
      setAllCourses(dummyCourses);
    };

  const averageRating = (course) => {
    // calculate average rating
    if (course.courseRatings.length === 0) {
      return 0;
    }
    let totalRating = 0;
    course.courseRatings.forEach((rating) => {
      totalRating = totalRating + rating.rating;
    });

    return totalRating / course.courseRatings.length;
  };

  const chapterTimeCalc = (chapter) => {
    // calc course chapter time
    let time = 0;
    chapter.chapterContent.map(
      (lecture) => (time = time + lecture.lectureDuration)
    );
    return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
  };

  const courseDurationCalc = (course) => {
    let time = 0;
    course.courseContent.map((chapter) =>
      chapter.chapterContent.map(
        (lecture) => (time = time + lecture.lectureDuration)
      )
    );
    return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
  };

  const numberLecturesCalc = (course) => {
    let totalLecture = 0;
    course.courseContent.forEach((chapter) => {
      if (Array.isArray(chapter.chapterContent)) {
        totalLecture = totalLecture + chapter.chapterContent.length;
      }
    });
    return totalLecture;
  };


const fetchEnrolledCourse=async()=>{
  setEnrolledCourse(dummyCourses)
}


  
  useEffect(() => {
    fetchAllCourses(), [];
    fetchEnrolledCourse()
  });
  const value = {
    currency,
    allCourses,
    averageRating,
    navigate,
    isEducator,
    setIsEducator,
    chapterTimeCalc,
    courseDurationCalc,
    numberLecturesCalc,
    enrolledCourse,fetchEnrolledCourse,
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
export default AppContext;
