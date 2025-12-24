import React from 'react';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="w-full">
      <div className="w-full bg-slate-800 py-8 flex flex-col items-center">
        <div className="w-10/12 grid lg:grid-cols-3 gap-20 md:grid-cols-2 grid-cols-1">
          <div>
            <div className="flex items-center">
              <img className="w-10" src={assets.q_icon} alt="q_icon" />
              <p className="text-xl text-white ml-px">Qdemy</p>
            </div>
            <p className="text-gray-300 mt-6 text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate pariatur laboriosam itaque magni. Adipisci, provident dignissimos ratione corporis corrupti aliquid.
            </p>
          </div>
          <div>
            <p className="text-white text-base mb-5">Company</p>
            <ul>
              <li>
                <Link to={'/'} onClick={() => scrollTo(0, 0)} className="text-red-500 hover:text-red-600 transition-all text-sm">
                  home
                </Link>
              </li>
              <li>
                <Link to={'/course-list'} onClick={() => scrollTo(0, 0)} className="text-base text-red-500 hover:text-red-600 transition-all">
                  course list
                </Link>
              </li>
              <li>
                <Link to={'/'} onClick={() => scrollTo(0, 0)} className="text-base text-red-500 hover:text-red-600 transition-all">
                  courseSection
                </Link>
              </li>
              <li>
                <Link to={'/'} onClick={() => scrollTo(0, 0)} className="text-base text-red-500 hover:text-red-600 transition-all">
                  testimonials section
                </Link>
              </li>
              <li>
                <Link to={'/'} onClick={() => scrollTo(0, 0)} className="text-base text-red-500 hover:text-red-600 transition-all">
                  footer
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <p className="text-white text-base mb-5">Subscripe</p>
            <input type="email" className="bg-white w-full py-3 px-5 mb-3 border-none outline-none placeholder:text-sm" placeholder="enter your email" />
            <Link className="block w-full py-3 px-5 text-base bg-red-500 hover:bg-red-600 transition-all text-white text-center">Subscribe Now</Link>
          </div>
        </div>
      </div>
      <div className=" bg-red-500 py-4 pl-5 flex items-center justify-center">
        <img className="w-4 mr-1" src={assets.copy_icon} alt="" />
        <p className="text-white">2025 Qdmey All Rights resreved</p>
      </div>
    </footer>
  );
};

export default Footer;
