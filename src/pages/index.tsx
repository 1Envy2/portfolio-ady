import Navigation from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import React from "react";
import { cn } from "@/utils/cn";
import Project from "@/components/project";
import FloatingDockDemo from "@/components/skill";
import Contact from "@/components/contanct";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <div className=" bg-radial-[at_50%_25%] from-blue-900 to-slate-950 to-90%">
      <Navigation />
      <div>
        <div id="Home" className={cn("h-screen flex items-center justify-center")}>
          <Hero />
        </div>

        <div id="about" className="py-20 lg:mx-52">
          <About />
        </div>
        <div id="project" className=" h-screen pt-20 mx-52">
          <Project></Project>
          <FloatingDockDemo ></FloatingDockDemo>
        </div>
        <div id="contact" className={cn("h-screen flex items-center justify-center bg-[#02071E]")}>
          <Contact></Contact>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
