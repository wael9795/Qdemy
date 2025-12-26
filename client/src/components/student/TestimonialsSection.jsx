import React from 'react'
import { assets, dummyTestimonial } from '../../assets/assets';

const TestimonialsSection = () => {
  return (
    <div className="w-10/12">
      <div className="flex flex-col justify-center items-center gap-5 text-center mt-10 mb-10">
        <h1 className="md:text-4xl capitalize font-medium text-slate-800">
          Testimonials Section
        </h1>
        <p className="text-gray-500 w-3/5">
          "Be part of a thriving community of learners enrolled in our top-rated
          courses. Whether you're diving into software development or exploring
          personal growth, our expertly crafted content is designed to drive
          real results."
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-10">
        {dummyTestimonial.map((testimonial, index) => (
          <div key={index} className="p-5 rounded-lg flex flex-col justify-between items-start shadow-md shadow-gray-400 border border-slate-300">
            <div className="flex items-center gap-1">
              {[Array.from({ length: 5 }).map((_, index) => (
                <img className="w-5" key={index} src={index < Math.floor(testimonial.rating) ? assets.star_gold_3 : assets.star_white} alt="star" />
              ))]}
            </div>
            <div>
              <p className="text-gray-500 my-5">{testimonial.feedback}</p>
            </div>
            <div className="flex justify-start items-center gap-4">
              <img className="w-16 rounded-full" src={testimonial.image} alt={testimonial.name} />
              <div>
                <h1 className="font-bold text-lg">{testimonial.name}</h1>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestimonialsSection
