import { Button, Tooltip } from "@nextui-org/react";
import React from "react";
import Image from "next/image";
const Skills = () => {
  const skills = [
    {
      icon: "logos/angular.svg",
      tooltip: "Angular",
    },
    {
      icon: "logos/vue.svg",
      tooltip: "Vue",
    },
    {
      icon: "logos/react.svg",
      tooltip: "React",
    },
    {
      icon: "/logos/nextjs.svg",
      tooltip: "NextJs",
    },
    {
      icon: "logos/bootstrap.svg",
      tooltip: "bootstrap",
    },
    {
      icon: "logos/tailwind.svg",
      tooltip: "Tailwind",
    },
    {
      icon: "logos/angular-material.svg",
      tooltip: "Angular Material",
    },
    {
      icon: "logos/material-ui.svg",
      tooltip: "Material UI",
    },
    {
      icon: "/logos/primevue.webp",
      tooltip: "PrimeVue",
    },
    {
      icon: "/logos/vuex.png",
      tooltip: "Vuex",
    },
    {
      icon: "logos/react-query.svg",
      tooltip: "React Query",
    },
    {
      icon: "/logos/react-hook-form.png",
      tooltip: "React Hook form",
    },
    {
      icon: "logos/zod.svg",
      tooltip: "Zod",
    },
    {
      icon: "logos/supabase.svg",
      tooltip: "Supabase",
    },
    {
      icon: "/logos/dexie.png",
      tooltip: "DexieJs",
    },
  ];
  return (
    <div>
      <h2 className="text-center text-accent mb-4">Skills</h2>
      <div className="grid grid-cols-5 lg:grid-cols-8">
        {skills.map((skill, index) => (
          <div className="border border-red-500  w-[60px] lg:w-[90px]">
            <Tooltip key={index} content={skill.tooltip}>
              <Image src={skill.icon} alt="" height={90} width={90}/>
            </Tooltip>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
