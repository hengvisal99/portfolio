"use client";
import { Button, Link } from "@nextui-org/react";
import { IoIosArrowForward } from "react-icons/io";
import { Image } from "@nextui-org/react";
import Reveal from "../animation/Reveal";
import SlideRight from "../animation/SlideRight";
import SlideLeft from "../animation/SlideLeft";
import { GoArrowUpRight } from "react-icons/go";
const About = () => {
  return (
    <div className="mb-16" id="About">
      <div className="grid place-content-center mb-4 lg:mb-8">
        <Reveal>
          <h2 className="text-accent mb-8">ABOUT ME</h2>
        </Reveal>
      </div>
      <div className="grid grid-col-1 lg:grid-cols-2 gap-x-10">
        <SlideRight>
          <Image
            className="hidden lg:grid place-content-center h-[460px]"
            isZoomed
            width="100%"
            alt=""
            src="profile-2.webp"
          />
        </SlideRight>

        <div className="flex flex-col gap-4 place-items-start justify-center">
          <SlideLeft>
            <h2 className="text-[28px]">2 Years Experience</h2>
          </SlideLeft>
          <SlideLeft>
            <p className="text-[#BFBECB]">
              As a front-end seveloper. I have successfully designed the user
              interface and worked closely with the backend team to integrate
              Apis.My role has involved resolving technical issues, optimizing
              application performance and exploring new technologies to ensure
              enhanced front-end development.I have consistently maintained
              coding standards for code reviews, team support and managing
              multiple tasks assigned by project managers.
            </p>
          </SlideLeft>
          <SlideLeft>
            <Link
              isExternal
              href="https://drive.google.com/file/d/1PgMD5yDrRe4sAIFlFnlgTbg_2GOdicq4/view"
              className="w-[145px] h-[50px] px-4 border-2 rounded-xl size-10 border-accent group-hover:border-accent cursor-pointer"
            > 
              <p className="text-accent text-lg font-semibold">View CV</p>
              <IoIosArrowForward className="size-[20px]  text-accent mx-auto" />
            </Link>
          </SlideLeft>
        </div>
      </div>
    </div>
  );
};

export default About;
