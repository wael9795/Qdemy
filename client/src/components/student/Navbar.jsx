import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import AppContext from "../../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";





const Navbar = () => {
  const isCourseListPage = location.pathname.includes("/course-list");
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const { navigate, isEducator, backendUrl, setIsEducator, getToken } = useContext(AppContext)

  const becomeEducator = async () => {
    try {

      if (isEducator) {
        navigate("/educator");
        return;
      }
      const token = await getToken();
      const { data } = await axios.get(backendUrl + '/api/educator/update-role', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (data.success) {
        setIsEducator(true);
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }

    } catch (error) {
      toast.error(error.message);
    }

  }



  return (

    <div
      className={`shadow-gray-400 shadow-md flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 py-3.5 ${isCourseListPage ? "bg-white" : "bg-indigo-100/80"
        }`}
    >
      <Link to={"/"} onClick={() => scrollTo(0, 0)}>
        <img
          src={assets.logo_three}
          alt="Logo"
          className="w-28 lg:w-30 cursor-pointer"
        />
      </Link>
      <div className="hidden md:flex items-center gap-5 text-gray-600">
        <div className="flex items-center gap-5">
          {user && (
            <>
              <button onClick={becomeEducator} className="cursor-pointer">{isEducator ? "Educator Dashboard" : "Become Educator"}</button>|
              <Link to="/my-enrollments">My Enrollments</Link>
            </>
          )}
        </div>
        {user ? (
          <UserButton
            appearance={{
              elements: {
                avatarBox: 'w-10 h-10'
              }
            }}
          />
        ) : (
          <button
            onClick={() => openSignIn()}
            className="bg-red-500 text-white px-5 py-2 rounded-full cursor-pointer duration-300 hover:bg-red-600"
          >
            Create New Account
          </button>
        )}
      </div>
      <div className="md:hidden flex items-center gap-2 sm:gap-5 text-gray-500">
        <div className="flex items-center gap-1 sm:gap-2 max-sm:text-xs">
          {user && (
            <>
              <button onClick={becomeEducator} className="cursor-pointer">{isEducator ? "Educator Dashboard" : "Become Educator"}</button>|
              <Link to="/my-enrollments">My Enrollments</Link>
            </>
          )}
        </div>
        {user ? (
          <UserButton
            appearance={{
              elements: {
                avatarBox: 'w-10 h-10'
              }
            }}
          />
        ) : (
          <button onClick={() => openSignIn()}>
            <img src={assets.user_icon} alt="" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
