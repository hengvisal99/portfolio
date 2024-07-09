import React from "react";
import { Image } from "@nextui-org/react";
import { Tooltip } from "@nextui-org/react";
import Reveal from "../animation/Reveal";
import SlideInTop from "../animation/SlideInTop";


const Skills = () => {
  const skills = [
    { icon: "logos/angular.svg", tooltip: "Angular" },
    { icon: "logos/vue.svg", tooltip: "Vue" },
    { icon: "logos/react.svg", tooltip: "React" },
    { icon: "/logos/nextjs.svg", tooltip: "NextJs" },
    { icon: "logos/bootstrap.svg", tooltip: "Bootstrap" },
    { icon: "logos/tailwind.svg", tooltip: "Tailwind" },
    { icon: "logos/angular-material.svg", tooltip: "Angular Material" },
    { icon: "/logos/primevue.webp", tooltip: "PrimeVue" },
    { icon: "logos/material-ui.svg", tooltip: "Material UI" },
    { icon: "/logos/next-ui.png", tooltip: "Next UI" },
    { icon: "logos/react-query.svg", tooltip: "React Query" },
    { icon: "/logos/react-hook-form.png", tooltip: "React Hook Form" },
    { icon: "logos/framer-motion.svg", tooltip: "Framer Motion" },
    { icon: "/logos/next-auth.webp", tooltip: "Next-auth" },
    { icon: "logos/zod.svg", tooltip: "Zod" },
    { icon: "/logos/vuex.png", tooltip: "Vuex" },
    { icon: "/logos/vee.png", tooltip: "VeeValidate" },
    { icon: "logos/supabase.svg", tooltip: "Supabase" },
    { icon: "logos/rxjs.svg", tooltip: "RxJs" },
    { icon: "/logos/dexie.png", tooltip: "DexieJs" },
  ];

  return (
    <div id="Skills">
      <div className="grid place-content-center  mb-8">
        <Reveal>
          <h2 className="text-accent mb-8">Skills</h2>
        </Reveal>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-10 lg:grid-cols-10 gap-x-4 lg:gap-x-4 gap-y-4 lg:gap-y-6">
        {skills.map((skill, index) => (
         
         <div
            key={index}
            className="flex justify-center items-center border-2 border-[#ffffff1a] rounded-xl lg:rounded-2xl overflow-hidden p-2"
          >
             <SlideInTop delay={index * 0.03}>
              <Tooltip content={skill.tooltip} color="danger" offset={15}>
                <div className="flex justify-center items-center ">
                  <Image
                    src={skill.icon}
                    alt={skill.tooltip}
                    width={100}
                    height={100}
                  />
                </div>
              </Tooltip>
             </SlideInTop >
          </div>

        ))}
      </div>

    </div>
  );
};

export default Skills;
