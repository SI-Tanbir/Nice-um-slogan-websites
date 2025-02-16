import Advertise from "@/components/Advertise";
import Contemagente from "@/components/Contemagente";
import ContactSection from "@/components/ContractSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="container mx-auto">
   <Navbar/>
   <Hero/>
   <Advertise/>
    <Contemagente/>
    <ContactSection/>
    <Footer/>
    </div>
  );
}
