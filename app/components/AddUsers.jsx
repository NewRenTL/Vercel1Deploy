"use client"
import { FaUserPlus  } from "react-icons/fa";
import Form from "./Form";
import { useState } from "react";


const addUser = ({onAddCard}) => {
    const [modal, setModal] = useState(false)

    const openModal = () => {
      setModal(true);
    };
  
    const closeModal = () => {
      setModal(false);
    };

    
    return (
        <>
            <button
                className="bg-transparent hover:bg-indigo-600  text-white font-bold py-3 px-4 rounded focus:outline-none"
                onClick={openModal}
            >
                <FaUserPlus />
            </button>
            {
                modal && (
                    <Form isModalOpen={openModal} isModalClose={closeModal}  addCard={onAddCard}/>
                )
            }
        </>
    )
}

export default addUser