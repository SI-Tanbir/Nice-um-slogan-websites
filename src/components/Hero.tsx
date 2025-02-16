import React from 'react';
import Image from 'next/image';
import manimage from '../../public/manicon.png';

const Hero = () => {
  return (
    <div className="mb-6 bg-gradient-to-r from-[#402263] to-[#220a33] text-white h-[460px] flex items-center">
      {/* Container for content */}
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 py-8">
        
        {/* Left text content */}
        <div className="max-w-lg mt-8 md:mt-0 pl-28">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Um slogan chamativo aqui.
          </h1>
          <p className="text-base md:text-lg mb-6">
            Um texto sobre o seu produto ou serviço. Explique porque ele é valioso e direcione o usuário à próxima etapa.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded hover:bg-yellow-300">
              Eu quero!
            </button>
            <button className="border border-white text-white font-semibold px-6 py-2 rounded hover:bg-white hover:text-[#402263]">
              Conhecer mais
            </button>
          </div>
        </div>

        {/* Right image */}
        <div className="flex justify-center md:justify-end w-full md:w-1/2 translate-y-20">
          <Image
            src={manimage}
            alt="man icon"
            className="h-[500px] w-[600px]"
            
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
