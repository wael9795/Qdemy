import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
import AppContext from '../../context/AppContext'

const CourseCard = ({course}) => {

const {currency ,averageRating}=useContext(AppContext)



  return (
     <Link to={'/course/'+course._id} className="mb-5 overflow-hidden cursor-pointer text-left shadow-md shadow-gray-400 rounded-md transition-all" onClick={()=>scrollTo(0,0)}>
             <img className="w-full" src={course.courseThumbnail} alt="" />
             <div className="p-4 pb-5" >
               <h4 className='md:text-base font-bold capitalize'>{course.courseTitle}</h4>
               <p className='md:text-base text-sm text-gray-500'>Qdemy Group</p>
               <div className="flex items-center gap-3">
                 <p className='md:text-base text-sm text-blue-700'>{averageRating(course)}</p>
                 <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_,i)=>(<img className="w-4" key={i} src={i<Math.floor(averageRating(course))?assets.star_gold_3:assets.star_white} alt='' />))}
                 </div>
                 <p className='md:text-base text-sm'>{course.courseRatings.length}</p>
               </div>
               <p className='md:text-base text-sm text-green-600'>{currency}{(course.coursePrice - course.discount*course.coursePrice /100).toFixed(2)}</p>
             </div>
           </Link>
  )
}

export default CourseCard
