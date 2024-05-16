import React from "react";

const AboutUs = () => {
  return (
    <div className="h-[100vh] font-jakarta_plus pt-16 text-white">
      <section className="mx-auto px-2 py-2 md:pb-10 w-5/6 flex flex-col justify-center mt-10 md:mt-40 bg-gradient-to-b from-indigo-950 backdrop-blur-3xl rounded-md">
        <div className="items-center font-bold text-center mx-1 text-8xl mb-2 mt-4">
          <h2 className="py-4 bg-gradient-to-r from-[#2A00D3] from-0% to-[#999999] to-50% text-transparent bg-clip-text">About Us</h2>
        </div>
        <div className="justify-center px-4 pt-3 pb-5 text-center text-3xl font-semibold md:mx-10 xl:px-40 md:text-4xl">
          <p>
            Estamos revolucionando la forma en que los programadores mejoran sus
            habilidades. Nos inspiramos en la emoción y la satisfacción que
            provienen de jugar videojuegos y la aplicamos al aprendizaje y
            desarrollo profesional. Imagina un mundo donde mejorar tus
            habilidades como programador se siente tan emocionante como avanzar
            de nivel en tu videojuego favorito.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
