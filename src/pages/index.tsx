import Navigation from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import React from "react";
import { cn } from "@/utils/cn";
import Project from "@/components/project";
import FloatingDockDemo from "@/components/skill";
import Contact from "@/components/contanct";
import Footer from "@/components/footer";

import ScrollTriggered from "@/components/animations/test";
import { motion } from "framer-motion"; // Impor seperti biasa

export default function Home() {
  return (
    <div>
      <Navigation />

      <div className="bg-[url('/images/background/bg.png')] bg-cover bg-no-repeat bg-center px-66">
        <motion.div
          id="Home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={cn("h-screen flex items-center justify-self-start  ")}
        >
          <Hero />
        </motion.div>
      </div>
      <div className="bg-[#00071E]">
        <div id="about" className="py-20 px-66 ">
          <About />
        </div>
        <div id="project" className=" h-screen pt-20 mx-52">
          <Project></Project>
          <FloatingDockDemo></FloatingDockDemo>
        </div>
      </div>

      <div
        id="contact"
        className={cn("h-screen flex items-center justify-center bg-[#02071E]")}
      >
        <Contact></Contact>
      </div>
      <div className="bg-[#130922]">

      <Footer></Footer>
      </div>
    </div>
  );
}
