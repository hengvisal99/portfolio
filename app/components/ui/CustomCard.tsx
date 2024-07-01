"use client";
import { Card, CardBody, Image, CardFooter } from "@nextui-org/react";
import { Tooltip } from "@nextui-org/react";
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
      <Card className="py-2 px-2 border border-accent">
        <CardBody className="overflow-visible mr-2 max-h-[255px]">
        <Image
        isZoomed
              // shadow="sm"
              radius="lg"
              width="100%"
              alt={image}
              className="w-full object-fill h-[220px]"
              src={image}
            />
          {/* <Image
            isZoomed
            alt="Card background"
            className="rounded-xl"
            src={image}
            width="100%"
            height={270}
          /> */}
        </CardBody>
        <CardFooter className="pb-0 pt-2 flex-col items-start">
          <h4 className="font-bold text-large mb-1">{title}</h4>
          <div className="grid grid-cols-6 w-full">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex justify-start items-center overflow-hidden p-2"
              >
                <Tooltip content={skill.tooltip}>
                  <div className="flex justify-center items-center ">
                    <Image
                      src={skill.icon}
                      alt={skill.tooltip}
                      width={30}
                      height={30}
                    />
                  </div>
                </Tooltip>
              </div>
            ))}
          </div>
        </CardFooter>
        
      </Card>
    </>
  );
};

export default CustomCard;
