"use client"
import React from "react";
import Link from "next/link";
import { useState } from "react";

const Login = () => {
  const LOGIN_INICIAL = {
    email: "",
    password: "",
  };

  const [inLogin, setInLogin] = useState(LOGIN_INICIAL);

  const handleChangeLogin = (event) => {
    const { name, value } = event.target;
    setInLogin({ ...inLogin, [name]: value });
  };

  const handleSubmitLogin = async (event) => {
    event.preventDefault();
    console.log("Print")
    try {
      console.log("Print2")
      const response = await fetch(
        "https://repository-proyecto.azurewebsites.net/api/v1/autenticacion/login",
        {
          method: "POST",
          mode:'cors',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inLogin),
        }
      );
      console.log("pum")

      if (response.ok) {
        const data = await response.json();

        localStorage.setItem("token", data.token);

        window.location.href = "/api/v1/user/programmers";

        console.log("Registro exitoso");
      } else {
        console.error("Error al registrar");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <>
      <div className="h-[100vh] flex font-jakarta_plus pt-16 text-white justify-center items-center">
        <div>
          <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
            <h1 className="text-4xl text-whitefond-bold text-center mb-6">
              Login
            </h1>
            <form onSubmit={handleSubmitLogin}>
              <div className="relative my-4">
                <input
                  type="email"
                  name="email"
                  value={inLogin.email}
                  onChange={handleChangeLogin}
                  className="block w-72 pt-2.5 pb-1 px-0 text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus-border-blue-600 peer"
                />
                <label
                  htmlFor=""
                  className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6"
                >
                  Your Email
                </label>
              </div>
              <div className="relative my-4">
                <input
                  type="password"
                  name="password"
                  value={inLogin.password}
                  onChange={handleChangeLogin}
                  className="block w-72 pt-2.5 pb-1 px-0 text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus-border-blue-600 peer"
                />
                <label
                  htmlFor=""
                  className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6"
                >
                  Your Password
                </label>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="Remember me">Remember me </label>
                </div>
                <Link
                  href="/api/v1/autenticacion/register"
                  className="text-white hover:text-blue-600 transition-colors duration-300 cursor-pointer"
                >
                  Forgot Password?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300"
              >
                Login
              </button>
              <div>
                <span className="text-white hover:text-blue-600 transition-colors duration-300 cursor-pointer">
                  New Here?&nbsp;
                  <Link href="/api/v1/autenticacion/register"> 
                  Create an Account</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
