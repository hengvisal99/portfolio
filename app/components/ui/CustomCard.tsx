"use client";
import { Card, CardBody, Image, CardFooter } from "@nextui-org/react";
import { Tooltip } from "@nextui-org/react";
import { GoArrowUpRight } from "react-icons/go";
interface CustomCardProps {
  image: string;
  title: string;
  skills: Skill[];
}
interface Skill {
  icon: string;
  tooltip: string;
}
const CustomCard = ({ image, title, skills }: CustomCardProps) => {
  return (
    <>
      <Card className="group py-2 px-2 border border-gray-600 hover:border-accent">
        <CardBody className="overflow-visible mr-2 max-h-[260px] cursor-pointer">
          <Image
            isZoomed
            shadow="md"
            radius="lg"
            width="100%"
            alt={image}
            className="w-full object-cover object-left-top h-[250px] "
            src={image}
          />
        </CardBody>
        <CardFooter className="pb-0 pt-2 flex-col items-start mt-2">
          <div className="flex justify-between items-center w-full mb-3">
            <h4 className="font-bold text-large text-accent">{title}</h4>
            <GoArrowUpRight className="size-[25px] cursor-pointer duration-300 transition group-hover:scale-150"/>
          </div>
          <div className="grid mb-1 gap-x-2 gap-y-3 grid-cols-5 lg:grid-cols-5 w-full">
            {skills.map((skill, index) => (
                <Tooltip content={skill.tooltip} key={index}>
                  <div className="flex justify-center items-center ">
                    <Image
                      src={skill.icon}
                      alt={skill.tooltip}
                      width={35}
                      height={35}
                    />
                  </div>
                </Tooltip>
            ))}
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default CustomCard;
