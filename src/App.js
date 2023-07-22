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
import Lastpart from './components/lastpart';
function App() {
  return (
    <>
      <div className="md:bg-gray-200 md:h-screen">
        <div className="bg-white divide-y md:divide-none md:flex justify-between md:space-x-6 rounded-[40px] h-full">
          <div className="md:flex">
            <nav className="hidden sm:block h-full md:flex flex-col justify-between p-4">
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
          <Midpart />
          <Lastpart />
        </div>
      </div>
    </>
  );
}

export default App;
