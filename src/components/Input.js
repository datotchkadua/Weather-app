import React from "react";
import searchIcon from "../assets/SearchIcon.svg";
import whiteSearchIcon from "../assets/whiteSearchIcon.svg";
import { useGlobalContext } from "../context";

const Input = () => {
  const { setLcation, fetchData, errorMsg, isError } = useGlobalContext();

  const formSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className="flex justify-center mb-10">
      <div className="flex justify-center items-center">
        {isError ? (
          <p className="bg-[#f8d7da] text-[#721c24] rounded-sm text-center text-lg uppercase justify-center p-2 leading-6">
            {errorMsg} !!!
          </p>
        ) : null}
        <form
          onSubmit={formSubmit}
          className="flex items-center w-[310px]  sm:min-w-[420px] mt-3"
        >
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <img src={searchIcon} alt="" className="   w-6 h-6" />
            </div>

            <input
              onChange={(e) => setLcation(e.target.value)}
              type="text"
              className="bg-gray-50 border border-gray-300
             text-gray-900 text-lg rounded-lg 
              block  pl-10 p-2.5 outline-none w-[250px] sm:min-w-[320px] "
              placeholder="Search location..."
            />
          </div>
          <button
            type="submit"
            className="p-3 ml-3 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800  focus:outline-none  dark:bg-blue-600 dark:hover:bg-blue-700 "
          >
            <img
              src={whiteSearchIcon}
              alt=""
              className=" text-white fill-white   w-6 h-6 "
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Input;
