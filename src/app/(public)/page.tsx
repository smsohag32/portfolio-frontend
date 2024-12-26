import Hero from "@/components/hero/Hero";
import Skills from "./../../views/Home/Skills";
import Thoughts from "@/views/Home/Thoughts";
import ProjectSection from "@/views/Home/ProjectSection";
import ExperienceSection from "@/views/Home/ExperienceSection";
import ContactMe from "@/views/ContactMe/ContactMe";

export default function Home() {
   return (
      <div className="pt-20 lg:pt-0">
         <Hero />
         <ExperienceSection />
         <Skills />
         <ProjectSection />
         <Thoughts />
         {/* <GetinTouch /> */}
         <ContactMe />
      </div>
   );
}
