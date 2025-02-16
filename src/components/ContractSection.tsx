import React from "react";
import Image from "next/image";
import Text_icons from "../../public/icons/Text_icons";
import Whatsup from "../../public/icons/Whatsup";

const ContactSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-[245px]">
      <div className="container mx-auto text-center">
        {/* 3D Icon */}
        <div className="flex justify-center mb-4">
         <Text_icons/>
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#402263]">
          Ainda tem dúvidas? Fale conosco!
        </h2>

        {/* Underline */}
        <div className="w-12 h-1 bg-yellow-500 mx-auto mt-2 mb-6"></div>

        {/* Content Section */}
        <div className="flex gap-16 flex-col md:flex-row items-center justify-between mt-8">
          {/* Left Side - Contact Info */}
          <div className="md:w-1/2 text-left text-gray-600">
            <p className="mb-2">
              Ofereça um meio de comunicação direto. Pode ser um{" "}
              <span className="font-semibold text-black">contato@email.com.br</span>
            </p>

            <p className="mb-4">
              Ou crie um formulário ao lado que entrem em contato{" "}
              <span className="text-purple-600 font-semibold">o mais rápido possível!</span>
            </p>

            {/* WhatsApp Link */}
            <div className="flex items-center space-x-2">
             <Whatsup/>
              <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold hover:underline">
                Hey! Estamos no WhatsApp!
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <form className=" p-6   w-full max-w-lg mx-auto">
              {/* Name */}
              <label className=" flex justify-start text-purple-700 font-semibold mb-1">Name</label>
              <input
                type="text"
                placeholder="Nome Sobrenome"
                className="w-full p-3 border border-gray-300 rounded-md mb-4"
              />

              {/* Email */}
              <label className="flex justify-start text-purple-700 font-semibold mb-1">Email</label>
              <input
                type="email"
                placeholder="nome@email.com.br"
                className="w-full p-3 border border-gray-300 rounded-md mb-4"
              />

              {/* Phone */}
              <label className="flex justify-start text-purple-700 font-semibold mb-1">Telefone</label>
              <input
                type="text"
                placeholder="21 9988-7766"
                className="w-full p-3 border border-gray-300 rounded-md mb-6"
              />

              {/* Submit Button */}
              <div className="flex justify-end">
              <button
                type="submit"
                className=" bg-yellow-500 text-white font-bold py-3 px-6 rounded-md text-lg shadow-md hover:bg-yellow-600 transition"
              >
                Enviar!
              </button>

              </div>
              
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
