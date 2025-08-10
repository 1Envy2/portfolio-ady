import Navigation from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import React from "react";
import { cn } from "@/utils/cn";
import Project from "@/components/project";
export default function Home() {
  return (
    <div className=" bg-radial-[at_50%_25%] from-blue-900 to-slate-950 to-90%">
      <Navigation />
      <div>
        {/* Hero Section yang memenuhi satu layar penuh */}
        <div
          className={cn("w-screen h-screen flex items-center justify-center mx-6")}
        >
          <Hero />
        </div>

        <div id="about" className="py-20 lg:mx-52 mx-6">
          <About />
        </div>
        <div id="project" className="mx-6" >
          <Project></Project>
        </div>
      </div>
    </div>
  );
}
