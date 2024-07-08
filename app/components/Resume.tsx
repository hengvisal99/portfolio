"use client";
import { Button } from "@nextui-org/react";
import { Link, Image } from "@nextui-org/react";
import { IoIosArrowForward } from "react-icons/io";
import { ButtonMovingBorder } from "../utils/moving-border";
import SlideRight from "./animation/SlideRight";
import Reveal from "./animation/Reveal";

const Resume = () => {
  const education = [
    {
      date: "2017 - 2021",
      course: "Bachelor of Computer Science",
      school: "Royal University of PhnomPenh",
    },
    {
      date: "2019 - 2020",
      course: "C++ OOP C# & Java",
      school: "Etec center",
    },
    {
      date: "2018",
      course: "C/C++ OOP",
      school: "Ant trainings",
    },
    {
      date: "2017 - 2020",
      course: "General English Grade 12",
      school: "Pannasastra University of Cambodia",
    },
  ];

  const experience = [
    {
      date: "Mar/2022 - Present",
      position: "Frontend Developer",
      companyName: "Intech Dev",
      job: `Create design UI, develop reusable UI components, 
            collaborate with the backend and work on the API. 
            Resolve website technical issues , 
            optimize applications to ensure maximum speed and performance. 
            Code reviews, support the team, and provide feedback to maintain coding standards. 
            Handle multiple tasks while ensuring the high code quality assigned by the project manager. 
            Explore new technologies for application in front-end development.`,
    },
    {
      date: "Dec/2021 - Feb/2022",
      position: "Frontend Developer",
      companyName: "Haha",
      job: `Create UI, ensure that all user input is validated before submitting to the back-end.`,
    },
  ];

  return (
    <div className="my-16" id="Resume">
      <div className="grid place-content-center  mb-8">
        <Reveal>
          <h2 className="text-center text-accent mb-8">RESUME</h2>
        </Reveal>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4 mb-6 lg:mb-0">
          <h2 className="text-4xl flex gap-5 items-center mb-6 -ml-[20px]">
            <SlideRight>
              <Image src="/edu.svg" alt={""} width={40} height={40} />
            </SlideRight>
            <SlideRight>Education</SlideRight>
          </h2>
          <ol className="relative border-l border-gray-700">
            {education.map((item, index) => (
              <li
                key={index}
                className={`ml-7 ${
                  index !== education.length - 1 ? "mb-8" : ""
                }`}
              >
                <div className="absolute w-3 h-3 rounded-full  -left-1.5 border border-gray-900 bg-gray-700"></div>
                <SlideRight>
                  <p className="mb-5 text-lg font-normal leading-none text-gray-400">
                    {item.date}
                  </p>
                </SlideRight>

                <SlideRight>
                  <h1 className="text-accent text-[25px] md:text-[30px]  mb-2">
                    {item.course}
                  </h1>
                </SlideRight>
                <SlideRight>
                  <h3 className="text-lg font-semibold text-white">
                    {item.school}
                  </h3>
                </SlideRight>
              </li>
            ))}
          </ol>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-4xl flex gap-5 items-center mb-6 -ml-[19px]">
            <SlideRight>
              <Image src="/work.svg" alt={""} width={40} height={40} />
            </SlideRight>
            <SlideRight>Experience</SlideRight>
          </h2>
          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            {experience.map((item, index) => (
              <li
                key={index}
                className={`ml-7 ${
                  index !== experience.length - 1 ? "mb-8" : ""
                }`}
              >
                <div className="absolute w-3 h-3 rounded-full  -left-1.5 border border-gray-900 bg-gray-700"></div>
                <SlideRight>
                  <p className="mb-4 text-lg font-normal leading-none text-gray-400">
                    {item.date}
                  </p>
                </SlideRight>

                <SlideRight>
                  <h1 className="text-accent text-[25px] md:text-[30px]  mb-2">
                    {item.position}
                  </h1>
                </SlideRight>

                <SlideRight>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {item.companyName}
                  </h3>
                </SlideRight>
                <SlideRight>
                  <p className="text-[#BFBECB] leading-[1.9rem] lg:leading-[1.72rem]">
                    {item.job}
                  </p>
                </SlideRight>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Resume;
