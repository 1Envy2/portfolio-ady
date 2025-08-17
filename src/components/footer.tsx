"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { FiGithub, FiInstagram } from "react-icons/fi";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-8 w-full rounded-md relative flex flex-col items-center justify-center antialiased text-white gap-2 px-52">
      <div className="flex flex-row justify-center items-center gap-2">
        <img src="/images/logo/logo white.png" alt="" width={25} />
        <h1 className="font-bold text-2xl">1Envy2</h1>
      </div>
      <div>
        <ul className="flex flex-row gap-4 justify-center items-center text-lg">
          <li className=" z-1 hover:text-violet-400   ">
            <a href="#Home">Home</a>
          </li>
          <li className=" z-1 hover:text-violet-400">
            <a href="#about">About Us</a>
          </li>
          <li className=" z-1 hover:text-violet-400">
            <a href="#project">Project</a>
          </li>
          <li className=" z-1 hover:text-violet-400">
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </div>
      <h1 className="text-xl">Connect With Me</h1>
      <div className="flex flex-row gap-4 justify-center items-center">
        <a
          href="https://github.com/1Envy2"
          target="_blank"
          className="z-1 relative overflow-hidden rounded-xl p-[1px] hover:-translate-y-1 hover:scale-110 hover:shadow-xl/30 shadow-violet-600 "
        >
          <div className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <div className="inline-flex h-full w-full  rounded-xl bg-slate-950 p-3 backdrop-blur-3xl hover:-translate-y-1 hover:scale-110 hover:bg-violet-600">
            <FiGithub className="size-5" />
          </div>
        </a>
        <a
          href="https://www.instagram.com/adyatma_12/"
          target="_blank"
          className="z-1 relative overflow-hidden rounded-xl p-[1px] hover:-translate-y-1 hover:scale-110 hover:shadow-xl/30 shadow-violet-600 "
        >
          <div className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <div className="inline-flex h-full w-full  rounded-xl bg-slate-950 p-3 backdrop-blur-3xl hover:-translate-y-1 hover:scale-110 hover:bg-violet-600">
            <FiInstagram className="size-5" />
          </div>
        </a>
        <a
          href="https://x.com/AdyatmaYusuf"
          target="_blank"
          className="z-1 relative overflow-hidden rounded-xl p-[1px] hover:-translate-y-1 hover:scale-110 hover:shadow-xl/30 shadow-violet-600 "
        >
          <div className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <div className="inline-flex h-full w-full  rounded-xl bg-slate-950 p-3 backdrop-blur-3xl hover:-translate-y-1 hover:scale-110 hover:bg-violet-600">
            <FaXTwitter className="size-5" />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/adyatma-yusuf-farabi-1529b5344/"
          target="_blank"
          className="z-1 relative overflow-hidden rounded-xl p-[1px] hover:-translate-y-1 hover:scale-110 hover:shadow-xl/30 shadow-violet-600 "
        >
          <div className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <div className="inline-flex h-full w-full  rounded-xl bg-slate-950 p-3 backdrop-blur-3xl hover:-translate-y-1 hover:scale-110 hover:bg-violet-600">
            <FaLinkedinIn className="size-5" />
          </div>
        </a>
      </div>
      <p className="w-full flex justify-start">Copyright 2025 &copy; 1Envy2</p>
      <BackgroundBeams />
    </div>
  );
};

export default Footer;
