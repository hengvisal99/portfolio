"use client";
import { Card, CardBody, Image, CardFooter, Link, Button } from "@nextui-org/react";
import { Tooltip } from "@nextui-org/react";
import { GoArrowUpRight } from "react-icons/go";
import FadeInBottom from "../animation/FadeInBottom";
import Reveal from "../animation/Reveal";
interface CustomCardProps {
  image: string;
  title: string;
  skills: Skill[];
  link: string
}

interface Skill {
  icon: string;
  tooltip: string;
}

const CustomCard = ({ image, title, skills, link }: CustomCardProps) => {
  return (
    <Card className="group py-[9px] px-[8px] border border-gray-600 cursor-auto hover:border-accent hover:ease-in h-full w-full" isPressable>
      <CardBody className="p-[6px] overflow-visible mr-2 max-h-[260px]">
        <FadeInBottom>
          <Image
            isZoomed
            radius="lg"
            width="100%"
            alt={image}
            className="p-0 w-full object-cover object-left-top h-[250px]"
            src={image}
          />
        </FadeInBottom>
      </CardBody>
      <CardFooter className="pb-0 pt-2 flex-col items-start mt-2">
        <div className="flex justify-between items-center w-full mb-3">
          <Reveal>
            <h4 className="font-bold text-large text-accent">{title}</h4>
          </Reveal>
          <Reveal>
            <Link isExternal href={link} className="border-2 rounded-xl size-10 border-[#3f3f46] group-hover:border-accent hover:bg-[#3f3f46] cursor-pointer">
              <GoArrowUpRight className="size-[25px]  text-white mx-auto" />
            </Link>
          </Reveal>
        </div>
        <div className="grid mb-1 gap-x-2 gap-y-3 grid-cols-5 lg:grid-cols-5 w-full">
          {skills.map((skill, index) => (
            <Reveal key={index}>
              <Tooltip
                content={skill.tooltip}
                color="danger"
              >
                <div className="flex justify-center items-center">
                  <Image
                    src={skill.icon}
                    alt={skill.tooltip}
                    width={35}
                    height={35}
                  />
                </div>
              </Tooltip>
            </Reveal>
          ))}
        </div>
      </CardFooter>
    </Card >
  );
};

export default CustomCard;
