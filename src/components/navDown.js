import React from "react";
import {
  FiHome,
  FiUser,
  FiSearch,
  FiCalendar,
  FiList,
} from "react-icons/fi";

export default function NavDown() {
  return (
    <>
      <div className="flex justify-between items-center p-2 sm:hidden">
        <FiHome className="h-8 w-8 text-white bg-blue-600 p-1 rounded-lg drop-shadow-xl" />
        <FiCalendar className="h-8 w-8 text-gray-500" />
        <FiList className="h-8 w-8 text-gray-500" />
        <FiUser className="h-8 w-8 text-gray-500" />
        <FiSearch className="h-8 w-8 text-gray-500" />
      </div>
    </>
  );
}
