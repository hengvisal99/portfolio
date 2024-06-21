"use client";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { ButtonMovingBorder } from "../utils/moving-border";
const Resume = () => {
  const edu = [
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
  const exp = [
    {
        date: 'Mar/2022 - Present',
        position : 'Front-end Developer',
        companyName : 'Intech Dev',
        job : 'Collaborate with web development team to design user interfaces for client websites Develop reusable UI components Collaborate with backend and work on api Resolved website technical issues handle a new feature request from client Optimize applications to ensure maximum speed and performance. Code reviews, support the team, and provide feedback to team members to maintain coding standards. handle multiple tasks while ensuring the high code quality assigned by the project manager. Explore new technologies for application in front-end development.'
    },
    {
        date: 'Dec/2021 - Feb/2022',
        position : 'Front-end Developer',
        companyName : 'Intech Dev',
        job : 'Create user interface Ensure that all user input is validated before submitting to the back-end'
    }
  ]
  return (
    <div className="mb-9 mt-9">
      <h2 className="text-center text-accent mb-9">RESUME</h2>

      <div className="grid grid-col-1 lg:grid-cols-2">
        <div className="flex flex-col gap-4 place-items-start">
          <h2 className="mx-auto">Education</h2>
          <ol className="relative border-s border-gray-200 dark:border-gray-700">
            {edu.map((item,index) => (
              <li   key={index} className={`ms-4 ${index !== edu.length - 1 ? 'mb-10' : ''}`}>
                <div className="absolute w-3 h-3  rounded-full mt-1.5 -start-1.5 border  border-gray-900 bg-gray-700"></div>

                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {item.date}
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.course}
                </h3>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.school}
                </h3>
              </li>
            ))}

          </ol>
        </div>

        <div className="flex flex-col gap-4 place-items-start">
          <h2 className="mx-auto">Experience</h2>
          <ol className="relative border-s border-gray-200 dark:border-gray-700">
            {exp.map((item,index) => (
              <li   key={index} className={`ms-4 ${index !== exp.length - 1 ? 'mb-10' : ''}`}>
                <div className="absolute w-3 h-3  rounded-full mt-1.5 -start-1.5 border  border-gray-900 bg-gray-700"></div>

                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {item.date}
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.position}
                </h3>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.companyName}
                </h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                {item.job}
              </p>
              </li>
            ))}

          </ol>
        </div>
      </div>
    </div>
  );
};

export default Resume;
