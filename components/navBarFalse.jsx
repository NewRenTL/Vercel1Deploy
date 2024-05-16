import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="mx-auto w-3/6 bg-slate-300 text-center">
      <ul className= "w-5/6 mx-auto flex flex-row justify-center text-center *:rounded-full">
        <li className="group hover:bg-orange-500 bg-red-500 w-5/6 p-1 transition-colors duration-300">
          <Link
            href="/"
            className="group-hover:text-white p-1 transition-all group-hover:font-bold"
          >
            Home
          </Link>
        </li>
        <li className="group hover:bg-orange-500 bg-red-500 w-5/6 p-1 transition-colors duration-300 ">
          <Link
            href="/store"
            className="group-hover:text-white transition-all group-hover:font-bold"
          >
            Store
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
