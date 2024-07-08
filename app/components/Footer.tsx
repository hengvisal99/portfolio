import { Link, Image } from "@nextui-org/react";
import React from "react";
import Facebook from "./icons/Facebook";
import Github from "./icons/Github";
import LinkedIn from "./icons/LinkedIn";
import Telegram from "./icons/Telegram";

const Footer = () => {
  const socials = [
    {
      icon: <LinkedIn />,
      link: "https://www.linkedin.com/in/visal-heng-9ab279229/",
    },
    { icon: <Github />, link: "https://github.com/hengvisal99" },
    { icon: <Telegram />, link: "https://t.me/visalheng2k" },
    { icon: <Facebook />, link: "https://www.facebook.com/visalheng99/" },
  ];
  return (
    <div className="border-t border-gray-600">
      <div className="mx-auto max-w-[1300px] pl-10 pr-6 py-4 flex flex-col  md:flex-row items-center justify-between w-full">
        <p>Copyright © 2024 VisalFolio</p>
        <div className="flex gap-4">
          {socials.map((item, index) => (
            <Link key={index} isExternal href={item.link}>
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
