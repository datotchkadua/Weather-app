import React from "react";
import searchIcon from "../assets/SearchIcon.svg";

const Input = () => {
  return (
    <div className="flex  ">
      <div className=" flex justify-center relative w-full">
        <div className="absolute ">
          <img src={searchIcon} alt="" className="   w-7 h-7" />
        </div>
        <input
          placeholder="Search location..."
          type="text"
          className="w-2/5 h-10 rounded-3xl px-5 
        py-2 text-lg outline-none
         bg-[#D9D9D9]
          placeholder:text-slate-400 border border-slate-300"
        />
      </div>
    </div>
  );
};

export default Input;
