"use client";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { ButtonMovingBorder } from "../utils/moving-border";

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
            position: "Front-end Developer",
            companyName: "Intech Dev",
            job: `Create design UI, develop reusable UI components, 
                  Collaborate with the backend and work on the API. 
                  Resolve website technical issues , 
                  optimize applications to ensure maximum speed and performance. 
                  Code reviews, support the team, and provide feedback to maintain coding standards. 
                  Handle multiple tasks while ensuring the high code quality assigned by the project manager. 
                  Explore new technologies for application in front-end development.`,
        },
        {
            date: "Dec/2021 - Feb/2022",
            position: "Front-end Developer",
            companyName: "Haha",
            job: `Create UI, ensure that all user input is validated before submitting to the back-end.`,
        },
    ];

    return (
        <div className="mb-9 mt-9">
            <h2 className="text-center text-accent mb-9">RESUME</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="flex flex-col gap-4">
                    <h2 className="mx-auto mb-6">Education</h2>
                    <ol className="relative border-l border-gray-700">
                        {education.map((item, index) => (
                            <li key={index} className={`ml-4 ${index !== education.length - 1 ? 'mb-9' : ''}`}>
                                <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-gray-900 bg-gray-700"></div>
                                <p className="mb-5 text-lg font-normal leading-none text-gray-500">
                                    {item.date}
                                </p>
                                <h1 className="text-accent text-[28px] mb-2">
                                    {item.course}
                                </h1>
                                <h3 className="text-lg font-semibold text-white">
                                    {item.school}
                                </h3>
                            </li>
                        ))}
                    </ol>
                </div>

                <div className="flex flex-col gap-4">
                    <h2 className="mx-auto mb-6">Experience</h2>
                    <ol className="relative border-l border-gray-200 dark:border-gray-700">
                        {experience.map((item, index) => (
                            <li key={index} className={`ml-4 ${index !== experience.length - 1 ? 'mb-7' : ''}`}>
                                <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-gray-900 bg-gray-700"></div>
                                <p className="mb-4 text-lg font-normal leading-none text-gray-500">
                                    {item.date}
                                </p>
                                <h1 className="text-accent text-[28px] mb-2">
                                    {item.position}
                                </h1>
                                <h3 className="text-lg font-semibold text-white mb-3">
                                    {item.companyName}
                                </h3>
                                <p className="text-[#BFBECB] leading-[1.72rem]">
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
