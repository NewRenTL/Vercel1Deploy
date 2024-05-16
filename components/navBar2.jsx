"use client";

import{ useState, useEffect } from "react";

import Link from "next/link";

const NavBar2 = () => {
  const [menuVisible1, setMenuVisible1] = useState(true);
  const [menuVisible2, setMenuVisible2] = useState(false);
  const [myFirstClick1, setMyFirstClick1] = useState(false);
  const toogleMenu = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) {
        setMenuVisible2(!menuVisible2);
      } else {
        setMenuVisible1(!menuVisible1);
      }
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setMenuVisible1(false);
        setMenuVisible2(false);
      } else {
        setMenuVisible1(true);
        setMenuVisible2(false);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }
    // Eliminar el listener cuando el componente se desmonte
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener("resize", handleResize);
      }};

  }, []);

  return (
    <>
      <nav className="mx-auto py-2 px-2 w-[90%] flex text-white font-jakarta_plus justify-between md:items-center">
        <div className="icon_dlevel font-semibold text-3xl md:text-5xl">
          <h2>DLEVEL</h2>
        </div>
        <div
          className={`main-buttons ${
            typeof window !== "undefined" && window.innerWidth < 768
              ? menuVisible2
                ? "opacity-100"
                : "opacity-0"
              : menuVisible1
              ? "opacity-100"
              : "opacity-0"
          } md:block absolute top-[4em] transition-opacity duration-500 ease-in-out w-full md:w-auto left-0 md:static md:mx-auto md:transition-opacity md:duration-500 md:ease-in-out`}
        >
          <ul className="md:flex flex-row md:flex-row  items-center gap-[3vw]">
            <li className="transition-colors border-y-2 border-cyan-800 md:border-none bg-[#070941] ease-in-out duration-300 px-2 py-2 md:bg-transparent hover:text-teal-300 ">
              <Link href="/aboutUs">About us</Link>
            </li>
            <li className="transition-colors border-b-2 border-indigo-800 md:border-none bg-[#070941] ease-in-out duration-300 px-2 py-2 md:bg-transparent hover:text-teal-300">
              <Link href="/projects">Projects</Link>
            </li>
            {/* 
            <li className="transition-colors border-b-2 border-indigo-800 md:border-none bg-[#070941] ease-in-out duration-300 px-2 py-2 md:bg-transparent hover:text-teal-300">
              <Link href="/">Repositories</Link>
            </li>
            */}
            <li className="transition-colors border-b-2 border-indigo-800 md:border-none bg-[#070941] ease-in-out duration-300 px-2 py-2 md:bg-transparent hover:text-teal-300">
              <Link href="/api/v1/autenticacion/login">Login</Link>
            </li>
          </ul>
        </div>
        <div
          className="justify-center flex rounded-lg transition-colors ease-in-out duration-450 hover:rounded-lg hover:bg-opacity-10 hover:bg-blue-800 p-2"
          onClick={toogleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            class="fill-white w-8 cursor-pointer"
            viewBox="0 0 50 50"
          >
            <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
          </svg>
        </div>
      </nav>
    </>
  );
};

export default NavBar2;
