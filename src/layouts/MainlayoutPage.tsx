import Advertise from '@/components/Advertise'
import Contemagente from '@/components/Contemagente'
import ContactSection from '@/components/ContractSection'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'

const MainlayoutPage = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
        <Navbar/>
        <Hero/>
        <Advertise/>
        <Contemagente/>
        <ContactSection/>
        <Footer/>


    </div>
  )
}

export default MainlayoutPage