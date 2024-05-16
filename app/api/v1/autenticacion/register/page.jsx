"use client"
import React from "react";
import Link from "next/link";
import { useState } from "react";

const Register = () => {
  const REGISTRO_INICIAL = {
    nombres: "",
    apellidos: "",
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(REGISTRO_INICIAL);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://repository-proyecto.azurewebsites.net/api/v1/autenticacion/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        console.log("Registro exitoso");
        setFormData(REGISTRO_INICIAL);
      } else {
        console.error("Error al registrar");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <>
      <div className="h-[100vh] flex font-jakarta_plus text-white justify-center items-center">
        <div>
          <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
            <h1 className="text-4xl text-whitefond-bold text-center mb-6">
              Register
            </h1>
            <form action="">
              <div className="relative my-4">
                <input
                  type="text"
                  name="nombres"
                  value={formData.nombres}
                  onChange={handleChange}
                  className="block w-72 pt-2.5 pb-1 px-0 text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus-border-blue-600 peer"
                />
                <label
                  htmlFor=""
                  className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6"
                >
                  Nombre
                </label>
              </div>
              <div className="relative my-4">
                <input
                  type="text"
                  name="apellidos"
                  value={formData.apellidos}
                  onChange={handleChange}
                  className="block w-72 pt-2.5 pb-1 px-0 text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus-border-blue-600 peer"
                />
                <label
                  htmlFor=""
                  className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6"
                >
                  Apellidos
                </label>
              </div>
              <div className="relative my-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-72 pt-2.5 pb-1 px-0 text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus-border-blue-600 peer"
                />
                <label
                  htmlFor=""
                  className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6"
                >
                  Email
                </label>
              </div>
              <div className="relative my-4">
                <input
                  type="password"
                  name="password1"
                  className="block w-72 pt-2.5 pb-1 px-0 text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus-border-blue-600 peer"
                />
                <label
                  htmlFor=""
                  className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6"
                >
                  Password
                </label>
              </div>
              <div className="relative my-4">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-72 pt-2.5 pb-1 px-0 text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus-border-blue-600 peer"
                />
                <label
                  htmlFor=""
                  className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6"
                >
                  Confirmar Password
                </label>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="Remember me">Remember me </label>
                </div>
                <Link
                  href="/register"
                  className="text-white hover:text-blue-600 transition-colors duration-300 cursor-pointer"
                >
                  Forgot Password?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300"
              >
                Register
              </button>
              <div>
                <span className="text-white hover:text-blue-600 transition-colors duration-300 cursor-pointer">
                  Already create an account? &nbsp;{" "}
                  <Link href="/login"> Login</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
