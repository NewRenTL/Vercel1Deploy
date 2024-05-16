import { useState } from "react";
import AddUsers from "./AddUsers";


const BarFind = ({onBuscar}) => {
  const [busqueda, setBusqueda] =  useState('');


  const handleBuscar = (event) =>{
    const valorBusqueda = event.target.value;
    setBusqueda(valorBusqueda)
    onBuscar(valorBusqueda)
  }

  return (
      <input
        type="text"
        placeholder="Buscar por Nombre..."
        className="border bg-transparent text-white rounded-md py-2 px-4 mr-2 focus:outline-none border-indigo-600 "
        value={busqueda}
        onChange={handleBuscar}
      />
      
  )
}

export default BarFind