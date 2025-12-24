import React from 'react';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <footer className="flex md:flex-row flex-col-reverse items-center justify-between text-left w-full px-8 rounded-t border-t border-gray-500">
      <div className='flex items-center gap-4'>
        <img className="hidden md:block w-20" src={assets.logo_three} alt="logo" />
        <div className="hidden md:block h-7 w-px bg-gray-500/60"></div>
        <div className="py-4 pl-5 flex items-center justify-center">
          <img className="w-4 mr-1" src={assets.copy_icon} alt="" />
          <p className="text-gray-500 text-xs md:text-sm">2025 Qdmey All Rights resreved</p>
        </div>
      </div>
      <div className='flex items-center gap-3 max-md:mt-4'>
        <a href="#">
          <img src={assets.facebook_icon} alt="facebook_icon" />
        </a>
        <a href="#">
          <img src={assets.x_platform} alt="facebook_icon" />
        </a>
        <a href="#">
          <img src={assets.instagram_icon} alt="facebook_icon" />
        </a>
      </div>
    </footer>
  );
};
export default Footer;