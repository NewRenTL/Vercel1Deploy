"use client"
import React from "react";
import BarFind from "@/app/components/BarFind"
import { useState} from "react";
import AddUsers from "@/app/components/AddUsers";
import ListCard from "@/app/components/ListCard";
import data from "@/app/data/data.json"

/*

const Programmers = () => {

  const [listCards, setListCards] = useState([]);

  const fetchProgrammers = async () =>{
      const token = localStorage.getItem('token')
      
      try {
        const response = await fetch('https://repository-proyecto.azurewebsites.net/api/v1/user/programmers/ListProgrammer', 
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if(response.ok){
          const data = await response.json();
          console.log(data)
          setListCards(data)
          
        }else {
          console.error('Error al obtener los programadores');
        }
      } catch (error) {
        console.error('Error al realizar la solicitud:', error);
      }
    };

// Para la búsqueda 
  const handleBusqueda = (busqueda) => {
    const busquedaMin = busqueda.toLowerCase();
    if(busquedaMin === ''){
      fetchProgrammers();
    }else {
      const filtrado = listCards.filter((card) =>
        card.nomApellido.toLowerCase().includes(busquedaMin)
      );
      setListCards(filtrado);
    }
    
  };

  useEffect(() => {
    fetchProgrammers();
  }, []);

  //Listar cuando se agreagan a la base de datos
  const handleCard = (newCard) => {
    setListCards([...listCards, newCard]);
  };

  return (
    <div className="w-full min-h-screen">
      <main className="container mx-auto py-32 px-5">
        <div className="flex items-center justify-start py-5">
          <BarFind onBuscar={handleBusqueda} />
          <AddUsers onAddCard={handleCard} />
        </div>
        <ListCard listCards={listCards} />
      </main>
    </div>
  );
};
*/


const Programmers = () => {
  
  const [listFull, setListFull] = useState(data);
  const [listCards, setListCards] = useState(data);
  const [actuator, setActuator] = useState(false);


  const saveData = async (updatedList) => {
    setListCards(updatedList)
    setListFull(updatedList)
  };

  const handleBusqueda = (busqueda) => {
    if (busqueda !== "") {
      const filtrado = listCards.filter((card) =>
        card.title.toLowerCase().includes(busqueda.toLowerCase())
      );

      setListCards(filtrado);
    }
    else{
      setListCards(listFull)
    }
  };

  const handleCard = (newCard) => {
      saveData([...listCards,newCard])
  };

  return (
    <div className="w-full min-h-screen">
      <main className="container mx-auto py-32 px-5">
        <div className="flex items-center justify-start py-5">
          <BarFind onBuscar={handleBusqueda} />
          <AddUsers onAddCard={handleCard} />
        </div>
        <ListCard listCards={listCards} />
      </main>
    </div>
  );
};

export default Programmers;
