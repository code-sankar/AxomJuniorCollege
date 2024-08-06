import React from 'react'
import { NavLink } from 'react-router-dom'


function StudentAdmin() {
  return (
    <div className="flex items-center pt-1" >
    <NavLink
      to="/studentportal"
      className={({ isActive }) =>
        `bg-orange-500 hover:bg-red-500 text-white text-center text-2xl pt-5 font-bold py-2 px-4 w-full h-28 rounded-full duration-200 ${
          isActive ? "bg-blue-700" : "bg-blue-500"
        }`
      }
    >
      Student Portal For Result/Fee Payment/Admission
    </NavLink>
  </div>
  )
}

export default  StudentAdmin


// This is a student portal button