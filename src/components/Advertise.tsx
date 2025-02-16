import React from "react";
import Rapiodicon from "../../public/icons/Rapiodicon";
import Do_seu_jeito from "../../public/icons/Do_seu_jeito";
import Como_voce_quria from "../../public/icons/Como_voce_quria";
import Plus_icons from "../../public/icons/Plus_icons";

const Advertise = () => {
  return (
    <main>
      {/* Seção de subtítulo e cartões */}
      <section className="bg-white w-full md:w-[960px] m-auto py-10">
        <div className=" px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-[#402263] mb-4">
            Um subtítulo para quem rolou até aqui!
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
            Aproveite esta seção para destacar os benefícios do seu produto ou serviço.
            Palavras-chave ajudam no SEO.
          </p>

          {/* Cards */}
          <div className="mt-14  flex flex-col   md:flex-row gap-16 md:gap-8 justify-center">
            
            {/* Card 1 */}
            <div className="relative border bg-white md:w-[287px] h-[310px] shadow-md rounded-xl p-6 text-center">
              {/* Positioned SVG */}
              <div className="absolute top-[-80px] left-1/2 -translate-x-1/2">
                <Rapiodicon />
              </div>

              <h3 className="text-xl font-semibold text-[#402263] mt-12 mb-2">Rápido</h3>
              <p className="text-gray-600">
                Aproveite esta seção para destacar os benefícios do seu produto ou serviço.
              </p>

              {/* Floating Plus Icon */}
              <div className="absolute bottom-4 right-4  p-2 rounded-full text-white shadow-lg">
                <span className="text-xl"><Plus_icons/></span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative border bg-white md:w-[287px] h-[310px] shadow-md rounded-xl p-6 text-center">
              {/* Positioned SVG */}
              <div className="absolute top-[-135px] left-1/2 -translate-x-1/2">
                <Do_seu_jeito />
              </div>

              <h3 className="text-xl font-semibold text-[#402263] mt-12 mb-2">Do seu jeito</h3>
              <p className="text-gray-600">
                Aproveite esta seção para destacar os benefícios do seu produto ou serviço.
              </p>

              {/* Floating Plus Icon */}
              <div className="absolute bottom-4 right-4  p-2 rounded-full text-white shadow-lg">
                <span className="text-xl"><Plus_icons/></span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative bg-white md:w-[287px] h-[310px] shadow-md rounded-xl p-6 text-center border">
              {/* Positioned SVG */}
              <div className="absolute top-[-80px] left-1/2 -translate-x-1/2">
                <Como_voce_quria />
              </div>

              <h3 className="text-xl font-semibold text-[#402263] mt-12 mb-2">Como você queria</h3>
              <p className="text-gray-600">
                Aproveite esta seção para destacar os benefícios do seu produto ou serviço.
              </p>

              {/* Floating Plus Icon */}
              <div className="absolute bottom-4 right-4  p-2 rounded-full text-white shadow-lg">
                <span className="text-xl"><Plus_icons/></span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Advertise;
