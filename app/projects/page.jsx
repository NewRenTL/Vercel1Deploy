
import React from "react";
import Link from 'next/link'
import Timeline from "@/app/components/Timeline";


const ProjectsPage = () => {
  return (
    <div className="h-[100vh] font-jakarta_plus pt-16 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="m-6 p-3 rounded-3xl bg-gradient-to-b from-indigo-950 backdrop-blur hover:bg-teal-950 hover:text-white transition-all hover:text-2xl hover:scale-105">
          <h3 className="text-center m-6">
            <b>Proyecto con PHP</b>
          </h3>
          <div className="flex flex-col md:flex-row items-center">
            <img
              src="/img/img-PHP.jpg"
              alt="php"
              className="h-44 w-44 rounded-xl"
            />
            <p className="m-3 h-[50%] flex items-center">
              PHP (PHP: Hypertext Preprocessor) es un lenguaje de programación
              de código abierto ampliamente utilizado en el desarrollo web. En
              otras palabras, es la tecnología que permite crear sitios web
              dinámicos, donde el contenido puede cambiar según la interacción
              del usuario.
            </p>
          </div>
          <div className="flex justify-end">
            <Link
              href="/aboutUs"
              className="bg-transparent hover:bg-sky-200 text-white font-semibold hover:text-black py-2 px-4 border border-slate-950 hover:border-transparent rounded"
            >
              Ingresar
            </Link>
          </div>
        </div>

        <div
          className="m-6 p-3 rounded-3xl bg-gradient-to-b from-indigo-950 backdrop-blur hover:bg-teal-950 hover:text-white transition-all hover:text-2xl hover:scale-105"
          
        >
          <h3 className="text-center m-6">
            <b>Proyecto con JavaScript</b>
          </h3>
          <div className="flex flex-col md:flex-row items-center">
            <img
              src="../img/image-JS.jpeg"
              alt="JavaScript"
              className="h-44 w-44 rounded-xl"
            />
            <p className="m-3  h-[50%] flex items-center">
              JavaScript es un lenguaje de programación que los desarrolladores
              utilizan para hacer páginas web interactivas. Desde actualizar
              fuentes de redes sociales a mostrar animaciones y mapas
              interactivos, las funciones de JavaScript pueden mejorar la
              experiencia del usuario de un sitio web.
            </p>
          </div>
          <div className="flex justify-end">
            <Link
              href="/aboutUs"
              className="bg-transparent hover:bg-sky-200 text-white font-semibold hover:text-black py-2 px-4 border border-slate-950 hover:border-transparent rounded"
            >
              Ingresar
            </Link>
          </div>
        </div>

        <div
          className="m-6 p-3 rounded-3xl bg-gradient-to-b from-indigo-950 backdrop-blur hover:bg-teal-950 hover:text-white transition-all hover:text-2xl hover:scale-105"
          
        >
          <h3 className="text-center m-6">
            <b>Proyecto con Python</b>
          </h3>
          <div className="flex flex-col md:flex-row items-center">
            <img
              src="/img/image-Python.jpg"
              alt="Python"
              className="h-44 w-44 rounded-xl"
            />
            <p className="m-3 h-[50%] flex items-center">
              Python es un lenguaje de programación ampliamente utilizado en las
              aplicaciones web, el desarrollo de software, la ciencia de datos y
              el machine learning (ML). Los desarrolladores utilizan Python
              porque es eficiente y fácil de aprender, además de que se puede
              ejecutar en muchas plataformas diferentes.
            </p>
          </div>
          <div className="flex justify-end">
            <Link
              href="/aboutUs"
              className="bg-transparent hover:bg-sky-200 text-white font-semibold hover:text-black py-2 px-4 border border-slate-950 hover:border-transparent rounded"
            >
              Ingresar
            </Link>
          </div>
        </div>

        <div
          className="m-6 p-3 rounded-3xl bg-gradient-to-b from-indigo-950 backdrop-blur hover:bg-teal-950 hover:text-white transition-all hover:text-2xl hover:scale-105"
          
        >
          <h3 className="text-center m-6">
            <b>Proyecto con React</b>
          </h3>
          <div className="flex flex-col md:flex-row items-center">
            <img
              src="/img/image-React.png"
              alt="React"
              className="h-44 w-48 rounded-xl"
            />
            <p className="m-3 h-[50%] flex items-center">
              Es una de las librerías más populares de JavaScript para el
              desarrollo de aplicaciones móviles y web. Creada por Facebook,
              React contiene una colección de fragmentos de código JavaScript
              reutilizables utilizados para crear interfaces de usuario (UI)
              llamadas componentes.
            </p>
          </div>
          <div className="flex justify-end">
            <Link
              href="/aboutUs"
              className="bg-transparent hover:bg-sky-200 text-white font-semibold hover:text-black py-2 px-4 border border-slate-950 hover:border-transparent rounded">
              Ingresar
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full mt-6">
            <Timeline/>
      </div>
    </div>
  );
};

export default ProjectsPage;
