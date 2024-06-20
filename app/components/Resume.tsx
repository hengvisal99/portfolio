"use client";
import { Button } from '@nextui-org/react';
import Image from 'next/image'
import { IoIosArrowForward } from 'react-icons/io';
import { ButtonMovingBorder } from '../utils/moving-border';
const Resume = () => {
    return (
        <div className='mb-9 mt-9'>
            <h2 className='text-center text-accent mb-9'>RESUME</h2>

            <div className='grid grid-col-1 lg:grid-cols-2'>

                <ol className="relative border-s border-gray-200 dark:border-gray-700">
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2017 - 2021</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Bachelor of Computer Science</h3>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Royal University of PhnomPenh</h3>

                    </li>
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2019 - 2020</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">C++ OOP  C#  & Java</h3>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Etec center</h3>
                    </li>
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2018</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">C/C++ OOP</h3>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Ant trainings</h3>
                    </li>
                    <li className="ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2017 - 2020</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">General English Grade 12</h3>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Pannasastra University of Cambodia</h3>
                    </li>
                </ol>


                <div className='flex flex-col gap-4 place-items-start'>
                    <ol className="relative border-s border-gray-200 dark:border-gray-700">
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Mar/2022 - Present</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Front-end Developer</h3>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Intech Dev</h3>

                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                Collaborate with web development team to design user interfaces for client websites
                                Develop reusable UI components
                                Collaborate with backend and work on api
                                Resolved website technical issues
                                handle a new feature request from client
                                Optimize applications to ensure maximum speed and performance.
                                Code reviews, support the team, and provide feedback to team members to maintain coding standards. handle multiple tasks while ensuring the high code quality assigned by the project manager.
                                Explore new technologies for application in front-end development.
                            </p>

                        </li>
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Dec/2021 - Feb/2022</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Front-end Developer</h3>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Intech Dev</h3>                           
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                Create user interface
                                Ensure that all user input is validated before submitting to the back-end
                            </p>
                        </li>
 
                    </ol>


                </div>
            </div>
        </div>
    )
}

export default Resume