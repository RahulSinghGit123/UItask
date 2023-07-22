import React from "react";
import {AiFillCaretDown} from 'react-icons/ai';
import {FiBell} from 'react-icons/fi';
import NavDown from './navDown';

export default function Profile() {
  return (
    <div>
      <div className="md:hidden flex justify-end p-2">
      <FiBell className="h-10 w-8 text-gray-500" />
      </div>
      <div className="grid md:h-full md:bg-gray-100 md:p-16 p-6 space-y-6">
        <div className="flex space-x-4 items-center">
          <div>
            <img
              src="/favicon.ico"
              alt="Logo"
              className="border-white drop-shadow-lg shadow-black rounded-full h-20 w-20"
            />
          </div>
          <div className="items-center">
            <h1 className="text-4xl font-serif font-bold">Hi Mike,</h1>
            <p className="font-serif text-gray-400">welcome back,</p>
          </div>
        </div>
        <div className="space-y-4 ml-6 bg-gray-50 md:bg-gray-100 p-4 rounded-3xl">
          <div className="font-serif text-lg font-bold">Today</div>
          <div className="grid space-y-2">
            <span className="text-4xl font-bold">$19,892</span>
            <span className="text-gray-400 text-sm font-bold">Account balance</span>
          </div>
          <div className="grid space-y-2">
            <span className="text-xl font-bold">$4,000</span>
            <span className="text-gray-400 text-sm font-bold">Year-to-Date Contribution</span>
          </div>
          <div className="grid space-y-2">
            <span className="text-xl font-bold">$1,892</span>
            <span className="text-gray-400 text-sm font-bold">Total Interest</span>
          </div>
          <button className="flex justify-center items-center space-x-2 bg-indigo-600 text-white p-2 rounded-lg">
            <span>I Want To</span>
            <AiFillCaretDown/>
          </button>
        </div>
        <div className="bg-gray-50 md:bg-gray-100 p-4 rounded-3xl space-y-6 divide-y ml-6">
          <p className="font-family text-lg font-bold">Recent Transaction</p>
          <div className="grid ">
            <span className="text-md text-gray-400 text-sm font-bold">2020-08-07</span>
            <span className="font-serif text-md font-bold">Withdrawal Transfer To Bank-XXX11</span>
          </div>
          <div className="hidden md:blockgrid">
            <span className="text-gray-400 text-sm font-bold">2020-07-21</span>
            <span className="font-family text-sm font-bold">Withdrawal Transfer To Bank-XXX11</span>
          </div>
          <div className="grid">
            <span className="text-gray-400 text-sm font-bold">2020-07-16</span>
            <span className="font-family text-sm font-bold">Withdrawal Transfer To Bank-XXX11</span>
          </div>
        </div>
      </div>
      <NavDown/>
    </div>
  );
}
