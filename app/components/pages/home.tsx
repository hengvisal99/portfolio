"use client";
import { Link } from "@nextui-org/react";
import HomePhoto from "./HomePhoto";
import FadeInBottom from "../animation/FadeInBottom";
import Facebook from "../icons/Facebook";
import Github from "../icons/Github";
import LinkedIn from "../icons/LinkedIn";
import Telegram from "../icons/Telegram";
const Home = () => {
  const socials = [
    {
      icon: <LinkedIn/>,
      link: "https://www.linkedin.com/in/visal-heng-9ab279229/",
    },
    { icon: <Github/>, link: "https://github.com/hengvisal99" },
    { icon: <Telegram/>, link: "https://t.me/visalheng2k" },
    { icon: <Facebook/>, link: "https://www.facebook.com/visalheng99/" },
  ];
  return (
    <div
      id="Home"
      className="grid lg:gap-x-3 place-content-center grid-cols-1 lg:grid-cols-2 h-svh"
    >
      <div className="flex gap-5 flex-col my-auto order-2 lg:order-none place-items-center lg:place-items-start">
        <FadeInBottom>
          <h1>Hello ,</h1>
        </FadeInBottom>
        <FadeInBottom>
          <h1 className="text-accent">I'm Heng Visal</h1>
        </FadeInBottom>
        <FadeInBottom>
          <h2 className="text-[23px] sm:text-[25px]">FRONT-END DEVELOPER</h2>
        </FadeInBottom>
        <FadeInBottom>
          <div className="flex gap-4">
            {socials.map((item, index) => (
              <Link key={index} isExternal href={item.link}>
                {item.icon}
              </Link>
            ))}
          </div>
        </FadeInBottom>
      
      </div>
      <div className="order-1 lg:order-none mb-8 lg:my-0">
        <HomePhoto />
      </div>
    </div>
  );
};

export default Home;
