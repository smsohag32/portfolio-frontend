import Hero from "@/components/hero/Hero";
import Header from "@/components/header/Header";
import Skills from "./../../views/Home/Skills";
import Footer from "@/components/footer/Footer";
import GetinTouch from "@/views/Home/GetinTouch";
import Thoughts from "@/views/Home/Thoughts";

export default function Home() {
   return (
      <div className="pt-20 lg:pt-0">
         <Header />
         <Hero />
         <Skills />
         <Thoughts />
         <GetinTouch />
         <Footer />
      </div>
   );
}
