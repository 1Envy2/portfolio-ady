import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";

import {
  SiTypescript,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGithub,
  SiMysql,
  SiNextdotjs,
  SiBootstrap,
  SiGit,
  SiFigma,
  SiTailwindcss,
} from "react-icons/si";

const FloatingDockDemo = () => {
  const links = [
    {
      title: "TypeScript",

      icon: (
        <SiTypescript className="h-full w-full text-[#377CC8] dark:text-neutral-300" />
      ),
    },

    {
      title: "React JS",
      icon: (
        <SiReact className="h-full w-full text-[#58C4DC] dark:text-neutral-300" />
      ),
    },
    {
      title: "JavaScript",
      icon: (
        <SiJavascript className="h-full w-full text-[#F7E025] dark:text-neutral-300" />
      ),
    },
    {
      title: "Html",
      icon: (
        <SiHtml5 className="h-full w-full text-[#F16A30] dark:text-neutral-300" />
      ),
    },
    {
      title: "Css",
      icon: (
        <SiCss3 className="h-full w-full text-[#1C76B8] dark:text-neutral-300" />
      ),
    },

    {
      title: "Node Js",
      icon: (
        <SiNodedotjs className="h-full w-full text-[#84BF08] dark:text-neutral-300" />
      ),
    },
    {
      title: "Express Js",
      icon: (
        <SiExpress className="h-full w-full text-[#383838] dark:text-neutral-300" />
      ),
    },
    {
      title: "Mongodb",
      icon: (
        <SiMongodb className="h-full w-full text-[#082532] dark:text-neutral-300" />
      ),
    },
    {
      title: "MySql",
      icon: (
        <SiMysql className="h-full w-full text-[#42759C] dark:text-neutral-300" />
      ),
    },
    {
      title: "Next Js",
      icon: (
        <SiNextdotjs className="h-full w-full text-black dark:text-neutral-300" />
      ),
    },
    {
      title: "Tailwind",
      icon: (
        <SiTailwindcss className="h-full w-full text-[#00BCFF] dark:text-neutral-300" />
      ),
    },
    {
      title: "Bootstrap",
      icon: (
        <SiBootstrap className="h-full w-full text-[#7818F7] dark:text-neutral-300" />
      ),
    },
    {
      title: "Git",
      icon: (
        <SiGit className="h-full w-full text-[#F05539] dark:text-neutral-300" />
      ),
    },
    {
      title: "Figma",
      icon: (
        <SiFigma className="h-full w-full text-purple-600 dark:text-neutral-300" />
      ),
    },
    {
      title: "GitHub",
      icon: (
        <SiGithub className="h-full w-full text-black dark:text-neutral-300" />
      ),
    },
  ];

  return (
    <div className="flex items-center justify-center py- w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
};

export default FloatingDockDemo;
