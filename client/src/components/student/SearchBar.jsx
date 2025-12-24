import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import {  useNavigate } from 'react-router-dom'

const SearchBar = ({data}) => {
  const navigate=useNavigate()
  const [input ,setInput]=useState(data?data:"")
  const onSearchHanller=(e)=>{
    e.preventDefault()
    navigate("/course-list/"+input)
  }
  return (
    
        <form onSubmit={onSearchHanller} className='flex items-center max-w-xl w-full bg-white border-gray-300 border-2 rounded-full p-1 pl-3 mb-10'>
        <img src={assets.search_icon} alt="search_icon"/>
        <input onChange={(e)=>setInput(e.target.value)} value={input} className='block bg-white rounded-xl p-3 outline-none w-full h-full placeholder:text-sm placeholder:md:text-base' placeholder='search about course' type="text" name="" id="" />
        <button type='submit' className='px-8 py-2 text-white bg-red-500 cursor-pointer hover:bg-red-600 transition-all rounded-full'>search</button>
      </form>
    
  )
}

export default SearchBar
