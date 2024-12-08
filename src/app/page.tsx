import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Shop2 from "./components/Shop2";
import Shop3 from "./components/Shop3";
import Asgaard from "./components/Asgaard";
import OurBlogs from "./components/OurBlogs";
import Ourinsta from "./components/Ourinsta";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-poppins">
        <Hero/>
        <Shop2 />        
        <Shop3 />
        <Asgaard/>
        <OurBlogs />
        <Ourinsta />
        <Footer />
    </main>  
  );
}
