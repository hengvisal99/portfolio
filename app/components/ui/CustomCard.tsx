"use client";
import { Card, CardBody, Image, CardFooter } from "@nextui-org/react";

interface CustomCardProps {
    image: string;
    title: string;
    icon: any;
  }
const CustomCard = ({image,title,icon} : CustomCardProps) => {
  return (
    <div>
      <Card className="py-4 border border-accent">
        <CardBody className="overflow-visible py-2 p-5">
          <Image
            isZoomed
            alt="Card background"
            className="object-cover rounded-xl"
            src={image}
            width={350}
            height={270}
          />
        </CardBody>
        <CardFooter className="pb-0 pt-2 px-6 flex-col items-start">
          <h4 className="font-bold text-large">{title}</h4>
          <small className="text-default-500">{icon}</small>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CustomCard;
