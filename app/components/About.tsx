"use client";
import { Button } from '@nextui-org/react';
import { IoIosArrowForward } from 'react-icons/io';
const About = () => {
    return (
        <div className='mb-16'>
            <h2 className='text-center text-accent mb-16'>ABOUT ME</h2>
            <div className='grid grid-col-1 lg:grid-cols-2'>
                {/* <ButtonMovingBorder
                    borderRadius="1.75rem"
                    className="bg-transparent border-slate-800"
                >
                    <div className='mx-auto hidden lg:block'>
                        <img src="profile.png"
                            className="rounded-bl-full rounded-br-full w-[460px]"
                        />
                    </div>
                </ButtonMovingBorder> */}
                <div className='mx-auto hidden lg:block'>
                        <img src="profile.png"
                            className="rounded-bl-full rounded-br-full w-[460px]"
                        />
                    </div>
                <div className='flex flex-col gap-4 place-items-start'>
                    <h2 className='text-[28px]'>2 Years Experience</h2>
                    <p className='text-[#BFBECB]'>
                        As a front-end seveloper.
                        I have successfully designed the user interface and worked closely with the backend team to integrate Apis.My role has involved resolving technical issues, optimizing application performance and exploring new technologies to ensure enhanced front-end development.I have consistently maintained coding standards for code reviews, team support and managing multiple tasks assigned by project managers.
                    </p>
                    <Button color="success" className="text-lg font-semibold w-[145px] h-[50px]" endContent={<IoIosArrowForward />} variant="bordered">
                        success
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default About