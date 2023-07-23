import {
  FiHome,
  FiUser,
  FiSearch,
  FiCalendar,
  FiLogOut,
  FiBell,
  FiList,
} from "react-icons/fi";
import { GiDragonfly } from "react-icons/gi";
import Profile from "./components/profile";
import Midpart from "./components/midpart";
import Lastpart from "./components/lastpart";
import { useState } from "react";
function App() {
  const [page1, setPage1] = useState(true);
  const [page2, setPage2] = useState(true);
  const [page3, setPage3] = useState(true);

  function Button1() {
    setPage1(true);
    setPage2(false);
    setPage3(false);
  }
  function Button2() {
    setPage2(true);
    setPage1(false);
    setPage3(false);
  }

  function Button3() {
    setPage3(true);
    setPage1(false);
    setPage2(false);
  }
  return (
    <>
      <div className="relative bg-gray-200 md:h-screen">
        <div className="absolute md:hidden grid gap-2 py-2 right-0 top-[400px] pr-2">
          <button
            onClick={Button1}
            className="bg-red-600 py-1 px-2 active:drop-shadow w-10"
          >
            1
          </button>
          <button
            onClick={Button2}
            className="bg-red-600 py-1 px-2 active:drop-shadow w-10"
          >
            2
          </button>
          <button
            onClick={Button3}
            className="bg-red-600 py-1 px-2 active:drop-shadow w-10"
          >
            3
          </button>
        </div>
        <div className="bg-white divide-y md:divide-none md:flex justify-between md:space-x-6 rounded-[40px] h-full">
          {page1 ? (
            <div className="md:flex">
              <nav className="hidden h-full md:flex flex-col justify-between p-4">
                <div className="space-y-20">
                  <div className="space-y-6">
                    <GiDragonfly className="h-10 w-8 text-blue-600" />
                    <FiSearch className="h-8 w-8 text-gray-500" />
                  </div>
                  <div className="space-y-6">
                    <FiHome className="h-10 w-10 text-white bg-blue-600 p-1 rounded-lg drop-shadow-xl" />
                    <FiCalendar className="h-10 w-8 text-gray-500" />
                    <FiList className="h-10 w-8 text-gray-500" />
                    <FiUser className="h-10 w-8 text-gray-500" />
                  </div>
                </div>
                <div className="space-y-8">
                  <FiBell className="h-10 w-8 text-gray-500" />
                  <FiLogOut className="h-10 w-8 text-gray-500" />
                </div>
              </nav>
              <Profile />
            </div>
          ) : (
            ""
          )}
          {page2 ? <Midpart /> : ""}
          {page3 ? <Lastpart /> : ""}
        </div>
      </div>
    </>
  );
}

export default App;
