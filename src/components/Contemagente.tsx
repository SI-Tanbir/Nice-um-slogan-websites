import Image from 'next/image'
import React from 'react'
import ManIcon from '../../icons/manIcon'
import Manicon1 from '../../public/manicon1'
import Floting_icon from '../../public/icons/Floting_icon'
import Floting_icon1 from '../../public/icons/Floting_icon1'

const Contemagente = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between  md:w-[960px] m-auto py-10">
    {/* Left Content */}
    <div className="md:w-1/2 text-left px-4">
      {/* Hashtag */}
      <p className="text-sm text-purple-600 font-semibold mb-2">#CONTECOMAGENTE</p>

      {/* Main Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
        Simples, <span className="text-purple-600">rápido</span> <br /> e do seu jeito.
      </h1>

      {/* Subtext */}
      <p className="text-gray-600 mt-4 text-lg max-w-md leading-relaxed">
        <span className="text-gray-500">Mostre os valores da sua marca e como ela pode fazer</span> parte da vida do usuário que está lendo. Gerar identificação é a chave para{" "}
        <span className="text-purple-600 font-semibold">conquistar seu cliente.</span>
      </p>

      {/* CTA Button */}
      <button className="mt-6 bg-[#FFC107] text-white font-bold py-3 px-6 rounded-md text-lg shadow-md hover:bg-[#e0a800] transition">
        Eu quero!
      </button>
    </div>

    {/* Right Side - Image */}
    <div className="relative md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
      {/* 3D Character */}
      <div className="relative w-[238px] h-[444px]">
        {/* <Image
          src="/images/3d-character.png"
          alt="3D Businessman"
          width={238}
          height={444}
          className="relative z-10"
        /> */}
        <Manicon1/>
        {/* Background Glow */}
        <div className="absolute inset-0 bg-purple-500 blur-3xl opacity-20 rounded-full"></div>
      </div>

      {/* Floating Purple Elements */}
      {/* <Image
        src="/images/floating-purple-1.png"
        alt="Floating Decoration"
        width={50}
        height={50}
        
      /> */}
      <div className="absolute top-[-30px] left-0">

      <Floting_icon/>
      </div>
      <div className="absolute top-20 right-[-30px]"
      >

      <Floting_icon1/>
      </div>
      {/* <Image
        src="/images/floating-purple-2.png"
        alt="Floating Decoration"
        width={80}
        height={80}
      /> */}
    </div>
  </section>
  )
}

export default Contemagente