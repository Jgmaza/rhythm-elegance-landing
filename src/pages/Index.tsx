import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Formatos from "@/components/Formatos";
import Videos from "@/components/Videos";
import Repertorio from "@/components/Repertorio";
import Testimonios from "@/components/Testimonios";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Formatos />
        <Videos />
        <Repertorio />
        <Testimonios />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
