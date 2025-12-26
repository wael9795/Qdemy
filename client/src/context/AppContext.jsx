import { createContext, use, useEffect, useState } from "react"; // org
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration";
import { useAuth, useUser } from "@clerk/clerk-react";
import axios from "axios";
import { toast } from "react-toastify";
const AppContext = createContext();

export const AppContextProvider = (props) => {

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const currency = import.meta.env.VITE_CURRENCY;

  const navigate = useNavigate();

  const { getToken } = useAuth();
  const { user } = useUser();

  const [allCourses, setAllCourses] = useState([]);
  const [isEducator, setIsEducator] = useState(false);
  const [enrolledCourse, setEnrolledCourse] = useState([]);
  const [userData, setUserData] = useState(null);



  //fetch All Courses

  const fetchAllCourses = async () => {
    try {
      const { data } = await axios.get(backendUrl + '/api/course/all');
      if (data.success) {
        setAllCourses(data.courses);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  //fetch User Data

  const fetchUserData = async () => {

    if (user.publicMetadata.role === "educator") {
      setIsEducator(true);
    }

    try {
      const token = await getToken();
      console.log('Token:', token);
      const { data } = await axios.get(backendUrl + '/api/user/data', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (data.success) {
        setUserData(data.user);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }





  const averageRating = (course) => {
    // calculate average rating
    if (!course?.courseRatings || course.courseRatings.length === 0) {
      return 0;
    }
    let totalRating = 0;
    course.courseRatings.forEach((rating) => {
      totalRating = totalRating + rating.rating;
    });

    return Math.floor(totalRating / course.courseRatings.length); // return average rating
  };







  const chapterTimeCalc = (chapter) => {
    // calc course chapter time
    let time = 0;
    chapter.chapterContent?.map((lecture) => (time = time + lecture.lectureDuration));
    return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
  };

  const courseDurationCalc = (course) => {
    let time = 0;
    course.courseContent?.map((chapter) => chapter.chapterContent?.map((lecture) => (time = time + lecture.lectureDuration)));
    return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
  };

  const numberLecturesCalc = (course) => {
    let totalLecture = 0;
    course.courseContent?.forEach((chapter) => {
      if (Array.isArray(chapter.chapterContent)) {
        totalLecture = totalLecture + chapter.chapterContent.length;
      }
    });
    return totalLecture;
  };



  const fetchEnrolledCourse = async () => {

    try {
      const token = await getToken();
      const { data } = await axios.get(backendUrl + '/api/user/enrolled-courses', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (data.success) {
        setEnrolledCourse(data.enrolledCourses.reverse());
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };



  useEffect(() => {
    fetchAllCourses();
  }, []);


  useEffect(() => {
    if (user) {
      fetchUserData();
      fetchEnrolledCourse();
    }
  }, [user]);

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
    enrolledCourse,
    fetchEnrolledCourse, backendUrl, userData, setUserData, getToken, fetchAllCourses
  };
  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};
export default AppContext;
