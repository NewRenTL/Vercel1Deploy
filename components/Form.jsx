"use client"
import { useState } from "react";
import { FaTimes } from "react-icons/fa";


const Form = ({ isModalOpen, isModalClose, addCard }) => {
    const modalOpenClasses = isModalOpen ? 'block' : 'hidden';
    const [tools, setTools] = useState([])

    const ESTADO_INICIAL = {
        id: '',
        img: '',
        title: '',
        text: '',
        program: []
    }

    const [form, setFrom] = useState(ESTADO_INICIAL)


    const handleToolChange = (event) => {
        const tool = event.target.value;
        const marcado = event.target.checked;
        if (marcado) {
            setTools((program) => [...program, tool])
        } else {
            setTools((program) => program.filter((filtrado) => filtrado !== tool))
        }

    }

    const handleChange = (event) => {
        const { name, value } = event.target

        setFrom({ ...form, [name]: value })
    }

    const handleSaveFrom = (event) => {
        event.preventDefault();

        const newCard = {
            ...form,
            id: crypto.randomUUID(),
            program: tools
        };

        addCard(newCard);
        setFrom(ESTADO_INICIAL);
        setTools([]);
        isModalClose();

    };


    return (
        <div
            className={`fixed inset-0 overflow-y-auto ${modalOpenClasses}`}
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            {/* Fondo oscuro del modal */}
            <div className="flex items-center justify-center h-screen ">
                {/* Fondo del la pantalla*/}

                <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"></div>

                <div className="inline-block align-bottom rounded-lg text-left overflow-hidden 
          shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    {/* Aquí está tu formulario */}
                    <div className=" bg-[#1F1D2B] px-4 pt-5 pb-4 sm:p-6 sm:pb-4 ">
                        <div className="bg-[#1F1D2B] px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button
                                onClick={isModalClose}
                                className="text-white "
                            >
                                <FaTimes />
                            </button>
                        </div>
                        <form className="text-white" onSubmit={handleSaveFrom}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-bold mb-2 ">
                                    Programador
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    required
                                    onChange={handleChange}
                                    id="name"
                                    value={form.title}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 bg-transparent leading-tight focus:outline-none focus:shadow-outline  border-indigo-600 "
                                    placeholder="Ingresa el nombre"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-bold mb-2">
                                    Descripción
                                </label>
                                <textarea
                                    name="text"
                                    id="text"
                                    onChange={handleChange}
                                    rows={4}
                                    value={form.text}
                                    className=" shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline bg-transparent  border-indigo-600 "
                                    defaultValue={''}
                                    placeholder="Ingrese una descripción"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="name" className="block  text-sm font-bold mb-2">
                                    Herramientas
                                </label>
                                <div className="mt-2.5 flex flex-row gap-11 justify-between">
                                    <div className="flex flex-col gap-3 items-center">
                                        <div>
                                            <input
                                                type="checkbox"
                                                id="JavaScript"
                                                value="JavaScript"
                                                onChange={handleToolChange}
                                                className="w-4 h-4 bg-gray-100 border-gray-300 rounded "
                                            />
                                            <label htmlFor="JavaScript" className="ms-2 text-sm font-medium text-white">
                                                JavaScript
                                            </label>
                                        </div>
                                        <div>
                                            <input
                                                type="checkbox"
                                                id="bootstrap"
                                                value="Bootstrap"
                                                onChange={handleToolChange}
                                                className="w-4 h-4 bg-gray-100 border-gray-300 rounded "
                                            />
                                            <label htmlFor="bootstrap" className="ms-2 text-sm font-medium text-white">
                                                Bootstrap
                                            </label>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <div>
                                            <input
                                                type="checkbox"
                                                id="React"
                                                value="React"
                                                onChange={handleToolChange}
                                                className="w-4 h-4 bg-gray-100 border-gray-300 rounded "
                                            />
                                            <label htmlFor="React" className="ms-2 text-sm font-medium text-white">
                                                React
                                            </label>
                                        </div>
                                        <div>
                                            <input
                                                type="checkbox"
                                                id="Python"
                                                value="Python"
                                                onChange={handleToolChange}
                                                className="w-4 h-4 bg-gray-100 border-gray-300 rounded "
                                            />
                                            <label htmlFor="Python" className="ms-2 text-sm font-medium text-white">
                                                Python
                                            </label>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-3 items-center">
                                        <div>
                                            <input
                                                type="checkbox"
                                                id="Java"
                                                value="Java"
                                                onChange={handleToolChange}
                                                className="w-4 h-4 bg-gray-100 border-gray-300 rounded "
                                            />
                                            <label htmlFor="Java" className="ms-2 text-sm font-medium text-white">
                                                Java
                                            </label>
                                        </div>
                                        <div>
                                            <input
                                                type="checkbox"
                                                id="C#"
                                                value="C#"
                                                onChange={handleToolChange}
                                                className="w-4 h-4 bg-gray-100 border-gray-300 rounded "
                                            />
                                            <label htmlFor="C#" className="ms-2 text-sm font-medium text-white">
                                                C#__
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-4 flex items-center justify-center w-full">
                                <label htmlFor="file" 
                                className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                    
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click para cargar foto</span></p>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        id="file"
                                        required
                                        onChange={handleToolChange}
                                        className="hidden"
                                    />
                                </label>
                            </div>
                            <div className="mt-10 flex flex-row gap-8">
                                <button
                                    type="submit"
                                    className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Guardar
                                </button>
                            </div>


                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form