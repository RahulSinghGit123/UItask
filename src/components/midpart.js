import { AiFillCaretDown } from "react-icons/ai";
import Circlepercentage from "./circlepercentage";
import Barchart from "./chart";
import NavDown from "./navDown";
import { FiBell } from "react-icons/fi";
export default function Midpart() {
  return (
    <>
      <div className="md:bg-white bg-gray-100 grid md:h-full md:py-16 px-8 p-2 py-6 md:px-20 space-y-10">
        <div className="md:hidden flex justify-end p-2">
          <FiBell className="h-10 w-8 text-gray-500" />
        </div>
        <div className="pt-10">
          <p className="font-bold text-indigo-600">Retirement Income</p>
          <p className="text-2xl font-serif font-bold">Starting Year 2006</p>
        </div>
        <div className="md:flex justify-between items-center md:space-x-16">
          <div className="space-y-2 md:w-40 py-2 md:border-b-2 border-indigo-600">
            <p className="text-4xl font-bold">$300,000</p>
            <p className="text-gray-400 text-sm font-bold">My Goal</p>
          </div>
          <div className="hidden md:block space-y-2 md:w-40 py-2 md:border-b-2 border-indigo-600">
            <p className="md:text-4xl text-2xl font-bold">59%</p>
            <p className="text-gray-400 text-sm font-bold ">Goal Achieved</p>
          </div>
          <div className="hidden md:block space-y-2 md:w-40 py-2 md:border-b-2 border-indigo-600">
            <p className="md:text-4xl text-2xl font-bold">$300</p>
            <p className="text-gray-400 text-sm font-bold">
              Est. Monthly Income
            </p>
          </div>
          <div className="md:hidden flex justify-between items-center">
            <div className="space-y-2 md:w-40 py-2 md:border-b-2 border-indigo-600">
              <p className="md:text-4xl text-2xl font-bold">59%</p>
              <p className="text-gray-400 text-sm font-bold ">Goal Achieved</p>
            </div>
            <div className="space-y-2 md:w-40 py-2 md:border-b-2 border-indigo-600">
              <p className="md:text-4xl text-2xl font-bold">$300</p>
              <p className="text-gray-400 text-sm font-bold">
                Est. Monthly Income
              </p>
            </div>
          </div>
        </div>
        <Barchart />
        <div className="hidden md:block">
          <div className="pt-10 md:pt-0">
            <p className="text-xl font-serif">How do I compare to my peers ?</p>
            <p className="text-gray-400 text-sm font-bold">
              These numbers represent current goal achievement
            </p>
          </div>
          <div className="md:flex md:space-x-16">
            <div className="divide-y">
              <div className="flex items-center md:justify-between space-x-2 md:p-4 py-4">
                <span className="mr-10 md:mr-0">Age :</span>
                <span>Under 30</span>
                <span>
                  <AiFillCaretDown />
                </span>
              </div>
              <div className="flex items-center md:justify-between space-x-2 md:p-4 py-4">
                <span className="mr-10 md:mr-0">Salary :</span>
                <span>20k-30k</span>
                <span>
                  <AiFillCaretDown />
                </span>
              </div>
              <div className="flex items-center md:justify-between space-x-2 md:p-4 py-4">
                <span className="mr-10 md:mr-0">Gender :</span>
                <span>Male </span>
                <span>
                  <AiFillCaretDown />
                </span>
              </div>
            </div>
            <div className="flex justify-between md:p-4 space-x-4 md:space-x-10">
              <div style={{ width: 100, height: 200 }}>
                <Circlepercentage percentage={78} />
                <p className="text-center">Average</p>
              </div>
              <div style={{ width: 100, height: 200 }}>
                <Circlepercentage percentage={95} />
                <p className="text-center">Top</p>
              </div>
              <div style={{ width: 100, height: 200 }}>
                <Circlepercentage percentage={59} />
                <p className="text-center">Me</p>
              </div>
            </div>
          </div>
        </div>
        <NavDown />
      </div>
    </>
  );
}
