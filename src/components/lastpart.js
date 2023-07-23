import React from "react";
import { AiFillCaretDown, AiOutlineClose } from "react-icons/ai";
import Circlepercentage from "./circlepercentage";

export default function Lastpart() {
  return (
    <div>
      <div className="md:hidden grid justify-items-end p-2 mr-4">
        <AiOutlineClose className="h-8 w-8"/>
      </div>
      <div className="md:hidden mb-8 p-4">
        <div>
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
              <span className="mr-10 md:mr-0">Salary : </span>
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
          <div className="flex justify-between md:p-4 items- space-x-4 md:space-x-10">
            <div style={{ width: 100, height: 100 }}>
              <Circlepercentage percentage={78} />
              <p className="text-center">Average</p>
            </div>
            <div style={{ width: 100, height: 100 }}>
              <Circlepercentage percentage={95} />
              <p className="text-center">Top</p>
            </div>
            <div style={{ width: 100, height: 100 }}>
              <Circlepercentage percentage={59} />
              <p className="text-center">Me</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 grid md:p-16 p-6 md:h-full md:space-y-10 space-y-5 md:mt-10 rounded-[40px]">
        <div className="grid  md:p-8 space-y-4 rounded-lg">
          <p className="font-bold font-italic text-lg">Retirement Stratgy</p>
          <div className="space-y-4">
            <div className="space-y-2 w-64">
              <div className="space-y-2">
                <p className="Imployee Contribution font-italic text-lg">
                  Imployee Contribution
                </p>
                <div className="flex justify-between items-center space-x-2">
                  <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                    <div class="bg-cyan-300 h-2.5 rounded-full dark:bg-gray-300 w-[45%]"></div>
                  </div>
                  <div className="bg-white px-2 py-1 rounded">45%</div>
                </div>
              </div>
              <div className="space-y-2">
                <p className="Imployee Contribution font-italic text-lg">
                  Retirement Age
                </p>
                <div className=" flex justify-center items-center space-x-2">
                  <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                    <div class="bg-cyan-300 h-2.5 rounded-full dark:bg-gray-300 w-[65%]"></div>
                  </div>
                  <div className="bg-white px-2 py-1 rounded">65%</div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <p>Imployer Contribution</p>
                <div>8.4%</div>
              </div>
              <div className="flex justify-between items-center">
                <p>Interest Rate</p>
                <div>5%</div>
              </div>
            </div>
          </div>
          <button className="hidden md:block bg-indigo-600 text-white text-md w-full rounded-lg h-10">
            Update
          </button>
          <p className="hidden md:flex space-x-1 text-blue-600">
            <div>View Help Docs</div>
            <div>&gt;</div>
          </p>
        </div>
        <div className="hidden md:block border-l border-indigo-600 p-6 h-40">
          <p className="grid">
            Are you considering a
            <div className="font-bold text-md">Housing Advance?</div>
          </p>
          <p>Limited time reduced interest.</p>
          <p className="flex space-x-1 text-blue-600">
            <div>Learn more</div>
            <div>&gt;</div>
          </p>
        </div>
      </div>
      <button className="md:hidden bg-indigo-600 text-white text-md w-full h-12">
        Update
      </button>
    </div>
  );
}
